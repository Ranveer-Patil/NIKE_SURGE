import canAirJordan from 'figma:asset/284fe6d097a86cc207cee5449a505db0667e4e05.png';
import canChicago from 'figma:asset/2806e944ba679afedce467d1bc22dda435e8e944.png';
import canDior from 'figma:asset/31e6f830b5e4b045171e29ecb4bbd3877306379f.png';
import canCactus from 'figma:asset/07567252f410fc145190255e9bf3045ff97a17a3.png';
import canPollen from 'figma:asset/413087b0e0007ac83f6e128fa03b1816b721f603.png';

import shoe1 from 'figma:asset/e8e1cee5cb9cb229e666438b20c9ffd7f99fe47a.png';
import shoe2 from 'figma:asset/838f6b54cd553b50ce730a69bfcd1666b0a518df.png';
import shoe3 from 'figma:asset/6a3f4c00cb7b9437093ba395d32309935df1b275.png';
import shoe4 from 'figma:asset/de68f0797e6bde2f09103cb7d1a7bd2daa92ddb6.png';
import shoe5 from 'figma:asset/d1af5de3b8b05e5d1169137a1b43f03d2d91eba9.png';

export interface Flavor {
  id: string;
  name: string;
  label: string;
  accent: string;
  stat: string;
  sneaker: string;
  tagline: string;
  description: string;
  flavorNotes: string[];
  canImg: string;
  shoeImg: string;
  caffeine: string;
  calories: string;
  sugar: string;
  bcaas: string;
  taurine: string;
  electrolytes: string;
  availability: 'In Stock (Demo)' | 'Limited Drop (Demo)' | 'Pre-Order Only';
  conceptPrice: {
    single: number;
    fourPack: number;
    twelvePack: number;
  };
}

export const FLAVORS: Flavor[] = [
  {
    id: 'icy-berry',
    name: 'Icy Berry',
    label: 'Air Jordan',
    accent: '#63B3ED',
    stat: 'University Blue',
    sneaker: 'Air Jordan 1 High "University Blue"',
    tagline: 'Chilled mountain berry & icy menthol finish',
    description: 'Inspired by the collegiate heritage of Michael Jordan and Carolina blue skies. Icy Berry combines wild highland blueberries with arctic botanical extracts for an ultra-crisp, refreshing burst of physical and mental clarity.',
    flavorNotes: ['Glacier Blueberry', 'Wild Acai', 'Arctic Menthol', 'Crisp Citrus'],
    canImg: canAirJordan,
    shoeImg: shoe3,
    caffeine: '200mg',
    calories: '10 kcal',
    sugar: '0g',
    bcaas: '1000mg',
    taurine: '1000mg',
    electrolytes: 'Sodium 120mg · Potassium 90mg · Magnesium 45mg',
    availability: 'Limited Drop (Demo)',
    conceptPrice: { single: 3.99, fourPack: 14.99, twelvePack: 39.99 },
  },
  {
    id: 'aero-speed',
    name: 'Aero Speed',
    label: 'Chicago',
    accent: '#E53E3E',
    stat: 'Nike Air',
    sneaker: 'Air Jordan 1 High "Chicago 1985"',
    tagline: 'High-octane blood orange & fierce berry punch',
    description: 'A tribute to the iconic 1985 silhouette that changed sports history. Aero Speed brings fiery blood orange, tart pomegranate, and electric citrus into a high-octane formula engineered for explosive bursts of athletic output.',
    flavorNotes: ['Blood Orange', 'Ruby Pomegranate', 'Citrus Surge', 'Cranberry Tart'],
    canImg: canChicago,
    shoeImg: shoe2,
    caffeine: '200mg',
    calories: '10 kcal',
    sugar: '0g',
    bcaas: '1000mg',
    taurine: '1000mg',
    electrolytes: 'Sodium 130mg · Potassium 95mg · Magnesium 50mg',
    availability: 'In Stock (Demo)',
    conceptPrice: { single: 3.99, fourPack: 14.99, twelvePack: 39.99 },
  },
  {
    id: 'aero-ice',
    name: 'Aero Ice',
    label: 'Dior Air',
    accent: '#A0AEC0',
    stat: 'Luxury Edit.',
    sneaker: 'Dior × Air Jordan 1 High OG',
    tagline: 'Refined frosted white peach & sparkling yuzu',
    description: 'The pinnacle of haute couture meets court performance. Aero Ice delivers subtle, sophisticated layers of frosted Italian white peach, mountain spring yuzu, and organic white tea extract for immaculate calm under extreme pressure.',
    flavorNotes: ['Frosted White Peach', 'Japanese Yuzu', 'White Peony Tea', 'Sparkling Mineral'],
    canImg: canDior,
    shoeImg: shoe4,
    caffeine: '180mg',
    calories: '10 kcal',
    sugar: '0g',
    bcaas: '1000mg',
    taurine: '800mg',
    electrolytes: 'Sodium 110mg · Potassium 85mg · Magnesium 40mg',
    availability: 'Limited Drop (Demo)',
    conceptPrice: { single: 4.49, fourPack: 16.99, twelvePack: 44.99 },
  },
  {
    id: 'cactus-energy',
    name: 'Cactus Energy',
    label: 'Travis Scott',
    accent: '#C8A882',
    stat: 'Cactus Jack',
    sneaker: 'Air Jordan 1 Retro High OG "Travis Scott Mocha"',
    tagline: 'Raw desert prickly pear & fire-roasted lime',
    description: 'Straight from the heat of Astroworld and the Sonoran desert. Cactus Energy infuses real prickly pear puree, blue agave nectar notes, and smoked key lime zest for an earthy, relentless surge of adrenaline.',
    flavorNotes: ['Prickly Pear Cactus', 'Desert Agave', 'Charred Key Lime', 'Mocha Salt Hint'],
    canImg: canCactus,
    shoeImg: shoe5,
    caffeine: '200mg',
    calories: '10 kcal',
    sugar: '0g',
    bcaas: '1000mg',
    taurine: '1000mg',
    electrolytes: 'Sodium 140mg · Potassium 100mg · Magnesium 50mg',
    availability: 'In Stock (Demo)',
    conceptPrice: { single: 3.99, fourPack: 14.99, twelvePack: 39.99 },
  },
  {
    id: 'pollen-power',
    name: 'Pollen Power',
    label: 'Yellow & Blk',
    accent: '#ECC94B',
    stat: 'Pollen Air',
    sneaker: 'Air Jordan 1 High OG "Pollen"',
    tagline: 'Golden tropical passionfruit & honeyed ginger spark',
    description: 'Electric contrasts inspired by high-voltage color blocking. Pollen Power features vibrant tropical passionfruit, golden ginger root, and sun-drenched Meyer lemon to activate neuro-muscular velocity without a crash.',
    flavorNotes: ['Meyer Lemon', 'Tropical Passionfruit', 'Golden Ginger Root', 'Raw Honey Nectar'],
    canImg: canPollen,
    shoeImg: shoe1,
    caffeine: '200mg',
    calories: '10 kcal',
    sugar: '0g',
    bcaas: '1000mg',
    taurine: '1000mg',
    electrolytes: 'Sodium 125mg · Potassium 90mg · Magnesium 45mg',
    availability: 'Limited Drop (Demo)',
    conceptPrice: { single: 3.99, fourPack: 14.99, twelvePack: 39.99 },
  },
];
