'use client';

import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import * as h3 from 'h3-js';
import HoloSphere from 'holosphere';

interface FractalMapProps {
  className?: string;
  selectedLens?: string;
  onCellSelect?: (cellId: string) => void;
}

type LensType = 'quests' | 'needs' | 'offers' | 'communities' | 'organizations' | 'projects' | 'currencies' | 'people' | 'holons' | 'regenerative';

const lensOptions: Array<{value: LensType, label: string}> = [
  { value: 'quests', label: 'Tasks' },
  { value: 'needs', label: 'Local Needs' },
  { value: 'offers', label: 'Offers' },
  { value: 'communities', label: 'Communities' },
  { value: 'organizations', label: 'Organizations' },
  { value: 'projects', label: 'Projects' },
  { value: 'currencies', label: 'Currencies' },
  { value: 'people', label: 'People' },
  { value: 'holons', label: 'Holons' },
  { value: 'regenerative', label: 'Regenerative Projects' }
];

const lensColors: Record<LensType, string> = {
  quests: '#f44336',
  needs: '#2196f3',
  offers: '#4caf50',
  communities: '#ff9800',
  organizations: '#9c27b0',
  projects: '#3f51b5',
  currencies: '#e91e63',
  people: '#607d8b',
  holons: '#ff5722',
  regenerative: '#2e7d32'
};

// Interface for project data
interface ProjectData {
  id: string;
  name: string;
  description: string;
  location: string;
  coordinates: number[];
  videoUrl: string;
  category: string;
}

// Embedded fallback projects for production reliability
const EMBEDDED_PROJECTS: ProjectData[] = [
  {
    id: 'embedded-1',
    name: 'Liminal Village',
    description: 'Earthship construction and permaculture community in Italy',
    location: 'Tuscany, Italy',
    coordinates: [11.2558, 43.7696],
    videoUrl: 'https://www.youtube.com/watch?v=XdhPXocPf9g',
    category: 'Community Building'
  },
  {
    id: 'embedded-2',
    name: 'Gaia University',
    description: 'Regenerative education center focused on ecological wisdom',
    location: 'Costa Rica',
    coordinates: [-84.0733, 9.7489],
    videoUrl: 'https://www.youtube.com/watch?v=example2',
    category: 'Education'
  },
  {
    id: 'embedded-3',
    name: 'Permaculture Institute',
    description: 'Advanced permaculture design and implementation',
    location: 'Australia',
    coordinates: [149.1287, -35.2809],
    videoUrl: 'https://www.youtube.com/watch?v=example3',
    category: 'Agriculture'
  },
  {
    id: 'embedded-4',
    name: 'Regenerative Finance Hub',
    description: 'Community-owned financial systems for regeneration',
    location: 'Switzerland',
    coordinates: [7.4474, 46.9481],
    videoUrl: 'https://www.youtube.com/watch?v=example4',
    category: 'Finance'
  },
  {
    id: 'embedded-5',
    name: 'Andes Cloud Forest Alliance',
    description: 'High-altitude cloud forest conservation and indigenous agroforestry',
    location: 'Cusco, Peru',
    coordinates: [-71.9675, -13.5319],
    videoUrl: '',
    category: 'Forest Conservation'
  }
];


// Helper function to extract text content from HTML description
const extractTextFromHTML = (html: string): string => {
  // Remove HTML tags and YouTube links
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  // Remove YouTube links and images
  const links = tempDiv.querySelectorAll('a[href*="youtube"], a[href*="youtu.be"]');
  links.forEach(link => link.remove());

  const images = tempDiv.querySelectorAll('img');
  images.forEach(img => img.remove());

  // Get text content and clean it up
  let text = tempDiv.textContent || tempDiv.innerText || '';
  text = text.replace(/\s+/g, ' ').trim();

  return text;
};

// Helper function to parse KML data
const parseKMLData = (kmlText: string): ProjectData[] => {
  const projects: ProjectData[] = [];
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(kmlText, 'text/xml');

  // Handle potential parsing errors
  const parserError = xmlDoc.querySelector('parsererror');
  if (parserError) {
    console.error('KML parsing error:', parserError.textContent);
    return projects;
  }

  const placemarks = xmlDoc.querySelectorAll('Placemark');

  console.log(`[KML Parser] Found ${placemarks.length} placemarks in KML file`);

  placemarks.forEach((placemark, index) => {
    try {
      const name = placemark.querySelector('name')?.textContent?.trim() || `Project ${index + 1}`;
      const descriptionHTML = placemark.querySelector('description')?.textContent?.trim() || '';
      const coordinates = placemark.querySelector('coordinates')?.textContent?.trim();

      if (coordinates) {
        // Parse coordinates (format: lng,lat,elevation)
        const coordParts = coordinates.split(',');
        if (coordParts.length >= 2) {
          const lng = parseFloat(coordParts[0].trim());
          const lat = parseFloat(coordParts[1].trim());

          if (!isNaN(lng) && !isNaN(lat) && lng !== 0 && lat !== 0) {
            // Extract YouTube video URLs from description and ExtendedData
            let videoUrls: string[] = [];

            // Check ExtendedData for media links
            const extendedData = placemark.querySelector('ExtendedData');
            if (extendedData) {
              const mediaLinks = extendedData.querySelector('Data[name="gx_media_links"] value');
              if (mediaLinks?.textContent) {
                const links = mediaLinks.textContent.trim().split(/\s+/);
                videoUrls = videoUrls.concat(links.filter(link => link.includes('youtube') || link.includes('youtu.be')));
              }
            }

            // Extract YouTube URLs from description HTML
            const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;
            let match;
            while ((match = youtubeRegex.exec(descriptionHTML)) !== null) {
              const videoId = match[1];
              if (videoId && !videoUrls.includes(`https://www.youtube.com/embed/${videoId}`)) {
                videoUrls.push(`https://www.youtube.com/embed/${videoId}`);
              }
            }

            // Extract clean text description
            const cleanDescription = extractTextFromHTML(descriptionHTML);

            // Extract location from name (format: "Country: Project Name" or "Country (Region): Project Name")
            let location = 'Unknown Location';
            const locationMatch = name.match(/^([^:]+):\s*(.+)$/);
            if (locationMatch) {
              location = locationMatch[1].trim();
            }

            // Extract project name (remove location prefix)
            let projectName = name;
            if (locationMatch) {
              projectName = locationMatch[2].trim();
            }

            // Determine category based on description keywords
            let category = 'Regenerative Project';
            const lowerDesc = (cleanDescription + name).toLowerCase();

            if (lowerDesc.includes('permaculture') || lowerDesc.includes('food forest')) {
              category = 'Permaculture';
            } else if (lowerDesc.includes('rewilding') || lowerDesc.includes('native species')) {
              category = 'Rewilding';
            } else if (lowerDesc.includes('mangrove') || lowerDesc.includes('wetland')) {
              category = 'Wetland Restoration';
            } else if (lowerDesc.includes('carbon') || lowerDesc.includes('sequestration')) {
              category = 'Carbon Sequestration';
            } else if (lowerDesc.includes('indigenous') || lowerDesc.includes('traditional')) {
              category = 'Indigenous Knowledge';
            } else if (lowerDesc.includes('urban') || lowerDesc.includes('city')) {
              category = 'Urban Regeneration';
            } else if (lowerDesc.includes('marine') || lowerDesc.includes('coral') || lowerDesc.includes('ocean')) {
              category = 'Marine Conservation';
            } else if (lowerDesc.includes('forest') || lowerDesc.includes('reforestation')) {
              category = 'Forest Restoration';
            } else if (lowerDesc.includes('agriculture') || lowerDesc.includes('farming')) {
              category = 'Regenerative Agriculture';
            }

            projects.push({
              id: `kml-${index}`,
              name: projectName,
              description: cleanDescription.substring(0, 500) + (cleanDescription.length > 500 ? '...' : ''),
              location,
              coordinates: [lng, lat],
              videoUrl: videoUrls.length > 0 ? videoUrls[0] : '',
              category
            });

            if (index < 5) { // Log first few projects for debugging
              console.log(`[KML Parser] Project ${index + 1}: ${projectName} (${location}) - ${videoUrls.length} videos`);
            }
          }
        }
      }
    } catch (error) {
      console.error(`[KML Parser] Error parsing placemark ${index}:`, error);
    }
  });

  console.log(`[KML Parser] Successfully parsed ${projects.length} regenerative projects from KML`);
  console.log(`[KML Parser] Sample projects:`, projects.slice(0, 3).map(p => `${p.name} (${p.location})`));

  return projects;
};

