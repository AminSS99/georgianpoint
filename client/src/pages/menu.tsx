import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";

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
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const { data: menuData, isLoading, isError } = useQuery({
    queryKey: ["menu"],
    queryFn: fetchMenuData,
  });

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
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
  
  const categories = menuData
    ? [...new Set(menuData.map((item) => item.category_name))]
    : [];

  if (isLoading) {
    return (
      <div className="bg-charcoal text-cream min-h-screen flex items-center justify-center">
        <p className="text-xl">{t('menu.loading')}</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-charcoal text-cream min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">{t('menu.error')}</p>
      </div>
    );
  }

  return (
    <div className="bg-charcoal text-cream min-h-screen">
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-4">{t('menu.title')}</h1>
            <p className="text-lg sm:text-xl text-cream/80 max-w-2xl mx-auto">
              {t('menu.subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {categories.map((category) => (
              <div key={category}>
                <h2 
                  className="text-2xl sm:text-3xl font-bold text-gold mb-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleCategory(category)}
                >
                  {t(`menu.categories.${category}`)}
                  {expandedCategory === category ? (
                    <ChevronUp className="text-gold h-6 w-6" />
                  ) : (
                    <ChevronDown className="text-gold h-6 w-6" />
                  )}
                </h2>
                <AnimatePresence>
                  {expandedCategory === category && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                    >
                      {menuData
                        ?.filter((item) => item.category_name === category)
                        .map((item) => (
                          <motion.div
                            key={item.id}
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                            layout
                          >
                            <Card className="bg-warm-gray border-gold/20 hover:bg-warm-gray/80 h-full">
                              <CardContent className="p-6">
                                {item.image_url && (
                                  <img 
                                    src={`http://localhost:8000${item.image_url}`} 
                                    alt={getLocalized(item, "name")}
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                  />
                                )}
                                <h3 className="text-xl font-semibold text-gold mb-2">
                                  {getLocalized(item, "name")}
                                </h3>
                                <p className="text-cream/70 mb-4">
                                  {getLocalized(item, "description")}
                                </p>
                                <p className="text-soft-gold font-bold text-lg">
                                  {item.price} ₼
                                </p>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
