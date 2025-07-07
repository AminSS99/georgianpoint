import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Home() {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    // For home page, we'll navigate to the specific page instead of scrolling
    window.location.href = `/${sectionId}`;
  };

  return (
    <div className="bg-charcoal text-cream">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gold animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-cream/90 font-light">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg mb-8 text-cream/80 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          
          {/* Restaurant Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 text-sm sm:text-base">
            <div className="flex items-center text-gold">
              <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="text-center sm:text-left">{t('hero.location')}</span>
            </div>
            <div className="flex items-center text-gold">
              <Clock className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>{t('hero.hours')}</span>
            </div>
            <div className="flex items-center text-gold">
              <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>{t('hero.phone')}</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection("menu")}
              className="bg-burgundy hover:bg-burgundy/80 text-cream px-8 py-4 text-lg font-semibold warm-glow transition-all duration-300"
            >
              {t('hero.cta')}
            </Button>
            <Button 
              onClick={() => window.open('tel:+994509970606')}
              variant="outline"
              className="border-gold text-gold hover:bg-gold/10 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              {t('hero.callToReserve')}
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-16 sm:py-20 bg-warm-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-gold mb-2">{t('contact.location.title')}</h3>
              <p className="text-cream/80">{t('hero.location')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-gold mb-2">{t('nav.about')}</h3>
              <p className="text-cream/80">{t('hero.hours')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-gold mb-2">{t('nav.contact')}</h3>
              <p className="text-cream/80">{t('hero.phone')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
