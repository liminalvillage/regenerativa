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
      holosphere.current = new HoloSphere('regenerativa-network');
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
    
    // Generate hexagons for the visible area - limit the number for better performance
    const hexagons = new Set<string>();
    const latStep = (north - south) / 8;
    const lngStep = (east - west) / 8;
    
    for (let lat = south; lat <= north; lat += latStep) {
      for (let lng = west; lng <= east; lng += lngStep) {
        hexagons.add(h3.latLngToCell(lat, lng, h3res));
      }
    }

    console.log(`[Map] Fetching ${lens} data for ${hexagons.size} hexagons`);
    
    // Create a map to track which hexagons have content
    const hexagonsWithContent = new Set<string>();
    
    // Make non-blocking fetch calls for each hexagon
    const fetchPromises = Array.from(hexagons).map(async (hex) => {
      try {
        const items = await holosphere.current!.getAll(hex, lens);
        if (items && items.length > 0) {
          hexagonsWithContent.add(hex);
        }
      } catch (error) {
        console.error(`[Map] Error fetching ${lens} data for ${hex}:`, error);
      }
    });

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
    try {
      // For now, let's create some sample regenerative project data
      // In a real implementation, this would parse the actual KMZ/KML file
      const sampleProjects = [
        {
          id: '1',
          name: 'Liminal Village',
          description: 'Earthship construction and permaculture community in Italy',
          location: 'Tuscany, Italy',
          coordinates: [11.2558, 43.7696], // Siena, Italy
          videoUrl: 'https://www.youtube.com/watch?v=XdhPXocPf9g',
          category: 'Community Building'
        },
        {
          id: '2',
          name: 'Gaia University',
          description: 'Regenerative education center focused on ecological wisdom',
          location: 'Costa Rica',
          coordinates: [-84.0733, 9.7489], // San Jose, Costa Rica
          videoUrl: 'https://www.youtube.com/watch?v=example2',
          category: 'Education'
        },
        {
          id: '3',
          name: 'Permaculture Institute',
          description: 'Advanced permaculture design and implementation',
          location: 'Australia',
          coordinates: [149.1287, -35.2809], // Canberra, Australia
          videoUrl: 'https://www.youtube.com/watch?v=example3',
          category: 'Agriculture'
        },
        {
          id: '4',
          name: 'Regenerative Finance Hub',
          description: 'Community-owned financial systems for regeneration',
          location: 'Switzerland',
          coordinates: [7.4474, 46.9481], // Bern, Switzerland
          videoUrl: 'https://www.youtube.com/watch?v=example4',
          category: 'Finance'
        }
      ];

      // Convert projects to GeoJSON features
      const features = sampleProjects.map(project => ({
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
              const popup = new maplibregl.Popup({ closeButton: true, closeOnClick: true })
                .setLngLat(e.lngLat)
                .setHTML(`
                  <div class="p-3 max-w-xs">
                    <h3 class="font-bold text-lg mb-2">${properties.name}</h3>
                    <p class="text-sm text-gray-600 mb-2">${properties.description}</p>
                    <p class="text-xs text-gray-500 mb-3">📍 ${properties.location}</p>
                    <div class="flex gap-2">
                      ${properties.videoUrl ? `<a href="${properties.videoUrl}" target="_blank" class="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Watch Video</a>` : ''}
                      <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">${properties.category}</span>
                    </div>
                  </div>
                `)
                .addTo(mapInstance);
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

      // Add H3 cells for regenerative projects
      const regenerativeHexes = new Set<string>();
      sampleProjects.forEach(project => {
        const [lng, lat] = project.coordinates;
        const resolution = getResolution(mapInstance.getZoom());
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
    const cellSize = h3.getHexagonEdgeLengthAvg(h3.getResolution(cellId), 'km') * 1000;
    
    const features = {
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
      (selectedSource as maplibregl.GeoJSONSource).setData(features);
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
          "line-color": "#fff",
          "line-width": 1,
          "line-opacity": 0.6
        }
      });

      map.current?.addLayer({
        id: "hexagon-grid-circle-layer",
        type: "circle",
        source: "hexagon-grid",
        paint: {
          "circle-color": "#fff",
          "circle-opacity": 0.6,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#fff",
          "circle-stroke-opacity": 0.6,
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
          "line-color": "#aaa",
          "line-width": 0.5,
          "line-opacity": 0.4
        }
      });

      map.current?.addLayer({
        id: "hexagon-grid-lower-circle-layer",
        type: "circle",
        source: "hexagon-grid-lower",
        paint: {
          "circle-color": "#aaa",
          "circle-opacity": 0.4,
          "circle-stroke-width": 0.5,
          "circle-stroke-color": "#aaa",
          "circle-stroke-opacity": 0.4,
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
          "fill-color": "#088",
          "fill-opacity": 0.6
        }
      });

      map.current?.addLayer({
        id: "selected-hexagon-outline-layer",
        type: "line",
        source: "selected-hexagon",
        paint: {
          "line-color": "#088",
          "line-width": 2,
          "line-opacity": 0.8
        }
      });

      map.current?.addLayer({
        id: "selected-hexagon-circle-layer",
        type: "circle",
        source: "selected-hexagon",
        paint: {
          "circle-color": "#088",
          "circle-opacity": 0.6,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#088",
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
      console.log("Map clicked", e.lngLat);
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
    <div className={`relative w-full h-full ${className}`}>
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* Lens Selector */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center gap-2 px-2 py-1 min-h-9 bg-white rounded shadow-lg">
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

      {/* Hexagon Info */}
      {cellId && (
        <div className="absolute bottom-4 left-4 bg-gray-800/80 text-white px-3 py-2 rounded-full text-sm z-10">
          Selected Cell: {cellId}
        </div>
      )}
    </div>
  );
}
