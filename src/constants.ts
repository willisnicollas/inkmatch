import { TattooStyle, Artist } from './types';

export const TATTOO_STYLES: TattooStyle[] = [
  {
    id: 'old-school',
    name: 'Old School',
    description: 'Le style traditionnel américain, caractérisé par des contours noirs épais et une palette de couleurs primaires limitée.',
    origins: 'Né au début du 20ème siècle, popularisé par les marins et des artistes comme Sailor Jerry.',
    characteristics: ['Contours noirs épais', 'Ombrages simples', 'Iconographie classique (ancres, roses, aigles)', 'Aspect bidimensionnel'],
    bestFor: 'Ceux qui recherchent un look intemporel, robuste et chargé d’histoire.',
    imageUrl: 'https://picsum.photos/seed/oldschool-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/oldschool-1/800/1000',
      'https://picsum.photos/seed/oldschool-2/800/1000',
      'https://picsum.photos/seed/oldschool-3/800/1000',
    ]
  },
  {
    id: 'new-school',
    name: 'New School',
    description: 'Un style animé et exagéré qui a émergé dans les années 1970, influencé par le graffiti et la bande dessinée.',
    origins: 'Apparu sur la côte ouest des États-Unis comme une rébellion contre les règles strictes du traditionnel.',
    characteristics: ['Proportions exagérées', 'Couleurs vives et non conventionnelles', 'Thèmes cartoon', 'Dégradés complexes'],
    bestFor: 'Les personnalités créatives qui aiment l’humour et l’imaginaire.',
    imageUrl: 'https://picsum.photos/seed/newschool-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/newschool-1/800/1000',
      'https://picsum.photos/seed/newschool-2/800/1000',
      'https://picsum.photos/seed/newschool-3/800/1000',
    ]
  },
  {
    id: 'tribal',
    name: 'Tribal',
    description: 'L’un des styles les plus anciens, utilisant des motifs noirs pleins et des formes abstraites.',
    origins: 'Inspiré des cultures indigènes du monde entier, notamment de Polynésie et d’Afrique.',
    characteristics: ['Encre noire solide', 'Motifs symétriques', 'Épouse la musculature', 'Formes abstraites'],
    bestFor: 'Ceux qui veulent un tatouage puissant, ancestral et graphique.',
    imageUrl: 'https://picsum.photos/seed/tribal-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/tribal-1/800/1000',
      'https://picsum.photos/seed/tribal-2/800/1000',
      'https://picsum.photos/seed/tribal-3/800/1000',
    ]
  },
  {
    id: 'realisme',
    name: 'Réalisme',
    description: 'Des tatouages qui ressemblent à des photographies ou à des objets réels, demandant une maîtrise technique immense.',
    origins: 'Évolué à partir des techniques des beaux-arts appliquées à la peau.',
    characteristics: ['Précision photographique', 'Dégradés fluides', 'Absence de contours marqués', 'Détails extrêmes'],
    bestFor: 'Les amateurs de portraits ou de représentations fidèles de la nature.',
    imageUrl: 'https://picsum.photos/seed/realistic-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/realism-1/800/1000',
      'https://picsum.photos/seed/realism-2/800/1000',
      'https://picsum.photos/seed/realism-3/800/1000',
    ]
  },
  {
    id: 'hyperrealisme',
    name: 'Hyperréalisme',
    description: 'Pousse le réalisme à son paroxysme, créant une illusion de profondeur et de texture quasi-réelle.',
    origins: 'Une extension moderne du réalisme rendue possible par l’évolution du matériel.',
    characteristics: ['Texture de peau visible', 'Effets de lumière complexes', 'Détails microscopiques', 'Profondeur 3D'],
    bestFor: 'Ceux qui veulent une œuvre d’art technique et bluffante.',
    imageUrl: 'https://picsum.photos/seed/hyperrealist-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/hyper-1/800/1000',
      'https://picsum.photos/seed/hyper-2/800/1000',
      'https://picsum.photos/seed/hyper-3/800/1000',
    ]
  },
  {
    id: 'watercolor',
    name: 'Watercolor',
    description: 'Imite l’apparence d’une peinture à l’aquarelle, avec des touches de couleurs diffuses et des éclaboussures.',
    origins: 'Style contemporain né de l’influence de la peinture moderne.',
    characteristics: ['Absence de contours', 'Effets de pinceau', 'Transparence', 'Éclaboussures d’encre'],
    bestFor: 'Les âmes artistiques cherchant de la fluidité et de la poésie.',
    imageUrl: 'https://picsum.photos/seed/watercolor-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/watercolor-1/800/1000',
      'https://picsum.photos/seed/watercolor-2/800/1000',
      'https://picsum.photos/seed/watercolor-3/800/1000',
    ]
  },
  {
    id: 'minimaliste',
    name: 'Minimaliste',
    description: 'Des designs épurés et simples qui utilisent le moins de détails possible pour transmettre un message.',
    origins: 'Mouvement moderne axé sur l’esthétique du "moins c’est plus".',
    characteristics: ['Lignes fines', 'Petite échelle', 'Formes simples', 'Beaucoup d’espace négatif'],
    bestFor: 'Les amateurs de discrétion et d’élégance subtile.',
    imageUrl: 'https://picsum.photos/seed/minimalist-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/minimal-1/800/1000',
      'https://picsum.photos/seed/minimal-2/800/1000',
      'https://picsum.photos/seed/minimal-3/800/1000',
    ]
  },
  {
    id: 'fine-line',
    name: 'Fine Line',
    description: 'Des designs délicats et complexes créés avec des aiguilles très fines.',
    origins: 'Popularisé par le mouvement "single needle" à Los Angeles.',
    characteristics: ['Lignes extrêmement fines', 'Détails élevés', 'Ombrages subtils', 'Élégance'],
    bestFor: 'Ceux qui veulent un tatouage comme un bijou sur la peau.',
    imageUrl: 'https://picsum.photos/seed/fineline-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/fineline-1/800/1000',
      'https://picsum.photos/seed/fineline-2/800/1000',
      'https://picsum.photos/seed/fineline-3/800/1000',
    ]
  },
  {
    id: 'blackwork',
    name: 'Blackwork',
    description: 'Un style large utilisant uniquement de l’encre noire, allant de motifs simples à des illustrations complexes.',
    origins: 'Évolution contemporaine des styles tribaux et traditionnels.',
    characteristics: ['Encre noire uniquement', 'Contraste élevé', 'Saturation lourde', 'Sujets variés'],
    bestFor: 'Ceux qui veulent un look frappant et graphique sans couleur.',
    imageUrl: 'https://picsum.photos/seed/blackwork-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/blackwork-1/800/1000',
      'https://picsum.photos/seed/blackwork-2/800/1000',
      'https://picsum.photos/seed/blackwork-3/800/1000',
    ]
  },
  {
    id: 'dotwork',
    name: 'Dotwork',
    description: 'Utilise des milliers de petits points pour créer des images, des ombres et des textures.',
    origins: 'Inspiré du pointillisme en peinture.',
    characteristics: ['Texture pointillée', 'Ombrages par densité de points', 'Souvent lié à la géométrie', 'Patience technique'],
    bestFor: 'Les amateurs de textures organiques et de détails minutieux.',
    imageUrl: 'https://picsum.photos/seed/dotwork-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/dotwork-1/800/1000',
      'https://picsum.photos/seed/dotwork-2/800/1000',
      'https://picsum.photos/seed/dotwork-3/800/1000',
    ]
  },
  {
    id: 'linework',
    name: 'Linework',
    description: 'Se concentre sur la ligne comme élément principal de la composition.',
    origins: 'Émergé de l’art graphique moderne et de l’illustration.',
    characteristics: ['Lignes continues', 'Absence d’ombrage', 'Clarté visuelle', 'Minimalisme'],
    bestFor: 'Ceux qui apprécient la pureté du dessin au trait.',
    imageUrl: 'https://picsum.photos/seed/linework-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/linework-1/800/1000',
      'https://picsum.photos/seed/linework-2/800/1000',
      'https://picsum.photos/seed/linework-3/800/1000',
    ]
  },
  {
    id: 'geometrique',
    name: 'Géométrique',
    description: 'Basé sur des formes mathématiques, la symétrie et les motifs répétitifs.',
    origins: 'Influencé par la géométrie sacrée et le design graphique.',
    characteristics: ['Symétrie parfaite', 'Motifs répétitifs', 'Éléments de mandala', 'Précision'],
    bestFor: 'Les esprits structurés cherchant l’harmonie visuelle.',
    imageUrl: 'https://picsum.photos/seed/geometric-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/geometric-1/800/1000',
      'https://picsum.photos/seed/geometric-2/800/1000',
      'https://picsum.photos/seed/geometric-3/800/1000',
    ]
  },
  {
    id: 'ornemental',
    name: 'Ornemental',
    description: 'Conçu pour décorer le corps, souvent inspiré par la dentelle, les bijoux ou l’architecture.',
    origins: 'Mélange de styles traditionnels et de design décoratif.',
    characteristics: ['Motifs de dentelle', 'Effets de bijoux', 'Symétrie', 'Élégance décorative'],
    bestFor: 'Ceux qui voient le tatouage comme un ornement corporel permanent.',
    imageUrl: 'https://picsum.photos/seed/ornamental-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/ornamental-1/800/1000',
      'https://picsum.photos/seed/ornamental-2/800/1000',
      'https://picsum.photos/seed/ornamental-3/800/1000',
    ]
  },
  {
    id: 'japonais',
    name: 'Japonais (Irezumi)',
    description: 'Art traditionnel japonais mettant en scène des créatures mythologiques, des fleurs et du folklore.',
    origins: 'Datant de plusieurs siècles, lié à la période Edo.',
    characteristics: ['Grande échelle', 'Arrière-plans fluides', 'Couleurs équilibrées', 'Symbolisme fort'],
    bestFor: 'Les amateurs de grandes pièces narratives et culturelles.',
    imageUrl: 'https://picsum.photos/seed/japanese-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/japanese-1/800/1000',
      'https://picsum.photos/seed/japanese-2/800/1000',
      'https://picsum.photos/seed/japanese-3/800/1000',
    ]
  },
  {
    id: 'neotraditionnel',
    name: 'Néotraditionnel',
    description: 'Une version moderne du style Old School, avec plus de détails, de couleurs et de profondeur.',
    origins: 'Évolution du traditionnel avec des techniques modernes.',
    characteristics: ['Lignes variées', 'Palette de couleurs riche', 'Profondeur accrue', 'Sujets détaillés'],
    bestFor: 'Ceux qui aiment le classique avec une touche de modernité.',
    imageUrl: 'https://picsum.photos/seed/neotrad-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/neotrad-1/800/1000',
      'https://picsum.photos/seed/neotrad-2/800/1000',
      'https://picsum.photos/seed/neotrad-3/800/1000',
    ]
  },
  {
    id: 'trash-polka',
    name: 'Trash Polka',
    description: 'Combine des éléments réalistes avec du texte et des taches d’encre, généralement en noir et rouge.',
    origins: 'Créé par Buena Vista Tattoo Club en Allemagne.',
    characteristics: ['Contraste noir et rouge', 'Éléments chaotiques', 'Réalisme mélangé à l’abstrait', 'Énergie brute'],
    bestFor: 'Les personnalités rebelles et expressives.',
    imageUrl: 'https://picsum.photos/seed/trashpolka-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/trash-1/800/1000',
      'https://picsum.photos/seed/trash-2/800/1000',
      'https://picsum.photos/seed/trash-3/800/1000',
    ]
  },
  {
    id: 'ignorant-style',
    name: 'Ignorant Style',
    description: 'Un style délibérément brut, simple et enfantin, souvent sans ombrage.',
    origins: 'Né de la culture graffiti européenne.',
    characteristics: ['Lignes simples', 'Aspect "fait maison"', 'Humour absurde', 'Absence de technique traditionnelle'],
    bestFor: 'Les amateurs d’art brut et d’ironie.',
    imageUrl: 'https://picsum.photos/seed/ignorant-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/ignorant-1/800/1000',
      'https://picsum.photos/seed/ignorant-2/800/1000',
      'https://picsum.photos/seed/ignorant-3/800/1000',
    ]
  },
  {
    id: 'sketch',
    name: 'Sketch',
    description: 'Imite l’apparence d’un croquis sur papier, avec des lignes de construction visibles.',
    origins: 'Inspiré par les carnets de dessins d’artistes.',
    characteristics: ['Lignes de croquis', 'Hachures', 'Aspect inachevé', 'Dynamisme'],
    bestFor: 'Ceux qui aiment le processus créatif et le mouvement.',
    imageUrl: 'https://picsum.photos/seed/sketch-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/sketch-1/800/1000',
      'https://picsum.photos/seed/sketch-2/800/1000',
      'https://picsum.photos/seed/sketch-3/800/1000',
    ]
  },
  {
    id: 'lettrage',
    name: 'Lettrage',
    description: 'Se concentre sur la typographie et l’écriture comme forme d’art principale.',
    origins: 'Évolué de la calligraphie et du graffiti.',
    characteristics: ['Polices variées', 'Calligraphie complexe', 'Messages personnels', 'Précision du trait'],
    bestFor: 'Ceux qui veulent porter des mots ou des citations avec style.',
    imageUrl: 'https://picsum.photos/seed/lettering-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/lettering-1/800/1000',
      'https://picsum.photos/seed/lettering-2/800/1000',
      'https://picsum.photos/seed/lettering-3/800/1000',
    ]
  },
  {
    id: 'mandala',
    name: 'Mandala',
    description: 'Motifs circulaires complexes représentant l’univers et l’harmonie.',
    origins: 'Racines dans les traditions spirituelles hindoues et bouddhistes.',
    characteristics: ['Forme circulaire', 'Symétrie radiale', 'Détails géométriques', 'Aspect méditatif'],
    bestFor: 'Ceux qui cherchent l’équilibre et la spiritualité.',
    imageUrl: 'https://picsum.photos/seed/mandala-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/mandala-1/800/1000',
      'https://picsum.photos/seed/mandala-2/800/1000',
      'https://picsum.photos/seed/mandala-3/800/1000',
    ]
  },
  {
    id: 'bio-organique',
    name: 'Bio-organique',
    description: 'Représente des éléments naturels ou biologiques fusionnant avec le corps.',
    origins: 'Inspiré par la nature et l’art fantastique.',
    characteristics: ['Formes fluides', 'Textures naturelles', 'Profondeur', 'Fusion avec l’anatomie'],
    bestFor: 'Les amateurs de formes naturelles et de design organique.',
    imageUrl: 'https://picsum.photos/seed/bioorganic-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/bio-1/800/1000',
      'https://picsum.photos/seed/bio-2/800/1000',
      'https://picsum.photos/seed/bio-3/800/1000',
    ]
  },
  {
    id: 'chicano',
    name: 'Chicano',
    description: 'Style né dans la culture mexicano-américaine, utilisant des ombrages fins en noir et gris.',
    origins: 'Émergé de la culture des quartiers et des prisons de Californie.',
    characteristics: ['Ombrages noirs et gris', 'Iconographie religieuse', 'Portraits réalistes', 'Lettrages stylisés'],
    bestFor: 'Ceux qui veulent un tatouage avec une forte identité culturelle.',
    imageUrl: 'https://picsum.photos/seed/chicano-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/chicano-1/800/1000',
      'https://picsum.photos/seed/chicano-2/800/1000',
      'https://picsum.photos/seed/chicano-3/800/1000',
    ]
  },
  {
    id: 'polynesien',
    name: 'Polynésien',
    description: 'Style traditionnel des îles du Pacifique, utilisant des motifs géométriques pour raconter une histoire.',
    origins: 'Pratiqué depuis des millénaires dans les îles de Polynésie.',
    characteristics: ['Motifs répétitifs', 'Symbolisme tribal', 'Adaptation au corps', 'Encre noire'],
    bestFor: 'Ceux qui cherchent un tatouage protecteur et spirituel.',
    imageUrl: 'https://picsum.photos/seed/polynesian-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/polynesian-1/800/1000',
      'https://picsum.photos/seed/polynesian-2/800/1000',
      'https://picsum.photos/seed/polynesian-3/800/1000',
    ]
  },
  {
    id: 'maori',
    name: 'Maori',
    description: 'Style spécifique de Nouvelle-Zélande, caractérisé par des spirales et des motifs curvilignes.',
    origins: 'Art sacré du peuple Maori, appelé "Ta Moko".',
    characteristics: ['Spirales (Koru)', 'Lignes courbes', 'Symbolisme familial', 'Identité forte'],
    bestFor: 'Ceux qui veulent un tatouage honorant l’héritage et la force.',
    imageUrl: 'https://picsum.photos/seed/maori-tattoo/800/1000',
    gallery: [
      'https://picsum.photos/seed/maori-1/800/1000',
      'https://picsum.photos/seed/maori-2/800/1000',
      'https://picsum.photos/seed/maori-3/800/1000',
    ]
  }
];

