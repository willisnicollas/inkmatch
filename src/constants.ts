import { TattooStyle, Artist } from './types';

const GREY_GRADIENT = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzU1NSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzIyMiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZzEpIi8+PC9zdmc+";

export const TATTOO_STYLES: TattooStyle[] = [
  {
    id: 'abstrait',
    name: 'Abstrait',
    description: 'Le tatouage abstrait se libère des formes figuratives pour se concentrer sur l’émotion, le mouvement et la composition pure.',
    origins: 'Inspiré des mouvements artistiques du 20ème siècle comme l’expressionnisme abstrait.',
    characteristics: ['Formes libres', 'Éclaboussures', 'Lignes chaotiques mais maîtrisées', 'Explosion de textures'],
    bestFor: 'Ceux qui cherchent une pièce unique, interprétative et profondément personnelle.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'aquarelle',
    name: 'Aquarelle',
    description: 'Imite le rendu de la peinture à l’eau sur papier, avec des transparences et des dégradés fondus.',
    origins: 'Style contemporain né de l’influence de la peinture moderne.',
    characteristics: ['Absence de contours', 'Effets de pinceau', 'Transparence', 'Éclaboussures d’encre'],
    bestFor: 'Les âmes artistiques cherchant de la fluidité et de la poésie.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'bio-mecanique',
    name: 'Bio-mécanique',
    description: 'Une fusion entre l’organique et la machine, donnant l’illusion que des composants mécaniques se trouvent sous la peau.',
    origins: 'Popularisé dans les années 80, très influencé par l’œuvre de H.R. Giger (Alien).',
    characteristics: ['Rouages et pistons', 'Tissus organiques entremêlés', 'Effet 3D', 'Ombrages complexes'],
    bestFor: 'Les fans de science-fiction et de détails mécaniques hyper-réalistes.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'bio-organique',
    name: 'Bio-organique',
    description: 'Se concentre exclusivement sur des éléments naturels, végétaux ou cellulaires fusionnant avec le corps.',
    origins: 'Inspiré par la nature, les récifs coralliens et l’anatomie fantastique.',
    characteristics: ['Formes fluides', 'Textures naturelles', 'Fusion avec l’anatomie', 'Profondeur'],
    bestFor: 'Ceux qui veulent un tatouage qui semble faire partie intégrante de leur corps.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'blackwork',
    name: 'Blackwork',
    description: 'Utilisation massive d’encre noire pour créer des contrastes saisissants et des motifs graphiques puissants.',
    origins: 'Évolution moderne des styles tribaux et traditionnels.',
    characteristics: ['Encre noire uniquement', 'Saturation lourde', 'Contraste élevé', 'Sujets variés'],
    bestFor: 'Ceux qui veulent un look frappant, intemporel et sans compromis.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'chicano',
    name: 'Chicano',
    description: 'Style empreint d’une forte identité culturelle, mêlant réalisme, religion et imagerie urbaine.',
    origins: 'Né dans la culture des quartiers et des prisons américano-mexicaines.',
    characteristics: ['Ombrages gris doux', 'Portraits réalistes', 'Vierges Marie et clowns', 'Lettrages stylisés'],
    bestFor: 'Ceux qui cherchent un tatouage avec une âme, une histoire et une identité forte.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'cybersigilism',
    name: 'Cybersigilism',
    description: 'Un style ultra-moderne mêlant l’esthétique numérique, le gothique et des lignes fluides bio-organiques.',
    origins: 'Émergé récemment de la culture internet et du design post-numérique.',
    characteristics: ['Lignes fines et acérées', 'Allure technologique', 'Formes agressives mais graciles', 'Noir pur'],
    bestFor: 'Les avant-gardistes cherchant un style futuriste et unique.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'dotwork',
    name: 'Dotwork',
    description: 'Technique de tatouage réalisée point par point pour créer des ombrages et des textures uniques.',
    origins: 'Inspiré du pointillisme, très utilisé dans la géométrie sacrée.',
    characteristics: ['Texture pointillée', 'Ombrages par densité', 'Précision extrême', 'Aspect organique'],
    bestFor: 'Les amateurs de textures subtiles et de détails minutieux.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'fine-line',
    name: 'Fine Line',
    description: 'Utilisation de lignes extrêmement fines pour un rendu délicat et sophistiqué.',
    origins: 'Popularisé par le mouvement "single needle" en Californie.',
    characteristics: ['Lignes de cheveux', 'Détails microscopiques', 'Minimalisme', 'Élégance'],
    bestFor: 'Ceux qui recherchent la discrétion et la finesse absolue.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'geometrique',
    name: 'Géométrique',
    description: 'Se concentre sur la structure, la symétrie et les formes mathématiques.',
    origins: 'Influencé par la géométrie sacrée et le design graphique.',
    characteristics: ['Symétrie parfaite', 'Formes géométriques', 'Précision', 'Harmonie visuelle'],
    bestFor: 'Les esprits structurés cherchant l’équilibre parfait sur la peau.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'japonais',
    name: 'Japonais',
    description: 'L’un des styles les plus anciens et respectés, connu pour ses pièces à grande échelle et son symbolisme riche.',
    origins: 'Issu de l’Irezumi et de l’art Ukiyo-e de la période Edo.',
    characteristics: ['Grands aplats de couleurs', 'Motifs de vagues et nuages', 'Dragons, carpes et samouraïs', 'Composition fluide'],
    bestFor: 'Ceux qui souhaitent une œuvre narrative couvrant de grandes parties du corps.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'lettrage',
    name: 'Lettrage',
    description: 'L’art de l’écriture sur la peau, où le message et la forme de la lettre ne font qu’un.',
    origins: 'Issu de la calligraphie traditionnelle et du graffiti.',
    characteristics: ['Polices personnalisées', 'Fioritures calligraphiques', 'Précision du trait', 'Lisibilité variable'],
    bestFor: 'Ceux qui veulent graver des mots, des noms ou des citations avec élégance.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'mandala',
    name: 'Mandala',
    description: 'Motifs circulaires complexes symbolisant l’univers, l’équilibre et la méditation.',
    origins: 'Racines dans les traditions spirituelles orientales (hindouisme, bouddhisme).',
    characteristics: ['Symétrie radiale', 'Détails concentriques', 'Lignes précises', 'Aspect spirituel'],
    bestFor: 'Ceux qui cherchent un tatouage harmonieux et introspectif.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'manga',
    name: 'Manga',
    description: 'Transposition fidèle de l’esthétique de l’animation japonaise et de la bande dessinée sur la peau.',
    origins: 'Directement lié à la culture Otaku et à l’industrie du manga au Japon.',
    characteristics: ['Lignes claires', 'Couleurs vibrantes ou noir et blanc tramé', 'Perspectives dynamiques', 'Personnages iconiques'],
    bestFor: 'Les fans inconditionnels de la culture japonaise et de l’animation.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'maori',
    name: 'Maori',
    description: 'Tatouage traditionnel de Nouvelle-Zélande racontant l’histoire familiale et le statut social.',
    origins: 'Art du "Ta Moko" pratiqué par le peuple Maori.',
    characteristics: ['Spirales (Koru)', 'Lignes courbes épaisses', 'Motifs de peigne (Uhi)', 'Symbolique profonde'],
    bestFor: 'Ceux qui respectent les traditions ancestrales et les histoires de lignée.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'micro-realisme',
    name: 'Micro Réalisme',
    description: 'L’art du détail poussé à l’extrême sur de très petites surfaces.',
    origins: 'Évolution moderne du réalisme grâce à la précision des nouvelles machines.',
    characteristics: ['Détails photographiques minuscules', 'Ombrages fondus', 'Aiguilles simples', 'Réalisme bluffant'],
    bestFor: 'Les amateurs de défis techniques et de réalisme discret.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'minimaliste',
    name: 'Minimaliste',
    description: 'La recherche de l’essentiel à travers des formes simples et épurées.',
    origins: 'Directement lié au courant artistique minimaliste.',
    characteristics: ['Peu de lignes', 'Petite taille', 'Espace négatif important', 'Discrétion'],
    bestFor: 'Ceux qui préfèrent la suggestion à l’exhibition.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'neotraditionnel',
    name: 'Néotraditionnel',
    description: 'Une version modernisée du style Old School, avec plus de détails, de couleurs et de profondeur.',
    origins: 'Évolution du traditionnel avec des techniques modernes.',
    characteristics: ['Lignes variées', 'Palette de couleurs riche', 'Profondeur accrue', 'Sujets détaillés'],
    bestFor: 'Ceux qui aiment le classique mais avec une touche de modernité artistique.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'new-school',
    name: 'New School',
    description: 'Style cartoonesque, coloré et aux proportions exagérées.',
    origins: 'Né dans les années 70-80 aux USA, influencé par le graffiti et la pop culture.',
    characteristics: ['Couleurs flashy', 'Gros contours', 'Perspective déformée', 'Sujets fantastiques'],
    bestFor: 'Les personnalités fun, créatives et qui aiment l’imagerie cartoon.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'old-school',
    name: 'Old School',
    description: 'Le style traditionnel américain par excellence : robuste, simple et historique.',
    origins: 'Popularisé par les marins (Sailor Jerry) au début du 20ème siècle.',
    characteristics: ['Gros contours noirs', 'Palette limitée', 'Symbolique marine', 'Dessin 2D'],
    bestFor: 'Les puristes cherchant un tatouage qui vieillira parfaitement.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'ornemental',
    name: 'Ornemental',
    description: 'Conçu comme un bijou ou une décoration corporelle permanente.',
    origins: 'Inspiré par la joaillerie, la dentelle et les arts décoratifs.',
    characteristics: ['Symétrie', 'Motifs de dentelle', 'Effets de pendentifs', 'Finesse extrême'],
    bestFor: 'Ceux qui veulent embellir l’anatomie avec élégance et finesse.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'polynesien',
    name: 'Polynésien',
    description: 'L’origine même du tatouage, utilisant des motifs géométriques pour protéger et raconter.',
    origins: 'Pratiqué depuis des millénaires dans les îles du Pacifique.',
    characteristics: ['Aplats de noir', 'Motifs géométriques symboliques', 'Adaptation aux muscles', 'Noir pur'],
    bestFor: 'Une recherche de puissance, de protection et de lien avec le Pacifique.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'realisme',
    name: 'Réalisme',
    description: 'La reproduction fidèle de la réalité comme une photographie sur la peau.',
    origins: 'Adaptation des techniques de portrait à l’huile et du fusain au tatouage.',
    characteristics: ['Dégradés de gris parfaits', 'Absence de contours', 'Volume et lumière', 'Précision extrême'],
    bestFor: 'Les portraits d’êtres chers ou de célébrités et les scènes de nature.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'trash-polka',
    name: 'Trash Polka',
    description: 'Une rencontre explosive entre le réalisme, l’abstrait et le design graphique.',
    origins: 'Créé en Allemagne par Volko Merschky et Simone Pfaff.',
    characteristics: ['Noir et Rouge uniquement', 'Contrastes violents', 'Mélange texte et image', 'Énergie brute'],
    bestFor: 'Les personnalités rebelles cherchant une pièce dynamique et unique.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  },
  {
    id: 'tribal',
    name: 'Tribal',
    description: 'Un style universel basé sur des formes noires abstraites et puissantes.',
    origins: 'Inspiré des tatouages indigènes du monde entier.',
    characteristics: ['Encre noire solide', 'Formes en pointes', 'Flux avec le corps', 'Puissance visuelle'],
    bestFor: 'Ceux qui recherchent un design fort, graphique et intemporel.',
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT]
  }
];

