export interface MenuCategory {
  id: string;
  nameGeorgian: string;
  nameEnglish: string;
  description: string;
  featured?: boolean;
  type: 'food' | 'beverage';
}

export const menuCategories: MenuCategory[] = [
  // Food Categories
  {
    id: 'cold-appetizers',
    nameGeorgian: 'SOYUQ QƏLYANALTILAR',
    nameEnglish: 'Cold Appetizers',
    description: 'Traditional Georgian cold starters and mezze plates featuring fresh ingredients and authentic flavors',
    type: 'food'
  },
  {
    id: 'salads',
    nameGeorgian: 'SALAT',
    nameEnglish: 'Salads',
    description: 'Fresh Georgian salads with seasonal vegetables, herbs, and traditional dressings',
    type: 'food'
  },
  {
    id: 'soups',
    nameGeorgian: 'ŞORBALAR',
    nameEnglish: 'Soups',
    description: 'Hearty Georgian soups and broths made with traditional recipes and premium ingredients',
    type: 'food'
  },
  {
    id: 'hot-appetizers',
    nameGeorgian: 'İSTİ QƏLYANALTILAR',
    nameEnglish: 'Hot Appetizers',
    description: 'Warm Georgian starters and small plates perfect for sharing',
    type: 'food'
  },
  {
    id: 'hot-dishes',
    nameGeorgian: 'İSTİ YEMƏKLƏR',
    nameEnglish: 'Hot Dishes',
    description: 'Main course Georgian specialties featuring traditional cooking methods and authentic spices',
    type: 'food'
  },
  {
    id: 'sauces',
    nameGeorgian: 'SOUSLAR',
    nameEnglish: 'Sauces',
    description: 'Traditional Georgian sauces and condiments to complement your meal',
    type: 'food'
  },
  {
    id: 'khinkali',
    nameGeorgian: 'XƏNGƏLLƏR',
    nameEnglish: 'Khinkali',
    description: 'Traditional Georgian dumplings - our specialty! Hand-made fresh daily with premium fillings',
    featured: true,
    type: 'food'
  },
  {
    id: 'khachapuri',
    nameGeorgian: 'XAÇAPURİLƏR',
    nameEnglish: 'Khachapuri',
    description: 'Georgian cheese-filled bread in various traditional styles from different regions',
    featured: true,
    type: 'food'
  },
  {
    id: 'kebabs',
    nameGeorgian: 'KABABLAR',
    nameEnglish: 'Kebabs',
    description: 'Grilled meats and Georgian-style kebabs cooked over open flame',
    type: 'food'
  },
  {
    id: 'desserts',
    nameGeorgian: 'DESERT',
    nameEnglish: 'Desserts',
    description: 'Traditional Georgian sweets and modern dessert interpretations',
    type: 'food'
  },
  {
    id: 'extras',
    nameGeorgian: 'EKSTRALAR',
    nameEnglish: 'Extras',
    description: 'Additional accompaniments and special additions to enhance your meal',
    type: 'food'
  },
  {
    id: 'sides',
    nameGeorgian: 'QARNİRLƏR',
    nameEnglish: 'Side Dishes',
    description: 'Traditional Georgian side dishes and accompaniments',
    type: 'food'
  },
  {
    id: 'saj',
    nameGeorgian: 'SAC',
    nameEnglish: 'Saj',
    description: 'Traditional Georgian saj dishes cooked on special iron griddle',
    type: 'food'
  },
  {
    id: 'hookah',
    nameGeorgian: 'QƏLYAN',
    nameEnglish: 'Hookah',
    description: 'Premium hookah selection with various flavors for a relaxing experience',
    type: 'beverage'
  },
  {
    id: 'march-menu',
    nameGeorgian: '8 MART MENU',
    nameEnglish: 'March 8th Menu',
    description: 'Special celebration menu for International Women\'s Day',
    type: 'food'
  },

  // Beverage Categories
  {
    id: 'hot-drinks',
    nameGeorgian: 'İSTİ İÇKİLƏR',
    nameEnglish: 'Hot Drinks',
    description: 'Traditional Georgian teas, coffee, and warming beverages',
    type: 'beverage'
  },
  {
    id: 'cold-drinks',
    nameGeorgian: 'SOYUQ İÇKİLƏR',
    nameEnglish: 'Cold Drinks',
    description: 'Refreshing cold beverages and soft drinks',
    type: 'beverage'
  },
  {
    id: 'compote',
    nameGeorgian: 'KOMPOT',
    nameEnglish: 'Compote',
    description: 'Traditional fruit compotes made with seasonal fruits',
    type: 'beverage'
  },
  {
    id: 'natural-juices',
    nameGeorgian: 'NATURAL',
    nameEnglish: 'Natural Juices',
    description: 'Pure natural fruit juices without additives',
    type: 'beverage'
  },
  {
    id: 'milkshakes',
    nameGeorgian: 'MILKSHAKE',
    nameEnglish: 'Milkshakes',
    description: 'Creamy milkshakes with various flavors and toppings',
    type: 'beverage'
  },
  {
    id: 'fresh-juices',
    nameGeorgian: 'FRESH',
    nameEnglish: 'Fresh Juices',
    description: 'Freshly squeezed juices made to order',
    type: 'beverage'
  },
  {
    id: 'lemonades',
    nameGeorgian: 'EV LİMONAD',
    nameEnglish: 'Homemade Lemonades',
    description: 'House-made lemonades with fresh ingredients and unique flavors',
    type: 'beverage'
  },
  {
    id: 'non-alcoholic-cocktails',
    nameGeorgian: 'SPİRTSİZ KOKTEYL',
    nameEnglish: 'Non-alcoholic Cocktails',
    description: 'Creative mocktails and alcohol-free cocktail creations',
    type: 'beverage'
  },
  {
    id: 'beers',
    nameGeorgian: 'PİYVƏLƏR',
    nameEnglish: 'Beers',
    description: 'Selection of local and international beers',
    type: 'beverage'
  },
  {
    id: 'red-wine',
    nameGeorgian: 'RED WINE',
    nameEnglish: 'Red Wines',
    description: 'Premium red wines including Georgian varieties',
    type: 'beverage'
  },
  {
    id: 'white-wine',
    nameGeorgian: 'WHITE WINE',
    nameEnglish: 'White Wines', 
    description: 'Crisp white wines and traditional Georgian white varietals',
    type: 'beverage'
  },
  {
    id: 'rose-wine',
    nameGeorgian: 'ROSE WINE',
    nameEnglish: 'Rosé Wines',
    description: 'Elegant rosé wines perfect for any occasion',
    type: 'beverage'
  },
  {
    id: 'vermouth',
    nameGeorgian: 'VERMOUTH',
    nameEnglish: 'Vermouth',
    description: 'Classic vermouths for aperitifs and cocktails',
    type: 'beverage'
  },
  {
    id: 'vodka',
    nameGeorgian: 'VODKA',
    nameEnglish: 'Vodka',
    description: 'Premium vodka selection from various regions',
    type: 'beverage'
  },
  {
    id: 'caca',
    nameGeorgian: 'CACA',
    nameEnglish: 'Chacha',
    description: 'Traditional Georgian grape brandy - a local specialty',
    type: 'beverage'
  },
  {
    id: 'whiskey',
    nameGeorgian: 'WHISKEY',
    nameEnglish: 'Whiskey',
    description: 'Fine whiskeys and whisky from around the world',
    type: 'beverage'
  },
  {
    id: 'tequila',
    nameGeorgian: 'TEQUILA',
    nameEnglish: 'Tequila',
    description: 'Premium tequilas and mezcals from Mexico',
    type: 'beverage'
  },
  {
    id: 'raki',
    nameGeorgian: 'RAKI',
    nameEnglish: 'Raki',
    description: 'Traditional Balkan anise-flavored spirit',
    type: 'beverage'
  },
  {
    id: 'gin',
    nameGeorgian: 'GİN',
    nameEnglish: 'Gin',
    description: 'Premium gins and botanical spirits',
    type: 'beverage'
  },
  {
    id: 'cognac',
    nameGeorgian: 'COGNAC',
    nameEnglish: 'Cognac',
    description: 'Fine cognacs and aged brandies',
    type: 'beverage'
  },
  {
    id: 'liqueur',
    nameGeorgian: 'LIQUEUR',
    nameEnglish: 'Liqueurs',
    description: 'Sweet liqueurs and specialty spirits',
    type: 'beverage'
  },
  {
    id: 'rum',
    nameGeorgian: 'ROM',
    nameEnglish: 'Rum',
    description: 'Caribbean rums and aged varieties',
    type: 'beverage'
  },
  {
    id: 'prosecco',
    nameGeorgian: 'PROSECCO',
    nameEnglish: 'Prosecco',
    description: 'Italian sparkling wines and champagnes',
    type: 'beverage'
  },
  {
    id: 'shot-cocktails',
    nameGeorgian: 'SHOT COCTAILS',
    nameEnglish: 'Shot Cocktails',
    description: 'Creative shot combinations and party drinks',
    type: 'beverage'
  },
  {
    id: 'alcoholic-cocktails',
    nameGeorgian: 'SPİRTLİ KOKTEYL',
    nameEnglish: 'Alcoholic Cocktails',
    description: 'Craft cocktails and signature mixed drinks',
    type: 'beverage'
  }
];
