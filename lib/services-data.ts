
export interface ServiceData {
    id: string;
    title: string;
    slug: string;
    description: string;
    details: string[];
    features?: string[];
    image: string;
    icon?: string;
}

export const servicesData: ServiceData[] = [
    {
        id: "transit-logistique",
        title: "Transit, Logistique & Chaîne d’Approvisionnement",
        slug: "transit-logistique",
        description: "Des solutions logistiques globales pour optimiser vos flux de marchandises.",
        details: [
            "Gestion complète des opérations de transit et de dédouanement import/export.",
            "Transport national et international (terrestre, maritime, aérien).",
            "Solutions d'entreposage, de stockage et de distribution.",
            "Optimisation de la chaîne d'approvisionnement et conseil logistique.",
            "Suivi en temps réel et sécurisation des marchandises.",
        ],
        image: "/images/hero-logistics.jpg",
    },
    {
        id: "commerce-general",
        title: "Commerce Général & Import-Export",
        slug: "commerce-general",
        description: "Nous développons des activités commerciales diversifiées afin de répondre aux besoins des marchés locaux, régionaux et internationaux.",
        details: [
            "Import-export et distribution de marchandises.",
            "Fourniture de matériels et équipements BTP et industriels.",
            "Assurances (vie, santé, automobile, entreprises, gestion des sinistres).",
            "Agrobusiness et promotion immobilière.",
            "Billetterie multiservices.",
            "Distribution d’hydrocarbures et services associés.",
            "Vente en gros et au détail de produits alimentaires, électroniques, textiles et équipements.",
            "Fournitures sur mesure pour entreprises, institutions et projets spécifiques.",
        ],
        image: "/images/commerce-general.jpg",
    },
    {
        id: "construction-btp",
        title: "Construction, BTP et Infrastructures",
        slug: "construction-btp",
        description: "Nous intervenons à toutes les étapes des projets de construction et d’infrastructures, dans le respect des normes de qualité et de sécurité.",
        details: [
            "Construction d’immeubles résidentiels, commerciaux et administratifs.",
            "Travaux publics : routes, ponts, réseaux électriques, hydrauliques et d’assainissement.",
            "Réhabilitation et rénovation d’ouvrages existants.",
            "Services d’ingénierie, d’architecture, d’études techniques et de suivi de chantiers.",
        ],
        image: "/images/hero-logistics.jpg", // Placeholder
    },
    {
        id: "agriculture-agroindustrie",
        title: "Agriculture, Élevage et Agro-industrie",
        slug: "agriculture-agroindustrie",
        description: "Contribution active au développement agricole durable par la production, la transformation et l'innovation.",
        details: [
            "Production agricole (cultures vivrières, industrielles et maraîchage).",
            "Élevage (bovins, volailles, pisciculture, etc.).",
            "Transformation agroalimentaire (huileries, laiteries, conserveries).",
            "Commercialisation locale et l’exportation de produits agricoles.",
            "Intégration de solutions technologiques modernes pour améliorer la productivité et la traçabilité.",
        ],
        image: "/images/transit-douane.jpg", // Placeholder
    },
    {
        id: "immobilier",
        title: "Immobilier et Services Immobiliers",
        slug: "immobilier",
        description: "Services immobiliers complets couvrant l’ensemble du cycle de vie de vos projets.",
        details: [
            "Gestion locative (appartements, bureaux, espaces commerciaux).",
            "Transactions immobilières : achat, vente et courtage.",
            "Aménagement foncier et lotissement.",
            "Accompagnement avec professionnalisme, transparence et sécurité juridique.",
        ],
        image: "/images/commerce-general.jpg", // Placeholder
    },
    {
        id: "transport-voyages-digital",
        title: "Transport, Voyages et Services Digitaux",
        slug: "transport-voyages-digital",
        description: "Solutions de mobilité et services en ligne accessibles et efficaces pour simplifier votre quotidien.",
        details: [
            "Vente de billets de transport (avion, train, bus).",
            "Billetterie pour événements culturels et sportifs.",
            "Services de réservation et de paiement en ligne.",
            "Partenariats avec compagnies aériennes et agences de voyages internationales.",
        ],
        image: "/images/transport-terrestre.jpg",
    },
    {
        id: "services-generaux",
        title: "Services Généraux et Solutions de Proximité",
        slug: "services-generaux",
        description: "Services adaptés aux besoins spécifiques des entreprises et des particuliers.",
        details: [
            "Nettoyage, gardiennage et entretien.",
            "Assistance administrative et logistique.",
            "Services numériques : impression, cyber services, transferts d’argent.",
            "Solutions flexibles selon les besoins spécifiques des clients.",
        ],
        image: "/images/hero-logistics.jpg", // Placeholder
    },
    {
        id: "mines-energie",
        title: "Mines, Énergie et Hydrocarbures",
        slug: "mines-energie",
        description: "Opérations stratégiques dans les secteurs des ressources naturelles et de l'énergie.",
        details: [
            "Achat, vente et exportation d’or et de métaux précieux.",
            "Affinage et transformation (bijoux, lingots).",
            "Commerce, stockage et distribution de produits pétroliers.",
            "Exploration et exploitation pétrolière et gazière (selon licences).",
            "Fourniture d’équipements et solutions énergétiques.",
        ],
        image: "/images/transit-douane.jpg", // Placeholder
    },
    {
        id: "conseil-formation",
        title: "Conseil, Formation et Services Professionnels",
        slug: "conseil-formation",
        description: "Accompagnement à la croissance et à la structuration des organisations.",
        details: [
            "Conseil stratégique et opérationnel.",
            "Services financiers, comptables, juridiques et informatiques.",
            "Management juridique et institutionnel.",
            "Formation professionnelle et accompagnement RH.",
            "Solutions personnalisées adaptées aux enjeux de chaque client.",
        ],
        image: "/images/commerce-general.jpg", // Placeholder
    },
    {
        id: "participations",
        title: "Participations et Opérations Diverses",
        slug: "participations",
        description: "Investissements et opérations stratégiques pour le développement du groupe.",
        details: [
            "Opérations d’import-export.",
            "Prise de participations directes ou indirectes dans d’autres entreprises.",
            "Opérations commerciales, financières, immobilières ou industrielles.",
        ],
        image: "/images/hero-logistics.jpg", // Placeholder
    },
];