export const COUNTRIES = [
  "Afghanistan", "Afrique du Sud", "Albanie", "Algérie", "Allemagne", "Andorre", "Angola", "Antigua-et-Barbuda", 
  "Arabie Saoudite", "Argentine", "Arménie", "Australie", "Autriche", "Azerbaïdjan", "Bahamas", "Bahreïn", 
  "Bangladesh", "Barbade", "Belgique", "Belize", "Bénin", "Bhoutan", "Biélorussie", "Birmanie", "Bolivie", 
  "Bosnie-Herzégovine", "Botswana", "Brésil", "Brunei", "Bulgarie", "Burkina Faso", "Burundi", "Cambodge", 
  "Cameroun", "Canada", "Cap-Vert", "Chili", "Chine", "Chypre", "Colombie", "Comores", "Congo-Brazzaville", 
  "Congo-Kinshasa", "Corée du Nord", "Corée du Sud", "Costa Rica", "Côte d'Ivoire", "Croatie", "Cuba", 
  "Danemark", "Djibouti", "Dominique", "Égypte", "Émirats Arabes Unis", "Équateur", "Érythrée", "Espagne", 
  "Eswatini", "Estonie", "États-Unis", "Éthiopie", "Fidji", "Finlande", "France", "Gabon", "Gambie", "Géorgie", 
  "Ghana", "Grèce", "Grenade", "Guatemala", "Guinée", "Guinée-Bissau", "Guinée équatoriale", "Guyana", "Haïti", 
  "Honduras", "Hongrie", "Inde", "Indonésie", "Irak", "Iran", "Irlande", "Islande", "Israël", "Italie", "Jamaïque", 
  "Japon", "Jordanie", "Kazakhstan", "Kenya", "Kirghizistan", "Kiribati", "Koweït", "Laos", "Lesotho", "Lettonie", 
  "Liban", "Libéria", "Libye", "Liechtenstein", "Lituanie", "Luxembourg", "Macédoine du Nord", "Madagascar", 
  "Malaisie", "Malawi", "Maldives", "Mali", "Malte", "Maroc", "Maurice", "Mauritanie", "Mexique", "Micronésie", 
  "Moldavie", "Monaco", "Mongolie", "Monténégro", "Mozambique", "Namibie", "Nauru", "Népal", "Nicaragua", 
  "Niger", "Nigéria", "Norvège", "Nouvelle-Zélande", "Oman", "Ouganda", "Ouzbékistan", "Pakistan", "Palaos", 
  "Palestine", "Panama", "Papouasie-Nouvelle-Guinée", "Paraguay", "Pays-Bas", "Pérou", "Philippines", "Pologne", 
  "Portugal", "Qatar", "République Centrafricaine", "République Dominicaine", "République Tchèque", "Roumanie", 
  "Royaume-Uni", "Russie", "Rwanda", "Saint-Christophe-et-Niévès", "Sainte-Lucie", "Saint-Marin", 
  "Saint-Vincent-et-les-Grenadines", "Salomon", "Salvador", "Samoa", "Sao Tomé-et-Principe", "Sénégal", 
  "Serbie", "Seychelles", "Sierra Leone", "Singapour", "Slovaquie", "Slovénie", "Somalie", "Soudan", 
  "Soudan du Sud", "Sri Lanka", "Suède", "Suisse", "Suriname", "Syrie", "Tadjikistan", "Tanzanie", "Tchad", 
  "Thaïlande", "Timor oriental", "Togo", "Tonga", "Trinité-et-Tobago", "Tunisie", "Turkménistan", "Turquie", 
  "Tuvalu", "Ukraine", "Uruguay", "Vanuatu", "Vatican", "Venezuela", "Viêt Nam", "Yémen", "Zambie", "Zimbabwe"
];

