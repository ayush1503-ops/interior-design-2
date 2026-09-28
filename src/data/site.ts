/* ————————————————————————————————————————————————
   NOOR STUDIO — content & image registry
   All imagery lives here so it can be swapped easily.
   ———————————————————————————————————————————————— */

const px = (base: string, w = 1400) =>
  `https://images.pexels.com/photos/${base}?auto=compress&cs=tinysrgb&w=${w}`;

const B = {
  roomSteps: "8146198/pexels-photo-8146198.jpeg",
  sunnySofa: "16825059/pexels-photo-16825059.jpeg",
  armchairs: "18207253/pexels-photo-18207253.jpeg",
  buenosAires: "27954459/pexels-photo-27954459.jpeg",
  beigeApt: "5853834/pexels-photo-5853834.jpeg",
  candleCorner: "34016409/pexels-photo-34016409.png",
  archWindows: "4444414/pexels-photo-4444414.jpeg",
  darkBeam: "18820283/pexels-photo-18820283.jpeg",
  mattress: "8251596/pexels-photo-8251596.jpeg",
  japandi: "8251600/pexels-photo-8251600.jpeg",
  trayBed: "7303743/pexels-photo-7303743.jpeg",
  minimalBed: "17994859/pexels-photo-17994859.jpeg",
  mansard: "7061422/pexels-photo-7061422.jpeg",
  wardrobe: "38697208/pexels-photo-38697208.jpeg",
  mansardWin: "7061415/pexels-photo-7061415.jpeg",
  restoPlants: "18177440/pexels-photo-18177440.jpeg",
  barLuxe: "19689233/pexels-photo-19689233.jpeg",
  barCozy: "28865195/pexels-photo-28865195.jpeg",
  barHotel: "19689229/pexels-photo-19689229.jpeg",
  loungeGlow: "28865196/pexels-photo-28865196.jpeg",
  candleDining: "28059309/pexels-photo-28059309.jpeg",
  diningWood: "27305319/pexels-photo-27305319.jpeg",
  chandeliers: "39472552/pexels-photo-39472552.jpeg",
  marbleEarth: "4705932/pexels-photo-4705932.jpeg",
  granite: "7599796/pexels-photo-7599796.jpeg",
  marbleVein: "4705923/pexels-photo-4705923.jpeg",
  marbleBeige: "4709030/pexels-photo-4709030.jpeg",
  marblePink: "4709523/pexels-photo-4709523.jpeg",
  fabricBeige: "34860699/pexels-photo-34860699.jpeg",
  fabricBrown: "34860696/pexels-photo-34860696.jpeg",
  bathWindow: "8143706/pexels-photo-8143706.jpeg",
  kitchenDark: "6580414/pexels-photo-6580414.jpeg",
  loftKitchen: "7031402/pexels-photo-7031402.jpeg",
  bathtub: "8134806/pexels-photo-8134806.jpeg",
  mansion: "7018828/pexels-photo-7018828.jpeg",
  bathGray: "6238609/pexels-photo-6238609.jpeg",
  sketchMan: "9617886/pexels-photo-9617886.jpeg",
  teamSamples: "4977459/pexels-photo-4977459.jpeg",
  tileSamples: "4977410/pexels-photo-4977410.jpeg",
  wallSample: "6568669/pexels-photo-6568669.jpeg",
  architectCoffee: "9618107/pexels-photo-9618107.jpeg",
  woodDark: "4705928/pexels-photo-4705928.jpeg",
  metalPattern: "36121568/pexels-photo-36121568.jpeg",
  glassFacade: "12008032/pexels-photo-12008032.jpeg",
};

export const img = (key: keyof typeof B, w = 1400) => px(B[key], w);

export const HERO = {
  src: img("roomSteps", 2200),
  alt: "Double-height living space with marble steps and floor-to-ceiling glass, flooded with daylight",
};

export const INTRO_IMG = {
  src: img("armchairs", 1100),
  alt: "Two green leather armchairs in front of a softly lit curtained window",
};

export const BEFORE_AFTER = {
  src: img("mansion", 1800),
  alt: "Raw living room shell being transformed into a warm, considered interior",
};

/* ————— materials ————— */

export interface Material {
  name: string;
  note: string;
  src: string;
  alt: string;
}

