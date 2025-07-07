import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { menuData } from "@/data/menu-data";
import MenuItem from "@/components/menu-item";
import { useTranslation } from "react-i18next";

export default function MenuSection() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as "en" | "ru" | "az";

  return (
    <section id="menu" className="py-16 sm:py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-4">{t("menu.ourMenu")}</h2>
          <p className="text-lg sm:text-xl text-cream/80 max-w-2xl mx-auto">
            {t("menu.description")}
          </p>
        </div>

        {menuData.map((category) => (
          <div key={category.id} className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gold mb-6 text-center">
              {category.name[currentLang]}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <MenuItem 
                  key={item.id} 
                  name={item.name} 
                  description={item.description} 
                  price={item.price} 
                  imageUrl={item.imageUrl}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Removing Special Menu Highlights as new structure covers items */}
      </div>
    </section>
  );
}
