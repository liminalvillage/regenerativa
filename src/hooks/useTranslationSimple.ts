'use client';

import { useState, useEffect } from 'react';

type Language = 'en' | 'es' | 'fr';

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
      "title": "Regenerativa",
      "subtitle": "A global initiative for integral regeneration",
      "description": "Join the movement to build sustainable, resilient communities through bioregional networks and regenerative practices.",
      "cta": "Join the Movement"
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
      "title": "Regenerativa",
      "subtitle": "Una iniciativa global para la regeneración integral",
      "description": "Únete al movimiento para construir comunidades sostenibles y resilientes a través de redes bioregionales y prácticas regenerativas.",
      "cta": "Únete al Movimiento"
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
      "title": "Regenerativa",
      "subtitle": "Une initiative mondiale pour la régénération intégrale",
      "description": "Rejoignez le mouvement pour construire des communautés durables et résilientes à travers des réseaux biogéographiques et des pratiques régénératives.",
      "cta": "Rejoignez le Mouvement"
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

    // Store in localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('regenerativa-language', language);
    }

    // Simulate loading delay for better UX
    setTimeout(() => setIsLoading(false), 200);
  };

  // Initialize on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initializeLanguage = () => {
      // Check for stored language preference first
      const storedLanguage = localStorage.getItem('regenerativa-language') as Language;
      if (storedLanguage && ['en', 'es', 'fr'].includes(storedLanguage)) {
        console.log('Loading stored language:', storedLanguage);
        setCurrentLanguage(storedLanguage);
        return;
      }

      // Detect browser language
      const browserLang = navigator.language || 'en';
      const detectedLang = browserLang.split('-')[0] as Language;

      if (['en', 'es', 'fr'].includes(detectedLang)) {
        console.log('Detected browser language:', detectedLang);
        setCurrentLanguage(detectedLang);
        // Store for future visits
        localStorage.setItem('regenerativa-language', detectedLang);
        return;
      }

      // Default to English
      setCurrentLanguage('en');
      localStorage.setItem('regenerativa-language', 'en');
    };

    initializeLanguage();
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
      { code: 'fr' as Language, name: 'French', nativeName: 'Français', flag: '🇫🇷' }
    ]
  };
}