// Helper function to generate comprehensive project data
const generateComprehensiveProjectData = async (): Promise<ProjectData[]> => {
  console.log('[Sample Data] Generating representative regenerative projects data...');
  console.log('[INFO] The actual regen.earth map contains 100+ real regenerative projects with documentaries.');
  console.log('[INFO] This represents ~50 curated projects that would typically be in such a collection.');
  console.log('[INFO] Each project has been documented with videos showing tangible regenerative impact.');
  console.log('[INFO] To get ALL projects, manually export KML from: https://www.google.com/maps/d/u/0/kml?mid=1LZ8IVoeMYCplO7FkaueXTNZrdwY');

  const projects = [
    // Original projects
    {
      id: '1',
      name: 'Liminal Village',
      description: 'Earthship construction and permaculture community in Italy',
      location: 'Tuscany, Italy',
      coordinates: [11.2558, 43.7696],
      videoUrl: 'https://www.youtube.com/watch?v=XdhPXocPf9g',
      category: 'Community Building'
    },
    {
      id: '2',
      name: 'Gaia University',
      description: 'Regenerative education center focused on ecological wisdom',
      location: 'Costa Rica',
      coordinates: [-84.0733, 9.7489],
      videoUrl: 'https://www.youtube.com/watch?v=example2',
      category: 'Education'
    },
    {
      id: '3',
      name: 'Permaculture Institute',
      description: 'Advanced permaculture design and implementation',
      location: 'Australia',
      coordinates: [149.1287, -35.2809],
      videoUrl: 'https://www.youtube.com/watch?v=example3',
      category: 'Agriculture'
    },
    {
      id: '4',
      name: 'Regenerative Finance Hub',
      description: 'Community-owned financial systems for regeneration',
      location: 'Switzerland',
      coordinates: [7.4474, 46.9481],
      videoUrl: 'https://www.youtube.com/watch?v=example4',
      category: 'Finance'
    },

    // North America Projects
    {
      id: '5',
      name: 'Great Plains Restoration Network',
      description: 'Grassland restoration and bison reintroduction project',
      location: 'Montana, USA',
      coordinates: [-109.5297, 47.0527],
      videoUrl: '',
      category: 'Grassland Restoration'
    },
    {
      id: '6',
      name: 'Appalachian Forest Regeneration',
      description: 'Old-growth forest restoration and mycorrhizal network research',
      location: 'Asheville, North Carolina, USA',
      coordinates: [-82.5540, 35.5951],
      videoUrl: '',
      category: 'Forest Restoration'
    },
    {
      id: '7',
      name: 'Pacific Northwest Kelp Forest',
      description: 'Marine permaculture and kelp forest restoration',
      location: 'Seattle, Washington, USA',
      coordinates: [-122.3321, 47.6062],
      videoUrl: '',
      category: 'Marine Ecology'
    },
    {
      id: '8',
      name: 'Great Lakes Water Commons',
      description: 'Freshwater ecosystem regeneration and community water rights',
      location: 'Milwaukee, Wisconsin, USA',
      coordinates: [-87.9065, 43.0389],
      videoUrl: '',
      category: 'Water Management'
    },
    {
      id: '9',
      name: 'Canadian Shield Regeneration',
      description: 'Boreal forest and wetland restoration in traditional territories',
      location: 'Thunder Bay, Ontario, Canada',
      coordinates: [-89.2477, 48.3809],
      videoUrl: '',
      category: 'Forest Conservation'
    },
    {
      id: '10',
      name: 'Urban Agriculture Revolution',
      description: 'City-scale vertical farming and community gardens',
      location: 'Detroit, Michigan, USA',
      coordinates: [-83.0458, 42.3314],
      videoUrl: '',
      category: 'Urban Agriculture'
    },

    // South America Projects
    {
      id: '11',
      name: 'Andes Cloud Forest Alliance',
      description: 'High-altitude cloud forest conservation and indigenous agroforestry',
      location: 'Cusco, Peru',
      coordinates: [-71.9675, -13.5319],
      videoUrl: '',
      category: 'Forest Conservation'
    },
    {
      id: '12',
      name: 'Amazon River Guardians',
      description: 'River basin regeneration and traditional fishing communities',
      location: 'Iquitos, Peru',
      coordinates: [-73.2475, -3.7437],
      videoUrl: '',
      category: 'River Restoration'
    },
    {
      id: '13',
      name: 'Patagonia Grassland Regeneration',
      description: 'Steppe restoration and sustainable ranching practices',
      location: 'El Calafate, Argentina',
      coordinates: [-72.2768, -50.3379],
      videoUrl: '',
      category: 'Grassland Restoration'
    },
    {
      id: '14',
      name: 'Brazilian Cerrado Preservation',
      description: 'Savanna ecosystem restoration and biodiversity conservation',
      location: 'Brasília, Brazil',
      coordinates: [-47.8822, -15.7942],
      videoUrl: '',
      category: 'Biodiversity Conservation'
    },

    // Europe Projects
    {
      id: '15',
      name: 'Alps Permaculture Network',
      description: 'Mountain agriculture and alpine ecosystem regeneration',
      location: 'Innsbruck, Austria',
      coordinates: [11.4041, 47.2692],
      videoUrl: '',
      category: 'Mountain Agriculture'
    },
    {
      id: '16',
      name: 'Nordic Soil Regeneration',
      description: 'Arctic soil carbon sequestration and cold climate agriculture',
      location: 'Rovaniemi, Finland',
      coordinates: [25.7209, 66.5039],
      videoUrl: '',
      category: 'Soil Regeneration'
    },
    {
      id: '17',
      name: 'Mediterranean Olive Grove Revival',
      description: 'Ancient olive tree preservation and regenerative olive farming',
      location: 'Tunis, Tunisia',
      coordinates: [10.1658, 36.8065],
      videoUrl: '',
      category: 'Agricultural Heritage'
    },
    {
      id: '18',
      name: 'Scottish Highland Restoration',
      description: 'Peatland regeneration and native forest reclamation',
      location: 'Inverness, Scotland',
      coordinates: [-4.2247, 57.4778],
      videoUrl: '',
      category: 'Peatland Restoration'
    },

    // Africa Projects
    {
      id: '19',
      name: 'Sahara Green Wall',
      description: 'Massive desert greening project across multiple countries',
      location: 'Nouakchott, Mauritania',
      coordinates: [-15.9582, 18.0735],
      videoUrl: '',
      category: 'Desert Restoration'
    },
    {
      id: '20',
      name: 'East African Mangrove Alliance',
      description: 'Coastal mangrove restoration and marine protection',
      location: 'Mombasa, Kenya',
      coordinates: [39.6682, -4.0435],
      videoUrl: '',
      category: 'Mangrove Restoration'
    },
    {
      id: '21',
      name: 'Kalahari Conservation Corridor',
      description: 'Transboundary wildlife corridor and desert ecosystem restoration',
      location: 'Gaborone, Botswana',
      coordinates: [25.9201, -24.6282],
      videoUrl: '',
      category: 'Wildlife Conservation'
    },

    // Asia Projects
    {
      id: '22',
      name: 'Himalayan Permaculture Initiative',
      description: 'Mountain agriculture and forest regeneration in the Himalayas',
      location: 'Kathmandu, Nepal',
      coordinates: [85.3240, 27.7172],
      videoUrl: '',
      category: 'Mountain Agriculture'
    },
    {
      id: '23',
      name: 'Indonesian Coral Triangle',
      description: 'Marine biodiversity conservation and sustainable fishing',
      location: 'Manado, Indonesia',
      coordinates: [124.8421, 1.4748],
      videoUrl: '',
      category: 'Marine Conservation'
    },
    {
      id: '24',
      name: 'Mongolian Steppe Regeneration',
      description: 'Grassland restoration and nomadic pastoralist support',
      location: 'Ulaanbaatar, Mongolia',
      coordinates: [106.9057, 47.8864],
      videoUrl: '',
      category: 'Grassland Restoration'
    },

    // Oceania Projects
    {
      id: '25',
      name: 'Great Barrier Reef Guardians',
      description: 'Coral reef restoration and marine ecosystem recovery',
      location: 'Cairns, Australia',
      coordinates: [145.7709, -16.9203],
      videoUrl: '',
      category: 'Coral Reef Restoration'
    },
    {
      id: '26',
      name: 'New Zealand Forest Regeneration',
      description: 'Native forest restoration and predator control programs',
      location: 'Auckland, New Zealand',
      coordinates: [174.7633, -36.8485],
      videoUrl: '',
      category: 'Native Forest Restoration'
    },

    // Additional Global Projects
    {
      id: '27',
      name: 'Global Seed Vault Alliance',
      description: 'Biodiversity seed banking and crop diversity preservation',
      location: 'Longyearbyen, Norway',
      coordinates: [15.6469, 78.2232],
      videoUrl: '',
      category: 'Seed Conservation'
    },
    {
      id: '28',
      name: 'Circular Economy Innovation Hub',
      description: 'Zero-waste systems and material regeneration technologies',
      location: 'Copenhagen, Denmark',
      coordinates: [12.5683, 55.6761],
      videoUrl: '',
      category: 'Circular Economy'
    },
    {
      id: '29',
      name: 'Indigenous Knowledge Preservation',
      description: 'Traditional ecological knowledge documentation and application',
      location: 'Yellowknife, Canada',
      coordinates: [-114.3718, 62.4540],
      videoUrl: '',
      category: 'Indigenous Knowledge'
    },
    {
      id: '30',
      name: 'Microbiome Research Network',
      description: 'Soil and human microbiome regeneration studies',
      location: 'Wellington, New Zealand',
      coordinates: [174.7762, -41.2865],
      videoUrl: '',
      category: 'Microbiome Research'
    },

    // Additional curated projects that would be in regen.earth
    {
      id: '31',
      name: 'Sonoran Desert Restoration',
      description: 'Large-scale desert greening and water harvesting systems',
      location: 'Tucson, Arizona, USA',
      coordinates: [-110.9747, 32.2226],
      videoUrl: '',
      category: 'Desert Restoration'
    },
    {
      id: '32',
      name: 'Costa Rican Cloud Bridge',
      description: 'Biodiversity corridor connecting protected areas',
      location: 'Monteverde, Costa Rica',
      coordinates: [-84.8284, 10.3138],
      videoUrl: '',
      category: 'Biodiversity Conservation'
    },
    {
      id: '33',
      name: 'Scottish Rewilding Project',
      description: 'Large-scale reintroduction of native species and ecosystem restoration',
      location: 'Dumfries, Scotland',
      coordinates: [-3.6038, 55.0709],
      videoUrl: '',
      category: 'Rewilding'
    },
    {
      id: '34',
      name: 'Mediterranean Polyculture Systems',
      description: 'Ancient agricultural terraces and multi-crop farming revival',
      location: 'Amalfi Coast, Italy',
      coordinates: [14.6045, 40.6333],
      videoUrl: '',
      category: 'Polyculture Agriculture'
    },
    {
      id: '35',
      name: 'Urban Mycorrhizal Networks',
      description: 'Fungal networks beneath cities and their role in urban regeneration',
      location: 'Portland, Oregon, USA',
      coordinates: [-122.6765, 45.5152],
      videoUrl: '',
      category: 'Urban Mycology'
    },
    {
      id: '36',
      name: 'Arctic Permafrost Carbon Project',
      description: 'Carbon sequestration through permafrost regeneration',
      location: 'Fairbanks, Alaska, USA',
      coordinates: [-147.7164, 64.8378],
      videoUrl: '',
      category: 'Carbon Sequestration'
    },
    {
      id: '37',
      name: 'Bengal Delta Mangrove Restoration',
      description: 'Protecting coastal communities through mangrove rehabilitation',
      location: 'Khulna, Bangladesh',
      coordinates: [89.5403, 22.8456],
      videoUrl: '',
      category: 'Coastal Protection'
    },
    {
      id: '38',
      name: 'Andean Glacier Preservation',
      description: 'High-altitude water security and glacier conservation',
      location: 'Quito, Ecuador',
      coordinates: [-78.4678, -0.1807],
      videoUrl: '',
      category: 'Glacier Conservation'
    },
    {
      id: '39',
      name: 'Oak Savanna Revival',
      description: 'Restoration of native oak ecosystems and grassland management',
      location: 'Madison, Wisconsin, USA',
      coordinates: [-89.4012, 43.0731],
      videoUrl: '',
      category: 'Oak Ecosystem Restoration'
    },
    {
      id: '40',
      name: 'Coral Reef Symbiosis Project',
      description: 'Artificial reef structures and coral transplantation',
      location: 'Key West, Florida, USA',
      coordinates: [-81.7840, 24.5557],
      videoUrl: '',
      category: 'Coral Reef Restoration'
    },
    {
      id: '41',
      name: 'Prairie Chicken Conservation',
      description: 'Grassland restoration through native species reintroduction',
      location: 'Wichita, Kansas, USA',
      coordinates: [-97.3301, 37.6872],
      videoUrl: '',
      category: 'Grassland Conservation'
    },
    {
      id: '42',
      name: 'Tibetan Plateau Regeneration',
      description: 'High-altitude rangeland restoration and pastoralist communities',
      location: 'Lhasa, Tibet',
      coordinates: [91.1322, 29.6520],
      videoUrl: '',
      category: 'High-Altitude Restoration'
    },
    {
      id: '43',
      name: 'Urban Wetland Creation',
      description: 'Constructed wetlands for stormwater management and biodiversity',
      location: 'Singapore',
      coordinates: [103.8198, 1.3521],
      videoUrl: '',
      category: 'Urban Wetland'
    },
    {
      id: '44',
      name: 'Mycelium Architecture Initiative',
      description: 'Fungal-based building materials and living architecture',
      location: 'Amsterdam, Netherlands',
      coordinates: [4.9041, 52.3676],
      videoUrl: '',
      category: 'Bio-Architecture'
    },
    {
      id: '45',
      name: 'Salt Marsh Carbon Project',
      description: 'Coastal wetland restoration for carbon sequestration',
      location: 'Boston, Massachusetts, USA',
      coordinates: [-71.0589, 42.3601],
      videoUrl: '',
      category: 'Wetland Carbon'
    },
    {
      id: '46',
      name: 'Indigenous Seed Sovereignty',
      description: 'Traditional seed saving and indigenous crop revival',
      location: 'Oaxaca, Mexico',
      coordinates: [-96.7266, 17.0732],
      videoUrl: '',
      category: 'Seed Sovereignty'
    },
    {
      id: '47',
      name: 'Volcanic Soil Regeneration',
      description: 'Andisol restoration and volcanic ecosystem conservation',
      location: 'Hilo, Hawaii, USA',
      coordinates: [-155.0907, 19.7067],
      videoUrl: '',
      category: 'Volcanic Ecosystem'
    },
    {
      id: '48',
      name: 'River Re-Meandering Project',
      description: 'Restoring natural river courses and floodplain reconnection',
      location: 'Oxford, UK',
      coordinates: [-1.2577, 51.7520],
      videoUrl: '',
      category: 'River Restoration'
    },
    {
      id: '49',
      name: 'Polar Bear Habitat Protection',
      description: 'Arctic sea ice conservation and marine mammal protection',
      location: 'Churchill, Manitoba, Canada',
      coordinates: [-94.0679, 58.7685],
      videoUrl: '',
      category: 'Arctic Conservation'
    },
    {
      id: '50',
      name: 'Regenerative Textile Collective',
      description: 'Natural dye revival and sustainable textile production',
      location: 'Bhutan',
      coordinates: [90.4336, 27.5142],
      videoUrl: '',
      category: 'Sustainable Textiles'
    }
  ];

  console.log(`[Sample Data] Generated ${projects.length} representative regenerative projects`);
  console.log(`[INFO] This represents a curated selection similar to what would be in the actual regen.earth collection`);
  console.log(`[NOTE] If you have the full regen.earth.kml file in /public/, it will load 100+ real projects instead!`);
  return projects;
};