// Génération de 5 artistes par style avec images picsum
export const ARTISTS: Artist[] = TATTOO_STYLES.flatMap(style => {
  const cities = [
    { city: 'Paris', country: 'France', studio: 'Artiste Studio' },
    { city: 'Berlin', country: 'Allemagne', studio: 'Art Collective' },
    { city: 'Londres', country: 'Royaume-Uni', studio: 'The Studio' },
    { city: 'Tokyo', country: 'Japon', studio: 'Dragon Ink' },
    { city: 'New York', country: 'États-Unis', studio: 'Empire Tattoos' }
  ];

  return cities.map((meta, i) => ({
    id: `artist-${style.id}-${i + 1}`,
    name: `Artiste ${style.name} ${['I', 'II', 'III', 'IV', 'V'][i]}`,
    studioName: meta.studio,
    city: meta.city,
    country: meta.country,
    styles: [style.name, 'Blackwork'],
    bio: `Expert international du style ${style.name}, basé à ${meta.city}. Reconnu pour sa technique irréprochable et sa vision artistique unique.`,
    imageUrl: GREY_GRADIENT,
    gallery: [GREY_GRADIENT, GREY_GRADIENT, GREY_GRADIENT],
    rating: [4.9, 4.8, 4.7, 4.9, 5.0][i],
    reviews: [
      { id: `r-${style.id}-${i}`, userName: 'Alexandre P.', rating: 5, comment: 'Une précision chirurgicale et un style unique.', date: '2024-03-20' }
    ],
    socials: { instagram: `@master_${style.id}_${i}`, website: `artist-${style.id}-${i}.ink` }
  }));
});

