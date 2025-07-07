import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Flame } from "lucide-react";

interface FoodItem {
  id: number;
  name_en: string;
  name_ru: string;
  name_az: string;
  description_en: string;
  description_ru: string;
  description_az: string;
  price: string;
  image_url: string;
  category_name: string;
  is_available: number;
}

const fetchMenuData = async (): Promise<FoodItem[]> => {
  const response = await apiClient.get("/foods");
  return response.data;
};

export default function MenuPage() {
  const { t, i18n } = useTranslation();
  const [selectedType, setSelectedType] = useState<string>('all');

  const { data: menuData, isLoading, isError } = useQuery({
    queryKey: ["menu"],
    queryFn: fetchMenuData,
  });

  const getCurrentLanguage = () => {
    return i18n.language as 'en' | 'ru' | 'az';
  };

  const getLocalized = (item: FoodItem, field: "name" | "description") => {
    const lang = i18n.language;
    if (lang === "ru") {
      return item[`${field}_ru`];
    }
    if (lang === "az") {
      return item[`${field}_az`];
    }
    return item[`${field}_en`];
  };

  const menuCategories = menuData
    ? Array.from(new Set(menuData?.map((item) => item.category_name) || [])).map(categoryName => ({
        id: categoryName,
        names: {
          en: t(`menu.categories.${categoryName}.en`),
          ru: t(`menu.categories.${categoryName}.ru`),
          az: t(`menu.categories.${categoryName}.az`),
        },
        description: {
          en: t(`menu.categories.${categoryName}.description.en`),
          ru: t(`menu.categories.${categoryName}.description.ru`),
          az: t(`menu.categories.${categoryName}.description.az`),
        },
        type: 'food', // Assuming all fetched items are food, adjust if 'beverage' is possible
        featured: false, // Default to false, will need to be fetched from backend if applicable
        icon: '', // Will need to be fetched from backend if applicable
      }))
    : [];

  const getItemsByCategory = (categoryId: string) => {
    return menuData?.filter(item => item.category_name === categoryId) || [];
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-charcoal text-cream flex items-center justify-center">
        <p className="text-xl">{t('menu.loading')}</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-charcoal text-cream flex items-center justify-center">
        <p className="text-xl text-red-500">{t('menu.error')}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal text-cream py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            {t('menu.title')}
          </h1>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto">
            {t('menu.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <Tabs value={selectedType} onValueChange={setSelectedType} className="mb-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-warm-gray/50">
            <TabsTrigger value="all" className="text-cream data-[state=active]:bg-burgundy data-[state=active]:text-gold">
              All Menu
            </TabsTrigger>
            <TabsTrigger value="food" className="text-cream data-[state=active]:bg-burgundy data-[state=active]:text-gold">
              Food
            </TabsTrigger>
            <TabsTrigger value="beverage" className="text-cream data-[state=active]:bg-burgundy data-[state=active]:text-gold">
              Drinks
            </TabsTrigger>
            <TabsTrigger value="featured" className="text-cream data-[state=active]:bg-burgundy data-[state=active]:text-gold">
              Featured
            </TabsTrigger>
          </TabsList>

          <TabsContent value={selectedType} className="mt-8">
            {/* Menu Categories */}
            <div className="space-y-12">
              {menuCategories.map((category) => {
                const categoryItems = getItemsByCategory(category.id);
                if (categoryItems.length === 0) return null;

                return (
                  <div key={category.id} className="space-y-6">
                    {/* Category Header */}
                    <div className="border-b border-gold/20 pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        {category.icon && (
                          <span className="text-2xl">{category.icon}</span>
                        )}
                        {category.featured && (
                          <Badge variant="secondary" className="bg-burgundy text-gold">
                            Featured
                          </Badge>
                        )}
                        <h2 className="text-3xl font-bold text-gold">
                          {category.names[getCurrentLanguage()]}
                        </h2>
                      </div>
                      <p className="text-cream/70 text-lg">
                        {category.description[getCurrentLanguage()]}
                      </p>
                    </div>

                    {/* Category Items - Wolt Style */}
                    <div className="space-y-4">
                      {categoryItems.map((item) => (
                        <Card key={item.id} className="bg-warm-gray border-gold/10 hover:border-gold/30 transition-all duration-300 group overflow-hidden">
                          <CardContent className="p-0">
                            <div className="flex items-start">
                              {/* Item Image */}
                              <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                                <img 
                                  src={`http://localhost:8000${item.image_url}`} 
                                  alt={getLocalized(item, "name")}
                                  className="w-full h-full object-cover rounded-l-lg group-hover:scale-105 transition-transform duration-300"
                                  loading="lazy"
                                />
                              </div>
                              
                              {/* Item Details */}
                              <div className="flex-1 p-4 sm:p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <div className="flex-1 pr-4">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gold mb-1 group-hover:text-soft-gold transition-colors">
                                      {getLocalized(item, "name")}
                                    </h3>
                                    
                                    {/* Badges */}
                                    <div className="flex flex-wrap gap-2 mb-2">
                                      {/* Assuming is_available indicates vegetarian/vegan/spicy from backend */}
                                      {item.is_available === 1 && (
                                        <Badge variant="outline" className="border-green-500 text-green-400 text-xs">
                                          Available
                                        </Badge>
                                      )}
                                      {/* You will need to map your backend data to these badges */}
                                      {/* Example: if your backend has a 'is_vegetarian' field */}
                                      {/* {item.is_vegetarian && (
                                        <Badge variant="outline" className="border-green-500 text-green-400 text-xs">
                                          <Leaf className="w-3 h-3 mr-1" />
                                          Vegetarian
                                        </Badge>
                                      )} */}
                                      {/* {item.is_spicy && (
                                        <Badge variant="outline" className="border-red-500 text-red-400 text-xs">
                                          <Flame className="w-3 h-3 mr-1" />
                                          Spicy
                                        </Badge>
                                      )} */}
                                      {/* {item.is_featured && (
                                        <Badge className="bg-burgundy text-gold text-xs">
                                          Popular
                                        </Badge>
                                      )} */}
                                    </div>
                                  </div>
                                  
                                  {/* Price */}
                                  <div className="text-right flex-shrink-0">
                                    <div className="text-xl sm:text-2xl font-bold text-gold">
                                      ₼{item.price}
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Description */}
                                <p className="text-cream/80 text-sm sm:text-base leading-relaxed line-clamp-2 sm:line-clamp-3">
                                  {getLocalized(item, "description")}
                                </p>
                                
                                {/* Allergens - Backend needs to provide this */}
                                {/* {item.allergens && (
                                  <div className="mt-2 pt-2 border-t border-gold/10">
                                    <p className="text-xs text-cream/60">
                                      Contains: {item.allergens.join(', ')}
                                    </p>
                                  </div>
                                )} */}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Featured Items Section - Backend needs to provide featured items */}
        {selectedType === 'all' && (
          <div className="mt-16 pt-12 border-t border-gold/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gold mb-4">
                Chef's Recommendations
              </h2>
              <p className="text-cream/80 max-w-2xl mx-auto">
                Our most popular dishes that showcase the authentic flavors of Georgian cuisine
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {menuData?.filter(item => item.is_available === 1).slice(0, 6).map((item) => (
                <Card key={item.id} className="bg-burgundy/20 border-gold hover:border-soft-gold transition-all duration-300 group transform hover:scale-105 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={`http://localhost:8000${item.image_url}`} 
                        alt={getLocalized(item, "name")}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-gold text-charcoal font-semibold">
                          Chef's Special
                        </Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <div className="bg-charcoal/80 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-gold font-bold text-lg">₼{item.price}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gold mb-2 group-hover:text-soft-gold transition-colors">
                        {getLocalized(item, "name")}
                      </h3>
                      <p className="text-cream/90 text-sm leading-relaxed line-clamp-2">
                        {getLocalized(item, "description")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