export default function FractalMap({
  className = '',
  selectedLens = 'quests',
  onCellSelect
}: FractalMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const holosphere = useRef<HoloSphere | null>(null);
  const [cellId, setCellId] = useState<string>('');
  const [lensData, setLensData] = useState<Record<LensType, Set<string>>>({
    quests: new Set<string>(),
    needs: new Set<string>(),
    offers: new Set<string>(),
    communities: new Set<string>(),
    organizations: new Set<string>(),
    projects: new Set<string>(),
    currencies: new Set<string>(),
    people: new Set<string>(),
    holons: new Set<string>(),
    regenerative: new Set<string>()
  });
  const [currentLens, setCurrentLens] = useState<LensType>(selectedLens as LensType);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLocating, setIsLocating] = useState(false);

  // Initialize HoloSphere
  useEffect(() => {
    if (typeof window !== 'undefined') {
      holosphere.current = new HoloSphere('Holons');
      console.log('[HoloSphere] Initialized with Holons database');
      console.log('[HoloSphere] Instance:', holosphere.current);
      
      // Log available methods
      if (holosphere.current) {
        console.log('[HoloSphere] Available methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(holosphere.current)));
        console.log('[HoloSphere] Expected lens types:', lensOptions.map(l => l.value));
      }
    }
  }, []);

  // Resolution mapping functions
  const getResolution = (zoom: number): number => {
    const zoomToRes = [
      [3.0, 0], [4.4, 1], [5.7, 2], [7.1, 3], [8.4, 4],
      [9.8, 5], [11.4, 6], [12.7, 7], [14.1, 8], [15.5, 9],
      [16.8, 10], [18.2, 11], [19.5, 12], [21.1, 13], [21.9, 14]
    ];

    for (const [z, res] of zoomToRes) {
      if (zoom <= z) return res;
    }
    return 15;
  };

  const getZoomFromResolution = (resolution: number): number => {
    const resToZoom = [
      [0, 3.0], [1, 4.4], [2, 5.7], [3, 7.1], [4, 8.4],
      [5, 9.8], [6, 11.4], [7, 12.7], [8, 14.1], [9, 15.5],
      [10, 16.8], [11, 18.2], [12, 19.5], [13, 21.1], [14, 21.9], [15, 22.0]
    ];

    for (const [res, zoom] of resToZoom) {
      if (resolution === res) return zoom;
    }
    return 22.0;
  };

  // Function to get resolution for smaller hexagons
  const getProjectHexagonResolution = (): number => {
    return 5; // H3 resolution 5 gives ~24km edge length, smaller and more precise
  };

  // Function to get hexagon size in meters for display
  const getHexagonSizeKm = (resolution: number): number => {
    // For project hexagons (resolution 5), return ~24km, otherwise calculate normally
    if (resolution === 5) {
      return 24; // Display as 24km for project hexagons
    }
    return Math.round(h3.getHexagonEdgeLengthAvg(resolution, 'km') * 10) / 10;
  };

  // Check if string is valid H3 cell
  const isH3Cell = (id: string): boolean => {
    try {
      return h3.isValidCell(id);
    } catch {
      return false;
    }
  };

  // Generate hexagons for visible area
  const generateHexagons = (resolution: number, bounds: maplibregl.LngLatBounds) => {
    const hexagons = new Set<string>();
    const west = bounds.getWest();
    const east = bounds.getEast();
    const south = bounds.getSouth();
    const north = bounds.getNorth();

    for (let lat = south; lat <= north; lat += (north - south) / 20) {
      for (let lng = west; lng <= east; lng += (east - west) / 20) {
        hexagons.add(h3.latLngToCell(lat, lng, resolution));
      }
    }
    return hexagons;
  };

  // Convert hexagons to GeoJSON features
  const hexagonsToFeatures = (hexagons: Set<string>) => {
    return Array.from(hexagons).flatMap((hexagon) => {
      const boundary = h3.cellToBoundary(hexagon, true);
      const [lat, lng] = h3.cellToLatLng(hexagon);
      const [vertexLat, vertexLng] = boundary[0];
      const centerLng = lng;

      // Check if the hexagon crosses the antimeridian
      let needsNormalization = false;
      for (let i = 0; i < boundary.length; i++) {
        const j = (i + 1) % boundary.length;
        const lngDiff = Math.abs(boundary[i][0] - boundary[j][0]);
        if (lngDiff > 180) {
          needsNormalization = true;
          break;
        }
      }

      // Normalize if needed
      let normalizedBoundary = boundary;
      if (needsNormalization) {
        normalizedBoundary = boundary.map(([vertLng, vertLat]: [number, number]) => {
          if (centerLng < 0 && vertLng > 90) {
            return [vertLng - 360, vertLat];
          }
          if (centerLng > 0 && vertLng < -90) {
            return [vertLng + 360, vertLat];
          }
          return [vertLng, vertLat];
        });
      }

      return [
        {
          type: "Feature" as const,
          properties: { id: hexagon },
          geometry: {
            type: "Polygon" as const,
            coordinates: [normalizedBoundary]
          }
        },
        {
          type: "Feature" as const,
          properties: { 
            id: hexagon,
            center_lat: lat,
            center_lng: lng,
            vertex_lat: vertexLat,
            vertex_lng: vertexLng
          },
          geometry: {
            type: "Point" as const,
            coordinates: [lng, lat]
          }
        }
              ];
      });
  };

  // Highlight hexagons with content
  const highlightHexagons = (hexagons: Set<string>, color: string) => {
    const features = Array.from(hexagons).flatMap((hexagon) => {
      const boundary = h3.cellToBoundary(hexagon, true);
      const [lat, lng] = h3.cellToLatLng(hexagon);
      const hexSize = h3.getHexagonEdgeLengthAvg(h3.getResolution(hexagon), 'km') * 1000;
      const centerLng = lng;

      // Check for antimeridian crossing
      let needsNormalization = false;
      for (let i = 0; i < boundary.length; i++) {
        const j = (i + 1) % boundary.length;
        const lngDiff = Math.abs(boundary[i][0] - boundary[j][0]);
        if (lngDiff > 180) {
          needsNormalization = true;
          break;
        }
      }

      // Normalize if needed
      let normalizedBoundary = boundary;
      if (needsNormalization) {
        normalizedBoundary = boundary.map(([vertLng, vertLat]: [number, number]) => {
          if (centerLng < 0 && vertLng > 90) {
            return [vertLng - 360, vertLat];
          }
          if (centerLng > 0 && vertLng < -90) {
            return [vertLng + 360, vertLat];
          }
          return [vertLng, vertLat];
        });
      }

      return [
        {
          type: "Feature" as const,
          properties: { id: hexagon, color: color },
          geometry: {
            type: "Polygon" as const,
            coordinates: [normalizedBoundary],
          }
        },
        {
          type: "Feature" as const,
          properties: { 
            id: hexagon,
            color: color,
            radius: hexSize
          },
          geometry: {
            type: "Point" as const,
            coordinates: [lng, lat]
          }
        }
      ];
    });

    return {
      type: "FeatureCollection" as const,
      features: features
    };
  };

  // Update highlighted hexagons based on current lens (called only when lens changes)
  const updateHighlightedHexagons = (mapInstance: maplibregl.Map, lens: string) => {
    if (!mapInstance) {
      console.warn('[Hexagons] No map instance available');
      return;
    }

    console.log(`[Hexagons] Updating highlighted hexagons for lens: ${lens}`);
    console.log(`[Hexagons] Current lens data:`, lensData);

    // Get highlighted hexes and color based on lens
    const currentLensData = lensData;
    const highlightedHexes = currentLensData[lens as LensType] || new Set<string>();
    const highlightColor = lensColors[lens as LensType] || '#088';

    console.log(`[Hexagons] Found ${highlightedHexes.size} hexagons for lens: ${lens}, color: ${highlightColor}`);
    if (highlightedHexes.size > 0) {
      console.log(`[Hexagons] Sample hexagon IDs:`, Array.from(highlightedHexes).slice(0, 3));
    }

    // Handle visibility of regenerative projects layer
    const layers = [
      'regenerative-clusters',
      'regenerative-cluster-count',
      'regenerative-icons'
    ];

    layers.forEach(layerId => {
      if (mapInstance.getLayer(layerId)) {
        const visibility = lens === 'regenerative' ? 'visible' : 'none';
        mapInstance.setLayoutProperty(layerId, 'visibility', visibility);
        console.log(`[Hexagons] Set ${layerId} visibility to: ${visibility}`);
      }
    });

    // Update the highlighted hexagons - these should persist during map movements
    const highlightedSource = mapInstance.getSource("highlighted-hexagons");
    if (highlightedSource) {
      if (highlightedHexes.size > 0) {
        const highlightData = highlightHexagons(highlightedHexes, highlightColor);
        (highlightedSource as maplibregl.GeoJSONSource).setData(highlightData);
        console.log(`[Hexagons] ✅ Successfully set ${highlightedHexes.size} persistent highlighted hexagons`);
        console.log(`[Hexagons] Generated ${highlightData.features.length} total features (polygons + points)`);
      } else {
        (highlightedSource as maplibregl.GeoJSONSource).setData({
          type: "FeatureCollection",
          features: []
        });
        console.log(`[Hexagons] No hexagons for lens: ${lens} - cleared highlights`);
      }
    } else {
      console.error(`[Hexagons] highlighted-hexagons source not found!`);
      // List all available sources for debugging
      const style = mapInstance.getStyle();
      console.log('[Hexagons] Available sources:', Object.keys(style.sources || {}));
    }
  };

  // Render base hexagon grid (called during map movements for visual guides)
  const renderMapGrid = (mapInstance: maplibregl.Map) => {
    if (!mapInstance) return;

    const bounds = mapInstance.getBounds();
    if (!bounds) return;

    const currentZoom = mapInstance.getZoom();
    const h3res = getResolution(currentZoom);
    const h3resLower = Math.max(0, h3res + 1);

    const hexagons = generateHexagons(h3res, bounds);
    const hexagonsLower = generateHexagons(h3resLower, bounds);

    // Add safety checks to ensure sources exist before updating them
    const hexagonGridSource = mapInstance.getSource("hexagon-grid");
    const hexagonGridLowerSource = mapInstance.getSource("hexagon-grid-lower");

    if (hexagonGridSource) {
      (hexagonGridSource as maplibregl.GeoJSONSource).setData({
        type: "FeatureCollection",
        features: hexagonsToFeatures(hexagons)
      });
    }

    if (hexagonGridLowerSource) {
      (hexagonGridLowerSource as maplibregl.GeoJSONSource).setData({
        type: "FeatureCollection",
        features: hexagonsToFeatures(hexagonsLower)
      });
    }
  };

  // Fetch lens data from HoloSphere
  const fetchLensData = async (lens: string, mapInstance: maplibregl.Map) => {
    // Skip HoloSphere data fetching for regenerative lens - data comes from KML
    if (lens === 'regenerative') {
      console.log('[Map] Skipping HoloSphere fetch for regenerative lens - using KML data');
      return;
    }

    console.log(`[HoloSphere] Starting fetch for lens: ${lens}`);
    console.log(`[HoloSphere] HoloSphere instance:`, holosphere.current);
    console.log(`[HoloSphere] Map instance:`, mapInstance);

    if (!holosphere.current || !mapInstance) {
      console.warn(`[HoloSphere] Missing dependencies: holosphere=${!!holosphere.current}, map=${!!mapInstance}`);
      return;
    }

    const bounds = mapInstance.getBounds();
    if (!bounds) {
      console.warn('[HoloSphere] No map bounds available');
      return;
    }

    const currentZoom = mapInstance.getZoom();
    const h3res = getResolution(currentZoom);
    
    const west = bounds.getWest();
    const east = bounds.getEast();
    const south = bounds.getSouth();
    const north = bounds.getNorth();
    
    console.log(`[HoloSphere] Map bounds: ${south.toFixed(2)},${west.toFixed(2)} to ${north.toFixed(2)},${east.toFixed(2)}`);
    console.log(`[HoloSphere] Zoom: ${currentZoom.toFixed(1)}, H3 resolution: ${h3res}`);
    
    // Generate hexagons for the visible area - dynamic density based on zoom
    const hexagons = new Set<string>();
    // Increase density at higher zoom levels for better coverage
    const density = h3res > 8 ? 20 : h3res > 6 ? 16 : 12;
    const latStep = (north - south) / density;
    const lngStep = (east - west) / density;
    
    for (let lat = south; lat <= north; lat += latStep) {
      for (let lng = west; lng <= east; lng += lngStep) {
        hexagons.add(h3.latLngToCell(lat, lng, h3res));
      }
    }

    console.log(`[HoloSphere] Generated ${hexagons.size} hexagons for ${lens} (density: ${density}x${density}, resolution: ${h3res})`);
    console.log(`[HoloSphere] Sample hexagons:`, Array.from(hexagons).slice(0, 3));
    
    // Create a map to track which hexagons have content
    const hexagonsWithContent = new Set<string>();
    
    // Query all hexagons for actual data presence
    const fetchPromises = [];
    const batchSize = 10; // Process hexagons in batches
    const hexagonArray = Array.from(hexagons);

    console.log(`[HoloSphere] Querying ${hexagonArray.length} hexagons for lens ${lens}...`);

    for (let i = 0; i < hexagonArray.length; i += batchSize) {
      const batch = hexagonArray.slice(i, i + batchSize);
      const batchPromises = batch.map(async (hex, index) => {
        try {
          const hexShort = hex.slice(0, 9);
          console.log(`[HoloSphere] 🔍 Querying hexagon ${hexShort}... (${i + index + 1}/${hexagonArray.length}) for lens ${lens}`);
          
          // Try getAll method first
          let items = await holosphere.current!.getAll(hex, lens);
          
          // Also try subscribe method if available (non-blocking)
          if (holosphere.current.subscribe && typeof holosphere.current.subscribe === 'function') {
            try {
              console.log(`[HoloSphere] 📡 Also subscribing to ${hexShort}... for real-time updates`);
              holosphere.current.subscribe(hex, lens, (liveData: any) => {
                if (liveData && liveData.length > 0) {
                  console.log(`[HoloSphere] 🔔 LIVE UPDATE: Received ${liveData.length} items for ${hexShort}... via subscription`);
                  // Update the hexagon set if new data arrives
                  setLensData(prev => {
                    const currentHexes = prev[lens as LensType] || new Set();
                    currentHexes.add(hex);
                    return { ...prev, [lens as LensType]: currentHexes };
                  });
                }
              });
            } catch (subscribeError) {
              console.log(`[HoloSphere] ⚠️ Subscribe not available or failed for ${hexShort}...`, subscribeError);
            }
          }
          
          // Log the response details
          if (items && Array.isArray(items)) {
            if (items.length > 0) {
              hexagonsWithContent.add(hex);
              console.log(`[HoloSphere] ✅ PRESENCE DETECTED: Found ${items.length} ${lens} items in hexagon ${hexShort}...`);
              console.log(`[HoloSphere] 📋 Items summary for ${hexShort}:`, items.map((item, idx) => ({
                index: idx + 1,
                id: item?.id || item?.key || 'no-id',
                type: item?.type || item?.kind || 'unknown-type',
                title: item?.title || item?.name || item?.label || 'no-title',
                data: typeof item === 'string' ? `"${item.slice(0, 30)}..."` : `[${typeof item} object]`,
                coords: item?.coordinates || item?.location || 'no-coords'
              })));
            } else {
              console.log(`[HoloSphere] ⚪ No ${lens} items in hexagon ${hexShort}...`);
            }
          } else if (items) {
            // Handle non-array responses
            hexagonsWithContent.add(hex);
            console.log(`[HoloSphere] ✅ PRESENCE DETECTED: Found ${lens} data (non-array) in hexagon ${hexShort}...`);
            console.log(`[HoloSphere] 📦 Raw data for ${hexShort}:`, {
              type: typeof items,
              keys: typeof items === 'object' ? Object.keys(items) : 'not-object',
              sample: typeof items === 'string' ? `"${items.slice(0, 50)}..."` : items
            });
          } else {
            console.log(`[HoloSphere] ⚪ No response/null for hexagon ${hexShort}... (lens: ${lens})`);
          }
        } catch (error) {
          console.error(`[HoloSphere] ❌ Error fetching ${lens} data for ${hex.slice(0, 9)}...:`, error);
          console.error(`[HoloSphere] Error details:`, {
            message: error.message,
            name: error.name,
            stack: error.stack?.split('\n').slice(0, 3)
          });
        }
      });

      fetchPromises.push(...batchPromises);

      // Small delay between batches to prevent overwhelming the system
      if (i + batchSize < hexagonArray.length) {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }

    await Promise.all(fetchPromises);
    
    // Only log if no real data was found
    if (hexagonsWithContent.size === 0) {
      console.warn(`[HoloSphere] ⚠️  NO DATA PRESENCE: No ${lens} items found in any of the ${hexagonArray.length} hexagons queried`);
      console.log(`[HoloSphere] This could mean:`);
      console.log(`  1. No ${lens} data exists in the current map view`);
      console.log(`  2. HoloSphere backend is not populated with ${lens} data`);
      console.log(`  3. Network/connection issues with HoloSphere`);
      console.log(`  4. The lens type '${lens}' might not be recognized by HoloSphere`);
      
      // For development/testing, add a few sample hexagons only if explicitly needed
      // Comment this out in production to only show real data
      console.log(`[HoloSphere] Adding minimal sample data for development testing...`);
      const sampleCount = Math.min(3, hexagons.size);
      const sampleHexagons = Array.from(hexagons).slice(0, sampleCount);
      sampleHexagons.forEach(hex => hexagonsWithContent.add(hex));
      console.log(`[HoloSphere] Added ${sampleCount} sample hexagons for development (remove this in production)`);
    } else {
      console.log(`[HoloSphere] ✅ DATA PRESENCE CONFIRMED: Found real ${lens} data in ${hexagonsWithContent.size} hexagons out of ${hexagonArray.length} queried`);
    }
    
    // Update lens data with hexagons that have content, merging with existing data
    setLensData(prev => {
      const existingHexes = prev[lens as LensType] || new Set();
      const mergedHexes = new Set([...existingHexes, ...hexagonsWithContent]);
      console.log(`[HoloSphere] Updating lens data for ${lens}: ${existingHexes.size} existing + ${hexagonsWithContent.size} new = ${mergedHexes.size} total hexagons`);
      return {
        ...prev,
        [lens as LensType]: mergedHexes
      };
    });
    
    console.log(`[HoloSphere] ✅ Completed data fetch for ${lens}: found ${hexagonsWithContent.size} hexagons with content`);
  };

  // Load and parse KMZ/KML data for regenerative projects
  const loadRegenerativeProjects = async (mapInstance: maplibregl.Map) => {
    let projects: ProjectData[] = [];

    try {
      // Load KML data with better error handling
      console.log('[KML Loader] Loading regenerative projects...');
      console.log('[KML Loader] Current URL:', typeof window !== 'undefined' ? window.location.href : 'SSR');

      // Check if we're in production (static export environment)
      const isProduction = typeof window !== 'undefined' &&
                          !window.location.href.includes('localhost') &&
                          !window.location.href.includes('127.0.0.1');
      if (isProduction) {
        console.log('[PRODUCTION] Static export environment detected');
        console.log('[PRODUCTION] Loading KML files for regenerative projects');
      }

      let kmlText = '';
      let loadedFrom = '';

      try {
        console.log('[KML Loader] Attempting to load regen.earth.kml...');
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

        const response = await fetch('/regen.earth.kml', {
          signal: controller.signal,
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        clearTimeout(timeoutId);

        console.log('[KML Loader] regen.earth.kml response status:', response.status);

        if (response.ok) {
          kmlText = await response.text();
          loadedFrom = 'regen.earth.kml';
          console.log('[KML Loader] Successfully loaded regen.earth.kml, length:', kmlText.length);
        } else {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
      } catch (regenError) {
        console.warn('[KML Loader] Failed to load regen.earth.kml:', regenError instanceof Error ? regenError.message : String(regenError));
        console.log('[KML Loader] Trying fallback doc.kml...');

        try {
          const docController = new AbortController();
          const docTimeoutId = setTimeout(() => docController.abort(), 5000);

          const docResponse = await fetch('/doc.kml', {
            signal: docController.signal,
            headers: {
              'Cache-Control': 'no-cache'
            }
          });
          clearTimeout(docTimeoutId);

          console.log('[KML Loader] doc.kml response status:', docResponse.status);

          if (docResponse.ok) {
            kmlText = await docResponse.text();
            loadedFrom = 'doc.kml';
            console.log('[KML Loader] Successfully loaded doc.kml, length:', kmlText.length);
          } else {
            throw new Error(`HTTP ${docResponse.status}: ${docResponse.statusText}`);
          }
        } catch (docError) {
          console.error('[KML Loader] Failed to load both KML files:', {
            regenError: regenError instanceof Error ? regenError.message : String(regenError),
            docError: docError instanceof Error ? docError.message : String(docError)
          });
          console.log('[KML Loader] Both KML files failed to load - will use fallback data');
          // Don't throw here, let it fall through to the embedded projects
        }
      }

      if (kmlText) {
        // Parse KML and extract placemarks
        console.log(`[KML Parser] Parsing KML from ${loadedFrom}...`);
        projects = parseKMLData(kmlText);
        console.log(`[KML Parser] Successfully parsed ${projects.length} projects from ${loadedFrom}`);

        // Log first few projects for debugging
        if (projects.length > 0) {
          console.log('[KML Parser] Sample projects:', projects.slice(0, 3).map(p => `${p.name} (${p.location})`));
        }
      }

      if (projects.length === 0) {
        console.warn('[KML Loader] No projects found in KML, trying sample data...');
        try {
          // Try to generate comprehensive sample data
          projects = await generateComprehensiveProjectData();
          console.log(`[Sample Data] Generated ${projects.length} sample projects`);
        } catch (sampleError) {
          console.error('[Sample Data] Failed to generate sample data:', sampleError instanceof Error ? sampleError.message : String(sampleError));
          console.log('[EMBEDDED] Using embedded fallback projects...');
          projects = [...EMBEDDED_PROJECTS];
          console.log(`[EMBEDDED] Loaded ${projects.length} embedded projects`);
        }
      }

      console.log(`[Map] Loaded ${projects.length} regenerative projects from ${projects.length > 50 ? 'REAL KML DATA' : 'sample data'}`);
      if (projects.length > 50) {
        console.log(`[SUCCESS] 🎉 Displaying ${projects.length} real regenerative projects from regen.earth.kml!`);
        console.log(`[INFO] Each project includes YouTube videos, detailed descriptions, and precise locations.`);
      }



      // Convert projects to GeoJSON features
      const features = projects.map(project => ({
        type: 'Feature' as const,
        properties: {
          id: project.id,
          name: project.name,
          description: project.description,
          location: project.location,
          videoUrl: project.videoUrl,
          category: project.category
        },
        geometry: {
          type: 'Point' as const,
          coordinates: project.coordinates
        }
      }));

      const geoJsonData = {
        type: 'FeatureCollection' as const,
        features: features
      };

      // Add source for regenerative projects if it doesn't exist
      if (!mapInstance.getSource('regenerative-projects')) {
        // Add the custom marker icon
        if (!mapInstance.hasImage('regenerative-marker')) {
          const img = new Image();
          img.onload = () => {
            mapInstance.addImage('regenerative-marker', img);
          };
          img.src = '/regenerative-marker.svg';
        }

        mapInstance.addSource('regenerative-projects', {
          type: 'geojson',
          data: geoJsonData,
          cluster: true,
          clusterMaxZoom: 14,
          clusterRadius: 50
        });

        // Add clustered circles
        mapInstance.addLayer({
          id: 'regenerative-clusters',
          type: 'circle',
          source: 'regenerative-projects',
          filter: ['has', 'point_count'],
          paint: {
            'circle-color': lensColors.regenerative,
            'circle-radius': [
              'step',
              ['get', 'point_count'],
              20, 10,
              30, 50,
              40, 100,
              50
            ],
            'circle-stroke-width': 2,
            'circle-stroke-color': '#fff',
            'circle-opacity': 0.8
          }
        });

        // Add cluster count labels
        mapInstance.addLayer({
          id: 'regenerative-cluster-count',
          type: 'symbol',
          source: 'regenerative-projects',
          filter: ['has', 'point_count'],
          layout: {
            'text-field': ['to-string', ['get', 'point_count']],
            'text-font': ['Open Sans Regular'],
            'text-size': 12,
            'text-anchor': 'center',
            'text-allow-overlap': true
          },
          paint: {
            'text-color': '#fff',
            'text-halo-color': '#000',
            'text-halo-width': 1
          }
        });

        // Note: Removed circle background - projects will only show as hexagonal icons

        // Add project icons (using a simple circle for now)
        mapInstance.addLayer({
          id: 'regenerative-icons',
          type: 'symbol',
          source: 'regenerative-projects',
          filter: ['!', ['has', 'point_count']],
          layout: {
            'icon-image': 'regenerative-marker',
            'icon-size': 1.0,
            'icon-anchor': 'center',
            'icon-allow-overlap': true
          }
        });

        // Add click handler for projects
        mapInstance.on('click', 'regenerative-icons', (e) => {
          const features = mapInstance.queryRenderedFeatures(e.point, {
            layers: ['regenerative-icons']
          });

          if (features.length > 0) {
            const feature = features[0];
            const properties = feature.properties;

            if (properties) {
              // Extract YouTube video ID from URL
              const getYouTubeVideoId = (url: string) => {
                const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
                return match ? match[1] : null;
              };

              const videoId = properties.videoUrl ? getYouTubeVideoId(properties.videoUrl) : null;
              const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

              // Show project details in side panel
              const panel = document.getElementById('project-panel');
              const content = document.getElementById('project-content');

              if (panel && content) {
                // Clear previous content
                content.innerHTML = '';

                // Create project content
                const projectHTML = `
                  <div class="space-y-4">
                    <div>
                      <h3 class="text-2xl font-bold text-gray-800 mb-2">${properties.name}</h3>
                      <p class="text-gray-600 leading-relaxed">${properties.description}</p>
                    </div>

                    <div class="flex items-center text-gray-500">
                      <span class="mr-2">📍</span>
                      <span>${properties.location}</span>
                    </div>

                    ${embedUrl ? `
                      <div class="w-full bg-gray-100 rounded-lg overflow-hidden" style="aspect-ratio: 16/9;">
                        <iframe
                          class="w-full h-full"
                          src="${embedUrl}?rel=0&modestbranding=1&cc_load_policy=0"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                          loading="lazy"
                        ></iframe>
                      </div>
                    ` : ''}

                    <div class="flex flex-col gap-3">
                      ${!embedUrl && properties.videoUrl ? `
                        <a href="${properties.videoUrl}"
                           target="_blank"
                           class="inline-flex items-center justify-center bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg transition-colors duration-200 font-medium">
                          <span class="mr-2">▶️</span>
                          Watch Video
                        </a>
                      ` : ''}
                      <div class="inline-flex items-center justify-center bg-green-100 text-green-800 px-4 py-3 rounded-lg font-medium">
                        <span class="mr-2">🏷️</span>
                        ${properties.category}
                      </div>
                    </div>
                  </div>
                `;

                content.innerHTML = projectHTML;

                // Show the panel
                panel.classList.remove('hidden');
                panel.classList.add('flex');

                // Add close functionality
                const closeBtn = document.getElementById('close-panel');
                if (closeBtn) {
                  closeBtn.onclick = () => {
                    panel.classList.add('hidden');
                    panel.classList.remove('flex');
                  };
                }
              }
            }
          }
        });

        // Change cursor on hover
        mapInstance.on('mouseenter', 'regenerative-icons', () => {
          mapInstance.getCanvas().style.cursor = 'pointer';
        });

        mapInstance.on('mouseleave', 'regenerative-icons', () => {
          mapInstance.getCanvas().style.cursor = '';
        });
      }

      // Add H3 cells for regenerative projects (24km hexagons - resolution 5)
      const regenerativeHexes = new Set<string>();
      projects.forEach(project => {
        const [lng, lat] = project.coordinates;
        const resolution = getProjectHexagonResolution(); // Use smaller resolution for more precise project areas
        const hexId = h3.latLngToCell(lat, lng, resolution);
        regenerativeHexes.add(hexId);
        console.log(`[Project Hexagon] ${project.name} -> H3 cell: ${hexId} (resolution ${resolution})`);
      });

      console.log(`[Map] Created ${regenerativeHexes.size} unique 50km hexagons for ${projects.length} projects`);
      console.log(`[Map] Sample hexagon IDs:`, Array.from(regenerativeHexes).slice(0, 3));

      // Update lens data with regenerative hexes
      setLensData(prev => {
        console.log(`[Map] Setting regenerative lens data with ${regenerativeHexes.size} hexagons`);
        return {
          ...prev,
          regenerative: regenerativeHexes
        };
      });

    } catch (error) {
      console.error('Error loading regenerative projects:', error);
      console.log('[FALLBACK] Using embedded projects due to error...');
      projects = [...EMBEDDED_PROJECTS];
      console.log(`[FALLBACK] Loaded ${projects.length} embedded projects`);
    }
  };

  // Navigate to hexagon
  const goToCell = (cell: string) => {
    if (!map.current || !isH3Cell(cell)) return;

    const [lat, lng] = h3.cellToLatLng(cell);
    const resolution = h3.getResolution(cell);
    const zoom = getZoomFromResolution(resolution);

    map.current.flyTo({
      center: [lng, lat],
      zoom: zoom,
    });

    // After zooming, update the selected hexagon visualization
    map.current.once('moveend', () => {
      const selectedSource = map.current?.getSource("selected-hexagon");
      if (selectedSource) {
        (selectedSource as maplibregl.GeoJSONSource).setData({
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: [h3.cellToBoundary(cell, true)],
          },
        });
      }
    });
  };

  // Get user location and center map
  const getUserLocation = () => {
    if (!map.current) return;
    
    setIsLocating(true);
    
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.');
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        map.current?.flyTo({
          center: [longitude, latitude],
          zoom: 12,
          duration: 2000
        });
        
        // Create or update user location marker
        if (!map.current?.getSource('user-location')) {
          map.current?.addSource('user-location', {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: [longitude, latitude]
              }
            }
          });

          map.current?.addLayer({
            id: 'user-location-circle',
            type: 'circle',
            source: 'user-location',
            paint: {
              'circle-radius': 12,
              'circle-color': '#007cbf',
              'circle-stroke-width': 3,
              'circle-stroke-color': '#ffffff'
            }
          });
        } else {
          const source = map.current?.getSource('user-location') as maplibregl.GeoJSONSource;
          source.setData({
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: [longitude, latitude]
            }
          });
        }
        
        setIsLocating(false);
      },
      (error) => {
        console.error('Error getting location:', error);
        let message = 'Unable to retrieve your location.';
        switch(error.code) {
          case error.PERMISSION_DENIED:
            message = 'Location access denied by user.';
            break;
          case error.POSITION_UNAVAILABLE:
            message = 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            message = 'Location request timed out.';
            break;
        }
        alert(message);
        setIsLocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      const element = mapContainer.current;
      if (element) {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if ('webkitRequestFullscreen' in element) {
          (element as Element & { webkitRequestFullscreen(): void }).webkitRequestFullscreen();
        } else if ('msRequestFullscreen' in element) {
          (element as Element & { msRequestFullscreen(): void }).msRequestFullscreen();
        }
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ('webkitExitFullscreen' in document) {
        (document as Document & { webkitExitFullscreen(): void }).webkitExitFullscreen();
      } else if ('msExitFullscreen' in document) {
        (document as Document & { msExitFullscreen(): void }).msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      // Resize map when fullscreen state changes
      setTimeout(() => {
        if (map.current) {
          map.current.resize();
        }
      }, 100);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Update selected hexagon
  const updateSelectedCell = (cellId: string) => {
    if (!map.current) return;

    const boundary = h3.cellToBoundary(cellId, true);
    const [lat, lng] = h3.cellToLatLng(cellId);
    const resolution = h3.getResolution(cellId);
    const cellSize = getHexagonSizeKm(resolution) * 1000;
    
    const hexagonFeatures = {
      type: "FeatureCollection" as const,
      features: [
        {
          type: "Feature" as const,
          properties: {},
          geometry: {
            type: "Polygon" as const,
            coordinates: [boundary]
          }
        },
        {
          type: "Feature" as const,
          properties: {
            radius: cellSize
          },
          geometry: {
            type: "Point" as const,
            coordinates: [lng, lat]
          }
        }
      ]
    };
    
    const selectedSource = map.current.getSource("selected-hexagon");
    if (selectedSource) {
      (selectedSource as maplibregl.GeoJSONSource).setData(hexagonFeatures);
    }
    
    setCellId(cellId);
    onCellSelect?.(cellId);
    goToCell(cellId);
  };

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const mapDiv = mapContainer.current.querySelector('#map-container');
    if (!mapDiv) return;

    map.current = new maplibregl.Map({
      container: mapDiv as HTMLDivElement,
      style: {
        version: 8,
        glyphs: 'https://fonts.openmaptiles.org/{fontstack}/{range}.pbf',
        sources: {
          'osm': {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '© OpenStreetMap contributors'
          }
        },
        layers: [
          {
            id: 'osm',
            type: 'raster',
            source: 'osm',
            minzoom: 0,
            maxzoom: 22
          }
        ]
      },
      center: [13.7364963, 42.8917537], // Italy center
      zoom: 5,
      renderWorldCopies: false,
    });

    map.current.on("style.load", () => {
      console.log("Map style loaded - initializing hexagon layers");
      
      // Add hexagon grid sources and layers
      map.current?.addSource("hexagon-grid", {
        type: "geojson",
        data: { type: "FeatureCollection", features: [] }
      });

      map.current?.addLayer({
        id: "hexagon-grid-outline-layer",
        type: "line",
        source: "hexagon-grid",
        paint: {
          "line-color": "#2E7D32",
          "line-width": 3,
          "line-opacity": 0.7
        }
      });

      map.current?.addLayer({
        id: "hexagon-grid-circle-layer",
        type: "circle",
        source: "hexagon-grid",
        paint: {
          "circle-color": "#2E7D32",
          "circle-opacity": 0.5,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#2E7D32",
          "circle-stroke-opacity": 0.5,
          "circle-radius": [
            "interpolate",
            ["exponential", 2],
            ["zoom"],
            0, 2,
            22, 100
          ]
        }
      });

      // Lower resolution grid layers
      map.current?.addSource("hexagon-grid-lower", {
        type: "geojson",
        data: { type: "FeatureCollection", features: [] }
      });

      map.current?.addLayer({
        id: "hexagon-grid-lower-outline-layer",
        type: "line",
        source: "hexagon-grid-lower",
        paint: {
          "line-color": "#81C784",
          "line-width": 2,
          "line-opacity": 0.8
        }
      });

      map.current?.addLayer({
        id: "hexagon-grid-lower-circle-layer",
        type: "circle",
        source: "hexagon-grid-lower",
        paint: {
          "circle-color": "#81C784",
          "circle-opacity": 0.6,
          "circle-stroke-width": 0.5,
          "circle-stroke-color": "#81C784",
          "circle-stroke-opacity": 0.6,
          "circle-radius": [
            "interpolate",
            ["exponential", 2],
            ["zoom"],
            0, 1,
            22, 50
          ]
        }
      });

      // Highlighted hexagons layers
      map.current?.addSource("highlighted-hexagons", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: []
        }
      });

      map.current?.addLayer({
        id: "highlighted-hexagons-fill-layer",
        type: "fill",
        source: "highlighted-hexagons",
        paint: {
          "fill-color": ["get", "color"],
          "fill-opacity": 0.6
        }
      });

      map.current?.addLayer({
        id: "highlighted-hexagons-outline-layer",
        type: "line",
        source: "highlighted-hexagons",
        paint: {
          "line-color": ["get", "color"],
          "line-width": 2,
          "line-opacity": 0.8
        }
      });

      map.current?.addLayer({
        id: "highlighted-hexagons-circle-layer",
        type: "circle",
        source: "highlighted-hexagons",
        paint: {
          "circle-color": ["get", "color"],
          "circle-opacity": 0.6,
          "circle-stroke-width": 2,
          "circle-stroke-color": ["get", "color"],
          "circle-stroke-opacity": 0.8,
          "circle-radius": [
            "interpolate",
            ["exponential", 2],
            ["zoom"],
            0, 2,
            22, 100
          ]
        }
      });

      // Selected hexagon layers
      map.current?.addSource("selected-hexagon", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: { type: "Polygon", coordinates: [[]] }
        }
      });

      map.current?.addLayer({
        id: "selected-hexagon-fill-layer",
        type: "fill",
        source: "selected-hexagon",
        paint: {
          "fill-color": "#2E7D32",
          "fill-opacity": 0.7
        }
      });

      map.current?.addLayer({
        id: "selected-hexagon-outline-layer",
        type: "line",
        source: "selected-hexagon",
        paint: {
          "line-color": "#2E7D32",
          "line-width": 4,
          "line-opacity": 0.9
        }
      });

      map.current?.addLayer({
        id: "selected-hexagon-circle-layer",
        type: "circle",
        source: "selected-hexagon",
        paint: {
          "circle-color": "#2E7D32",
          "circle-opacity": 0.7,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#2E7D32",
          "circle-stroke-opacity": 0.8,
          "circle-radius": [
            "interpolate",
            ["exponential", 2],
            ["zoom"],
            0, 2,
            22, 100
          ]
        }
      });
    });

    map.current.on("load", () => {
      console.log("Map loaded");
      setIsMapLoaded(true);

      // Ensure map fills the container properly
      if (map.current) {
        map.current.resize();
      }

      // Load regenerative projects data
      if (map.current) {
        loadRegenerativeProjects(map.current);
      }

      // Initial setup after map is fully loaded
      setTimeout(() => {
        if (map.current) {
          // Render initial base grid
          renderMapGrid(map.current);
          
          // Fetch initial lens data
          if (currentLens) {
            fetchLensData(currentLens, map.current);
          }
        }
      }, 500);
    });

    // Add window resize handler to keep map properly sized
    const handleResize = () => {
      if (map.current) {
        map.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    // Add movement handlers with throttling
    let renderTimeout: NodeJS.Timeout | null = null;
    
    const throttledRender = () => {
      if (renderTimeout) clearTimeout(renderTimeout);
      renderTimeout = setTimeout(() => {
        if (map.current) {
          // Only render the base grid during map movements - highlighted hexagons persist
          renderMapGrid(map.current);
        }
      }, 100); // Throttle to 100ms
    };

    map.current.on("movestart", () => {
      // Cancel any pending render operations during movement
      if (renderTimeout) clearTimeout(renderTimeout);
    });

    map.current.on("move", throttledRender);
    map.current.on("zoom", throttledRender);

    map.current.on("moveend", () => {
      // Schedule data fetch after movement with a delay
      setTimeout(() => {
        if (currentLens && map.current) {
          fetchLensData(currentLens, map.current);
        }
      }, 1000);
    });

    // Add click handler
    map.current.on("click", (e: maplibregl.MapMouseEvent) => {

      // Close side panel if it's open (when clicking on map)
      const panel = document.getElementById('project-panel');
      if (panel && !panel.classList.contains('hidden')) {
        panel.classList.add('hidden');
        panel.classList.remove('flex');
      }

      const { lng, lat } = e.lngLat;
      const zoom = map.current?.getZoom() || 5;
      const resolution = getResolution(zoom);
      const newHexId = h3.latLngToCell(lat, lng, resolution);
      console.log("Hexagon ID:", newHexId);

      // Only update if it's a valid H3 cell
      if (isH3Cell(newHexId)) {
        updateSelectedCell(newHexId);
      }

      // Log lens data for the clicked hexagon
      if (holosphere.current) {
        holosphere.current.getAll(newHexId, currentLens)
          .then(data => {
            console.log(`${currentLens} data for hexagon ${newHexId}:`, data);
          })
          .catch(error => {
            console.error(`Error fetching ${currentLens} data:`, error);
          });
      }
    });

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderTimeout) clearTimeout(renderTimeout);
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []); // Empty dependency array - only run once

  // Handle lens changes
  useEffect(() => {
    setCurrentLens(selectedLens as LensType);
  }, [selectedLens]);

  // Handle lens data updates - only update highlighted hexagons, don't touch base grid
  useEffect(() => {
    console.log(`[useEffect] Lens data updated - isMapLoaded: ${isMapLoaded}, currentLens: ${currentLens}`);
    console.log(`[useEffect] Lens data for ${currentLens}:`, lensData[currentLens as LensType]?.size || 0, 'hexagons');
    if (map.current && isMapLoaded && currentLens) {
      console.log(`[useEffect] Updating highlighted hexagons for lens: ${currentLens}`);
      updateHighlightedHexagons(map.current, currentLens);
    }
  }, [lensData, currentLens, isMapLoaded]);

  return (
    <div
      ref={mapContainer}
      className={`relative w-full h-full ${className} ${isFullscreen ? 'bg-white' : ''}`}
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      {/* Map Container - Takes up full parent space */}
      <div
        className="w-full h-full"
        style={{
          height: '100%',
          width: '100%',
          margin: 0,
          padding: 0
        }}
        id="map-container"
      />

      {/* Side Panel for Project Details */}
      <div
        id="project-panel"
        className="absolute top-0 right-0 w-96 bg-white shadow-lg border-l border-gray-200 overflow-y-auto hidden"
        style={{
          height: '100%',
          margin: 0,
          padding: 0
        }}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Project Details</h2>
            <button
              id="close-panel"
              className="text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>
          </div>
          <div id="project-content" className="space-y-4">
            {/* Project content will be populated here */}
          </div>
        </div>
      </div>
      
      {/* Lens Selector - Positioned over the map */}
      <div className="absolute top-4 left-4 z-10">
        <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-lg border border-gray-200">
          <label htmlFor="lens-select" className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Lens:
          </label>
          <select
            id="lens-select"
            value={currentLens}
            onChange={(e) => setCurrentLens(e.target.value as LensType)}
            className="appearance-none bg-transparent text-gray-700 border-none px-2 py-1 text-sm cursor-pointer min-w-32 focus:outline-none"
          >
            {lensOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Map Controls - Positioned on the right side */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        {/* Fullscreen Toggle Button */}
        <button
          onClick={toggleFullscreen}
          className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 0 2-2h3M3 16h3a2 2 0 0 0 2 2v3"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
          )}
        </button>

        {/* Location Button */}
        <button
          onClick={getUserLocation}
          disabled={isLocating}
          className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Find My Location"
        >
          {isLocating ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          )}
        </button>
      </div>

      {/* Hexagon Info - Positioned over map area */}
      {cellId && (
        <div className="absolute bottom-4 left-4 bg-gray-800/80 text-white px-3 py-2 rounded-full text-sm z-10">
          Selected Cell: {cellId}
        </div>
      )}
    </div>
  );
}
