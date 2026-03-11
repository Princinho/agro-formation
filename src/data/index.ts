import { Stat, ProgramItem, Testimonial, Ticket, FaqItem } from "../types";

export const CHARIOW_PRESENTIEL_URL = "https://chariow.com/votre-lien-presentiel";
export const CHARIOW_ONLINE_URL = "https://chariow.com/votre-lien-online";

export const stats: Stat[] = [
  { value: "880Md$", label: "Potentiel agricole africain d'ici 2030", source: "Banque Mondiale" },
  { value: "60%", label: "Des terres arables mondiales non exploitées en Afrique", source: "FAO" },
  { value: "500K+", label: "Abonnés qui font confiance à Apelete A", source: "TikTok" },
  { value: "3X", label: "Retour sur investissement moyen en agro-business", source: "IFAD" },
];

export const program: ProgramItem[] = [
  {
    icon: "🌍",
    title: "Le géant qui dort",
    desc: "Comprendre pourquoi l'Afrique est le prochain eldorado agricole mondial et comment vous y positionner dès maintenant.",
  },
  {
    icon: "💡",
    title: "Identifier les opportunités",
    desc: "Analyse sectorielle : maraîchage, élevage, transformation alimentaire, aquaculture — quel marché vous correspond ?",
  },
  {
    icon: "📐",
    title: "Construire son projet",
    desc: "Méthodologie éprouvée issue de l'expérience terrain d'Apelete A : business plan, financement, partenaires locaux.",
  },
  {
    icon: "🤝",
    title: "Réseauter & agir",
    desc: "Rejoindre une communauté de diaspora engagée. Mentorat, mises en relation, accompagnement post-formation.",
  },
];

export const testimonials: Testimonial[] = [
  {
    text: "Grâce à Apelete, j'ai lancé ma ferme avicole au Bénin depuis Paris. En 18 mois, elle est déjà rentable.",
    name: "Kofi M.",
    role: "Entrepreneur, Paris",
    avatar: "K",
  },
  {
    text: "Sa formation m'a ouvert les yeux sur des opportunités que je n'aurais jamais vues seul. Un vrai déclic.",
    name: "Fatou D.",
    role: "Investisseuse, Lyon",
    avatar: "F",
  },
  {
    text: "Le contenu est concret, basé sur du réel. Pas de théorie vide — Apelete vit ce qu'il enseigne.",
    name: "Serge A.",
    role: "Chef de projet, Bruxelles",
    avatar: "S",
  },
];

export const tickets: Ticket[] = [
  {
    type: "EN LIGNE",
    icon: "💻",
    price: "À venir",
    features: [
      "Accès live à toutes les sessions",
      "Replay disponible 30 jours",
      "Support de cours PDF",
      "Accès groupe privé WhatsApp",
    ],
    url: CHARIOW_ONLINE_URL,
    highlight: false,
  },
  {
    type: "PRÉSENTIEL",
    icon: "🏛️",
    price: "À venir",
    features: [
      "Présence physique à Paris",
      "Networking en direct",
      "Déjeuner & pauses inclus",
      "Replay + support de cours",
      "Session Q&R privée avec Apelete",
      "Certificat de participation",
    ],
    url: CHARIOW_PRESENTIEL_URL,
    highlight: true,
  },
];

export const faqs: FaqItem[] = [
  { q: "La formation est-elle en français ?", r: "Oui, entièrement en français." },
  {
    q: "Ai-je besoin d'une expérience en agriculture ?",
    r: "Non. La formation est accessible à tous, débutants comme porteurs de projet avancé.",
  },
  {
    q: "Quand auront lieu les sessions en ligne ?",
    r: "Les horaires seront communiqués après inscription. Les replays sont disponibles 30 jours.",
  },
  {
    q: "Le lieu exact à Paris ?",
    r: "Le lieu précis sera communiqué à tous les inscrits par email dès confirmation.",
  },
];

export const whyAfrica = [
  {
    icon: "🌱",
    title: "60% des terres arables",
    desc: "L'Afrique possède 60% des terres arables non exploitées du monde. Un potentiel colossal qui attend d'être développé.",
  },
  {
    icon: "📈",
    title: "880 milliards $ d'ici 2030",
    desc: "Le secteur agro-alimentaire africain pourrait peser 880 milliards de dollars d'ici 2030 selon la Banque Mondiale.",
  },
  {
    icon: "🌐",
    title: "L'avantage diaspora",
    desc: "Vous avez accès aux marchés, aux capitaux et à l'expertise européens. Combinés au terrain africain, c'est un avantage décisif.",
  },
];
