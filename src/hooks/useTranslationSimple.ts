'use client';

import { useState, useEffect } from 'react';

type Language = 'en' | 'es' | 'fr' | 'it' | 'nl';

// Static translations embedded directly for reliability
const translations = {
  en: {
    "common": {
      "home": "Home",
      "about": "About",
      "contact": "Contact",
      "join": "Join",
      "contribute": "Contribute",
      "library": "Library",
      "network": "Network",
      "events": "Events",
      "visit": "Visit",
      "stake": "Stake",
      "privacy": "Privacy",
      "terms": "Terms",
      "cookies": "Cookies",
      "demo": "Demo"
    },
    "hero": {
      "title": "Building a Global Network for Integral Care",
      "subtitle": "A global network for integral care through bioregional communities and regenerative practices.",
      "cta": "Join the Movement",
      "explore": "Explore Network"
    },
    "about": {
      "title": "What is Regenerativa?",
      "description": "We're building a global network of bioregional communities connected through fractal and composable micro-economies. Each cell represents a local catchment area where people collaborate on regenerative projects, share resources, and build resilient systems.",
      "fractalNetworks": "Fractal and Composable Networks",
      "fractalNetworksDesc": "Local communities organized in H3 fractal cells for optimal resource sharing.",
      "regenerativePractices": "Regenerative Practices",
      "regenerativePracticesDesc": "Permaculture, sustainable agriculture, and circular economy principles.",
      "integralRegeneration": "Integral Regeneration",
      "integralRegenerationDesc": "Holistic approach addressing social, ecological, and economic systems."
    },
    "sites": {
      "title": "Our Sites",
      "subtitle": "Visit our regenerative communities and see sustainable living in action.",
      "liminalVillage": {
        "title": "Liminal Village",
        "subtitle": "Community hub",
        "description": "Our central community hub where innovation meets tradition, serving as the heart of our regenerative network."
      },
      "brickFactory": {
        "title": "Fabbrica del Terzo Settore",
        "subtitle": "Regenerative Factory",
        "description": "A third sector factory focused on regenerative practices, circular economy, and sustainable production methodologies."
      },
      "casaSelva": {
        "title": "Casa Selva",
        "subtitle": "Forest sanctuary",
        "description": "A forest sanctuary blending traditional architecture with modern regenerative living in perfect harmony with nature."
      }
    },
    "network": {
      "title": "Our Growing Network",
      "subtitle": "Join thousands of people already building regenerative communities across the globe.",
      "activeNodes": "Active Nodes",
      "activeNodesDesc": "Regenerative communities",
      "communityMembers": "Community Members",
      "communityMembersDesc": "Active participants",
      "fractalCommunities": "Fractal Communities",
      "fractalCommunitiesDesc": "Local micro-economies",
      "explore": "Explore Interactive Map"
    },
    "engage": {
      "title": "Ways to Get Involved",
      "subtitle": "Choose your path to contribute to the regeneration movement.",
      "join": {
        "title": "Join",
        "description": "Tell us about yourself and get connected with regenerative communities worldwide.",
        "cta": "Get Connected"
      },
      "contribute": {
        "title": "Contribute",
        "description": "Share your skills, time, and expertise to support regenerative projects.",
        "cta": "Share Skills"
      },
      "stake": {
        "title": "Stake",
        "description": "Invest in regenerative projects and receive receipt tokens for future benefits.",
        "cta": "Stake Funds"
      },
      "visit": {
        "title": "Visit",
        "description": "Experience regenerative living firsthand at Liminal Village and other network nodes.",
        "cta": "Plan Visit"
      }
    },
    "events": {
      "title": "Upcoming Events",
      "subtitle": "Join our Lunation Protocol and seasonal celebrations.",
      "viewAll": "View All Events",
      "nextLunation": {
        "title": "Next Lunation",
        "subtitle": "Monthly co-creation rhythm",
        "date": "September 15-30, 2025",
        "description": "Join our monthly cycle of planning, building, and celebrating regenerative projects.",
        "cta": "Learn More"
      },
      "autumnEquinox": {
        "title": "Autumn Equinox",
        "subtitle": "Seasonal celebration",
        "date": "September 22, 2025",
        "description": "Celebrate the harvest and prepare for the winter season with community rituals.",
        "cta": "Join Celebration"
      },
      "permacultureWorkshop": {
        "title": "Permaculture Workshop",
        "subtitle": "Skill building",
        "date": "October 5-7, 2025",
        "description": "Learn regenerative design principles at Liminal Village.",
        "cta": "Register Now"
      }
    },
    "stories": {
      "title": "Latest Stories",
      "subtitle": "Discover how communities are implementing regenerative practices around the world.",
      "clayHouse": {
        "title": "Clay House Construction Begins",
        "location": "Liminal Village, Italy",
        "description": "Our first clay house project is underway, showcasing sustainable building techniques and local materials."
      },
      "newCommunity": {
        "title": "New Fractal Community Forms",
        "location": "Tuscany Region",
        "description": "A new fractal and composable community has reached 500 members, creating a local micro-economy focused on food sovereignty."
      },
      "regenFinance": {
        "title": "Regenerative Finance Pilot",
        "location": "Global Network",
        "description": "Launching our first receipt token system for funding regenerative infrastructure projects."
      }
    },
    "video": {
      "title": "Watch Our Introduction",
      "subtitle": "Learn more about our vision to restore and revitalize our planet and our lives"
    },
    "navigation": {
      "home": "Home",
      "about": "About",
      "network": "Network",
      "library": "Library",
      "events": "Events",
      "contact": "Contact",
      "join": "Join"
    },
    "footer": {
      "description": "A global initiative for integral regeneration. Join the movement to build sustainable, resilient communities.",
      "follow_us": "Follow Us",
      "contact_info": "Contact Information",
      "quick_links": "Quick Links",
      "legal": "Legal"
    },
    "regenerativeVillage": {
      "hero": {
        "title": "Fabbrica del Terzo Settore",
        "subtitle": "A Third Sector factory focused on regenerative practices, circular economy, and sustainable production.",
        "description": "Discover our vision and join the community",
        "cta": "Join the Community",
        "discoverVision": "Discover the Vision"
      },
      "vision": {
        "title": "Vision",
        "description": "\"Not just a factory, but an ecosystem of production and social innovation. The Third Sector factory combines regenerative practices, circular economy and sustainable production: a pioneering model that integrates manufacturing, innovation hubs, and community spaces.\"",
        "sustainableLiving": "Regenerative Production",
        "sustainableLivingDesc": "Manufacturing integrated with nature",
        "activeCommunity": "Active Community",
        "activeCommunityDesc": "Collective participation and collaboration",
              "collectiveSpaces": "Innovation Spaces",
      "collectiveSpacesDesc": "Coworking and inclusive innovation areas"
      },
      "location": {
        "title": "Location & History",
        "description": "\"Nestled in the heart of the Marche region, our factory offers the perfect blend of natural beauty and strategic accessibility. Located just 10 minutes from the historic center of Ascoli Piceno, the cultural capital of the region, it provides the perfect environment for sustainable production.\"",
        "size": "Size & Scale",
        "sizeDesc": "Approximately 50 hectares of land dedicated to sustainable production, innovation spaces, community areas, and regenerative practices",
        "history": "Historical Context",
        "historyDesc": "Built on ancient manufacturing traditions with a vision for the future, combining historical craftsmanship with modern regenerative practices",
        "ascoliPiceno": "Ascoli Piceno",
        "ascoliPicenoDesc": "10 minutes from the historic center - cultural capital of the Marche region with Renaissance architecture and local traditions",
        "adriaticCoast": "Adriatic Coast",
        "adriaticCoastDesc": "30 minutes drive to beautiful beaches and coastal towns along the Adriatic Sea",
        "skiArea": "Ski Areas",
        "skiAreaDesc": "30 minutes to nearby ski areas in the Sibillini Mountains, offering winter sports and mountain activities",
        "rome": "Rome",
        "romeDesc": "2.5 hours by car to the center of Rome, connecting you to Italy's cultural and business hub",
        "sibilliniPark": "Sibillini National Park",
        "sibilliniParkDesc": "15 minutes to the entrance of Sibillini National Park, offering hiking trails, wildlife viewing, and mountain activities",
        "lagaPark": "Laga Mountains National Park",
        "lagaParkDesc": "45 minutes to Laga Mountains National Park, featuring ancient forests, waterfalls, and biodiversity-rich landscapes",
        "accessibility": "Easy Access",
        "accessibilityDesc": "Easily accessible via major highways, with convenient connections to regional and national transportation networks"
      },
      "communityCulture": {
        "title": "Community and Culture",
        "description": "\"The factory also becomes a cultural stage: exhibitions, conferences, workshops. Nature becomes the scenery, and the community the protagonist. Every event becomes an opportunity to showcase regenerative practices, collaborations, social impact projects.\"",
        "culturalEvents": "Cultural Events",
        "culturalEventsDesc": "Exhibitions, conferences, workshops",
        "socialInnovation": "Social Innovation",
        "socialInnovationDesc": "Emerging new ideas and collaborations",
        "communityParticipation": "Community Participation",
        "communityParticipationDesc": "The community as active protagonist"
      },
      "innovationCoworking": {
        "title": "Innovation and Coworking",
        "description": "\"A social innovation hub immersed in greenery. Shared workspaces, workshop rooms, places to incubate Third Sector startups and projects. Here living and working coincide, creating a continuous flow between life and innovation.\"",
        "workspaces": "Workspaces",
        "workspacesDesc": "Shared coworking areas immersed in nature, designed to foster creativity and collaboration",
        "workshopRooms": "Workshop Rooms",
        "workshopRoomsDesc": "Dedicated spaces for workshops, training and community meetings",
        "startupIncubator": "Startup Incubator",
        "startupIncubatorDesc": "Support for Third Sector startups and social impact projects"
      },
      "dailyLifeGastronomy": {
        "title": "Daily Life and Gastronomy",
        "description": "\"A community restaurant with km 0 cuisine. Shared gardens that become education classrooms and sustainability laboratories. Every meal tells the story of the territory and the relationships that sustain it.\"",
        "communityRestaurant": "Community Restaurant",
        "communityRestaurantDesc": "Km 0 cuisine with local and sustainable products",
        "sharedGardens": "Shared Gardens",
        "sharedGardensDesc": "Educational spaces to learn about sustainability",
        "authenticRelationships": "Authentic Relationships",
        "authenticRelationshipsDesc": "Every meal celebrates the territory and human connections"
      },
      "wellnessNature": {
        "title": "Wellness and Nature",
        "description": "\"Wellness is an integral part of the experience: relaxation spaces, unspoiled nature, authentic connection with oneself and with others. Fabbrica del Terzo Settore is a place where time slows down, and work resumes its natural rhythm.\"",
        "relaxationSpaces": "Relaxation Spaces",
        "relaxationSpacesDesc": "Areas dedicated to rest and contemplation",
        "unspoiledNature": "Unspoiled Nature",
        "unspoiledNatureDesc": "Deep connection with the natural environment",
        "authenticConnection": "Authentic Connection",
        "authenticConnectionDesc": "Natural rhythm of work and genuine relationships"
      },
      "futureInnovation": {
        "title": "Future and Innovation",
        "description": "\"A living laboratory for the future of the Third Sector. A factory that inspires new forms of solidarity economy, participatory governance and environmental sustainability. Fabbrica del Terzo Settore is not just a place to work: it's a place to build the future together.\"",
        "solidarityEconomy": "Solidarity Economy",
        "solidarityEconomyDesc": "New economic models based on solidarity and sustainability",
        "participatoryGovernance": "Participatory Governance",
        "participatoryGovernanceDesc": "Collective decisions and active community participation",
        "environmentalSustainability": "Environmental Sustainability",
        "environmentalSustainabilityDesc": "Ecological practices integrated into daily operations",
        "buildFuture": "Fabbrica del Terzo Settore is not just a place to work: it's a place to build the future together."
      },
      "villageVisions": {
        "title": "Factory Visions",
        "description": "Discover the concepts and visions of our factory through these images made on the actual location."
      },
      "callToAction": {
        "title": "Join the Future of the Third Sector",
        "description": "Fabbrica del Terzo Settore is more than a factory: it's a movement to build together a sustainable, inclusive and innovative future. Your participation can make the difference.",
        "joinNow": "Join Now",
        "contactUs": "Contact Us"
      }
    }
  },
  es: {
    "common": {
      "home": "Inicio",
      "about": "Acerca de",
      "contact": "Contacto",
      "join": "Unirse",
      "contribute": "Contribuir",
      "library": "Biblioteca",
      "network": "Red",
      "events": "Eventos",
      "visit": "Visitar",
      "stake": "Participar",
      "privacy": "Privacidad",
      "terms": "Términos",
      "cookies": "Cookies",
      "demo": "Demo"
    },
    "hero": {
      "title": "Construyendo una Red Global para el Cuidado Integral",
      "subtitle": "Una red global para el cuidado integral a través de comunidades biorregionales y prácticas regenerativas.",
      "cta": "Únete al Movimiento",
      "explore": "Explorar Red"
    },
    "about": {
      "title": "¿Qué es Regenerativa?",
      "description": "Estamos construyendo una red global de comunidades biorregionales conectadas a través de micro-economías fractales y componibles. Cada célula representa un área de captación local donde las personas colaboran en proyectos regenerativos, comparten recursos y construyen sistemas resilientes.",
      "fractalNetworks": "Redes Fractales y Componibles",
      "fractalNetworksDesc": "Comunidades locales organizadas en células fractales H3 para compartir recursos de manera óptima.",
      "regenerativePractices": "Prácticas Regenerativas",
      "regenerativePracticesDesc": "Permacultura, agricultura sostenible y principios de economía circular.",
      "integralRegeneration": "Regeneración Integral",
      "integralRegenerationDesc": "Enfoque holístico que aborda sistemas sociales, ecológicos y económicos."
    },
    "sites": {
      "title": "Nuestros Sitios",
      "subtitle": "Visita nuestras comunidades regenerativas y ve la vida sostenible en acción.",
      "liminalVillage": {
        "title": "Liminal Village",
        "subtitle": "Centro comunitario",
        "description": "Nuestro centro comunitario central donde la innovación se encuentra con la tradición, sirviendo como el corazón de nuestra red regenerativa."
      },
      "brickFactory": {
        "title": "Fábrica del Tercer Sector",
        "subtitle": "Fábrica Regenerativa",
        "description": "Una fábrica del tercer sector enfocada en prácticas regenerativas, economía circular y metodologías de producción sostenible."
      },
      "casaSelva": {
        "title": "Casa Selva",
        "subtitle": "Santuario del bosque",
        "description": "Un santuario del bosque que combina arquitectura tradicional con vida regenerativa moderna en perfecta armonía con la naturaleza."
      }
    },
    "network": {
      "title": "Nuestra Red en Crecimiento",
      "subtitle": "Únete a miles de personas que ya están construyendo comunidades regenerativas en todo el mundo.",
      "activeNodes": "Nodos Activos",
      "activeNodesDesc": "Comunidades regenerativas",
      "communityMembers": "Miembros de la Comunidad",
      "communityMembersDesc": "Participantes activos",
      "fractalCommunities": "Comunidades Fractales",
      "fractalCommunitiesDesc": "Micro-economías locales",
      "explore": "Explorar Mapa Interactivo"
    },
    "engage": {
      "title": "Formas de Involucrarse",
      "subtitle": "Elige tu camino para contribuir al movimiento de regeneración.",
      "join": {
        "title": "Unirse",
        "description": "Cuéntanos sobre ti y conecta con comunidades regenerativas en todo el mundo.",
        "cta": "Conectarse"
      },
      "contribute": {
        "title": "Contribuir",
        "description": "Comparte tus habilidades, tiempo y experiencia para apoyar proyectos regenerativos.",
        "cta": "Compartir Habilidades"
      },
      "stake": {
        "title": "Participar",
        "description": "Invierte en proyectos regenerativos y recibe tokens de recibo para beneficios futuros.",
        "cta": "Participar Fondos"
      },
      "visit": {
        "title": "Visitar",
        "description": "Experimenta la vida regenerativa de primera mano en Liminal Village y otros nodos de la red.",
        "cta": "Planificar Visita"
      }
    },
    "events": {
      "title": "Próximos Eventos",
      "subtitle": "Únete a nuestro Protocolo de Lunación y celebraciones estacionales.",
      "viewAll": "Ver Todos los Eventos",
      "nextLunation": {
        "title": "Próxima Lunación",
        "subtitle": "Ritmo mensual de co-creación",
        "date": "15-30 de septiembre, 2025",
        "description": "Únete a nuestro ciclo mensual de planificación, construcción y celebración de proyectos regenerativos.",
        "cta": "Saber Más"
      },
      "autumnEquinox": {
        "title": "Equinoccio de Otoño",
        "subtitle": "Celebración estacional",
        "date": "22 de septiembre, 2025",
        "description": "Celebra la cosecha y prepárate para la temporada de invierno con rituales comunitarios.",
        "cta": "Unirse a la Celebración"
      },
      "permacultureWorkshop": {
        "title": "Taller de Permacultura",
        "subtitle": "Desarrollo de habilidades",
        "date": "5-7 de octubre, 2025",
        "description": "Aprende principios de diseño regenerativo en Liminal Village.",
        "cta": "Inscribirse Ahora"
      }
    },
    "stories": {
      "title": "Últimas Historias",
      "subtitle": "Descubre cómo las comunidades están implementando prácticas regenerativas en todo el mundo.",
      "clayHouse": {
        "title": "Comienza la Construcción de Casa de Arcilla",
        "location": "Liminal Village, Italia",
        "description": "Nuestro primer proyecto de casa de arcilla está en marcha, mostrando técnicas de construcción sostenible y materiales locales."
      },
      "newCommunity": {
        "title": "Se Forma Nueva Comunidad Fractal",
        "location": "Región de Toscana",
        "description": "Una nueva comunidad fractal y componible ha alcanzado 500 miembros, creando una micro-economía local enfocada en la soberanía alimentaria."
      },
      "regenFinance": {
        "title": "Piloto de Finanzas Regenerativas",
        "location": "Red Global",
        "description": "Lanzando nuestro primer sistema de tokens de recibo para financiar proyectos de infraestructura regenerativa."
      }
    },
    "video": {
      "title": "Mira Nuestra Introducción",
      "subtitle": "Aprende más sobre nuestra visión para restaurar y revitalizar nuestro planeta y nuestras vidas"
    },
    "navigation": {
      "home": "Inicio",
      "about": "Acerca de",
      "network": "Red",
      "library": "Biblioteca",
      "events": "Eventos",
      "contact": "Contacto",
      "join": "Unirse"
    },
    "footer": {
      "description": "Una iniciativa global para la regeneración integral. Únete al movimiento para construir comunidades sostenibles y resilientes.",
      "follow_us": "Síguenos",
      "contact_info": "Información de Contacto",
      "quick_links": "Enlaces Rápidos",
      "legal": "Legal"
    },
    "regenerativeVillage": {
      "hero": {
        "title": "Fábrica del Tercer Sector",
        "subtitle": "Una fábrica del Tercer Sector enfocada en prácticas regenerativas, economía circular y producción sostenible.",
        "description": "Descubre nuestra visión y únete a la comunidad",
        "cta": "Únete a la Comunidad",
        "discoverVision": "Descubre la Visión"
      },
      "vision": {
        "title": "Visión",
        "description": "\"No solo una fábrica, sino un ecosistema de producción e innovación social. La fábrica del Tercer Sector combina prácticas regenerativas, economía circular y producción sostenible: un modelo pionero que integra manufactura, centros de innovación y espacios comunitarios.\"",
        "sustainableLiving": "Producción Regenerativa",
        "sustainableLivingDesc": "Manufactura integrada con la naturaleza",
        "activeCommunity": "Comunidad Activa",
        "activeCommunityDesc": "Participación y colaboración colectiva",
              "collectiveSpaces": "Espacios Colectivos",
      "collectiveSpacesDesc": "Coworking y áreas comunes inclusivas"
      },
      "location": {
        "title": "Ubicación e Historia",
        "description": "\"Ubicado en el corazón de la región de las Marcas, nuestro pueblo ofrece la combinación perfecta de belleza natural y accesibilidad estratégica. Situado a solo 10 minutos del centro histórico de Ascoli Piceno, la capital cultural de la región, brinda a los residentes tanto tranquilidad como comodidad urbana.\"",
        "size": "Tamaño y Escala",
        "sizeDesc": "Aproximadamente 50 hectáreas de terreno dedicadas al desarrollo sostenible, vivienda, espacios comunitarios y áreas agrícolas",
        "history": "Contexto Histórico",
        "historyDesc": "Construido sobre antiguas tradiciones agrícolas con una visión para el futuro, combinando sabiduría histórica con prácticas regenerativas modernas",
        "ascoliPiceno": "Ascoli Piceno",
        "ascoliPicenoDesc": "10 minutos del centro histórico - capital cultural de la región de las Marcas con arquitectura renacentista y tradiciones locales",
        "adriaticCoast": "Costa Adriática",
        "adriaticCoastDesc": "30 minutos en coche a hermosas playas y pueblos costeros a lo largo del Mar Adriático",
        "skiArea": "Estaciones de Esquí",
        "skiAreaDesc": "30 minutos a estaciones de esquí cercanas en las Montañas Sibillini, ofreciendo deportes de invierno y actividades de montaña",
        "rome": "Roma",
        "romeDesc": "2.5 horas en coche al centro de Roma, conectándote con el centro cultural y empresarial de Italia",
        "sibilliniPark": "Parque Nacional Sibillini",
        "sibilliniParkDesc": "15 minutos a la entrada del Parque Nacional Sibillini, ofreciendo senderos para caminar, observación de vida silvestre y actividades de montaña",
        "lagaPark": "Parque Nacional Montes Laga",
        "lagaParkDesc": "45 minutos al Parque Nacional Montes Laga, con bosques antiguos, cascadas y paisajes ricos en biodiversidad",
        "accessibility": "Acceso por Autopista",
        "accessibilityDesc": "Fácilmente accesible vía autopistas principales, con conexiones convenientes a redes de transporte regional y nacional"
      },
      "communityCulture": {
        "title": "Comunidad y Cultura",
        "description": "\"El pueblo también se convierte en escenario cultural: conciertos, conferencias, cine al aire libre. La naturaleza se convierte en el decorado, y la comunidad en protagonista. Cada evento se convierte en oportunidad para dar nacimiento a nuevas ideas, colaboraciones, proyectos de impacto social.\"",
        "culturalEvents": "Eventos Culturales",
        "culturalEventsDesc": "Conciertos, conferencias, cine al aire libre",
        "socialInnovation": "Innovación Social",
        "socialInnovationDesc": "Nuevas ideas y colaboraciones emergentes",
        "communityParticipation": "Participación Comunitaria",
        "communityParticipationDesc": "La comunidad como protagonista activa"
      },
      "innovationCoworking": {
        "title": "Innovación y Coworking",
        "description": "\"Un centro de innovación social inmerso en el verde. Espacios de trabajo compartidos, salas para talleres, lugares para incubar startups del Tercer Sector y proyectos. Aquí vivir y trabajar coinciden, creando un flujo continuo entre vida e innovación.\"",
        "workspaces": "Espacios de Trabajo",
        "workspacesDesc": "Áreas de coworking compartidas inmersas en la naturaleza, diseñadas para fomentar la creatividad y colaboración",
        "workshopRooms": "Salas de Talleres",
        "workshopRoomsDesc": "Espacios dedicados para talleres, formación y reuniones comunitarias",
        "startupIncubator": "Incubadora de Startups",
        "startupIncubatorDesc": "Apoyo para startups del Tercer Sector y proyectos de impacto social"
      },
      "dailyLifeGastronomy": {
        "title": "Vida Cotidiana y Gastronomía",
        "description": "\"Un restaurante comunitario con cocina km 0. Huertos compartidos que se convierten en aulas de educación y laboratorios de sostenibilidad. Cada comida cuenta la historia del territorio y las relaciones que lo sostienen.\"",
        "communityRestaurant": "Restaurante Comunitario",
        "communityRestaurantDesc": "Cocina km 0 con productos locales y sostenibles",
        "sharedGardens": "Huertos Compartidos",
        "sharedGardensDesc": "Espacios educativos para aprender sobre sostenibilidad",
        "authenticRelationships": "Relaciones Auténticas",
        "authenticRelationshipsDesc": "Cada comida celebra el territorio y las conexiones humanas"
      },
      "wellnessNature": {
        "title": "Bienestar y Naturaleza",
        "description": "\"El bienestar es parte integral de la experiencia: espacios de relajación, naturaleza intacta, conexión auténtica consigo mismo y con los demás. Aldea Regenerativa es un pueblo donde el tiempo se ralentiza, y la vida retoma su ritmo natural.\"",
        "relaxationSpaces": "Espacios de Relajación",
        "relaxationSpacesDesc": "Áreas dedicadas al descanso y contemplación",
        "unspoiledNature": "Naturaleza Intacta",
        "unspoiledNatureDesc": "Conexión profunda con el entorno natural",
        "authenticConnection": "Conexión Auténtica",
        "authenticConnectionDesc": "Ritmo natural de la vida y relaciones genuinas"
      },
      "futureInnovation": {
        "title": "Futuro e Innovación",
        "description": "\"Un laboratorio vivo para el futuro del Tercer Sector. Un pueblo que inspira nuevas formas de economía solidaria, gobernanza participativa y sostenibilidad ambiental. Aldea Regenerativa no es solo un lugar para vivir: es un lugar para construir el futuro juntos.\"",
        "solidarityEconomy": "Economía Solidaria",
        "solidarityEconomyDesc": "Nuevos modelos económicos basados en solidaridad y sostenibilidad",
        "participatoryGovernance": "Gobernanza Participativa",
        "participatoryGovernanceDesc": "Decisiones colectivas y participación activa de la comunidad",
        "environmentalSustainability": "Sostenibilidad Ambiental",
        "environmentalSustainabilityDesc": "Prácticas ecológicas integradas en la vida cotidiana",
        "buildFuture": "Aldea Regenerativa no es solo un lugar para vivir: es un lugar para construir el futuro juntos."
      },
      "villageVisions": {
        "title": "Visiones del Pueblo",
        "description": "Descubre los conceptos y visiones de nuestro pueblo a través de estas imágenes realizadas en el lugar mismo."
      },
      "callToAction": {
        "title": "Únete al Futuro del Tercer Sector",
        "description": "Aldea Regenerativa es más que un pueblo: es un movimiento para construir juntos un futuro sostenible, inclusivo e innovador. Tu participación puede marcar la diferencia.",
        "joinNow": "Únete Ahora",
        "contactUs": "Contáctanos"
      }
    }
  },
  fr: {
    "common": {
      "home": "Accueil",
      "about": "À propos",
      "contact": "Contact",
      "join": "Rejoindre",
      "contribute": "Contribuer",
      "library": "Bibliothèque",
      "network": "Réseau",
      "events": "Événements",
      "visit": "Visiter",
      "stake": "Participer",
      "privacy": "Confidentialité",
      "terms": "Conditions",
      "cookies": "Cookies",
      "demo": "Démo"
    },
    "hero": {
      "title": "Construire un Réseau Global pour les Soins Intégraux",
      "subtitle": "Un réseau global pour les soins intégraux à travers les communautés biorégionales et les pratiques régénératives.",
      "cta": "Rejoindre le Mouvement",
      "explore": "Explorer le Réseau"
    },
    "about": {
      "title": "Qu'est-ce que Regenerativa ?",
      "description": "Nous construisons un réseau global de communautés biorégionales connectées à travers des micro-économies fractales et composables. Chaque cellule représente un bassin versant local où les personnes collaborent sur des projets régénératifs, partagent des ressources et construisent des systèmes résilients.",
      "fractalNetworks": "Réseaux Fractales et Composables",
      "fractalNetworksDesc": "Communautés locales organisées en cellules fractales H3 pour un partage optimal des ressources.",
      "regenerativePractices": "Pratiques Régénératives",
      "regenerativePracticesDesc": "Permaculture, agriculture durable et principes d'économie circulaire.",
      "integralRegeneration": "Régénération Intégrale",
      "integralRegenerationDesc": "Approche holistique abordant les systèmes sociaux, écologiques et économiques."
    },
    "sites": {
      "title": "Nos Sites",
      "subtitle": "Visitez nos communautés régénératives et voyez la vie durable en action.",
      "liminalVillage": {
        "title": "Liminal Village",
        "subtitle": "Centre communautaire",
        "description": "Notre centre communautaire central où l'innovation rencontre la tradition, servant de cœur à notre réseau régénératif."
      },
      "brickFactory": {
        "title": "Fabrique du Tiers Secteur",
        "subtitle": "Fabrique Régénérative",
        "description": "Une fabrique du tiers secteur axée sur les pratiques régénératives, l'économie circulaire et les méthodologies de production durable."
      },
      "casaSelva": {
        "title": "Casa Selva",
        "subtitle": "Sanctuaire forestier",
        "description": "Un sanctuaire forestier mêlant architecture traditionnelle et vie régénérative moderne en parfaite harmonie avec la nature."
      }
    },
    "network": {
      "title": "Notre Réseau en Croissance",
      "subtitle": "Rejoignez des milliers de personnes qui construisent déjà des communautés régénératives à travers le globe.",
      "activeNodes": "Nœuds Actifs",
      "activeNodesDesc": "Communautés régénératives",
      "communityMembers": "Membres de la Communauté",
      "communityMembersDesc": "Participants actifs",
      "fractalCommunities": "Communautés Fractales",
      "fractalCommunitiesDesc": "Micro-économies locales",
      "explore": "Explorer la Carte Interactive"
    },
    "engage": {
      "title": "Façons de S'Impliquer",
      "subtitle": "Choisissez votre voie pour contribuer au mouvement de régénération.",
      "join": {
        "title": "Rejoindre",
        "description": "Parlez-nous de vous et connectez-vous avec des communautés régénératives dans le monde entier.",
        "cta": "Se Connecter"
      },
      "contribute": {
        "title": "Contribuer",
        "description": "Partagez vos compétences, votre temps et votre expertise pour soutenir des projets régénératifs.",
        "cta": "Partager Compétences"
      },
      "stake": {
        "title": "Participer",
        "description": "Investissez dans des projets régénératifs et recevez des jetons de reçu pour des bénéfices futurs.",
        "cta": "Participer Fonds"
      },
      "visit": {
        "title": "Visiter",
        "description": "Vivez la vie régénérative de première main à Liminal Village et autres nœuds du réseau.",
        "cta": "Planifier Visite"
      }
    },
    "events": {
      "title": "Événements à Venir",
      "subtitle": "Rejoignez notre Protocole de Lunaison et célébrations saisonnières.",
      "viewAll": "Voir Tous les Événements",
      "nextLunation": {
        "title": "Prochaine Lunaison",
        "subtitle": "Rythme mensuel de co-création",
        "date": "15-30 septembre 2025",
        "description": "Rejoignez notre cycle mensuel de planification, construction et célébration de projets régénératifs.",
        "cta": "En Savoir Plus"
      },
      "autumnEquinox": {
        "title": "Équinoxe d'Automne",
        "subtitle": "Célébration saisonnière",
        "date": "22 septembre 2025",
        "description": "Célébrez la récolte et préparez-vous pour la saison hivernale avec des rituels communautaires.",
        "cta": "Rejoindre la Célébration"
      },
      "permacultureWorkshop": {
        "title": "Atelier de Permaculture",
        "subtitle": "Développement de compétences",
        "date": "5-7 octobre 2025",
        "description": "Apprenez les principes de conception régénérative à Liminal Village.",
        "cta": "S'Inscrire Maintenant"
      }
    },
    "stories": {
      "title": "Dernières Histoires",
      "subtitle": "Découvrez comment les communautés mettent en œuvre des pratiques régénératives à travers le monde.",
      "clayHouse": {
        "title": "La Construction de la Maison d'Argile Commence",
        "location": "Liminal Village, Italie",
        "description": "Notre premier projet de maison d'argile est en cours, présentant des techniques de construction durable et des matériaux locaux."
      },
      "newCommunity": {
        "title": "Une Nouvelle Communauté Fractale se Forme",
        "location": "Région de Toscane",
        "description": "Une nouvelle communauté fractale et composable a atteint 500 membres, créant une micro-économie locale axée sur la souveraineté alimentaire."
      },
      "regenFinance": {
        "title": "Pilote de Finance Régénérative",
        "location": "Réseau Global",
        "description": "Lancement de notre premier système de jetons de reçu pour financer des projets d'infrastructure régénérative."
      }
    },
    "video": {
      "title": "Regardez Notre Introduction",
      "subtitle": "Apprenez-en plus sur notre vision pour restaurer et revitaliser notre planète et nos vies"
    },
    "navigation": {
      "home": "Accueil",
      "about": "À propos",
      "network": "Réseau",
      "library": "Bibliothèque",
      "events": "Événements",
      "contact": "Contact",
      "join": "Rejoindre"
    },
    "footer": {
      "description": "Une initiative mondiale pour la régénération intégrale. Rejoignez le mouvement pour construire des communautés durables et résilientes.",
      "follow_us": "Suivez-nous",
      "contact_info": "Informations de Contact",
      "quick_links": "Liens Rapides",
      "legal": "Légal"
    },
    "regenerativeVillage": {
      "hero": {
        "title": "Fabrique du Tiers Secteur",
        "subtitle": "Une fabrique du Tiers Secteur axée sur les pratiques régénératives, l'économie circulaire et la production durable.",
        "description": "Découvrez notre vision et rejoignez la communauté",
        "cta": "Rejoignez la Communauté",
        "discoverVision": "Découvrez la Vision"
      },
      "vision": {
        "title": "Vision",
        "description": "\"Pas seulement une fabrique, mais un écosystème de production et d'innovation sociale. La fabrique du Tiers Secteur combine pratiques régénératives, économie circulaire et production durable : un modèle pionero qui intègre la manufacture, les centres d'innovation et les espaces communautaires.\"",
        "sustainableLiving": "Production Régénérative",
        "sustainableLivingDesc": "Manufacture intégrée à la nature",
        "activeCommunity": "Communauté Active",
        "activeCommunityDesc": "Participation et collaboration collective",
              "collectiveSpaces": "Espaces Collectifs",
      "collectiveSpacesDesc": "Coworking et espaces communs inclusifs"
      },
      "location": {
        "title": "Emplacement et Histoire",
        "description": "\"Niché au cœur de la région des Marches, notre village offre le mélange parfait de beauté naturelle et d'accessibilité stratégique. Situé à seulement 10 minutes du centre historique d'Ascoli Piceno, la capitale culturelle de la région, il offre aux résidents à la fois tranquillité et commodité urbaine.\"",
        "size": "Taille et Échelle",
        "sizeDesc": "Environ 50 hectares de terrain dédiés au développement durable, au logement, aux espaces communautaires et aux zones agricoles",
        "history": "Contexte Historique",
        "historyDesc": "Construit sur d'anciennes traditions agricoles avec une vision pour l'avenir, combinant la sagesse historique avec des pratiques régénératives modernes",
        "ascoliPiceno": "Ascoli Piceno",
        "ascoliPicenoDesc": "10 minutes du centre historique - capitale culturelle de la région des Marches avec architecture Renaissance et traditions locales",
        "adriaticCoast": "Côte Adriatique",
        "adriaticCoastDesc": "30 minutes de route vers de belles plages et villes côtières le long de la mer Adriatique",
        "skiArea": "Stations de Ski",
        "skiAreaDesc": "30 minutes vers les stations de ski voisines dans les Montagnes Sibillini, offrant sports d'hiver et activités de montagne",
        "rome": "Rome",
        "romeDesc": "2.5 heures en voiture vers le centre de Rome, vous connectant au centre culturel et économique de l'Italie",
        "sibilliniPark": "Parc National des Sibillini",
        "sibilliniParkDesc": "15 minutes jusqu'à l'entrée du Parc National des Sibillini, offrant des sentiers de randonnée, l'observation de la faune et des activités de montagne",
        "lagaPark": "Parc National des Monts Laga",
        "lagaParkDesc": "45 minutes vers le Parc National des Monts Laga, avec des forêts anciennes, des cascades et des paysages riches en biodiversité",
        "accessibility": "Accès Autoroutier",
        "accessibilityDesc": "Facilement accessible via les autoroutes principales, avec des connexions pratiques aux réseaux de transport régional et national"
      },
      "communityCulture": {
        "title": "Communauté et Culture",
        "description": "\"Le village devient aussi une scène culturelle : concerts, conférences, cinéma en plein air. La nature devient le décor, et la communauté le protagoniste. Chaque événement devient une opportunité de donner naissance à de nouvelles idées, collaborations, projets d'impact social.\"",
        "culturalEvents": "Événements Culturels",
        "culturalEventsDesc": "Concerts, conférences, cinéma en plein air",
        "socialInnovation": "Innovation Sociale",
        "socialInnovationDesc": "Nouvelles idées et collaborations émergentes",
        "communityParticipation": "Participation Communautaire",
        "communityParticipationDesc": "La communauté comme protagoniste active"
      },
      "innovationCoworking": {
        "title": "Innovation et Coworking",
        "description": "\"Un centre d'innovation sociale immergé dans le vert. Espaces de travail partagés, salles pour ateliers, lieux pour incuber startups du Tiers Secteur et projets. Ici vivre et travailler coïncident, créant un flux continu entre vie et innovation.\"",
        "workspaces": "Espaces de Travail",
        "workspacesDesc": "Espaces de coworking partagés immergés dans la nature, conçus pour favoriser la créativité et la collaboration",
        "workshopRooms": "Salles d'Ateliers",
        "workshopRoomsDesc": "Espaces dédiés aux ateliers, formation et réunions communautaires",
        "startupIncubator": "Incubateur de Startups",
        "startupIncubatorDesc": "Soutien pour startups du Tiers Secteur et projets d'impact social"
      },
      "dailyLifeGastronomy": {
        "title": "Vie Quotidienne et Gastronomie",
        "description": "\"Un restaurant communautaire avec cuisine km 0. Jardins partagés qui deviennent salles d'éducation et laboratoires de durabilité. Chaque repas raconte l'histoire du territoire et les relations qui le soutiennent.\"",
        "communityRestaurant": "Restaurant Communautaire",
        "communityRestaurantDesc": "Cuisine km 0 avec produits locaux et durables",
        "sharedGardens": "Jardins Partagés",
        "sharedGardensDesc": "Espaces éducatifs pour apprendre la durabilité",
        "authenticRelationships": "Relations Authentiques",
        "authenticRelationshipsDesc": "Chaque repas célèbre le territoire et les connexions humaines"
      },
      "wellnessNature": {
        "title": "Bien-être et Nature",
        "description": "\"Le bien-être fait partie intégrante de l'expérience : espaces de relaxation, nature intacte, connexion authentique avec soi-même et avec les autres. Fabrique du Tiers Secteur est un lieu où le temps ralentit, et le travail reprend son rythme naturel.\"",
        "relaxationSpaces": "Espaces de Relaxation",
        "relaxationSpacesDesc": "Espaces dédiés au repos et à la contemplation",
        "unspoiledNature": "Nature Intacte",
        "unspoiledNatureDesc": "Connexion profonde avec l'environnement naturel",
        "authenticConnection": "Connexion Authentique",
        "authenticConnectionDesc": "Rythme naturel de la vie et relations authentiques"
      },
      "futureInnovation": {
        "title": "Futur et Innovation",
        "description": "\"Un laboratoire vivant pour l'avenir du Tiers Secteur. Une fabrique qui inspire de nouvelles formes d'économie solidaire, gouvernance participative et durabilité environnementale. Fabrique du Tiers Secteur n'est pas seulement un lieu pour travailler : c'est un lieu pour construire l'avenir ensemble.\"",
        "solidarityEconomy": "Économie Solidaire",
        "solidarityEconomyDesc": "Nouveaux modèles économiques basés sur la solidarité et la durabilité",
        "participatoryGovernance": "Gouvernance Participative",
        "participatoryGovernanceDesc": "Décisions collectives et participation active de la communauté",
        "environmentalSustainability": "Durabilité Environnementale",
        "environmentalSustainabilityDesc": "Pratiques écologiques intégrées dans la vie quotidienne",
        "buildFuture": "Fabrique du Tiers Secteur n'est pas seulement un lieu pour travailler : c'est un lieu pour construire l'avenir ensemble."
      },
      "villageVisions": {
        "title": "Visions de la Fabrique",
        "description": "Découvrez les concepts et visions de notre fabrique à travers ces images réalisées sur le lieu même."
      },
      "callToAction": {
        "title": "Rejoignez l'Avenir du Tiers Secteur",
        "description": "Fabrique du Tiers Secteur est plus qu'une fabrique : c'est un mouvement pour construire ensemble un avenir durable, inclusif et innovant. Votre participation peut faire la différence.",
        "joinNow": "Rejoignez Maintenant",
        "contactUs": "Contactez-nous"
      }
    }
  },
  it: {
    "common": {
      "home": "Home",
      "about": "Chi siamo",
      "contact": "Contatti",
      "join": "Unisciti",
      "contribute": "Contribuisci",
      "library": "Biblioteca",
      "network": "Network",
      "events": "Eventi",
      "visit": "Visita",
      "stake": "Partecipa",
      "privacy": "Privacy",
      "terms": "Termini",
      "cookies": "Cookie",
      "demo": "Demo"
    },
    "hero": {
      "title": "Costruire una Rete Globale per la Cura Integrale",
      "subtitle": "Una rete globale per la cura integrale attraverso comunità bioregionali e pratiche rigenerative.",
      "cta": "Unisciti al Movimento",
      "explore": "Esplora la Rete"
    },
    "about": {
      "title": "Cos'è Regenerativa?",
      "description": "Stiamo costruendo una rete globale di comunità bioregionali connesse attraverso micro-economie frattali e componibili. Ogni cellula rappresenta un bacino locale dove le persone collaborano su progetti rigenerativi, condividono risorse e costruiscono sistemi resilienti.",
      "fractalNetworks": "Reti Frattali e Componibili",
      "fractalNetworksDesc": "Comunità locali organizzate in cellule frattali H3 per una condivisione ottimale delle risorse.",
      "regenerativePractices": "Pratiche Rigenerative",
      "regenerativePracticesDesc": "Permacultura, agricoltura sostenibile e principi di economia circolare.",
      "integralRegeneration": "Rigenerazione Integrale",
      "integralRegenerationDesc": "Approccio olistico che affronta sistemi sociali, ecologici ed economici."
    },
    "sites": {
      "title": "I Nostri Siti",
      "subtitle": "Visita le nostre comunità rigenerative e vedi la vita sostenibile in azione.",
      "liminalVillage": {
        "title": "Liminal Village",
        "subtitle": "Hub comunitario",
        "description": "Il nostro hub comunitario centrale dove l'innovazione incontra la tradizione, servendo come cuore della nostra rete rigenerativa."
      },
      "brickFactory": {
        "title": "Fabbrica del Terzo Settore",
        "subtitle": "Fabbrica Rigenerativa",
        "description": "Una fabbrica del terzo settore focalizzata su pratiche rigenerative, economia circolare e metodologie di produzione sostenibile."
      },
      "casaSelva": {
        "title": "Casa Selva",
        "subtitle": "Santuario forestale",
        "description": "Un santuario forestale che unisce architettura tradizionale e vita rigenerativa moderna in perfetta armonia con la natura."
      }
    },
    "network": {
      "title": "La Nostra Rete in Crescita",
      "subtitle": "Unisciti a migliaia di persone che stanno già costruendo comunità rigenerative in tutto il mondo.",
      "activeNodes": "Nodi Attivi",
      "activeNodesDesc": "Comunità rigenerative",
      "communityMembers": "Membri della Comunità",
      "communityMembersDesc": "Partecipanti attivi",
      "fractalCommunities": "Comunità Frattali",
      "fractalCommunitiesDesc": "Micro-economie locali",
      "explore": "Esplora la Mappa Interattiva"
    },
    "engage": {
      "title": "Modi per Partecipare",
      "subtitle": "Scegli il tuo percorso per contribuire al movimento rigenerativo.",
      "join": {
        "title": "Unisciti",
        "description": "Raccontaci di te e connettiti con comunità rigenerative in tutto il mondo.",
        "cta": "Connettiti"
      },
      "contribute": {
        "title": "Contribuisci",
        "description": "Condividi le tue competenze, il tuo tempo e la tua esperienza per supportare progetti rigenerativi.",
        "cta": "Condividi Competenze"
      },
      "stake": {
        "title": "Partecipa",
        "description": "Investi in progetti rigenerativi e ricevi token ricevuta per benefici futuri.",
        "cta": "Investi Fondi"
      },
      "visit": {
        "title": "Visita",
        "description": "Sperimenta la vita rigenerativa in prima persona a Liminal Village e altri nodi della rete.",
        "cta": "Pianifica Visita"
      }
    },
    "events": {
      "title": "Eventi in Arrivo",
      "subtitle": "Unisciti al nostro Protocollo di Lunazione e alle celebrazioni stagionali.",
      "viewAll": "Vedi Tutti gli Eventi",
      "nextLunation": {
        "title": "Prossima Lunazione",
        "subtitle": "Ritmo mensile di co-creazione",
        "date": "15-30 settembre 2025",
        "description": "Unisciti al nostro ciclo mensile di pianificazione, costruzione e celebrazione di progetti rigenerativi.",
        "cta": "Scopri di Più"
      },
      "autumnEquinox": {
        "title": "Equinozio d'Autunno",
        "subtitle": "Celebrazione stagionale",
        "date": "22 settembre 2025",
        "description": "Celebra il raccolto e preparati per la stagione invernale con rituali comunitari.",
        "cta": "Unisciti alla Celebrazione"
      },
      "permacultureWorkshop": {
        "title": "Workshop di Permacultura",
        "subtitle": "Sviluppo competenze",
        "date": "5-7 ottobre 2025",
        "description": "Impara i principi di progettazione rigenerativa a Liminal Village.",
        "cta": "Registrati Ora"
      }
    },
    "stories": {
      "title": "Ultime Storie",
      "subtitle": "Scopri come le comunità stanno implementando pratiche rigenerative in tutto il mondo.",
      "clayHouse": {
        "title": "Inizia la Costruzione della Casa di Argilla",
        "location": "Liminal Village, Italia",
        "description": "Il nostro primo progetto di casa di argilla è in corso, mostrando tecniche di costruzione sostenibile e materiali locali."
      },
      "newCommunity": {
        "title": "Si Forma una Nuova Comunità Frattale",
        "location": "Regione Toscana",
        "description": "Una nuova comunità frattale e componibile ha raggiunto 500 membri, creando una micro-economia locale focalizzata sulla sovranità alimentare."
      },
      "regenFinance": {
        "title": "Pilota di Finanza Rigenerativa",
        "location": "Rete Globale",
        "description": "Lanciamo il nostro primo sistema di token ricevuta per finanziare progetti di infrastruttura rigenerativa."
      }
    },
    "video": {
      "title": "Guarda la Nostra Introduzione",
      "subtitle": "Scopri di più sulla nostra visione per restaurare e rivitalizzare il nostro pianeta e le nostre vite"
    },
    "navigation": {
      "home": "Home",
      "about": "Chi siamo",
      "network": "Network",
      "library": "Biblioteca",
      "events": "Eventi",
      "contact": "Contatti",
      "join": "Unisciti"
    },
    "footer": {
      "description": "Un'iniziativa globale per la rigenerazione integrale. Unisciti al movimento per costruire comunità sostenibili e resilienti.",
      "follow_us": "Seguici",
      "contact_info": "Informazioni di Contatto",
      "quick_links": "Link Veloci",
      "legal": "Legale"
    },
    "regenerativeVillage": {
      "hero": {
        "title": "Fabbrica del Terzo Settore",
        "subtitle": "Una fabbrica del Terzo Settore focalizzata su pratiche rigenerative, economia circolare e produzione sostenibile.",
        "description": "Scopri la nostra visione e unisciti alla comunità",
        "cta": "Unisciti alla Comunità",
        "discoverVision": "Scopri la Visione"
      },
      "vision": {
        "title": "Visione",
        "description": "\"Non solo una fabbrica, ma un ecosistema di produzione e innovazione sociale. La Fabbrica del Terzo Settore combina pratiche rigenerative, economia circolare e produzione sostenibile: un modello pioniero che integra manifattura, hub di innovazione e spazi comunitari.\"",
        "sustainableLiving": "Produzione Rigenerativa",
        "sustainableLivingDesc": "Manifattura integrata con la natura",
        "activeCommunity": "Comunità Attiva",
        "activeCommunityDesc": "Partecipazione e collaborazione collettiva",
        "collectiveSpaces": "Spazi di Innovazione",
        "collectiveSpacesDesc": "Coworking e aree di innovazione inclusive"
      },
      "location": {
        "title": "Posizione e Storia",
        "description": "\"Immersa nel cuore della regione Marche, la nostra fabbrica offre la combinazione perfetta di bellezza naturale e accessibilità strategica. Situata a soli 10 minuti dal centro storico di Ascoli Piceno, capitale culturale della regione, offre l'ambiente perfetto per la produzione sostenibile.\"",
        "size": "Dimensione e Scala",
        "sizeDesc": "Circa 50 ettari di terreno dedicati alla produzione sostenibile, spazi di innovazione, aree comunitarie e pratiche rigenerative",
        "history": "Contesto Storico",
        "historyDesc": "Costruita su antiche tradizioni manifatturiere con una visione per il futuro, combinando artigianato storico con pratiche rigenerative moderne",
        "ascoliPiceno": "Ascoli Piceno",
        "ascoliPicenoDesc": "10 minuti dal centro storico - capitale culturale della regione Marche con architettura rinascimentale e tradizioni locali",
        "adriaticCoast": "Costa Adriatica",
        "adriaticCoastDesc": "30 minuti di auto verso belle spiagge e città costiere lungo il Mare Adriatico",
        "skiArea": "Aree Sciistiche",
        "skiAreaDesc": "30 minuti verso le aree sciistiche vicine sui Monti Sibillini, offrendo sport invernali e attività montane",
        "rome": "Roma",
        "romeDesc": "2.5 ore in auto verso il centro di Roma, collegandoti al centro culturale e commerciale d'Italia",
        "sibilliniPark": "Parco Nazionale dei Sibillini",
        "sibilliniParkDesc": "15 minuti dall'ingresso del Parco Nazionale dei Sibillini, offrendo sentieri escursionistici, osservazione fauna e attività montane",
        "lagaPark": "Parco Nazionale dei Monti della Laga",
        "lagaParkDesc": "45 minuti verso il Parco Nazionale dei Monti della Laga, con foreste antiche, cascate e paesaggi ricchi di biodiversità",
        "accessibility": "Accesso Facile",
        "accessibilityDesc": "Facilmente accessibile tramite autostrade principali, con collegamenti convenienti alle reti di trasporto regionali e nazionali"
      },
      "communityCulture": {
        "title": "Comunità e Cultura",
        "description": "\"La fabbrica diventa anche un palcoscenico culturale: mostre, conferenze, workshop. La natura diventa la scenografia, e la comunità il protagonista. Ogni evento diventa un'opportunità per mostrare pratiche rigenerative, collaborazioni, progetti di impatto sociale.\"",
        "culturalEvents": "Eventi Culturali",
        "culturalEventsDesc": "Mostre, conferenze, workshop",
        "socialInnovation": "Innovazione Sociale",
        "socialInnovationDesc": "Nuove idee e collaborazioni emergenti",
        "communityParticipation": "Partecipazione Comunitaria",
        "communityParticipationDesc": "La comunità come protagonista attiva"
      },
      "innovationCoworking": {
        "title": "Innovazione e Coworking",
        "description": "\"Un hub di innovazione sociale immerso nel verde. Spazi di lavoro condivisi, sale workshop, luoghi per incubare startup del Terzo Settore e progetti. Qui vivere e lavorare coincidono, creando un flusso continuo tra vita e innovazione.\"",
        "workspaces": "Spazi di Lavoro",
        "workspacesDesc": "Aree di coworking condivise immerse nella natura, progettate per favorire creatività e collaborazione",
        "workshopRooms": "Sale Workshop",
        "workshopRoomsDesc": "Spazi dedicati per workshop, formazione e incontri comunitari",
        "startupIncubator": "Incubatore di Startup",
        "startupIncubatorDesc": "Supporto per startup del Terzo Settore e progetti di impatto sociale"
      },
      "dailyLifeGastronomy": {
        "title": "Vita Quotidiana e Gastronomia",
        "description": "\"Un ristorante comunitario con cucina km 0. Orti condivisi che diventano aule educative e laboratori di sostenibilità. Ogni pasto racconta la storia del territorio e delle relazioni che lo sostengono.\"",
        "communityRestaurant": "Ristorante Comunitario",
        "communityRestaurantDesc": "Cucina km 0 con prodotti locali e sostenibili",
        "sharedGardens": "Orti Condivisi",
        "sharedGardensDesc": "Spazi educativi per imparare la sostenibilità",
        "authenticRelationships": "Relazioni Autentiche",
        "authenticRelationshipsDesc": "Ogni pasto celebra il territorio e le connessioni umane"
      },
      "wellnessNature": {
        "title": "Benessere e Natura",
        "description": "\"Il benessere è parte integrante dell'esperienza: spazi di relax, natura incontaminata, connessione autentica con se stessi e con gli altri. La Fabbrica del Terzo Settore è un luogo dove il tempo rallenta, e il lavoro riprende il suo ritmo naturale.\"",
        "relaxationSpaces": "Spazi di Relax",
        "relaxationSpacesDesc": "Aree dedicate al riposo e alla contemplazione",
        "unspoiledNature": "Natura Incontaminata",
        "unspoiledNatureDesc": "Connessione profonda con l'ambiente naturale",
        "authenticConnection": "Connessione Autentica",
        "authenticConnectionDesc": "Ritmo naturale del lavoro e relazioni genuine"
      },
      "futureInnovation": {
        "title": "Futuro e Innovazione",
        "description": "\"Un laboratorio vivente per il futuro del Terzo Settore. Una fabbrica che ispira nuove forme di economia solidale, governance partecipativa e sostenibilità ambientale. La Fabbrica del Terzo Settore non è solo un luogo per lavorare: è un luogo per costruire insieme il futuro.\"",
        "solidarityEconomy": "Economia Solidale",
        "solidarityEconomyDesc": "Nuovi modelli economici basati su solidarietà e sostenibilità",
        "participatoryGovernance": "Governance Partecipativa",
        "participatoryGovernanceDesc": "Decisioni collettive e partecipazione attiva della comunità",
        "environmentalSustainability": "Sostenibilità Ambientale",
        "environmentalSustainabilityDesc": "Pratiche ecologiche integrate nelle operazioni quotidiane",
        "buildFuture": "La Fabbrica del Terzo Settore non è solo un luogo per lavorare: è un luogo per costruire insieme il futuro."
      },
      "villageVisions": {
        "title": "Visioni della Fabbrica",
        "description": "Scopri i concetti e le visioni della nostra fabbrica attraverso queste immagini realizzate nella location reale."
      },
      "callToAction": {
        "title": "Unisciti al Futuro del Terzo Settore",
        "description": "La Fabbrica del Terzo Settore è più di una fabbrica: è un movimento per costruire insieme un futuro sostenibile, inclusivo e innovativo. La tua partecipazione può fare la differenza.",
        "joinNow": "Unisciti Ora",
        "contactUs": "Contattaci"
      }
    }
  },
  nl: {
    "common": {
      "home": "Home",
      "about": "Over ons",
      "contact": "Contact",
      "join": "Doe mee",
      "contribute": "Bijdragen",
      "library": "Bibliotheek",
      "network": "Netwerk",
      "events": "Evenementen",
      "visit": "Bezoek",
      "stake": "Investeren",
      "privacy": "Privacy",
      "terms": "Voorwaarden",
      "cookies": "Cookies",
      "demo": "Demo"
    },
    "hero": {
      "title": "Een Wereldwijd Netwerk Bouwen voor Integrale Zorg",
      "subtitle": "Een wereldwijd netwerk voor integrale zorg door bioregionale gemeenschappen en regeneratieve praktijken.",
      "cta": "Word Lid van de Beweging",
      "explore": "Verken Netwerk"
    },
    "about": {
      "title": "Wat is Regenerativa?",
      "description": "We bouwen een wereldwijd netwerk van bioregionale gemeenschappen verbonden door fractale en samengestelde micro-economieën. Elke cel vertegenwoordigt een lokaal stroomgebied waar mensen samenwerken aan regeneratieve projecten, middelen delen en veerkrachtige systemen bouwen.",
      "fractalNetworks": "Fractale en Samengestelde Netwerken",
      "fractalNetworksDesc": "Lokale gemeenschappen georganiseerd in H3 fractale cellen voor optimaal delen van middelen.",
      "regenerativePractices": "Regeneratieve Praktijken",
      "regenerativePracticesDesc": "Permacultuur, duurzame landbouw en circulaire economie principes.",
      "integralRegeneration": "Integrale Regeneratie",
      "integralRegenerationDesc": "Holistische benadering die sociale, ecologische en economische systemen adresseert."
    },
    "sites": {
      "title": "Onze Locaties",
      "subtitle": "Bezoek onze regeneratieve gemeenschappen en zie duurzaam leven in actie.",
      "liminalVillage": {
        "title": "Liminal Village",
        "subtitle": "Gemeenschapshub",
        "description": "Onze centrale gemeenschapshub waar innovatie traditie ontmoet, en dient als het hart van ons regeneratieve netwerk."
      },
      "brickFactory": {
        "title": "Fabbrica del Terzo Settore",
        "subtitle": "Regeneratieve Fabriek",
        "description": "Een derde sector fabriek gericht op regeneratieve praktijken, circulaire economie en duurzame productie methodologieën."
      },
      "casaSelva": {
        "title": "Casa Selva",
        "subtitle": "Bosheilidom",
        "description": "Een bosheilidom dat traditionele architectuur combineert met modern regeneratief leven in perfecte harmonie met de natuur."
      }
    },
    "network": {
      "title": "Ons Groeiende Netwerk",
      "subtitle": "Sluit je aan bij duizenden mensen die al regeneratieve gemeenschappen over de hele wereld bouwen.",
      "activeNodes": "Actieve Knooppunten",
      "activeNodesDesc": "Regeneratieve gemeenschappen",
      "communityMembers": "Gemeenschapsleden",
      "communityMembersDesc": "Actieve deelnemers",
      "fractalCommunities": "Fractale Gemeenschappen",
      "fractalCommunitiesDesc": "Lokale micro-economieën",
      "explore": "Verken Interactieve Kaart"
    },
    "engage": {
      "title": "Manieren om Betrokken te Raken",
      "subtitle": "Kies je pad om bij te dragen aan de regeneratieve beweging.",
      "join": {
        "title": "Doe Mee",
        "description": "Vertel ons over jezelf en maak verbinding met regeneratieve gemeenschappen wereldwijd.",
        "cta": "Maak Verbinding"
      },
      "contribute": {
        "title": "Bijdragen",
        "description": "Deel je vaardigheden, tijd en expertise om regeneratieve projecten te ondersteunen.",
        "cta": "Deel Vaardigheden"
      },
      "stake": {
        "title": "Investeren",
        "description": "Investeer in regeneratieve projecten en ontvang ontvangstbewijstokens voor toekomstige voordelen.",
        "cta": "Investeer Fondsen"
      },
      "visit": {
        "title": "Bezoek",
        "description": "Ervaar regeneratief leven uit eerste hand bij Liminal Village en andere netwerkknooppunten.",
        "cta": "Plan Bezoek"
      }
    },
    "events": {
      "title": "Aankomende Evenementen",
      "subtitle": "Doe mee met ons Lunatie Protocol en seizoensgebonden vieringen.",
      "viewAll": "Bekijk Alle Evenementen",
      "nextLunation": {
        "title": "Volgende Lunatie",
        "subtitle": "Maandelijks co-creatie ritme",
        "date": "15-30 september 2025",
        "description": "Doe mee met onze maandelijkse cyclus van plannen, bouwen en vieren van regeneratieve projecten.",
        "cta": "Meer Informatie"
      },
      "autumnEquinox": {
        "title": "Herfst Equinox",
        "subtitle": "Seizoensgebonden viering",
        "date": "22 september 2025",
        "description": "Vier de oogst en bereid je voor op het winterseizoen met gemeenschapsrituelen.",
        "cta": "Doe Mee aan Viering"
      },
      "permacultureWorkshop": {
        "title": "Permacultuur Workshop",
        "subtitle": "Vaardigheden ontwikkelen",
        "date": "5-7 oktober 2025",
        "description": "Leer regeneratieve ontwerpprincipes bij Liminal Village.",
        "cta": "Registreer Nu"
      }
    },
    "stories": {
      "title": "Laatste Verhalen",
      "subtitle": "Ontdek hoe gemeenschappen regeneratieve praktijken implementeren over de hele wereld.",
      "clayHouse": {
        "title": "Klei Huis Constructie Begint",
        "location": "Liminal Village, Italië",
        "description": "Ons eerste klei huis project is onderweg, waarbij duurzame bouwtechnieken en lokale materialen worden getoond."
      },
      "newCommunity": {
        "title": "Nieuwe Fractale Gemeenschap Vormt Zich",
        "location": "Toscane Regio",
        "description": "Een nieuwe fractale en samengestelde gemeenschap heeft 500 leden bereikt, waardoor een lokale micro-economie wordt gecreëerd gericht op voedselsoevereiniteit."
      },
      "regenFinance": {
        "title": "Regeneratieve Financiering Pilot",
        "location": "Wereldwijd Netwerk",
        "description": "Lancering van ons eerste ontvangstbewijs token systeem voor financiering van regeneratieve infrastructuur projecten."
      }
    },
    "video": {
      "title": "Bekijk Onze Introductie",
      "subtitle": "Leer meer over onze visie om onze planeet en ons leven te herstellen en nieuw leven in te blazen"
    },
    "navigation": {
      "home": "Home",
      "about": "Over ons",
      "network": "Netwerk",
      "library": "Bibliotheek",
      "events": "Evenementen",
      "contact": "Contact",
      "join": "Doe mee"
    },
    "footer": {
      "description": "Een wereldwijd initiatief voor integrale regeneratie. Word lid van de beweging om duurzame gemeenschappen te bouwen.",
      "follow_us": "Volg Ons",
      "contact_info": "Contactinformatie",
      "quick_links": "Snelle Links",
      "legal": "Juridisch"
    },
    "regenerativeVillage": {
      "hero": {
        "title": "Fabbrica del Terzo Settore",
        "subtitle": "Een Derde Sector fabriek gericht op regeneratieve praktijken, circulaire economie en duurzame productie.",
        "description": "Ontdek onze visie en word lid van de gemeenschap",
        "cta": "Word Lid van de Gemeenschap",
        "discoverVision": "Ontdek de Visie"
      },
      "vision": {
        "title": "Visie",
        "description": "\"Niet alleen een fabriek, maar een ecosysteem van productie en sociale innovatie. De Derde Sector fabriek combineert regeneratieve praktijken, circulaire economie en duurzame productie: een baanbrekend model dat fabricage, innovatie hubs en gemeenschapsruimtes integreert.\"",
        "sustainableLiving": "Regeneratieve Productie",
        "sustainableLivingDesc": "Fabricage geïntegreerd met de natuur",
        "activeCommunity": "Actieve Gemeenschap",
        "activeCommunityDesc": "Collectieve participatie en samenwerking",
        "collectiveSpaces": "Innovatie Ruimtes",
        "collectiveSpacesDesc": "Coworking en inclusieve innovatiegebieden"
      },
      "location": {
        "title": "Locatie & Geschiedenis",
        "description": "\"Gelegen in het hart van de Marche regio, biedt onze fabriek de perfecte mix van natuurlijke schoonheid en strategische toegankelijkheid. Gelegen op slechts 10 minuten van het historische centrum van Ascoli Piceno, de culturele hoofdstad van de regio, biedt het de perfecte omgeving voor duurzame productie.\"",
        "size": "Grootte & Schaal",
        "sizeDesc": "Ongeveer 50 hectare land gewijd aan duurzame productie, innovatieruimtes, gemeenschapsgebieden en regeneratieve praktijken",
        "history": "Historische Context",
        "historyDesc": "Gebouwd op oude productie tradities met een visie voor de toekomst, waarbij historisch vakmanschap wordt gecombineerd met moderne regeneratieve praktijken",
        "ascoliPiceno": "Ascoli Piceno",
        "ascoliPicenoDesc": "10 minuten van het historische centrum - culturele hoofdstad van de Marche regio met Renaissance architectuur en lokale tradities",
        "adriaticCoast": "Adriatische Kust",
        "adriaticCoastDesc": "30 minuten rijden naar prachtige stranden en kuststeden langs de Adriatische Zee",
        "skiArea": "Ski Gebieden",
        "skiAreaDesc": "30 minuten naar nabijgelegen skigebieden in de Sibillini Bergen, met wintersport en bergactiviteiten",
        "rome": "Rome",
        "romeDesc": "2,5 uur met de auto naar het centrum van Rome, dat je verbindt met Italië's culturele en zakelijke centrum",
        "sibilliniPark": "Sibillini Nationaal Park",
        "sibilliniParkDesc": "15 minuten naar de ingang van Sibillini Nationaal Park, met wandelpaden, wildlife observatie en bergactiviteiten",
        "lagaPark": "Laga Bergen Nationaal Park",
        "lagaParkDesc": "45 minuten naar Laga Bergen Nationaal Park, met oude bossen, watervallen en biodiversiteitsrijke landschappen",
        "accessibility": "Gemakkelijke Toegang",
        "accessibilityDesc": "Gemakkelijk bereikbaar via grote snelwegen, met handige verbindingen naar regionale en nationale transportnetwerken"
      },
      "communityCulture": {
        "title": "Gemeenschap en Cultuur",
        "description": "\"De fabriek wordt ook een cultureel podium: tentoonstellingen, conferenties, workshops. De natuur wordt het decor, en de gemeenschap de protagonist. Elk evenement wordt een kans om regeneratieve praktijken, samenwerkingen, sociale impact projecten te tonen.\"",
        "culturalEvents": "Culturele Evenementen",
        "culturalEventsDesc": "Tentoonstellingen, conferenties, workshops",
        "socialInnovation": "Sociale Innovatie",
        "socialInnovationDesc": "Opkomende nieuwe ideeën en samenwerkingen",
        "communityParticipation": "Gemeenschapsparticipatie",
        "communityParticipationDesc": "De gemeenschap als actieve protagonist"
      },
      "innovationCoworking": {
        "title": "Innovatie en Coworking",
        "description": "\"Een sociale innovatie hub omgeven door groen. Gedeelde werkruimtes, workshop ruimtes, plaatsen om Derde Sector startups en projecten te incuberen. Hier vallen leven en werken samen, waardoor een continue stroom tussen leven en innovatie ontstaat.\"",
        "workspaces": "Werkruimtes",
        "workspacesDesc": "Gedeelde coworking ruimtes omgeven door natuur, ontworpen om creativiteit en samenwerking te bevorderen",
        "workshopRooms": "Workshop Ruimtes",
        "workshopRoomsDesc": "Toegewijde ruimtes voor workshops, training en gemeenschapsbijeenkomsten",
        "startupIncubator": "Startup Incubator",
        "startupIncubatorDesc": "Ondersteuning voor Derde Sector startups en sociale impact projecten"
      },
      "dailyLifeGastronomy": {
        "title": "Dagelijks Leven en Gastronomie",
        "description": "\"Een gemeenschapsrestaurant met km 0 keuken. Gedeelde tuinen die educatieve klaslokalen en duurzaamheidslaboratoria worden. Elke maaltijd vertelt het verhaal van het territorium en de relaties die het ondersteunen.\"",
        "communityRestaurant": "Gemeenschapsrestaurant",
        "communityRestaurantDesc": "Km 0 keuken met lokale en duurzame producten",
        "sharedGardens": "Gedeelde Tuinen",
        "sharedGardensDesc": "Educatieve ruimtes om te leren over duurzaamheid",
        "authenticRelationships": "Authentieke Relaties",
        "authenticRelationshipsDesc": "Elke maaltijd viert het territorium en menselijke verbindingen"
      },
      "wellnessNature": {
        "title": "Welzijn en Natuur",
        "description": "\"Welzijn is een integraal onderdeel van de ervaring: ontspanningsruimtes, ongerepte natuur, authentieke verbinding met jezelf en met anderen. Fabbrica del Terzo Settore is een plek waar tijd vertraagt, en werk zijn natuurlijke ritme herneemt.\"",
        "relaxationSpaces": "Ontspanningsruimtes",
        "relaxationSpacesDesc": "Gebieden gewijd aan rust en contemplatie",
        "unspoiledNature": "Ongerepte Natuur",
        "unspoiledNatureDesc": "Diepe verbinding met de natuurlijke omgeving",
        "authenticConnection": "Authentieke Verbinding",
        "authenticConnectionDesc": "Natuurlijk ritme van werk en oprechte relaties"
      },
      "futureInnovation": {
        "title": "Toekomst en Innovatie",
        "description": "\"Een levend laboratorium voor de toekomst van de Derde Sector. Een fabriek die nieuwe vormen van solidariteitseconomie, participatieve governance en milieuduurzaamheid inspireert. Fabbrica del Terzo Settore is niet alleen een plek om te werken: het is een plek om samen de toekomst te bouwen.\"",
        "solidarityEconomy": "Solidariteitseconomie",
        "solidarityEconomyDesc": "Nieuwe economische modellen gebaseerd op solidariteit en duurzaamheid",
        "participatoryGovernance": "Participatieve Governance",
        "participatoryGovernanceDesc": "Collectieve beslissingen en actieve gemeenschapsparticipatie",
        "environmentalSustainability": "Milieuduurzaamheid",
        "environmentalSustainabilityDesc": "Ecologische praktijken geïntegreerd in dagelijkse operaties",
        "buildFuture": "Fabbrica del Terzo Settore is niet alleen een plek om te werken: het is een plek om samen de toekomst te bouwen."
      },
      "villageVisions": {
        "title": "Fabriek Visies",
        "description": "Ontdek de concepten en visies van onze fabriek door deze beelden gemaakt op de werkelijke locatie."
      },
      "callToAction": {
        "title": "Word Lid van de Toekomst van de Derde Sector",
        "description": "Fabbrica del Terzo Settore is meer dan een fabriek: het is een beweging om samen een duurzame, inclusieve en innovatieve toekomst te bouwen. Jouw participatie kan het verschil maken.",
        "joinNow": "Word Nu Lid",
        "contactUs": "Neem Contact Op"
      }
    }
  }
};

