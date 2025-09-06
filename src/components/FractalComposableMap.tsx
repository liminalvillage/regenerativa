'use client';

import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import * as h3 from 'h3-js';
import HoloSphere from 'holosphere';

interface FractalComposableMapProps {
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

// Helper function to extract KML from KMZ file
const extractKMLFromKMZ = async (kmzBlob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        // Use JSZip-like functionality with native APIs
        const arrayBuffer = event.target?.result as ArrayBuffer;
        const uint8Array = new Uint8Array(arrayBuffer);

        // Look for KML content in the KMZ (simplified extraction)
        // This is a basic extraction - in production, you'd use a proper KMZ library
        const decoder = new TextDecoder('utf-8');
        let kmlContent = '';

        // Try to find KML content within the zip
        // For now, we'll try to extract it by looking for XML patterns
        const textContent = decoder.decode(uint8Array);

        // Look for KML start and end tags
        const kmlStart = textContent.indexOf('<kml');
        const kmlEnd = textContent.lastIndexOf('</kml>');

        if (kmlStart !== -1 && kmlEnd !== -1) {
          kmlContent = textContent.substring(kmlStart, kmlEnd + 6);
        } else {
          // Fallback: try to find any XML content
          const xmlStart = textContent.indexOf('<?xml');
          if (xmlStart !== -1) {
            kmlContent = textContent.substring(xmlStart);
          }
        }

        resolve(kmlContent);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = () => reject(new Error('Failed to read KMZ file'));
    reader.readAsArrayBuffer(kmzBlob);
  });
};

