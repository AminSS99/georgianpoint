import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

interface MenuItemProps {
  name: { en: string; ru: string; az: string };
  description: { en: string; ru: string; az: string };
  price: string;
  imageUrl: string;
}

export default function MenuItem({
  name, 
  description, 
  price, 
  imageUrl
}: MenuItemProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as "en" | "ru" | "az";

  return (
    <Card className="bg-warm-gray border-gold/20 hover:bg-warm-gray/80 transition-colors duration-300">
      <CardContent className="p-4 flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img 
            src={imageUrl} 
            alt={name.en} 
            className="w-24 h-24 object-cover rounded-md shadow-md"
          />
        </div>
        <div className="flex-grow">
          <h4 className="text-lg font-semibold text-gold mb-1">
            {name[currentLang]}
          </h4>
          <p className="text-cream/70 text-sm mb-2">
            {description[currentLang]}
          </p>
          <p className="text-gold text-lg font-bold">${price}</p>
        </div>
      </CardContent>
    </Card>
  );
} 