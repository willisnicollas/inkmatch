import { TattooStyle, Artist } from './types';

export const TATTOO_STYLES: TattooStyle[] = [
  {
    id: 'abstrait',
    name: 'Abstrait',
    description: 'Le tatouage abstrait se libère des formes figuratives pour se concentrer sur l’émotion, le mouvement et la composition pure.',
    origins: 'Inspiré des mouvements artistiques du 20ème siècle comme l’expressionnisme abstrait.',
    characteristics: ['Formes libres', 'Éclaboussures', 'Lignes chaotiques mais maîtrisées', 'Explosion de textures'],
    bestFor: 'Ceux qui cherchent une pièce unique, interprétative et profondément personnelle.',
    imageUrl: 'https://picsum.photos/seed/style-abstract/800/1000',
    gallery: [
      'https://picsum.photos/seed/abstract-1/800/1000',
      'https://picsum.photos/seed/abstract-2/800/1000',
      'https://picsum.photos/seed/abstract-3/800/1000',
    ]
  },
  {
    id: 'aquarelle',
    name: 'Aquarelle',
    description: 'Imite le rendu de la peinture à l’eau sur papier, avec des transparences et des dégradés fondus.',
    origins: 'Style contemporain né de l’influence de la peinture moderne.',
    characteristics: ['Absence de contours', 'Effets de pinceau', 'Transparence', 'Éclaboussures d’encre'],
    bestFor: 'Les âmes artistiques cherchant de la fluidité et de la poésie.',
    imageUrl: 'https://picsum.photos/seed/style-watercolor/800/1000',
    gallery: [
      'https://picsum.photos/seed/watercolor-1/800/1000',
      'https://picsum.photos/seed/watercolor-2/800/1000',
      'https://picsum.photos/seed/watercolor-3/800/1000',
    ]
  },
  {
    id: 'bio-mecanique',
    name: 'Bio-mécanique',
    description: 'Une fusion entre l’organique et la machine, donnant l’illusion que des composants mécaniques se trouvent sous la peau.',
    origins: 'Popularisé dans les années 80, très influencé par l’œuvre de H.R. Giger (Alien).',
    characteristics: ['Rouages et pistons', 'Tissus organiques entremêlés', 'Effet 3D', 'Ombrages complexes'],
    bestFor: 'Les fans de science-fiction et de détails mécaniques hyper-réalistes.',
    imageUrl: 'https://picsum.photos/seed/style-biomech/800/1000',
    gallery: [
      'https://picsum.photos/seed/biomech-1/800/1000',
      'https://picsum.photos/seed/biomech-2/800/1000',
      'https://picsum.photos/seed/biomech-3/800/1000',
    ]
  },
  {
    id: 'bio-organique',
    name: 'Bio-organique',
    description: 'Se concentre exclusivement sur des éléments naturels, végétaux ou cellulaires fusionnant avec le corps.',
    origins: 'Inspiré par la nature, les récifs coralliens et l’anatomie fantastique.',
    characteristics: ['Formes fluides', 'Textures naturelles', 'Fusion avec l’anatomie', 'Profondeur'],
    bestFor: 'Ceux qui veulent un tatouage qui semble faire partie intégrante de leur corps.',
    imageUrl: 'https://picsum.photos/seed/style-bioorganic/800/1000',
    gallery: [
      'https://picsum.photos/seed/bioorganic-1/800/1000',
      'https://picsum.photos/seed/bioorganic-2/800/1000',
      'https://picsum.photos/seed/bioorganic-3/800/1000',
    ]
  },
  {
    id: 'blackwork',
    name: 'Blackwork',
    description: 'Utilisation massive d’encre noire pour créer des contrastes saisissants et des motifs graphiques puissants.',
    origins: 'Évolution moderne des styles tribaux et traditionnels.',
    characteristics: ['Encre noire uniquement', 'Saturation lourde', 'Contraste élevé', 'Sujets variés'],
    bestFor: 'Ceux qui veulent un look frappant, intemporel et sans compromis.',
    imageUrl: 'https://picsum.photos/seed/style-blackwork/800/1000',
    gallery: [
      'https://picsum.photos/seed/blackwork-1/800/1000',
      'https://picsum.photos/seed/blackwork-2/800/1000',
      'https://picsum.photos/seed/blackwork-3/800/1000',
    ]
  },
  {
    id: 'chicano',
    name: 'Chicano',
    description: 'Style empreint d’une forte identité culturelle, mêlant réalisme, religion et imagerie urbaine.',
    origins: 'Né dans la culture des quartiers et des prisons américano-mexicaines.',
    characteristics: ['Ombrages gris doux', 'Portraits réalistes', 'Vierges Marie et clowns', 'Lettrages stylisés'],
    bestFor: 'Ceux qui cherchent un tatouage avec une âme, une histoire et une identité forte.',
    imageUrl: 'https://picsum.photos/seed/style-chicano/800/1000',
    gallery: [
      'https://picsum.photos/seed/chicano-1/800/1000',
      'https://picsum.photos/seed/chicano-2/800/1000',
      'https://picsum.photos/seed/chicano-3/800/1000',
    ]
  },
  {
    id: 'cybersigilism',
    name: 'Cybersigilism',
    description: 'Un style ultra-moderne mêlant l’esthétique numérique, le gothique et des lignes fluides bio-organiques.',
    origins: 'Émergé récemment de la culture internet et du design post-numérique.',
    characteristics: ['Lignes fines et acérées', 'Allure technologique', 'Formes agressives mais graciles', 'Noir pur'],
    bestFor: 'Les avant-gardistes cherchant un style futuriste et unique.',
    imageUrl: 'https://picsum.photos/seed/style-cyber/800/1000',
    gallery: [
      'https://picsum.photos/seed/cyber-1/800/1000',
      'https://picsum.photos/seed/cyber-2/800/1000',
      'https://picsum.photos/seed/cyber-3/800/1000',
    ]
  },
  {
    id: 'dotwork',
    name: 'Dotwork',
    description: 'Technique de tatouage réalisée point par point pour créer des ombrages et des textures uniques.',
    origins: 'Inspiré du pointillisme, très utilisé dans la géométrie sacrée.',
    characteristics: ['Texture pointillée', 'Ombrages par densité', 'Précision extrême', 'Aspect organique'],
    bestFor: 'Les amateurs de textures subtiles et de détails minutieux.',
    imageUrl: 'https://picsum.photos/seed/style-dotwork/800/1000',
    gallery: [
      'https://picsum.photos/seed/dotwork-1/800/1000',
      'https://picsum.photos/seed/dotwork-2/800/1000',
      'https://picsum.photos/seed/dotwork-3/800/1000',
    ]
  },
  {
    id: 'fine-line',
    name: 'Fine Line',
    description: 'Utilisation de lignes extrêmement fines pour un rendu délicat et sophistiqué.',
    origins: 'Popularisé par le mouvement "single needle" en Californie.',
    characteristics: ['Lignes de cheveux', 'Détails microscopiques', 'Minimalisme', 'Élégance'],
    bestFor: 'Ceux qui recherchent la discrétion et la finesse absolue.',
    imageUrl: 'https://picsum.photos/seed/style-fineline/800/1000',
    gallery: [
      'https://picsum.photos/seed/fineline-1/800/1000',
      'https://picsum.photos/seed/fineline-2/800/1000',
      'https://picsum.photos/seed/fineline-3/800/1000',
    ]
  },
  {
    id: 'geometrique',
    name: 'Géométrique',
    description: 'Se concentre sur la structure, la symétrie et les formes mathématiques.',
    origins: 'Influencé par la géométrie sacrée et le design graphique.',
    characteristics: ['Symétrie parfaite', 'Formes géométriques', 'Précision', 'Harmonie visuelle'],
    bestFor: 'Les esprits structurés cherchant l’équilibre parfait sur la peau.',
    imageUrl: 'https://picsum.photos/seed/style-geometric/800/1000',
    gallery: [
      'https://picsum.photos/seed/geometric-1/800/1000',
      'https://picsum.photos/seed/geometric-2/800/1000',
      'https://picsum.photos/seed/geometric-3/800/1000',
    ]
  },
  {
    id: 'japonais',
    name: 'Japonais',
    description: 'L’un des styles les plus anciens et respectés, connu pour ses pièces à grande échelle et son symbolisme riche.',
    origins: 'Issu de l’Irezumi et de l’art Ukiyo-e de la période Edo.',
    characteristics: ['Grands aplats de couleurs', 'Motifs de vagues et nuages', 'Dragons, carpes et samouraïs', 'Composition fluide'],
    bestFor: 'Ceux qui souhaitent une œuvre narrative couvrant de grandes parties du corps.',
    imageUrl: 'https://picsum.photos/seed/style-japanese/800/1000',
    gallery: [
      'https://picsum.photos/seed/japanese-1/800/1000',
      'https://picsum.photos/seed/japanese-2/800/1000',
      'https://picsum.photos/seed/japanese-3/800/1000',
    ]
  },
  {
    id: 'lettrage',
    name: 'Lettrage',
    description: 'L’art de l’écriture sur la peau, où le message et la forme de la lettre ne font qu’un.',
    origins: 'Issu de la calligraphie traditionnelle et du graffiti.',
    characteristics: ['Polices personnalisées', 'Fioritures calligraphiques', 'Précision du trait', 'Lisibilité variable'],
    bestFor: 'Ceux qui veulent graver des mots, des noms ou des citations avec élégance.',
    imageUrl: 'https://picsum.photos/seed/style-lettering/800/1000',
    gallery: [
      'https://picsum.photos/seed/lettering-1/800/1000',
      'https://picsum.photos/seed/lettering-2/800/1000',
      'https://picsum.photos/seed/lettering-3/800/1000',
    ]
  },
  {
    id: 'mandala',
    name: 'Mandala',
    description: 'Motifs circulaires complexes symbolisant l’univers, l’équilibre et la méditation.',
    origins: 'Racines dans les traditions spirituelles orientales (hindouisme, bouddhisme).',
    characteristics: ['Symétrie radiale', 'Détails concentriques', 'Lignes précises', 'Aspect spirituel'],
    bestFor: 'Ceux qui cherchent un tatouage harmonieux et introspectif.',
    imageUrl: 'https://picsum.photos/seed/style-mandala/800/1000',
    gallery: [
      'https://picsum.photos/seed/mandala-1/800/1000',
      'https://picsum.photos/seed/mandala-2/800/1000',
      'https://picsum.photos/seed/mandala-3/800/1000',
    ]
  },
  {
    id: 'manga',
    name: 'Manga',
    description: 'Transposition fidèle de l’esthétique de l’animation japonaise et de la bande dessinée sur la peau.',
    origins: 'Directement lié à la culture Otaku et à l’industrie du manga au Japon.',
    characteristics: ['Lignes claires', 'Couleurs vibrantes ou noir et blanc tramé', 'Perspectives dynamiques', 'Personnages iconiques'],
    bestFor: 'Les fans inconditionnels de la culture japonaise et de l’animation.',
    imageUrl: 'https://picsum.photos/seed/style-manga/800/1000',
    gallery: [
      'https://picsum.photos/seed/manga-1/800/1000',
      'https://picsum.photos/seed/manga-2/800/1000',
      'https://picsum.photos/seed/manga-3/800/1000',
    ]
  },
  {
    id: 'maori',
    name: 'Maori',
    description: 'Tatouage traditionnel de Nouvelle-Zélande racontant l’histoire familiale et le statut social.',
    origins: 'Art du "Ta Moko" pratiqué par le peuple Maori.',
    characteristics: ['Spirales (Koru)', 'Lignes courbes épaisses', 'Motifs de peigne (Uhi)', 'Symbolique profonde'],
    bestFor: 'Ceux qui respectent les traditions ancestrales et les histoires de lignée.',
    imageUrl: 'https://picsum.photos/seed/style-maori/800/1000',
    gallery: [
      'https://picsum.photos/seed/maori-1/800/1000',
      'https://picsum.photos/seed/maori-2/800/1000',
      'https://picsum.photos/seed/maori-3/800/1000',
    ]
  },
  {
    id: 'micro-realisme',
    name: 'Micro Réalisme',
    description: 'L’art du détail poussé à l’extrême sur de très petites surfaces.',
    origins: 'Évolution moderne du réalisme grâce à la précision des nouvelles machines.',
    characteristics: ['Détails photographiques minuscules', 'Ombrages fondus', 'Aiguilles simples', 'Réalisme bluffant'],
    bestFor: 'Les amateurs de défis techniques et de réalisme discret.',
    imageUrl: 'https://picsum.photos/seed/style-microrealism/800/1000',
    gallery: [
      'https://picsum.photos/seed/micro-1/800/1000',
      'https://picsum.photos/seed/micro-2/800/1000',
      'https://picsum.photos/seed/micro-3/800/1000',
    ]
  },
  {
    id: 'minimaliste',
    name: 'Minimaliste',
    description: 'La recherche de l’essentiel à travers des formes simples et épurées.',
    origins: 'Directement lié au courant artistique minimaliste.',
    characteristics: ['Peu de lignes', 'Petite taille', 'Espace négatif important', 'Discrétion'],
    bestFor: 'Ceux qui préfèrent la suggestion à l’exhibition.',
    imageUrl: 'https://picsum.photos/seed/style-minimalist/800/1000',
    gallery: [
      'https://picsum.photos/seed/minimalist-1/800/1000',
      'https://picsum.photos/seed/minimalist-2/800/1000',
      'https://picsum.photos/seed/minimalist-3/800/1000',
    ]
  },
  {
    id: 'neotraditionnel',
    name: 'Néotraditionnel',
    description: 'Une version modernisée du style Old School, avec plus de détails, de couleurs et de profondeur.',
    origins: 'Évolution du traditionnel avec des techniques modernes.',
    characteristics: ['Lignes variées', 'Palette de couleurs riche', 'Profondeur accrue', 'Sujets détaillés'],
    bestFor: 'Ceux qui aiment le classique mais avec une touche de modernité artistique.',
    imageUrl: 'https://picsum.photos/seed/style-neotraditional/800/1000',
    gallery: [
      'https://picsum.photos/seed/neotrad-1/800/1000',
      'https://picsum.photos/seed/neotrad-2/800/1000',
      'https://picsum.photos/seed/neotrad-3/800/1000',
    ]
  },
  {
    id: 'new-school',
    name: 'New School',
    description: 'Style cartoonesque, coloré et aux proportions exagérées.',
    origins: 'Né dans les années 70-80 aux USA, influencé par le graffiti et la pop culture.',
    characteristics: ['Couleurs flashy', 'Gros contours', 'Perspective déformée', 'Sujets fantastiques'],
    bestFor: 'Les personnalités fun, créatives et qui aiment l’imagerie cartoon.',
    imageUrl: 'https://picsum.photos/seed/style-newschool/800/1000',
    gallery: [
      'https://picsum.photos/seed/newschool-1/800/1000',
      'https://picsum.photos/seed/newschool-2/800/1000',
      'https://picsum.photos/seed/newschool-3/800/1000',
    ]
  },
  {
    id: 'old-school',
    name: 'Old School',
    description: 'Le style traditionnel américain par excellence : robuste, simple et historique.',
    origins: 'Popularisé par les marins (Sailor Jerry) au début du 20ème siècle.',
    characteristics: ['Gros contours noirs', 'Palette limitée', 'Symbolique marine', 'Dessin 2D'],
    bestFor: 'Les puristes cherchant un tatouage qui vieillira parfaitement.',
    imageUrl: 'https://picsum.photos/seed/style-oldschool/800/1000',
    gallery: [
      'https://picsum.photos/seed/oldschool-1/800/1000',
      'https://picsum.photos/seed/oldschool-2/800/1000',
      'https://picsum.photos/seed/oldschool-3/800/1000',
    ]
  },
  {
    id: 'ornemental',
    name: 'Ornemental',
    description: 'Conçu comme un bijou ou une décoration corporelle permanente.',
    origins: 'Inspiré par la joaillerie, la dentelle et les arts décoratifs.',
    characteristics: ['Symétrie', 'Motifs de dentelle', 'Effets de pendentifs', 'Finesse extrême'],
    bestFor: 'Ceux qui veulent embellir l’anatomie avec élégance et finesse.',
    imageUrl: 'https://picsum.photos/seed/style-ornamental/800/1000',
    gallery: [
      'https://picsum.photos/seed/ornamental-1/800/1000',
      'https://picsum.photos/seed/ornamental-2/800/1000',
      'https://picsum.photos/seed/ornamental-3/800/1000',
    ]
  },
  {
    id: 'polynesien',
    name: 'Polynésien',
    description: 'L’origine même du tatouage, utilisant des motifs géométriques pour protéger et raconter.',
    origins: 'Pratiqué depuis des millénaires dans les îles du Pacifique.',
    characteristics: ['Aplats de noir', 'Motifs géométriques symboliques', 'Adaptation aux muscles', 'Noir pur'],
    bestFor: 'Une recherche de puissance, de protection et de lien avec le Pacifique.',
    imageUrl: 'https://picsum.photos/seed/style-polynesian/800/1000',
    gallery: [
      'https://picsum.photos/seed/poly-1/800/1000',
      'https://picsum.photos/seed/poly-2/800/1000',
      'https://picsum.photos/seed/poly-3/800/1000',
    ]
  },
  {
    id: 'realisme',
    name: 'Réalisme',
    description: 'La reproduction fidèle de la réalité comme une photographie sur la peau.',
    origins: 'Adaptation des techniques de portrait à l’huile et du fusain au tatouage.',
    characteristics: ['Dégradés de gris parfaits', 'Absence de contours', 'Volume et lumière', 'Précision extrême'],
    bestFor: 'Les portraits d’êtres chers ou de célébrités et les scènes de nature.',
    imageUrl: 'https://picsum.photos/seed/style-realism/800/1000',
    gallery: [
      'https://picsum.photos/seed/realism-1/800/1000',
      'https://picsum.photos/seed/realism-2/800/1000',
      'https://picsum.photos/seed/realism-3/800/1000',
    ]
  },
  {
    id: 'trash-polka',
    name: 'Trash Polka',
    description: 'Une rencontre explosive entre le réalisme, l’abstrait et le design graphique.',
    origins: 'Créé en Allemagne par Volko Merschky et Simone Pfaff.',
    characteristics: ['Noir et Rouge uniquement', 'Contrastes violents', 'Mélange texte et image', 'Énergie brute'],
    bestFor: 'Les personnalités rebelles cherchant une pièce dynamique et unique.',
    imageUrl: 'https://picsum.photos/seed/style-trashpolka/800/1000',
    gallery: [
      'https://picsum.photos/seed/style-trashpolka-1/800/1000',
      'https://picsum.photos/seed/style-trashpolka-2/800/1000',
      'https://picsum.photos/seed/style-trashpolka-3/800/1000',
    ]
  },
  {
    id: 'tribal',
    name: 'Tribal',
    description: 'Un style universel basé sur des formes noires abstraites et puissantes.',
    origins: 'Inspiré des tatouages indigènes du monde entier.',
    characteristics: ['Encre noire solide', 'Formes en pointes', 'Flux avec le corps', 'Puissance visuelle'],
    bestFor: 'Ceux qui recherchent un design fort, graphique et intemporel.',
    imageUrl: 'https://picsum.photos/seed/style-tribal/800/1000',
    gallery: [
      'https://picsum.photos/seed/tribal-1/800/1000',
      'https://picsum.photos/seed/tribal-2/800/1000',
      'https://picsum.photos/seed/tribal-3/800/1000',
    ]
  }
];

