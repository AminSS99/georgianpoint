import { useTranslation } from 'react-i18next';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Utensils } from "lucide-react";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-charcoal text-cream min-h-screen">
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-4">{t('contact.title')}</h1>
            <p className="text-lg sm:text-xl text-cream/80">{t('contact.subtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <Card className="bg-warm-gray border-gold/20">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gold mb-4">{t('contact.info.title')}</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start">
                      <MapPin className="text-gold mr-3 sm:mr-4 h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span className="text-cream/90 text-sm sm:text-base">{t('contact.info.location')}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="text-gold mr-3 sm:mr-4 h-5 w-5 flex-shrink-0" />
                      <a href="tel:+994509970606" className="text-cream/90 hover:text-gold transition-colors text-sm sm:text-base">
                        {t('contact.info.phone')}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Clock className="text-gold mr-3 sm:mr-4 h-5 w-5 flex-shrink-0" />
                      <span className="text-cream/90 text-sm sm:text-base">{t('contact.info.hours')}</span>
                    </div>
                    <div className="flex items-center">
                      <Utensils className="text-gold mr-3 sm:mr-4 h-5 w-5 flex-shrink-0" />
                      <span className="text-cream/90 text-sm sm:text-base">{t('contact.info.cuisine')}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gold/20">
                    <Button 
                      asChild
                      className="w-full sm:w-auto bg-burgundy hover:bg-burgundy/80 text-cream warm-glow transition-all duration-300"
                    >
                      <a href="tel:+994509970606" className="flex items-center justify-center">
                        <Phone className="mr-2 h-4 w-4" />
                        {t('contact.info.quickReservation')}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Map Section */}
              <Card className="bg-warm-gray border-gold/20">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gold mb-4">{t('contact.location.title')}</h3>
                  <div className="w-full h-48 sm:h-64 bg-rich-brown rounded-lg flex items-center justify-center">
                    <div className="text-center text-cream/70">
                      <MapPin className="h-10 sm:h-12 w-10 sm:w-12 text-gold mb-3 sm:mb-4 mx-auto" />
                      <p className="text-base sm:text-lg font-medium">{t('contact.location.mapTitle')}</p>
                      <p className="text-sm">{t('contact.location.mapSubtitle')}</p>
                      <p className="text-xs mt-2 text-cream/50 max-w-xs mx-auto">
                        {t('contact.location.mapDescription')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <Card className="bg-warm-gray border-gold/20">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gold mb-4">{t('nav.reservations')}</h3>
                  <p className="text-cream/80 mb-6 text-sm sm:text-base">
                    {t('reservations.subtitle')}
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      asChild
                      className="w-full bg-burgundy hover:bg-burgundy/80 text-cream warm-glow transition-all duration-300"
                    >
                      <a href="/reservations" className="flex items-center justify-center">
                        {t('nav.reservations')}
                      </a>
                    </Button>
                    
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full border-gold/30 text-gold hover:bg-gold/10"
                    >
                      <a href="tel:+994509970606" className="flex items-center justify-center">
                        <Phone className="mr-2 h-4 w-4" />
                        {t('contact.info.quickReservation')}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-burgundy/20 border-gold/40">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gold mb-4">{t('about.title')}</h3>
                  <p className="text-cream/90 mb-4">
                    {t('footer.description')}
                  </p>
                  <Button 
                    asChild
                    variant="outline"
                    className="border-gold/30 text-gold hover:bg-gold/10"
                  >
                    <a href="/about">
                      {t('nav.about')}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}