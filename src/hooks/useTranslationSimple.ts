'use client';

import { useState, useEffect } from 'react';
import { extraTranslations } from '@/translations/extra';

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
      "subtitle": "Connecting bioregional communities through regenerative practices and fractal collaboration.",
      "cta": "Join the Movement",
      "explore": "Explore Network"
    },
    "about": {
      "title": "What is ReGenerativa?",
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
        "title": "ReFactory",
        "subtitle": "ReFactory",
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
    "nav": {
      "vision": "Vision",
      "projects": "Projects",
      "sites": "Sites",
      "participate": "Participate",
      "theos": "Theos Protocol",
      "holons": "Holons",
      "flow": "Flow",
      "regenBusiness": "Regenerative Business",
      "agrosphere": "Agrosphere",
      "bootstrapNetwork": "Bootstrap Network",
      "networkMap": "Network Map",
      "liminalVillage": "Liminal Village",
      "brickFactory": "ReFactory",
      "casaSelva": "Casa Selva",
      "events": "Events",
      "join": "Join",
      "contribute": "Contribute",
      "visit": "Visit"
    },
    "homepage": {
      "hero": {
        "title": "Regenerate the World, Together",
        "subtitle": "A network of communities, technologies, and frameworks building the foundations for an ecological civilization.",
        "cta": "Join the Movement"
      },
      "vision": {
        "heading": "The world doesn't need more extraction. It needs regeneration.",
        "description": "Our economic systems deplete soil, fracture communities, and concentrate wealth. ReGenerativa offers a different path: open-source tools, living laboratories, and a coordination framework where every participant becomes a steward of ecological and social renewal.",
        "ecological": "Ecological",
        "ecologicalDesc": "Regenerating soil, water, and biodiversity through every project",
        "social": "Social",
        "socialDesc": "Building communities where cooperation replaces competition",
        "systemic": "Systemic",
        "systemicDesc": "Open frameworks that anyone can adopt and adapt locally"
      },
      "framework": {
        "heading": "The Framework",
        "subtitle": "Four interconnected systems for regenerative coordination at any scale",
        "theosTitle": "Theos Protocol",
        "theosDesc": "Digital coordination where collective needs become visible to all potential creators.",
        "theosCta": "Learn More",
        "holonsTitle": "Holons",
        "holonsDesc": "Fractal organization where each part is a whole—enabling coordination at every scale.",
        "holonsCta": "Discover Holons",
        "flowTitle": "Flow",
        "flowDesc": "Value flows aligned with natural cycles—from lunar rhythms to regenerative economics.",
        "flowCta": "Explore Flow",
        "regenBusinessTitle": "Regenerative Business",
        "regenBusinessDesc": "Three pathways—Purchase, Produce, or Attract—transforming consumers into producer-owners.",
        "regenBusinessCta": "Explore Pathways"
      },
      "agrosphere": {
        "badge": "Featured Project",
        "title": "Agrosphere Technology",
        "description": "Open-source farming equipment enabling small-scale organic agriculture at unprecedented density while actively regenerating ecosystems. The license requires 50% of land be dedicated to restoration.",
        "production": "Production in Italy & South Africa",
        "landReq": "50% land regeneration requirement",
        "cta": "Explore Agrosphere"
      },
      "bootstrap": {
        "badge": "Replicate the Model",
        "title": "Bootstrap Network",
        "description": "Everything we build is open-source and designed to be replicated. The Bootstrap Network provides the tools, templates, and support to start a regenerative node in your bioregion.",
        "startNode": "Start a Node",
        "viewMap": "View Network Map"
      },
      "events": {
        "title": "Upcoming Events",
        "subtitle": "Gatherings aligned with natural cycles",
        "viewAll": "View All Events"
      },
      "cta": {
        "heading": "Ready to regenerate?",
        "description": "Whether you want to visit a site, start a project, or build a regenerative node in your bioregion — there's a place for you.",
        "joinNetwork": "Join the Network",
        "visitSite": "Visit a Site"
      },
      "learnMore": "Learn More"
    },
    "footerSection": {
      "tagline": "Building EcoCivilization 2030 through integral regeneration and bioregional networks.",
      "joinMovement": "Join Movement",
      "framework": "Framework",
      "theosProtocol": "Theos Protocol",
      "holonStructure": "Holon Structure",
      "businessModel": "Business Model",
      "flowToken": "Flow Token",
      "projects": "Projects",
      "agrosphereTech": "Agrosphere Tech",
      "networkMap": "Network Map",
      "bootstrapNetwork": "Bootstrap Network",
      "aboutUs": "About Us",
      "participate": "Participate",
      "joinNetwork": "Join Network",
      "eventsLunations": "Events & Lunations",
      "contribute": "Contribute",
      "visitSites": "Visit Sites",
      "copyright": "© 2025–2026 ReGenerativa APS. All rights reserved.",
      "terms": "Terms",
      "privacy": "Privacy",
      "cookies": "Cookies"
    },
    "regenerativeVillage": {
      "hero": {
        "title": "Co-Creation Space for Symbiotic Innovation",
        "subtitle": "A co-living co-creation space where new collaborations and symbiotic relationships flourish through shared innovation and community-driven initiatives.",
        "description": "Discover our vision and join the community",
        "cta": "Join the Community",
        "discoverVision": "Discover the Vision"
      },
      "vision": {
        "title": "Vision",
        "description": "\"A thriving ecosystem where collaboration meets symbiosis. This co-creation space brings together diverse minds and initiatives to forge new partnerships, innovative solutions, and regenerative practices. Here, third-sector entities and changemakers unite to create synergistic relationships that benefit both community and environment.\"",
        "sustainableLiving": "Co-Creation & Making",
        "sustainableLivingDesc": "Collaborative maker space with shared tools and resources",
        "activeCommunity": "Co-Living Community",
        "activeCommunityDesc": "Shared living spaces fostering deep collaboration",
              "collectiveSpaces": "Community-Owned Initiatives",
      "collectiveSpacesDesc": "Third-sector entities and community-driven projects"
      },
      "location": {
        "title": "Location & History",
        "description": "\"Nestled in the heart of the Marche region, our co-creation space offers the perfect blend of natural beauty and strategic accessibility. Located just 10 minutes from the historic center of Ascoli Piceno, it provides the ideal environment where diverse collaborations can flourish and symbiotic relationships can take root.\"",
        "size": "Size & Scale",
        "sizeDesc": "About 3 hectares of land with building capacity of 6000m³, dedicated to co-creation workshops, collaboration spaces, community areas, and symbiotic innovation projects",
        "history": "Historical Context",
        "historyDesc": "Built on ancient traditions of craftsmanship and collaboration, with a vision for fostering new forms of symbiotic partnerships and regenerative innovation",
        "ascoliPiceno": "Ascoli Piceno",
        "ascoliPicenoDesc": "10 minutes",
        "adriaticCoast": "Adriatic Coast",
        "adriaticCoastDesc": "30 minutes",
        "skiArea": "Ski Areas",
        "skiAreaDesc": "30 minutes",
        "rome": "Rome",
        "romeDesc": "2.5 hours",
        "sibilliniPark": "Sibillini National Park",
        "sibilliniParkDesc": "15 minutes",
        "lagaPark": "Laga Mountains National Park",
        "lagaParkDesc": "45 minutes",
        "accessibility": "Easy Access",
        "accessibilityDesc": "Easy access via major highways",
        "airports": "Airports",
        "airportsDesc": "90 minutes"
      },
      "communityCulture": {
        "title": "Community and Culture",
        "description": "\"This co-creation space becomes a living stage for collaboration: exhibitions, conferences, workshops where new symbiotic relationships are born. Nature provides the backdrop as diverse communities converge to forge innovative partnerships and regenerative solutions.\"",
        "culturalEvents": "Cultural Events",
        "culturalEventsDesc": "Exhibitions, conferences, workshops",
        "socialInnovation": "Social Innovation",
        "socialInnovationDesc": "Emerging new ideas and collaborations",
        "communityParticipation": "Community Participation",
        "communityParticipationDesc": "The community as active protagonist"
      },
      "innovationCoworking": {
        "title": "Maker Space & Co-Creation Hub",
        "description": "\"A thriving ecosystem of collaboration immersed in nature. Shared workshops, co-creation labs, and spaces where symbiotic partnerships emerge organically. Here co-living and co-creating intersect, fostering continuous cross-pollination between diverse initiatives and innovative collaborations.\"",
        "workspaces": "Maker Workshops",
        "workspacesDesc": "Shared fabrication labs and maker spaces with tools for prototyping and creation",
        "workshopRooms": "Co-Creation Labs",
        "workshopRoomsDesc": "Collaborative spaces where community members co-create solutions and innovations",
        "startupIncubator": "Community Initiative Incubator",
        "startupIncubatorDesc": "Cultivating symbiotic partnerships between diverse entities and fostering collaborative social impact initiatives"
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
        "description": "\"Wellness is an integral part of the experience: relaxation spaces, authentic connection with oneself and with others. Fabbrica del Terzo Settore is a place where time slows down, and work resumes its natural rhythm.\"",
        "relaxationSpaces": "Relaxation Spaces",
        "relaxationSpacesDesc": "Areas dedicated to rest and contemplation",
        "authenticConnection": "Authentic Connection",
        "authenticConnectionDesc": "Natural rhythm of work and genuine relationships"
      },
      "futureInnovation": {
        "title": "Future and Innovation",
        "description": "\"A living laboratory where symbiotic innovation thrives. This co-creation space nurtures new forms of collaborative economies, participatory governance, and regenerative partnerships. More than a workplace—it's where diverse entities unite to co-create sustainable futures through meaningful collaboration.\"",
        "solidarityEconomy": "Solidarity Economy",
        "solidarityEconomyDesc": "New economic models based on solidarity and sustainability",
        "participatoryGovernance": "Participatory Governance",
        "participatoryGovernanceDesc": "Collective decisions and active community participation",
        "environmentalSustainability": "Environmental Sustainability",
        "environmentalSustainabilityDesc": "Ecological practices integrated into daily operations",
        "buildFuture": "This co-creation space is where symbiotic relationships flourish and collaborative futures are born."
      },
      "villageVisions": {
        "title": "Co-Creation Visions",
        "description": "Discover the concepts and visions of our collaborative space through these images made on the actual location."
      },
      "callToAction": {
        "title": "Join the Collaborative Revolution",
        "description": "This co-creation space is more than a place—it's a movement where diverse minds unite to forge symbiotic relationships and sustainable futures. Your unique contribution can spark new collaborations.",
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
      "subtitle": "Conectando comunidades biorregionales a través de prácticas regenerativas y colaboración fractal.",
      "cta": "Únete al Movimiento",
      "explore": "Explorar Red"
    },
    "about": {
      "title": "¿Qué es ReGenerativa?",
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
        "description": "Nuestro centro comunitario central donde la innovación se encuentra con la tradición, sirviendo como el corazón de nuestra red ReGenerativa."
      },
      "brickFactory": {
        "title": "ReFactory",
        "subtitle": "Fabbrica del Terzo Settore",
        "description": "Una fábrica del tercer sector enfocada en prácticas regenerativas, economía circular y metodologías de producción sostenible."
      },
      "casaSelva": {
        "title": "Casa Selva",
        "subtitle": "Santuario del bosque",
        "description": "Un santuario del bosque que combina arquitectura tradicional con vida ReGenerativa moderna en perfecta armonía con la naturaleza."
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
        "description": "Experimenta la vida ReGenerativa de primera mano en Liminal Village y otros nodos de la red.",
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
        "description": "Lanzando nuestro primer sistema de tokens de recibo para financiar proyectos de infraestructura ReGenerativa."
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
    "nav": {
      "vision": "Visión",
      "projects": "Proyectos",
      "sites": "Sitios",
      "participate": "Participar",
      "theos": "Protocolo Theos",
      "holons": "Holones",
      "flow": "Flow",
      "regenBusiness": "Negocio Regenerativo",
      "agrosphere": "Agrosphere",
      "bootstrapNetwork": "Red Bootstrap",
      "networkMap": "Mapa de Red",
      "liminalVillage": "Liminal Village",
      "brickFactory": "ReFactory",
      "casaSelva": "Casa Selva",
      "events": "Eventos",
      "join": "Unirse",
      "contribute": "Contribuir",
      "visit": "Visitar"
    },
    "homepage": {
      "hero": {
        "title": "Regenerar el Mundo, Juntos",
        "subtitle": "Una red de comunidades, tecnologías y marcos construyendo las bases de una civilización ecológica.",
        "cta": "Únete al Movimiento"
      },
      "vision": {
        "heading": "El mundo no necesita más extracción. Necesita regeneración.",
        "description": "Nuestros sistemas económicos agotan el suelo, fracturan comunidades y concentran la riqueza. ReGenerativa ofrece un camino diferente: herramientas de código abierto, laboratorios vivos y un marco de coordinación donde cada participante se convierte en guardián de la renovación ecológica y social.",
        "ecological": "Ecológico",
        "ecologicalDesc": "Regenerando suelo, agua y biodiversidad a través de cada proyecto",
        "social": "Social",
        "socialDesc": "Construyendo comunidades donde la cooperación reemplaza la competencia",
        "systemic": "Sistémico",
        "systemicDesc": "Marcos abiertos que cualquiera puede adoptar y adaptar localmente"
      },
      "framework": {
        "heading": "El Marco",
        "subtitle": "Cuatro sistemas interconectados para la coordinación regenerativa a cualquier escala",
        "theosTitle": "Protocolo Theos",
        "theosDesc": "Coordinación digital donde las necesidades colectivas se hacen visibles para todos los creadores potenciales.",
        "theosCta": "Saber Más",
        "holonsTitle": "Holones",
        "holonsDesc": "Organización fractal donde cada parte es un todo—posibilitando la coordinación a cada escala.",
        "holonsCta": "Descubrir Holones",
        "flowTitle": "Flow",
        "flowDesc": "Flujos de valor alineados con los ciclos naturales—desde ritmos lunares hasta economía regenerativa.",
        "flowCta": "Explorar Flow",
        "regenBusinessTitle": "Negocio Regenerativo",
        "regenBusinessDesc": "Tres vías—Comprar, Producir o Atraer—transformando consumidores en productores-propietarios.",
        "regenBusinessCta": "Explorar Vías"
      },
      "agrosphere": {
        "badge": "Proyecto Destacado",
        "title": "Tecnología Agrosphere",
        "description": "Equipamiento agrícola de código abierto que permite la agricultura orgánica a pequeña escala con una densidad sin precedentes mientras regenera activamente los ecosistemas. La licencia exige dedicar el 50% de la tierra a la restauración.",
        "production": "Producción en Italia y Sudáfrica",
        "landReq": "Requisito de 50% de regeneración del suelo",
        "cta": "Explorar Agrosphere"
      },
      "bootstrap": {
        "badge": "Replica el Modelo",
        "title": "Red Bootstrap",
        "description": "Todo lo que construimos es de código abierto y diseñado para ser replicado. La Red Bootstrap proporciona las herramientas, plantillas y apoyo para iniciar un nodo regenerativo en tu biorregión.",
        "startNode": "Iniciar un Nodo",
        "viewMap": "Ver Mapa de Red"
      },
      "events": {
        "title": "Próximos Eventos",
        "subtitle": "Encuentros alineados con los ciclos naturales",
        "viewAll": "Ver Todos los Eventos"
      },
      "cta": {
        "heading": "¿Listo para regenerar?",
        "description": "Ya sea que quieras visitar un sitio, iniciar un proyecto o construir un nodo regenerativo en tu biorregión — hay un lugar para ti.",
        "joinNetwork": "Unirse a la Red",
        "visitSite": "Visitar un Sitio"
      },
      "learnMore": "Saber Más"
    },
    "footerSection": {
      "tagline": "Construyendo EcoCivilización 2030 a través de la regeneración integral y redes biorregionales.",
      "joinMovement": "Unirse al Movimiento",
      "framework": "Marco",
      "theosProtocol": "Protocolo Theos",
      "holonStructure": "Estructura Holón",
      "businessModel": "Modelo de Negocio",
      "flowToken": "Token Flow",
      "projects": "Proyectos",
      "agrosphereTech": "Tecnología Agrosphere",
      "networkMap": "Mapa de Red",
      "bootstrapNetwork": "Red Bootstrap",
      "aboutUs": "Sobre Nosotros",
      "participate": "Participar",
      "joinNetwork": "Unirse a la Red",
      "eventsLunations": "Eventos y Lunaciones",
      "contribute": "Contribuir",
      "visitSites": "Visitar Sitios",
      "copyright": "© 2025–2026 ReGenerativa APS. Todos los derechos reservados.",
      "terms": "Términos",
      "privacy": "Privacidad",
      "cookies": "Cookies"
    },
    "regenerativeVillage": {
      "hero": {
        "title": "Espacio de Co-Creación para Innovación Simbiótica",
        "subtitle": "Un espacio de co-living y co-creación donde florecen nuevas colaboraciones y relaciones simbióticas a través de la innovación compartida.",
        "description": "Descubre nuestra visión y únete a la comunidad",
        "cta": "Únete a la Comunidad",
        "discoverVision": "Descubre la Visión"
      },
      "vision": {
        "title": "Visión",
        "description": "\"No solo una fábrica, sino un ecosistema próspero de co-living, co-creación e iniciativas comunitarias. Un maker space donde entidades del tercer sector colaboran en prácticas regenerativas, economía circular y producción sostenible: un modelo pionero que integra manufactura, centros de innovación y espacios de convivencia comunal.\"",
        "sustainableLiving": "Co-Creación y Fabricación",
        "sustainableLivingDesc": "Maker space colaborativo con herramientas y recursos compartidos",
        "activeCommunity": "Comunidad Co-Living",
        "activeCommunityDesc": "Espacios de convivencia compartida que fomentan la colaboración profunda",
              "collectiveSpaces": "Iniciativas Comunitarias",
      "collectiveSpacesDesc": "Entidades del tercer sector y proyectos impulsados por la comunidad"
      },
      "location": {
        "title": "Ubicación e Historia",
        "description": "\"Ubicado en el corazón de la región de las Marcas, nuestro pueblo ofrece la combinación perfecta de belleza natural y accesibilidad estratégica. Situado a solo 10 minutos del centro histórico de Ascoli Piceno, la capital cultural de la región, brinda a los residentes tanto tranquilidad como comodidad urbana.\"",
        "size": "Tamaño y Escala",
        "sizeDesc": "Alrededor de 3 hectáreas de terreno con capacidad de construcción de 6000m³, dedicadas al desarrollo sostenible, espacios comunitarios y prácticas regenerativas",
        "history": "Contexto Histórico",
        "historyDesc": "Construido sobre antiguas tradiciones agrícolas con una visión para el futuro, combinando sabiduría histórica con prácticas regenerativas modernas",
        "ascoliPiceno": "Ascoli Piceno",
        "ascoliPicenoDesc": "10 minutos",
        "adriaticCoast": "Costa Adriática",
        "adriaticCoastDesc": "30 minutos",
        "skiArea": "Estaciones de Esquí",
        "skiAreaDesc": "30 minutos",
        "rome": "Roma",
        "romeDesc": "2.5 horas",
        "sibilliniPark": "Parque Nacional Sibillini",
        "sibilliniParkDesc": "15 minutos",
        "lagaPark": "Parque Nacional Montes Laga",
        "lagaParkDesc": "45 minutos",
        "accessibility": "Acceso por Autopista",
        "accessibilityDesc": "Fácil acceso vía autopistas principales",
        "airports": "Aeropuertos",
        "airportsDesc": "90 minutos"
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
        "title": "Maker Space y Centro de Co-Creación",
        "description": "\"Un maker space próspero y centro de co-creación inmerso en el verde. Talleres compartidos, laboratorios de fabricación y espacios para incubar iniciativas comunitarias del tercer sector. Aquí co-living y co-creación coinciden, fomentando un flujo continuo entre vida comunal e innovación colaborativa.\"",
        "workspaces": "Talleres de Fabricación",
        "workspacesDesc": "Laboratorios de fabricación y maker spaces compartidos con herramientas para prototipado y creación",
        "workshopRooms": "Laboratorios de Co-Creación",
        "workshopRoomsDesc": "Espacios colaborativos donde los miembros de la comunidad co-crean soluciones e innovaciones",
        "startupIncubator": "Incubadora de Iniciativas Comunitarias",
        "startupIncubatorDesc": "Fomentando entidades comunitarias del tercer sector e iniciativas de impacto social"
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
        "description": "\"El bienestar es parte integral de la experiencia: espacios de relajación, conexión auténtica consigo mismo y con los demás. Aldea ReGenerativa es un pueblo donde el tiempo se ralentiza, y la vida retoma su ritmo natural.\"",
        "relaxationSpaces": "Espacios de Relajación",
        "relaxationSpacesDesc": "Áreas dedicadas al descanso y contemplación",
        "authenticConnection": "Conexión Auténtica",
        "authenticConnectionDesc": "Ritmo natural de la vida y relaciones genuinas"
      },
      "futureInnovation": {
        "title": "Futuro e Innovación",
        "description": "\"Un laboratorio vivo para el futuro del Tercer Sector. Un pueblo que inspira nuevas formas de economía solidaria, gobernanza participativa y sostenibilidad ambiental. Aldea ReGenerativa no es solo un lugar para vivir: es un lugar para construir el futuro juntos.\"",
        "solidarityEconomy": "Economía Solidaria",
        "solidarityEconomyDesc": "Nuevos modelos económicos basados en solidaridad y sostenibilidad",
        "participatoryGovernance": "Gobernanza Participativa",
        "participatoryGovernanceDesc": "Decisiones colectivas y participación activa de la comunidad",
        "environmentalSustainability": "Sostenibilidad Ambiental",
        "environmentalSustainabilityDesc": "Prácticas ecológicas integradas en la vida cotidiana",
        "buildFuture": "Aldea ReGenerativa no es solo un lugar para vivir: es un lugar para construir el futuro juntos."
      },
      "villageVisions": {
        "title": "Visiones del Pueblo",
        "description": "Descubre los conceptos y visiones de nuestro pueblo a través de estas imágenes realizadas en el lugar mismo."
      },
      "callToAction": {
        "title": "Únete al Futuro del Tercer Sector",
        "description": "Aldea ReGenerativa es más que un pueblo: es un movimiento para construir juntos un futuro sostenible, inclusivo e innovador. Tu participación puede marcar la diferencia.",
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
      "subtitle": "Connecter les communautés biorégionales à travers les pratiques régénératives et la collaboration fractale.",
      "cta": "Rejoindre le Mouvement",
      "explore": "Explorer le Réseau"
    },
    "about": {
      "title": "Qu'est-ce que ReGenerativa ?",
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
        "title": "ReFactory",
        "subtitle": "Fabbrica del Terzo Settore",
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
    "nav": {
      "vision": "Vision",
      "projects": "Projets",
      "sites": "Sites",
      "participate": "Participer",
      "theos": "Protocole Theos",
      "holons": "Holons",
      "flow": "Flow",
      "regenBusiness": "Économie Régénérative",
      "agrosphere": "Agrosphere",
      "bootstrapNetwork": "Réseau Bootstrap",
      "networkMap": "Carte du Réseau",
      "liminalVillage": "Liminal Village",
      "brickFactory": "ReFactory",
      "casaSelva": "Casa Selva",
      "events": "Événements",
      "join": "Rejoindre",
      "contribute": "Contribuer",
      "visit": "Visiter"
    },
    "homepage": {
      "hero": {
        "title": "Régénérer le Monde, Ensemble",
        "subtitle": "Un réseau de communautés, de technologies et de cadres bâtissant les fondations d'une civilisation écologique.",
        "cta": "Rejoindre le Mouvement"
      },
      "vision": {
        "heading": "Le monde n'a pas besoin de plus d'extraction. Il a besoin de régénération.",
        "description": "Nos systèmes économiques épuisent les sols, fracturent les communautés et concentrent les richesses. ReGenerativa propose un autre chemin : des outils libres, des laboratoires vivants et un cadre de coordination où chaque participant devient gardien du renouveau écologique et social.",
        "ecological": "Écologique",
        "ecologicalDesc": "Régénérer sols, eaux et biodiversité à travers chaque projet",
        "social": "Social",
        "socialDesc": "Construire des communautés où la coopération remplace la compétition",
        "systemic": "Systémique",
        "systemicDesc": "Des cadres ouverts que chacun peut adopter et adapter localement"
      },
      "framework": {
        "heading": "Le Cadre",
        "subtitle": "Quatre systèmes interconnectés pour une coordination régénérative à toute échelle",
        "theosTitle": "Protocole Theos",
        "theosDesc": "Coordination numérique où les besoins collectifs deviennent visibles pour tous les créateurs potentiels.",
        "theosCta": "En Savoir Plus",
        "holonsTitle": "Holons",
        "holonsDesc": "Organisation fractale où chaque partie est un tout — permettant la coordination à toute échelle.",
        "holonsCta": "Découvrir les Holons",
        "flowTitle": "Flow",
        "flowDesc": "Flux de valeur alignés sur les cycles naturels — des rythmes lunaires à l'économie régénérative.",
        "flowCta": "Explorer Flow",
        "regenBusinessTitle": "Économie Régénérative",
        "regenBusinessDesc": "Trois voies — Acheter, Produire ou Attirer — transformant les consommateurs en producteurs-propriétaires.",
        "regenBusinessCta": "Explorer les Voies"
      },
      "agrosphere": {
        "badge": "Projet Phare",
        "title": "Technologie Agrosphere",
        "description": "Équipement agricole libre permettant l'agriculture biologique à petite échelle avec une densité sans précédent tout en régénérant activement les écosystèmes. La licence exige que 50% des terres soient dédiées à la restauration.",
        "production": "Production en Italie et en Afrique du Sud",
        "landReq": "Exigence de 50% de régénération des terres",
        "cta": "Explorer Agrosphere"
      },
      "bootstrap": {
        "badge": "Répliquer le Modèle",
        "title": "Réseau Bootstrap",
        "description": "Tout ce que nous construisons est libre et conçu pour être répliqué. Le Réseau Bootstrap fournit les outils, modèles et soutien pour lancer un nœud régénératif dans votre biorégion.",
        "startNode": "Lancer un Nœud",
        "viewMap": "Voir la Carte du Réseau"
      },
      "events": {
        "title": "Événements à Venir",
        "subtitle": "Rassemblements alignés sur les cycles naturels",
        "viewAll": "Voir Tous les Événements"
      },
      "cta": {
        "heading": "Prêt à régénérer ?",
        "description": "Que vous souhaitiez visiter un site, lancer un projet ou construire un nœud régénératif dans votre biorégion — il y a une place pour vous.",
        "joinNetwork": "Rejoindre le Réseau",
        "visitSite": "Visiter un Site"
      },
      "learnMore": "En Savoir Plus"
    },
    "footerSection": {
      "tagline": "Bâtir l'ÉcoCivilisation 2030 par la régénération intégrale et les réseaux biorégionaux.",
      "joinMovement": "Rejoindre le Mouvement",
      "framework": "Cadre",
      "theosProtocol": "Protocole Theos",
      "holonStructure": "Structure Holon",
      "businessModel": "Modèle Économique",
      "flowToken": "Token Flow",
      "projects": "Projets",
      "agrosphereTech": "Technologie Agrosphere",
      "networkMap": "Carte du Réseau",
      "bootstrapNetwork": "Réseau Bootstrap",
      "aboutUs": "À Propos",
      "participate": "Participer",
      "joinNetwork": "Rejoindre le Réseau",
      "eventsLunations": "Événements et Lunaisons",
      "contribute": "Contribuer",
      "visitSites": "Visiter les Sites",
      "copyright": "© 2025–2026 ReGenerativa APS. Tous droits réservés.",
      "terms": "Conditions",
      "privacy": "Confidentialité",
      "cookies": "Cookies"
    },
    "regenerativeVillage": {
      "hero": {
        "title": "Espace de Co-Création pour l'Innovation Symbiotique",
        "subtitle": "Un espace de co-living et co-création où de nouvelles collaborations et relations symbiotiques s'épanouissent par l'innovation partagée.",
        "description": "Découvrez notre vision et rejoignez la communauté",
        "cta": "Rejoignez la Communauté",
        "discoverVision": "Découvrez la Vision"
      },
      "vision": {
        "title": "Vision",
        "description": "\"Pas seulement une fabrique, mais un écosystème florissant de co-living, co-création et initiatives communautaires. Un maker space où les entités du tiers secteur collaborent sur les pratiques régénératives, économie circulaire et production durable : un modèle pionnier qui intègre manufacture, centres d'innovation et espaces de vie communale.\"",
        "sustainableLiving": "Co-Création et Fabrication",
        "sustainableLivingDesc": "Maker space collaboratif avec outils et ressources partagés",
        "activeCommunity": "Communauté Co-Living",
        "activeCommunityDesc": "Espaces de vie partagés favorisant la collaboration profonde",
        "collectiveSpaces": "Initiatives Communautaires",
        "collectiveSpacesDesc": "Entités du tiers secteur et projets communautaires"
      },
      "location": {
        "title": "Emplacement et Histoire",
        "description": "\"Niché au cœur de la région des Marches, notre village offre le mélange parfait de beauté naturelle et d'accessibilité stratégique. Situé à seulement 10 minutes du centre historique d'Ascoli Piceno, la capitale culturelle de la région, il offre aux résidents à la fois tranquillité et commodité urbaine.\"",
        "size": "Taille et Échelle",
        "sizeDesc": "Environ 3 hectares de terrain avec une capacité de construction de 6000m³, dédiés au développement durable, aux espaces communautaires et aux pratiques régénératives",
        "history": "Contexte Historique",
        "historyDesc": "Construit sur d'anciennes traditions agricoles avec une vision pour l'avenir, combinant la sagesse historique avec des pratiques régénératives modernes",
        "ascoliPiceno": "Ascoli Piceno",
        "ascoliPicenoDesc": "10 minutes",
        "adriaticCoast": "Côte Adriatique",
        "adriaticCoastDesc": "30 minutes",
        "skiArea": "Stations de Ski",
        "skiAreaDesc": "30 minutes",
        "rome": "Rome",
        "romeDesc": "2.5 heures",
        "sibilliniPark": "Parc National des Sibillini",
        "sibilliniParkDesc": "15 minutes",
        "lagaPark": "Parc National des Monts Laga",
        "lagaParkDesc": "45 minutes",
        "accessibility": "Accès Autoroutier",
        "accessibilityDesc": "Accès facile via les autoroutes principales",
        "airports": "Aéroports",
        "airportsDesc": "90 minutes"
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
        "title": "Maker Space et Centre de Co-Création",
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
        "description": "\"Le bien-être fait partie intégrante de l'expérience : espaces de relaxation, connexion authentique avec soi-même et avec les autres. Fabrique du Tiers Secteur est un lieu où le temps ralentit, et le travail reprend son rythme naturel.\"",
        "relaxationSpaces": "Espaces de Relaxation",
        "relaxationSpacesDesc": "Espaces dédiés au repos et à la contemplation",
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
      "subtitle": "Connettere comunità bioregionali attraverso pratiche rigenerative e collaborazione frattale.",
      "cta": "Unisciti al Movimento",
      "explore": "Esplora la Rete"
    },
    "about": {
      "title": "Cos'è ReGenerativa?",
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
        "title": "ReFactory",
        "subtitle": "Fabbrica del Terzo Settore",
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
    "nav": {
      "vision": "Visione",
      "projects": "Progetti",
      "sites": "Siti",
      "participate": "Partecipa",
      "theos": "Protocollo Theos",
      "holons": "Holons",
      "flow": "Flow",
      "regenBusiness": "Business Rigenerativo",
      "agrosphere": "Agrosphere",
      "bootstrapNetwork": "Rete Bootstrap",
      "networkMap": "Mappa della Rete",
      "liminalVillage": "Liminal Village",
      "brickFactory": "ReFactory",
      "casaSelva": "Casa Selva",
      "events": "Eventi",
      "join": "Unisciti",
      "contribute": "Contribuisci",
      "visit": "Visita"
    },
    "homepage": {
      "hero": {
        "title": "Rigenerare il Mondo, Insieme",
        "subtitle": "Una rete di comunità, tecnologie e framework che costruiscono le fondamenta di una civiltà ecologica.",
        "cta": "Unisciti al Movimento"
      },
      "vision": {
        "heading": "Il mondo non ha bisogno di più estrazione. Ha bisogno di rigenerazione.",
        "description": "I nostri sistemi economici impoveriscono il suolo, fratturano le comunità e concentrano la ricchezza. ReGenerativa offre un percorso diverso: strumenti open source, laboratori viventi e un quadro di coordinamento dove ogni partecipante diventa custode del rinnovamento ecologico e sociale.",
        "ecological": "Ecologico",
        "ecologicalDesc": "Rigenerando suolo, acqua e biodiversità attraverso ogni progetto",
        "social": "Sociale",
        "socialDesc": "Costruendo comunità dove la cooperazione sostituisce la competizione",
        "systemic": "Sistemico",
        "systemicDesc": "Framework aperti che chiunque può adottare e adattare localmente"
      },
      "framework": {
        "heading": "Il Framework",
        "subtitle": "Quattro sistemi interconnessi per il coordinamento rigenerativo a qualsiasi scala",
        "theosTitle": "Protocollo Theos",
        "theosDesc": "Coordinamento digitale dove i bisogni collettivi diventano visibili a tutti i potenziali creatori.",
        "theosCta": "Scopri di Più",
        "holonsTitle": "Holons",
        "holonsDesc": "Organizzazione frattale dove ogni parte è un tutto — abilitando il coordinamento a ogni scala.",
        "holonsCta": "Scopri gli Holons",
        "flowTitle": "Flow",
        "flowDesc": "Flussi di valore allineati ai cicli naturali — dai ritmi lunari all'economia rigenerativa.",
        "flowCta": "Esplora Flow",
        "regenBusinessTitle": "Business Rigenerativo",
        "regenBusinessDesc": "Tre percorsi — Acquistare, Produrre o Attrarre — trasformando consumatori in produttori-proprietari.",
        "regenBusinessCta": "Esplora i Percorsi"
      },
      "agrosphere": {
        "badge": "Progetto in Primo Piano",
        "title": "Tecnologia Agrosphere",
        "description": "Attrezzatura agricola open source che permette l'agricoltura biologica su piccola scala con densità senza precedenti rigenerando attivamente gli ecosistemi. La licenza richiede che il 50% della terra sia dedicato al ripristino.",
        "production": "Produzione in Italia e Sudafrica",
        "landReq": "Requisito di 50% di rigenerazione del suolo",
        "cta": "Esplora Agrosphere"
      },
      "bootstrap": {
        "badge": "Replica il Modello",
        "title": "Rete Bootstrap",
        "description": "Tutto ciò che costruiamo è open source e progettato per essere replicato. La Rete Bootstrap fornisce strumenti, modelli e supporto per avviare un nodo rigenerativo nella tua bioregione.",
        "startNode": "Avvia un Nodo",
        "viewMap": "Vedi Mappa della Rete"
      },
      "events": {
        "title": "Prossimi Eventi",
        "subtitle": "Incontri allineati ai cicli naturali",
        "viewAll": "Vedi Tutti gli Eventi"
      },
      "cta": {
        "heading": "Pronto a rigenerare?",
        "description": "Che tu voglia visitare un sito, avviare un progetto o costruire un nodo rigenerativo nella tua bioregione — c'è un posto per te.",
        "joinNetwork": "Unisciti alla Rete",
        "visitSite": "Visita un Sito"
      },
      "learnMore": "Scopri di Più"
    },
    "footerSection": {
      "tagline": "Costruendo l'EcoCiviltà 2030 attraverso la rigenerazione integrale e le reti bioregionali.",
      "joinMovement": "Unisciti al Movimento",
      "framework": "Framework",
      "theosProtocol": "Protocollo Theos",
      "holonStructure": "Struttura Holon",
      "businessModel": "Modello di Business",
      "flowToken": "Token Flow",
      "projects": "Progetti",
      "agrosphereTech": "Tecnologia Agrosphere",
      "networkMap": "Mappa della Rete",
      "bootstrapNetwork": "Rete Bootstrap",
      "aboutUs": "Chi Siamo",
      "participate": "Partecipa",
      "joinNetwork": "Unisciti alla Rete",
      "eventsLunations": "Eventi e Lunazioni",
      "contribute": "Contribuisci",
      "visitSites": "Visita i Siti",
      "copyright": "© 2025–2026 ReGenerativa APS. Tutti i diritti riservati.",
      "terms": "Termini",
      "privacy": "Privacy",
      "cookies": "Cookie"
    },
    "regenerativeVillage": {
      "hero": {
        "title": "ReFactory",
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
        "sizeDesc": "Circa 3 ettari di terreno con capacità edificatoria di 6000m³, dedicati alla produzione sostenibile, spazi di innovazione, aree comunitarie e pratiche rigenerative",
        "history": "Contesto Storico",
        "historyDesc": "Costruita su antiche tradizioni manifatturiere con una visione per il futuro, combinando artigianato storico con pratiche rigenerative moderne",
        "ascoliPiceno": "Ascoli Piceno",
        "ascoliPicenoDesc": "10 minuti",
        "adriaticCoast": "Costa Adriatica",
        "adriaticCoastDesc": "30 minuti",
        "skiArea": "Aree Sciistiche",
        "skiAreaDesc": "30 minuti",
        "rome": "Roma",
        "romeDesc": "2.5 ore",
        "sibilliniPark": "Parco Nazionale dei Sibillini",
        "sibilliniParkDesc": "15 minuti",
        "lagaPark": "Parco Nazionale dei Monti della Laga",
        "lagaParkDesc": "45 minuti",
        "accessibility": "Accesso Facile",
        "accessibilityDesc": "Facile accesso tramite autostrade principali",
        "airports": "Aeroporti",
        "airportsDesc": "90 minuti"
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
        "title": "Maker Space e Centro di Co-Creazione",
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
        "description": "\"Il benessere è parte integrante dell'esperienza: spazi di relax, connessione autentica con se stessi e con gli altri. La Fabbrica del Terzo Settore è un luogo dove il tempo rallenta, e il lavoro riprende il suo ritmo naturale.\"",
        "relaxationSpaces": "Spazi di Relax",
        "relaxationSpacesDesc": "Aree dedicate al riposo e alla contemplazione",
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
      "subtitle": "Bioregionale gemeenschappen verbinden door regeneratieve praktijken en fractale samenwerking.",
      "cta": "Word Lid van de Beweging",
      "explore": "Verken Netwerk"
    },
    "about": {
      "title": "Wat is ReGenerativa?",
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
        "title": "ReFactory",
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
    "nav": {
      "vision": "Visie",
      "projects": "Projecten",
      "sites": "Locaties",
      "participate": "Deelnemen",
      "theos": "Theos Protocol",
      "holons": "Holons",
      "flow": "Flow",
      "regenBusiness": "Regeneratief Ondernemen",
      "agrosphere": "Agrosphere",
      "bootstrapNetwork": "Bootstrap Netwerk",
      "networkMap": "Netwerkkaart",
      "liminalVillage": "Liminal Village",
      "brickFactory": "ReFactory",
      "casaSelva": "Casa Selva",
      "events": "Evenementen",
      "join": "Doe Mee",
      "contribute": "Bijdragen",
      "visit": "Bezoek"
    },
    "homepage": {
      "hero": {
        "title": "Regenereer de Wereld, Samen",
        "subtitle": "Een netwerk van gemeenschappen, technologieën en kaders die de fundamenten bouwen voor een ecologische beschaving.",
        "cta": "Word Lid van de Beweging"
      },
      "vision": {
        "heading": "De wereld heeft geen verdere extractie nodig. Ze heeft regeneratie nodig.",
        "description": "Onze economische systemen putten de bodem uit, versplinteren gemeenschappen en concentreren rijkdom. ReGenerativa biedt een ander pad: open-source gereedschap, levende laboratoria en een coördinatiekader waarin elke deelnemer hoeder wordt van ecologische en sociale vernieuwing.",
        "ecological": "Ecologisch",
        "ecologicalDesc": "Bodem, water en biodiversiteit regenereren door elk project",
        "social": "Sociaal",
        "socialDesc": "Gemeenschappen bouwen waar samenwerking competitie vervangt",
        "systemic": "Systemisch",
        "systemicDesc": "Open kaders die iedereen lokaal kan overnemen en aanpassen"
      },
      "framework": {
        "heading": "Het Kader",
        "subtitle": "Vier onderling verbonden systemen voor regeneratieve coördinatie op elke schaal",
        "theosTitle": "Theos Protocol",
        "theosDesc": "Digitale coördinatie waarbij collectieve behoeften zichtbaar worden voor alle potentiële makers.",
        "theosCta": "Meer Informatie",
        "holonsTitle": "Holons",
        "holonsDesc": "Fractale organisatie waarbij elk deel een geheel is — coördinatie op elke schaal mogelijk makend.",
        "holonsCta": "Ontdek Holons",
        "flowTitle": "Flow",
        "flowDesc": "Waardestromen afgestemd op natuurlijke cycli — van maanritmes tot regeneratieve economie.",
        "flowCta": "Verken Flow",
        "regenBusinessTitle": "Regeneratief Ondernemen",
        "regenBusinessDesc": "Drie paden — Kopen, Produceren of Aantrekken — consumenten omvormen tot producent-eigenaren.",
        "regenBusinessCta": "Verken de Paden"
      },
      "agrosphere": {
        "badge": "Uitgelicht Project",
        "title": "Agrosphere Technologie",
        "description": "Open-source landbouwapparatuur die kleinschalige biologische landbouw mogelijk maakt met ongekende dichtheid terwijl ecosystemen actief worden geregenereerd. De licentie vereist dat 50% van het land wordt gewijd aan herstel.",
        "production": "Productie in Italië en Zuid-Afrika",
        "landReq": "Vereiste van 50% landregeneratie",
        "cta": "Verken Agrosphere"
      },
      "bootstrap": {
        "badge": "Repliceer het Model",
        "title": "Bootstrap Netwerk",
        "description": "Alles wat we bouwen is open source en ontworpen om te worden gerepliceerd. Het Bootstrap Netwerk biedt de tools, sjablonen en ondersteuning om een regeneratief knooppunt in jouw bioregio te starten.",
        "startNode": "Start een Knooppunt",
        "viewMap": "Bekijk Netwerkkaart"
      },
      "events": {
        "title": "Aankomende Evenementen",
        "subtitle": "Bijeenkomsten afgestemd op natuurlijke cycli",
        "viewAll": "Bekijk Alle Evenementen"
      },
      "cta": {
        "heading": "Klaar om te regenereren?",
        "description": "Of je nu een locatie wilt bezoeken, een project wilt starten of een regeneratief knooppunt wilt bouwen in jouw bioregio — er is een plek voor jou.",
        "joinNetwork": "Word Lid van het Netwerk",
        "visitSite": "Bezoek een Locatie"
      },
      "learnMore": "Meer Informatie"
    },
    "footerSection": {
      "tagline": "EcoBeschaving 2030 bouwen door integrale regeneratie en bioregionale netwerken.",
      "joinMovement": "Word Lid van de Beweging",
      "framework": "Kader",
      "theosProtocol": "Theos Protocol",
      "holonStructure": "Holon Structuur",
      "businessModel": "Bedrijfsmodel",
      "flowToken": "Flow Token",
      "projects": "Projecten",
      "agrosphereTech": "Agrosphere Tech",
      "networkMap": "Netwerkkaart",
      "bootstrapNetwork": "Bootstrap Netwerk",
      "aboutUs": "Over Ons",
      "participate": "Deelnemen",
      "joinNetwork": "Word Lid van het Netwerk",
      "eventsLunations": "Evenementen & Lunaties",
      "contribute": "Bijdragen",
      "visitSites": "Bezoek Locaties",
      "copyright": "© 2025–2026 ReGenerativa APS. Alle rechten voorbehouden.",
      "terms": "Voorwaarden",
      "privacy": "Privacy",
      "cookies": "Cookies"
    },
    "regenerativeVillage": {
      "hero": {
        "title": "ReFactory",
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
        "sizeDesc": "Ongeveer 3 hectare land met bouwcapaciteit van 6000m³, gewijd aan duurzame productie, innovatieruimtes, gemeenschapsgebieden en regeneratieve praktijken",
        "history": "Historische Context",
        "historyDesc": "Gebouwd op oude productie tradities met een visie voor de toekomst, waarbij historisch vakmanschap wordt gecombineerd met moderne regeneratieve praktijken",
        "ascoliPiceno": "Ascoli Piceno",
        "ascoliPicenoDesc": "10 minuten",
        "adriaticCoast": "Adriatische Kust",
        "adriaticCoastDesc": "30 minuten",
        "skiArea": "Ski Gebieden",
        "skiAreaDesc": "30 minuten",
        "rome": "Rome",
        "romeDesc": "2,5 uur",
        "sibilliniPark": "Sibillini Nationaal Park",
        "sibilliniParkDesc": "15 minuten",
        "lagaPark": "Laga Bergen Nationaal Park",
        "lagaParkDesc": "45 minuten",
        "accessibility": "Gemakkelijke Toegang",
        "accessibilityDesc": "Gemakkelijke toegang via grote snelwegen",
        "airports": "Luchthavens",
        "airportsDesc": "90 minuten"
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
        "title": "Maker Space en Co-Creatie Hub",
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
        "description": "\"Welzijn is een integraal onderdeel van de ervaring: ontspanningsruimtes, authentieke verbinding met jezelf en met anderen. Fabbrica del Terzo Settore is een plek waar tijd vertraagt, en werk zijn natuurlijke ritme herneemt.\"",
        "relaxationSpaces": "Ontspanningsruimtes",
        "relaxationSpacesDesc": "Gebieden gewijd aan rust en contemplatie",
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
      localStorage.setItem('ReGenerativa-language', language);
      localStorage.setItem('ReGenerativa-language-manually-set', 'true');
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
      const storedLanguage = localStorage.getItem('ReGenerativa-language') as Language;
      const hasManuallySetLanguage = localStorage.getItem('ReGenerativa-language-manually-set') === 'true';
      
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
        localStorage.setItem('ReGenerativa-language', detectedLang);
        return;
      }

      // Try fallback languages from browser language preferences
      if (navigator.languages) {
        for (const lang of navigator.languages) {
          const fallbackLang = lang.split('-')[0] as Language;
          if (supportedLanguages.includes(fallbackLang)) {
            console.log('Auto-detected fallback browser language:', fallbackLang, 'from', lang);
            setCurrentLanguage(fallbackLang);
            localStorage.setItem('ReGenerativa-language', fallbackLang);
            return;
          }
        }
      }

      // Default to English if no supported language detected
      console.log('No supported browser language detected, defaulting to English');
      setCurrentLanguage('en');
      localStorage.setItem('ReGenerativa-language', 'en');
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

  // Translation function — checks extra translations first (newer overrides)
  const resolve = (obj: unknown, keys: string[]): string | undefined => {
    let v: unknown = obj;
    for (const k of keys) {
      if (v && typeof v === 'object' && v !== null) {
        v = (v as Record<string, unknown>)[k];
      } else return undefined;
    }
    return typeof v === 'string' ? v : undefined;
  };

  const t = (key: string, defaultValue?: string): string => {
    const keys = key.split('.');
    return resolve(extraTranslations[currentLanguage], keys)
      ?? resolve(translations[currentLanguage], keys)
      ?? resolve(extraTranslations['en'], keys)
      ?? resolve(translations['en'], keys)
      ?? defaultValue
      ?? key;
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