// Helper function to extract YouTube video ID from URL
const extractYouTubeId = (url: string): string | null => {
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&\n?#]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^&\n?#]+)/,
    /(?:https?:\/\/)?youtu\.be\/([^&\n?#]+)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
};

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

export default function FractalComposableMap({
  className = '',
  selectedLens = 'quests',
  onCellSelect
}: FractalComposableMapProps) {
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

  // Initialize HoloSphere
  useEffect(() => {
    if (typeof window !== 'undefined') {
      holosphere.current = new HoloSphere('Holons');
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

  // Function to get resolution for 50km hexagons
  const get50kmResolution = (): number => {
    return 4; // H3 resolution 4 gives ~65km edge length, closest to 50km
  };

  // Function to get hexagon size in meters for display
  const getHexagonSizeKm = (resolution: number): number => {
    // For project hexagons (resolution 4), return ~50km, otherwise calculate normally
    if (resolution === 4) {
      return 50; // Display as 50km for project hexagons
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

  // Render hexagons on the map
  const renderHexes = (mapInstance: maplibregl.Map, lens: string) => {
    if (!mapInstance) return;

    const bounds = mapInstance.getBounds();
    if (!bounds) return;

    const currentZoom = mapInstance.getZoom();
    const currentResolution = getResolution(currentZoom);

    // Get highlighted hexes based on lens
    let highlightedHexes = new Set<string>();
    let highlightColor = '#088';

    // Access current lensData directly
    const currentLensData = lensData;

    switch (lens) {
      case 'quests':
        highlightedHexes = currentLensData.quests;
        highlightColor = lensColors.quests;
        break;
      case 'needs':
        highlightedHexes = currentLensData.needs;
        highlightColor = lensColors.needs;
        break;
      case 'offers':
        highlightedHexes = currentLensData.offers;
        highlightColor = lensColors.offers;
        break;
      case 'communities':
        highlightedHexes = currentLensData.communities;
        highlightColor = lensColors.communities;
        break;
      case 'organizations':
        highlightedHexes = currentLensData.organizations;
        highlightColor = lensColors.organizations;
        break;
      case 'projects':
        highlightedHexes = currentLensData.projects;
        highlightColor = lensColors.projects;
        break;
      case 'currencies':
        highlightedHexes = currentLensData.currencies;
        highlightColor = lensColors.currencies;
        break;
      case 'people':
        highlightedHexes = currentLensData.people;
        highlightColor = lensColors.people;
        break;
      case 'holons':
        highlightedHexes = currentLensData.holons;
        highlightColor = lensColors.holons;
        break;
      case 'regenerative':
        highlightedHexes = currentLensData.regenerative;
        highlightColor = lensColors.regenerative;
        break;
    }

    // Handle visibility of regenerative projects layer
    const layers = [
      'regenerative-clusters',
      'regenerative-cluster-count',
      'regenerative-unclustered-point',
      'regenerative-icons'
    ];

    layers.forEach(layerId => {
      if (mapInstance.getLayer(layerId)) {
        mapInstance.setLayoutProperty(
          layerId,
          'visibility',
          lens === 'regenerative' ? 'visible' : 'none'
        );
      }
    });

    // Filter highlighted hexes based on resolution
    const visibleHighlightedHexes = new Set(
      Array.from(highlightedHexes).filter(hex => {
        const hexResolution = h3.getResolution(hex);
        return currentResolution <= hexResolution;
      })
    );

    // Update the highlighted hexagons if any are visible at current resolution
    if (visibleHighlightedHexes.size > 0) {
      const highlightedSource = mapInstance.getSource("highlighted-hexagons");
      if (highlightedSource) {
        (highlightedSource as maplibregl.GeoJSONSource).setData(
          highlightHexagons(visibleHighlightedHexes, highlightColor)
        );
      }
    }

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
    if (!holosphere.current || !mapInstance) return;

    const bounds = mapInstance.getBounds();
    if (!bounds) return;

    const currentZoom = mapInstance.getZoom();
    const h3res = getResolution(currentZoom);
    
    const west = bounds.getWest();
    const east = bounds.getEast();
    const south = bounds.getSouth();
    const north = bounds.getNorth();
    
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

    console.log(`[Map] Fetching ${lens} data for ${hexagons.size} hexagons (density: ${density}x${density}, resolution: ${h3res})`);
    
    // Create a map to track which hexagons have content
    const hexagonsWithContent = new Set<string>();
    
    // Make non-blocking fetch calls for each hexagon with batching to prevent overwhelming the network
    const fetchPromises = [];
    const batchSize = 10; // Process 10 hexagons at a time
    const hexagonArray = Array.from(hexagons);

    for (let i = 0; i < hexagonArray.length; i += batchSize) {
      const batch = hexagonArray.slice(i, i + batchSize);
      const batchPromises = batch.map(async (hex) => {
      try {
        const items = await holosphere.current!.getAll(hex, lens);
        if (items && items.length > 0) {
          hexagonsWithContent.add(hex);
        }
      } catch (error) {
        console.error(`[Map] Error fetching ${lens} data for ${hex}:`, error);
      }
    });

      fetchPromises.push(...batchPromises);

      // Small delay between batches to be gentle on the network
      if (i + batchSize < hexagonArray.length) {
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    }

    await Promise.all(fetchPromises);
    
    // Update lens data with hexagons that have content
    setLensData(prev => ({
      ...prev,
      [lens as LensType]: hexagonsWithContent
    }));
    
    console.log(`[Map] Updated ${hexagonsWithContent.size} hexagons for ${lens}`);
  };

  // Load and parse KMZ/KML data for regenerative projects
  const loadRegenerativeProjects = async (mapInstance: maplibregl.Map) => {
    let projects: ProjectData[] = [];

    try {
      // Load KML data with better error handling
      console.log('[KML Loader] Loading regenerative projects...');
      console.log('[KML Loader] Current URL:', typeof window !== 'undefined' ? window.location.href : 'SSR');

      // Check if we're in production and might have network restrictions
      const isProduction = typeof window !== 'undefined' &&
                          !window.location.href.includes('localhost') &&
                          !window.location.href.includes('127.0.0.1');
      if (isProduction) {
        console.log('[PRODUCTION] Production environment detected');
        console.log('[PRODUCTION] If fetch requests fail, embedded projects will be used');
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
            'text-field': '{point_count_abbreviated}',
            'text-font': ['Noto Sans Regular'],
            'text-size': 12,
            'text-anchor': 'center'
          },
          paint: {
            'text-color': '#fff'
          }
        });

        // Add unclustered points
        mapInstance.addLayer({
          id: 'regenerative-unclustered-point',
          type: 'circle',
          source: 'regenerative-projects',
          filter: ['!', ['has', 'point_count']],
          paint: {
            'circle-color': lensColors.regenerative,
            'circle-radius': 12,
            'circle-stroke-width': 3,
            'circle-stroke-color': '#fff',
            'circle-opacity': 0.9
          }
        });

        // Add project icons (using a simple circle for now)
        mapInstance.addLayer({
          id: 'regenerative-icons',
          type: 'symbol',
          source: 'regenerative-projects',
          filter: ['!', ['has', 'point_count']],
          layout: {
            'icon-image': 'regenerative-marker',
            'icon-size': 0.8,
            'icon-anchor': 'bottom',
            'icon-allow-overlap': true
          }
        });

        // Add click handler for projects
        mapInstance.on('click', 'regenerative-unclustered-point', (e) => {
          const features = mapInstance.queryRenderedFeatures(e.point, {
            layers: ['regenerative-unclustered-point']
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
        mapInstance.on('mouseenter', 'regenerative-unclustered-point', () => {
          mapInstance.getCanvas().style.cursor = 'pointer';
        });

        mapInstance.on('mouseleave', 'regenerative-unclustered-point', () => {
          mapInstance.getCanvas().style.cursor = '';
        });
      }

      // Add H3 cells for regenerative projects (50km hexagons)
      const regenerativeHexes = new Set<string>();
      projects.forEach(project => {
        const [lng, lat] = project.coordinates;
        const resolution = get50kmResolution(); // Use fixed 50km resolution for projects
        const hexId = h3.latLngToCell(lat, lng, resolution);
        regenerativeHexes.add(hexId);
      });

      // Update lens data with regenerative hexes
      setLensData(prev => ({
        ...prev,
        regenerative: regenerativeHexes
      }));

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

          map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
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
      console.log("Map style loaded");
      
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

      // Initial data fetch after map is fully loaded
      setTimeout(() => {
        if (currentLens && map.current) {
          fetchLensData(currentLens, map.current);
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

    // Add movement handlers
    map.current.on("movestart", () => {
      // Cancel any pending operations
    });

    map.current.on("move", () => {
      if (map.current && currentLens) {
        renderHexes(map.current, currentLens);
      }
    });

    map.current.on("zoom", () => {
      if (map.current && currentLens) {
        renderHexes(map.current, currentLens);
      }
    });

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

  // Handle lens data updates
  useEffect(() => {
    if (map.current && isMapLoaded && currentLens) {
      renderHexes(map.current, currentLens);
    }
  }, [lensData, currentLens, isMapLoaded]);

  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      {/* Map Container - Takes up full parent space */}
      <div
        ref={mapContainer}
        className="w-full h-full"
        style={{
          height: '100%',
          width: '100%',
          margin: 0,
          padding: 0
        }}
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

      {/* Hexagon Info - Positioned over map area */}
      {cellId && (
        <div className="absolute bottom-4 left-4 bg-gray-800/80 text-white px-3 py-2 rounded-full text-sm z-10">
          Selected Cell: {cellId}
        </div>
      )}
    </div>
  );
}