export const MATERIALS: Material[] = [
  { name: "STONE", note: "Botticino, travertine, granite — honed, never polished to glare", src: img("marbleEarth", 1100), alt: "Close-up of honed marble with earthy veining" },
  { name: "WOOD", note: "Smoked walnut and reclaimed teak, oiled by hand", src: img("woodDark", 1100), alt: "Close-up of a dark oiled walnut surface" },
  { name: "METAL", note: "Unlacquered brass and bronze that age with the house", src: img("metalPattern", 1100), alt: "Close-up of a brushed bronze metal surface" },
  { name: "FABRIC", note: "Raw silk, washed linen, bouclé — texture you read at a distance", src: img("fabricBeige", 1100), alt: "Close-up of a beige woven textile with soft folds" },
  { name: "GLASS", note: "Fluted, reeded and clear — light, diffused with intent", src: img("glassFacade", 1100), alt: "Abstract reflection across a glass surface" },
  { name: "LIGHT", note: "The first material. Everything else is arranged around it", src: img("darkBeam", 1100), alt: "A beam of sunlight falling into a dark interior" },
];

/* ————— services ————— */

export interface Service {
  index: string;
  name: string;
  tags: string;
  src: string;
  alt: string;
}

export const SERVICES: Service[] = [
  { index: "01", name: "RESIDENTIAL INTERIORS", tags: "PRIVATE HOMES · TURNKEY", src: img("beigeApt", 900), alt: "Sunlit apartment living room with a beige sofa" },
  { index: "02", name: "HOSPITALITY", tags: "HOTELS · RESTAURANTS · BARS", src: img("restoPlants", 900), alt: "Warm hotel restaurant interior with plants and low light" },
  { index: "03", name: "COMMERCIAL SPACES", tags: "OFFICES · RETAIL · GALLERIES", src: img("barHotel", 900), alt: "Elegant commercial lounge interior with ambient lighting" },
  { index: "04", name: "ARCHITECTURAL INTERIORS", tags: "SHELL · STRUCTURE · STAIR", src: img("roomSteps", 900), alt: "Architectural interior with marble steps and double-height glass" },
  { index: "05", name: "FURNITURE & CUSTOM DESIGN", tags: "BESPOKE PIECES · JOINERY", src: img("wallSample", 900), alt: "Designer comparing a material sample against a wall" },
  { index: "06", name: "STYLING & ART DIRECTION", tags: "OBJECTS · ART · FINAL LAYER", src: img("candleCorner", 900), alt: "Styled corner with an armchair and a lit candle" },
];

/* ————— projects ————— */

export type Shot =
  | { kind: "full"; src: string; alt: string; caption?: string }
  | { kind: "duo"; a: { src: string; alt: string }; b: { src: string; alt: string }; caption?: string }
  | { kind: "aside"; side: "left" | "right"; src: string; alt: string; heading: string; text: string }
  | { kind: "quote"; text: string; by: string };

export interface Project {
  id: string;
  index: string;
  name: string;
  location: string;
  region: string;
  type: string;
  year: string;
  area: string;
  scope: string;
  tagline: string;
  listSrc: string;
  listAlt: string;
  secondSrc?: string;
  secondAlt?: string;
  hero: { src: string; alt: string };
  idea: string[];
  materials: [string, string][];
  shots: Shot[];
}