// Génération de 2 artistes par style
export const ARTISTS: Artist[] = TATTOO_STYLES.flatMap(style => [
  {
    id: `artist-1-${style.id}`,
    name: `Master ${style.name} I`,
    studioName: `${style.name} Studio Alpha`,
    city: 'Paris',
    country: 'France',
    styles: [style.name, 'Blackwork'],
    bio: `Spécialiste reconnu du style ${style.name}, cet artiste combine technique ancestrale et vision moderne pour des pièces uniques.`,
    imageUrl: `https://picsum.photos/seed/artist-1-${style.id}/800/1000`,
    gallery: [
      `https://picsum.photos/seed/artist-1-${style.id}-p1/801/1001`,
      `https://picsum.photos/seed/artist-1-${style.id}-p2/802/1002`,
      `https://picsum.photos/seed/artist-1-${style.id}-p3/803/1003`,
    ],
    rating: 4.9,
    reviews: [
      { id: 'r1', userName: 'Jean D.', rating: 5, comment: 'Une précision incroyable, je recommande vivement.', date: '2024-02-15' }
    ],
    socials: { instagram: '@master_ink_1', website: 'masterink1.com' }
  },
  {
    id: `artist-2-${style.id}`,
    name: `Master ${style.name} II`,
    studioName: `${style.name} Art Collective`,
    city: 'Berlin',
    country: 'Allemagne',
    styles: [style.name, 'Minimaliste'],
    bio: `Basé à Berlin, cet artiste explore les limites du style ${style.name} avec une approche minimaliste et élégante.`,
    imageUrl: `https://picsum.photos/seed/artist-2-${style.id}/800/1000`,
    gallery: [
      `https://picsum.photos/seed/artist-2-${style.id}-p1/801/1001`,
      `https://picsum.photos/seed/artist-2-${style.id}-p2/802/1002`,
      `https://picsum.photos/seed/artist-2-${style.id}-p3/803/1003`,
    ],
    rating: 4.8,
    reviews: [
      { id: 'r2', userName: 'Klaus S.', rating: 5, comment: 'Der beste Tätowierer für cet art.', date: '2024-01-20' }
    ],
    socials: { instagram: '@master_ink_2', tiktok: '@masterink2' }
  }
]);
