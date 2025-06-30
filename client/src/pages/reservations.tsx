import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Phone } from "lucide-react";

export default function ReservationsPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('reservations.form.success'));
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      guests: '',
      message: ''
    });
  };

  return (
    <div className="bg-charcoal text-cream min-h-screen">
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-4">{t('reservations.title')}</h1>
            <p className="text-lg sm:text-xl text-cream/80 max-w-2xl mx-auto">
              {t('reservations.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quick Call Option */}
            <Card className="bg-burgundy/30 border-gold/40 lg:col-span-1">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-gold mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-gold mb-4">{t('contact.info.quickReservation')}</h3>
                <p className="text-cream/80 mb-6 text-sm">
                  Call us directly for immediate assistance with your reservation
                </p>
                <Button 
                  asChild
                  className="w-full bg-burgundy hover:bg-burgundy/80 text-cream warm-glow transition-all duration-300"
                >
                  <a href="tel:+994509970606" className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    {t('contact.info.phone')}
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Reservation Form */}
            <Card className="bg-warm-gray border-gold/20 lg:col-span-2">
              <CardContent className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gold mb-6">{t('reservations.title')}</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gold mb-2">{t('reservations.form.name')} *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-rich-brown border-gold/30 text-cream placeholder:text-cream/50"
                        placeholder={t('reservations.form.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gold mb-2">{t('reservations.form.phone')} *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="bg-rich-brown border-gold/30 text-cream placeholder:text-cream/50"
                        placeholder={t('reservations.form.phonePlaceholder')}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gold mb-2">{t('reservations.form.email')}</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-rich-brown border-gold/30 text-cream placeholder:text-cream/50"
                      placeholder={t('reservations.form.emailPlaceholder')}
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gold mb-2">{t('reservations.form.date')} *</label>
                      <Input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="bg-rich-brown border-gold/30 text-cream"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gold mb-2">{t('reservations.form.time')} *</label>
                      <Input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        min="12:00"
                        max="23:30"
                        className="bg-rich-brown border-gold/30 text-cream"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gold mb-2">{t('reservations.form.guests')} *</label>
                      <Input
                        type="number"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        required
                        min="1"
                        max="20"
                        className="bg-rich-brown border-gold/30 text-cream placeholder:text-cream/50"
                        placeholder={t('reservations.form.guestsPlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gold mb-2">{t('reservations.form.message')}</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-rich-brown border-gold/30 text-cream placeholder:text-cream/50 min-h-[80px]"
                      placeholder={t('reservations.form.messagePlaceholder')}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-burgundy hover:bg-burgundy/80 text-cream warm-glow transition-all duration-300 py-3"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {t('reservations.form.submit')}
                  </Button>
                  
                  <p className="text-xs text-cream/60 text-center mt-4">
                    {t('reservations.form.required')}
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}