export const PROJECTS: Project[] = [
  {
    id: "casa-noir",
    index: "01",
    name: "CASA NOIR",
    location: "NEW DELHI",
    region: "INDIA",
    type: "RESIDENTIAL",
    year: "2026",
    area: "4,200 SQ FT",
    scope: "FULL INTERIOR ARCHITECTURE",
    tagline: "A study in shadow — walnut, stone and low winter light for a family that entertains after dark.",
    listSrc: img("kitchenDark", 1600),
    listAlt: "Dark, elegant kitchen in Casa Noir with stone counters and minimal lighting",
    hero: { src: img("kitchenDark", 2200), alt: "Dark modern kitchen with stone countertop and warm under-cabinet light" },
    idea: [
      "The brief was a contradiction: a home that felt like a members' club after nine, and like a sunlit family house by morning. Our answer was to choreograph the darkness, not fight it.",
      "Deep walnut joinery absorbs the light; honed granite and unlacquered brass return it in fragments. Every room holds one bright moment — a shaft across the dining table, a glow behind fluted glass — so the eye is always travelling toward warmth.",
    ],
    materials: [
      ["FLOORING", "Smoked oak, wide plank"],
      ["WALLS", "Lime plaster, stained walnut panelling"],
      ["STONE", "Honed black granite, vein-cut"],
      ["METAL", "Unlacquered brass hardware"],
      ["TEXTILE", "Mohair velvet, raw silk"],
    ],
    shots: [
      { kind: "full", src: img("loftKitchen", 2000), alt: "Open-plan kitchen and stair hall in warm stone and walnut", caption: "THE STAIR HALL — STONE, OAK, SHADOW" },
      {
        kind: "aside",
        side: "left",
        src: img("granite", 1100),
        alt: "Close-up of rough dark granite texture",
        heading: "Stone that drinks the light",
        text: "We specified the granite honed to a matte finish, so it absorbs rather than reflects. Against it, a single brass inlay reads like a struck match.",
      },
      { kind: "duo", a: { src: img("marbleVein", 1200), alt: "Blue-veined marble detail" }, b: { src: img("bathGray", 1200), alt: "Grey stone bathroom with double vanity" }, caption: "POWDER ROOM — VEIN-CUT MARBLE / MASTER BATH" },
      { kind: "quote", text: "Darkness is not the absence of design. It is a material you can build with.", by: "ARJUN MEHRA, PRINCIPAL" },
      { kind: "aside", side: "right", src: img("armchairs", 1200), alt: "Leather armchairs in window light at dusk", heading: "Rooms tuned to the hour", text: "Lighting scenes shift from a bright 4000K morning to candle-warm 2200K evenings. The same room, two characters — one house." },
      { kind: "full", src: img("candleDining", 2000), alt: "Candlelit dining table set for an evening gathering", caption: "THE DINING ROOM, AFTER NINE" },
    ],
  },
  {
    id: "terra-court",
    index: "02",
    name: "TERRA COURT",
    location: "SIOLIM, GOA",
    region: "INDIA",
    type: "RESIDENTIAL RETREAT",
    year: "2025",
    area: "6,800 SQ FT",
    scope: "INTERIOR DESIGN & STYLING",
    tagline: "A monsoon retreat of lime plaster, cane and teak — where every corridor ends in green.",
    listSrc: img("mattress", 1200),
    listAlt: "Serene minimal bedroom with warm wood and white bedding at Terra Court",
    hero: { src: img("minimalBed", 2200), alt: "Minimal bedroom washed in soft natural light" },
    idea: [
      "In Goa the rain is a season, not a weather event. Terra Court is designed to be listened to — a house that makes the monsoon feel like a guest rather than an intruder.",
      "We kept the palette to what the garden already supplies: lime-washed whites, laterite reds, teak browns. Furniture sits low, so the eye level stays with the verandah. Nothing shines; everything breathes.",
    ],
    materials: [
      ["FLOORING", "Handmade terrazzo, laterite aggregate"],
      ["WALLS", "Lime plaster, breathable finish"],
      ["JOINERY", "Burma teak, cane webbing"],
      ["TEXTILE", "Khadi cotton, washed linen"],
      ["LIGHTING", "Paper, rattan, shaded brass"],
    ],
    shots: [
      { kind: "duo", a: { src: img("mattress", 1200), alt: "Low bed on a warm wooden floor" }, b: { src: img("japandi", 1200), alt: "Japandi bedroom corner with crumpled paper art" }, caption: "GUEST WING — LOW BEDS, HIGH CEILINGS" },
      { kind: "full", src: img("mansardWin", 2000), alt: "Attic bedroom under a sloped wooden ceiling with generous windows", caption: "THE ROOF ROOM — TEAK UNDER A PITCHED SKY" },
      {
        kind: "aside",
        side: "left",
        src: img("mansard", 1200),
        alt: "Wooden attic bedroom with lamps glowing at dusk",
        heading: "Warmth without weight",
        text: "Teak panelling is stopped a foot below the ceiling line, so the roof plane floats. At night, concealed light washes the joint and the whole ceiling hovers.",
      },
      { kind: "quote", text: "A retreat should lower your pulse the moment the door closes.", by: "NOOR STUDIO, PROJECT NOTE" },
      { kind: "aside", side: "right", src: img("trayBed", 1100), alt: "Morning tray with tea resting on linen bedding", heading: "Rituals, considered", text: "The final layer is always behavioural: where the morning tea lands, where the book lives, where bare feet meet cool stone. We design the habits, not just the rooms." },
      { kind: "full", src: img("wardrobe", 2000), alt: "Light oak wardrobe with minimal brass detailing", caption: "DRESSING ROOM — OAK & SHADOW GAPS" },
    ],
  },
  {
    id: "amber-room",
    index: "03",
    name: "THE AMBER ROOM",
    location: "MUMBAI",
    region: "INDIA",
    type: "HOSPITALITY",
    year: "2025",
    area: "3,100 SQ FT",
    scope: "CONCEPT TO OPENING",
    tagline: "A 42-seat cocktail room where brass, smoke and velvet slow the evening down.",
    listSrc: img("barLuxe", 1600),
    listAlt: "Luxurious hotel bar with amber lighting and elegant seating",
    hero: { src: img("barLuxe", 2200), alt: "The Amber Room bar glowing in warm low light" },
    idea: [
      "The owners wanted a room that photographs beautifully at 11pm — and feels even better at 1am. Everything here is tuned to the hour after dinner: a ceiling kept deliberately dark, light pooled exactly where hands meet glass.",
      "The bar itself is a single monolith of amber resin panels backlit to melt. Around it, seating steps from high perches to deep velvet booths, so the room can hold a first date and a boardroom celebration at once.",
    ],
    materials: [
      ["BAR FRONT", "Backlit amber resin panels"],
      ["FLOORING", "Fumed oak chevron"],
      ["SEATING", "Mohair velvet, aniline leather"],
      ["CEILING", "Charcoal acoustic plaster"],
      ["LIGHTING", "Custom brass pendants, 2200K"],
    ],
    shots: [
      { kind: "full", src: img("barHotel", 2000), alt: "Wide view of the bar with velvet seating and shelves of spirits", caption: "THE BAR — A MONOLITH OF AMBER" },
      { kind: "duo", a: { src: img("barCozy", 1100), alt: "Intimate bar corner in warm light" }, b: { src: img("loungeGlow", 1100), alt: "Lounge seating glowing softly against wood panelling" }, caption: "BOOTHS & PERCHES" },
      {
        kind: "aside",
        side: "left",
        src: img("restoPlants", 1100),
        alt: "Restaurant corner with plants catching low light",
        heading: "Greenery as candlelight",
        text: "Planters are lit from below like footlights. Leaves throw moving shadows across the plaster ceiling — free decoration, nightly.",
      },
      { kind: "quote", text: "Hospitality design is choreography: light, distance and time.", by: "NOOR STUDIO, PROJECT NOTE" },
      { kind: "aside", side: "right", src: img("chandeliers", 1300), alt: "Chandeliers above plush restaurant seating", heading: "One bright gesture", text: "A single chandeliered salon breaks the darkness — the room's exhale. Guests describe it as 'the intermission'." },
      { kind: "full", src: img("diningWood", 2000), alt: "Long wooden dining table under warm ambient light", caption: "THE PRIVATE TABLE — SEATS TEN, HOLDS SECRETS" },
    ],
  },
  {
    id: "courtyard-house",
    index: "04",
    name: "COURTYARD HOUSE",
    location: "JAIPUR",
    region: "INDIA",
    type: "ARCHITECTURAL INTERIOR",
    year: "2024",
    area: "9,400 SQ FT",
    scope: "ARCHITECTURE & INTERIORS",
    tagline: "Arches, lime and Jaipur pink stone organised around a single courtyard of light.",
    listSrc: img("archWindows", 1600),
    listAlt: "Sunlit interior with tall arched windows casting long shadows",
    secondSrc: img("bathtub", 1000),
    secondAlt: "Stone bathroom with a sculptural tub by the window",
    hero: { src: img("buenosAires", 2200), alt: "Grand living room with historic bones and sun streaming through tall windows" },
    idea: [
      "A 1920s haveli shell, a family of six, and one rule from the clients: 'Do not let the new work shout over the old stone.' The house already had its architecture; our job was editing.",
      "We removed forty years of false ceilings and partitions, then reintroduced comfort as a layer of furniture-scaled interventions — upholstered islands in enormous rooms, joinery that stands free of the walls, curtains hung like theatre flats to tame the winter drafts.",
    ],
    materials: [
      ["FLOORING", "Restored Jaipur pink stone"],
      ["WALLS", "Original lime plaster, washed"],
      ["JOINERY", "Free-standing mango wood pieces"],
      ["TEXTILE", "Block-printed cotton, wool dhurries"],
      ["GLAZING", "Steel-framed, single pane, arched"],
    ],
    shots: [
      { kind: "full", src: img("archWindows", 2000), alt: "Long room with a rhythm of arched windows and shadow", caption: "THE ENFILADE — NINE ARCHES OF LIGHT" },
      {
        kind: "aside",
        side: "right",
        src: img("bathWindow", 1200),
        alt: "Minimal bathroom with a large window and stone floor",
        heading: "Old shell, new rituals",
        text: "Bathrooms were inserted as 'rooms within rooms' — freestanding stone and glass volumes that touch nothing original. Everything is reversible.",
      },
      { kind: "duo", a: { src: img("bathtub", 1100), alt: "Sculptural bathtub beside a tall window" }, b: { src: img("marblePink", 1100), alt: "Pink-veined marble close-up" }, caption: "BATHING COURT / JAIPUR PINK, HONED" },
      { kind: "quote", text: "Restoration is a conversation. The house speaks first.", by: "ARJUN MEHRA, PRINCIPAL" },
      { kind: "aside", side: "left", src: img("marbleBeige", 1100), alt: "Beige and brown stone texture", heading: "Stone with memory", text: "Where floors had to be patched, we cut new slabs from the same 1960s quarry seam — the repairs will weather into invisibility within a decade." },
      { kind: "full", src: img("sunnySofa", 2000), alt: "Sunlit living room with a soft grey sofa and long shadows", caption: "THE WINTER SALON — 11AM, JANUARY" },
    ],
  },
];

