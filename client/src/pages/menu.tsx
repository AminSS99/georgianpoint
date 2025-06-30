import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories } from "@/data/menu-data";

export default function MenuPage() {
  const { t } = useTranslation();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {menuCategories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Card 
                  className={`menu-category cursor-pointer border transition-all duration-300 ${
                    category.featured 
                      ? "bg-burgundy/20 border-gold/40 hover:bg-burgundy/30" 
                      : "bg-warm-gray border-gold/20 hover:bg-warm-gray/80"
                  }`}
                  onClick={() => toggleCategory(category.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold text-gold mb-2">
                          {category.nameGeorgian}
                        </h3>
                        <p className="text-cream/70">{category.nameEnglish}</p>
                      </div>
                      {expandedCategory === category.id ? (
                        <ChevronUp className="text-gold h-5 w-5" />
                      ) : (
                        <ChevronDown className="text-gold h-5 w-5" />
                      )}
                    </div>
                    
                    <AnimatePresence>
                      {expandedCategory === category.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 text-cream/90"
                        >
                          {category.description}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Special Menu Highlights */}
          <div className="mt-16">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-burgundy/30 border-gold/40">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gold mb-4">{t('menu.specialties.khinkali.title')}</h3>
                  <p className="text-cream/90 mb-4">
                    {t('menu.specialties.khinkali.description')}
                  </p>
                  <p className="text-soft-gold text-sm">
                    {t('menu.specialties.khinkali.note')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-burgundy/30 border-gold/40">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gold mb-4">{t('menu.specialties.wine.title')}</h3>
                  <p className="text-cream/90 mb-4">
                    {t('menu.specialties.wine.description')}
                  </p>
                  <p className="text-soft-gold text-sm">
                    {t('menu.specialties.wine.note')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}