export function useTranslation() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(false);

  // Change language
  const changeLanguage = (language: Language) => {
    if (language === currentLanguage) return;

    setIsLoading(true);
    setCurrentLanguage(language);

    // Store in localStorage for persistence and mark as manually set
    if (typeof window !== 'undefined') {
      localStorage.setItem('regenerativa-language', language);
      localStorage.setItem('regenerativa-language-manually-set', 'true');
      console.log('Language manually changed to:', language);
    }

    // Simulate loading delay for better UX
    setTimeout(() => setIsLoading(false), 200);
  };

  // Initialize on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initializeLanguage = () => {
      const supportedLanguages = ['en', 'es', 'fr', 'it', 'nl'];
      
      // Check if user has manually set a language before
      const storedLanguage = localStorage.getItem('regenerativa-language') as Language;
      const hasManuallySetLanguage = localStorage.getItem('regenerativa-language-manually-set') === 'true';
      
      if (storedLanguage && supportedLanguages.includes(storedLanguage) && hasManuallySetLanguage) {
        console.log('Loading manually set language:', storedLanguage);
        setCurrentLanguage(storedLanguage);
        return;
      }

      // Detect browser language - prioritize this for first-time visitors or when no manual setting exists
      const browserLang = navigator.language || navigator.languages?.[0] || 'en';
      const detectedLang = browserLang.split('-')[0] as Language;

      if (supportedLanguages.includes(detectedLang)) {
        console.log('Auto-detected browser language:', detectedLang, 'from', browserLang);
        setCurrentLanguage(detectedLang);
        // Store the detected language but don't mark as manually set
        localStorage.setItem('regenerativa-language', detectedLang);
        return;
      }

      // Try fallback languages from browser language preferences
      if (navigator.languages) {
        for (const lang of navigator.languages) {
          const fallbackLang = lang.split('-')[0] as Language;
          if (supportedLanguages.includes(fallbackLang)) {
            console.log('Auto-detected fallback browser language:', fallbackLang, 'from', lang);
            setCurrentLanguage(fallbackLang);
            localStorage.setItem('regenerativa-language', fallbackLang);
            return;
          }
        }
      }

      // Default to English if no supported language detected
      console.log('No supported browser language detected, defaulting to English');
      setCurrentLanguage('en');
      localStorage.setItem('regenerativa-language', 'en');
    };

    initializeLanguage();

    // Listen for language changes from LanguageSelector
    const handleLanguageChange = (event: CustomEvent) => {
      const newLanguage = event.detail.language as Language;
      if (newLanguage && ['en', 'es', 'fr', 'it', 'nl'].includes(newLanguage)) {
        console.log('Translation hook: Language changed to:', newLanguage);
        setCurrentLanguage(newLanguage);
      }
    };

    window.addEventListener('languageChanged', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
  }, []);

  // Translation function
  const t = (key: string, defaultValue?: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[currentLanguage];

    for (const k of keys) {
      if (value && typeof value === 'object' && value !== null) {
        value = (value as Record<string, unknown>)[k];
      } else {
        value = undefined;
        break;
      }
    }

    return typeof value === 'string' ? value : (defaultValue || key);
  };

  return {
    currentLanguage,
    changeLanguage,
    t,
    isLoading,
    availableLanguages: [
      { code: 'en' as Language, name: 'English', nativeName: 'English', flag: '🇺🇸' },
      { code: 'es' as Language, name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
      { code: 'fr' as Language, name: 'French', nativeName: 'Français', flag: '🇫🇷' },
      { code: 'it' as Language, name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
      { code: 'nl' as Language, name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' }
    ]
  };
}