/* ————— journal ————— */

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  read: string;
  src: string;
  alt: string;
  excerpt: string;
  ratio: string;
}

export const ARTICLES: Article[] = [
  {
    id: "stone",
    title: "Why natural stone changes the feeling of a room",
    category: "MATERIAL STUDY",
    date: "FEB 2026",
    read: "6 MIN",
    src: img("marbleBeige", 1400),
    alt: "Beige and brown natural marble texture",
    excerpt: "Polish reflects a room back at you; a honed stone absorbs it. On the geology of calm — and why we let floors carry ten thousand years under bare feet.",
    ratio: "aspect-[4/3]",
  },
  {
    id: "light",
    title: "Designing with light",
    category: "PROCESS",
    date: "DEC 2025",
    read: "8 MIN",
    src: img("darkBeam", 1200),
    alt: "A shaft of sunlight cutting through a dark room",
    excerpt: "Before drawings, we chart the sun. A note on lux levels, shadow gaps and the discipline of switching things off.",
    ratio: "aspect-[3/4]",
  },
  {
    id: "quiet-luxury",
    title: "The quiet luxury of natural materials",
    category: "ESSAY",
    date: "OCT 2025",
    read: "5 MIN",
    src: img("fabricBrown", 1200),
    alt: "Warm brown woven fabric in soft folds",
    excerpt: "Luxury that doesn't announce itself: grain, weave and patina as a language of permanence.",
    ratio: "aspect-[4/5]",
  },
  {
    id: "inside-casa-noir",
    title: "Inside Casa Noir",
    category: "PROJECT STORY",
    date: "JAN 2026",
    read: "10 MIN",
    src: img("bathGray", 1200),
    alt: "Grey stone bathroom inside Casa Noir",
    excerpt: "The making of our darkest project — site diaries, stone yard visits and the argument over a brass inlay.",
    ratio: "aspect-square",
  },
  {
    id: "principles",
    title: "Five principles of timeless interiors",
    category: "ESSAY",
    date: "AUG 2025",
    read: "7 MIN",
    src: img("sunnySofa", 1200),
    alt: "Sunlit living room with restrained furniture",
    excerpt: "Proportion over decoration. Shadows over sparkle. Heirlooms over hauls. And two more we keep returning to.",
    ratio: "aspect-[4/3]",
  },
];