// Génération de 5 artistes par style avec images picsum
export const ARTISTS: Artist[] = TATTOO_STYLES.flatMap(style => {
  const cities = [
    { city: 'Paris', country: 'France', studio: 'Ink Master' },
    { city: 'Berlin', country: 'Allemagne', studio: 'Art Collective' },
    { city: 'Londres', country: 'Royaume-Uni', studio: 'The Studio' },
    { city: 'Tokyo', country: 'Japon', studio: 'Dragon Ink' },
    { city: 'New York', country: 'États-Unis', studio: 'Empire Tattoos' }
  ];

  return cities.map((meta, i) => ({
    id: `artist-${style.id}-${i + 1}`,
    name: `Maître ${style.name} ${['I', 'II', 'III', 'IV', 'V'][i]}`,
    studioName: meta.studio,
    city: meta.city,
    country: meta.country,
    styles: [style.name, 'Blackwork'],
    bio: `Expert international du style ${style.name}, basé à ${meta.city}. Reconnu pour sa technique irréprochable et sa vision artistique unique.`,
    imageUrl: `https://picsum.photos/seed/artist-${style.id}-${i}/800/1000`,
    gallery: [
      `https://picsum.photos/seed/artist-${style.id}-${i}-p1/801/1001`,
      `https://picsum.photos/seed/artist-${style.id}-${i}-p2/802/1002`,
      `https://picsum.photos/seed/artist-${style.id}-${i}-p3/803/1003`,
    ],
    rating: [4.9, 4.8, 4.7, 4.9, 5.0][i],
    reviews: [
      { id: `r-${style.id}-${i}`, userName: 'Alexandre P.', rating: 5, comment: 'Une précision chirurgicale et un style unique.', date: '2024-03-20' }
    ],
    socials: { instagram: `@master_${style.id}_${i}`, website: `artist-${style.id}-${i}.ink` }
  }));
});