/* ————— process ————— */

export interface Stage {
  index: string;
  name: string;
  span: string;
  desc: string;
}

export const STAGES: Stage[] = [
  { index: "01", name: "DISCOVER", span: "WEEKS 1 — 2", desc: "Site walks, long conversations, measuring the light. We learn how you live before we draw a single line." },
  { index: "02", name: "DEFINE", span: "WEEKS 3 — 5", desc: "The brief, the budget, the bones. Spatial strategy, reference studies and a material direction agreed in writing." },
  { index: "03", name: "DESIGN", span: "WEEKS 6 — 12", desc: "Plans, elevations, models and full-scale samples. Every junction drawn; every surface touched before it is specified." },
  { index: "04", name: "DETAIL", span: "WEEKS 13 — 18", desc: "Tender documentation, joinery drawings, lighting schedules. The unglamorous work that makes the result look effortless." },
  { index: "05", name: "DELIVER", span: "MONTHS 5 — 12", desc: "Site supervision to final styling. We hand over the keys only after the art is hung and the kettle is found." },
];

/* ————— journal/nav constants ————— */

export const NAV_LINKS = [
  { id: "projects", label: "Projects" },
  { id: "studio", label: "Studio" },
  { id: "services", label: "Services" },
  { id: "journal", label: "Journal" },
  { id: "contact", label: "Contact" },
];

export const STUDIO = {
  email: "hello@noorstudio.in",
  phone: "+91 11 4155 2026",
  address: ["14 Amrita Shergill Marg", "Lutyens' Delhi, New Delhi 110 003"],
  socials: ["Instagram", "Pinterest", "Behance"],
};
