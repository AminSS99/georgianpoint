import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Utensils, Mail, Calendar } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
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
    // Here you would typically send the form data to your backend
    alert('Thank you for your reservation request! We will contact you shortly.');
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
    <section id="contact" className="py-16 sm:py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-4">Visit Us</h2>
          <p className="text-lg sm:text-xl text-cream/80">Experience authentic Georgian hospitality in the heart of Baku</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="bg-warm-gray border-gold/20">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gold mb-4">Contact Information</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-gold mr-3 sm:mr-4 h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span className="text-cream/90 text-sm sm:text-base">Landau 14, Baku, Azerbaijan</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-gold mr-3 sm:mr-4 h-5 w-5 flex-shrink-0" />
                    <a href="tel:+994509970606" className="text-cream/90 hover:text-gold transition-colors text-sm sm:text-base">
                      +994 50 997 06 06
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-gold mr-3 sm:mr-4 h-5 w-5 flex-shrink-0" />
                    <span className="text-cream/90 text-sm sm:text-base">Daily: 12:00 - 01:00</span>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="text-gold mr-3 sm:mr-4 h-5 w-5 flex-shrink-0" />
                    <span className="text-cream/90 text-sm sm:text-base">Authentic Georgian Cuisine</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gold/20">
                  <Button 
                    asChild
                    className="w-full sm:w-auto bg-burgundy hover:bg-burgundy/80 text-cream warm-glow transition-all duration-300"
                  >
                    <a href="tel:+994509970606" className="flex items-center justify-center">
                      <Phone className="mr-2 h-4 w-4" />
                      Call for Quick Reservation
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Section */}
            <Card className="bg-warm-gray border-gold/20">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gold mb-4">Location</h3>
                <div className="w-full h-48 sm:h-64 bg-rich-brown rounded-lg flex items-center justify-center">
                  <div className="text-center text-cream/70">
                    <MapPin className="h-10 sm:h-12 w-10 sm:w-12 text-gold mb-3 sm:mb-4 mx-auto" />
                    <p className="text-base sm:text-lg font-medium">Find Us in Baku</p>
                    <p className="text-sm">Landau 14, Baku, Azerbaijan</p>
                    <p className="text-xs mt-2 text-cream/50 max-w-xs mx-auto">
                      In the heart of Baku, easily accessible by public transport
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reservation Form */}
          <Card className="bg-warm-gray border-gold/20">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gold mb-4">Make a Reservation</h3>
              <p className="text-cream/80 mb-6 text-sm sm:text-base">
                Reserve your table for an unforgettable Georgian dining experience. 
                We'll confirm your booking within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gold mb-2">Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-rich-brown border-gold/30 text-cream placeholder:text-cream/50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gold mb-2">Phone *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-rich-brown border-gold/30 text-cream placeholder:text-cream/50"
                      placeholder="+994 XX XXX XX XX"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gold mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-rich-brown border-gold/30 text-cream placeholder:text-cream/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gold mb-2">Date *</label>
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
                    <label className="block text-sm font-medium text-gold mb-2">Time *</label>
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
                    <label className="block text-sm font-medium text-gold mb-2">Guests *</label>
                    <Input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      min="1"
                      max="20"
                      className="bg-rich-brown border-gold/30 text-cream placeholder:text-cream/50"
                      placeholder="2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gold mb-2">Special Requests</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-rich-brown border-gold/30 text-cream placeholder:text-cream/50 min-h-[80px]"
                    placeholder="Dietary restrictions, special occasion, preferred seating..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-burgundy hover:bg-burgundy/80 text-cream warm-glow transition-all duration-300 py-3"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Submit Reservation Request
                </Button>
                
                <p className="text-xs text-cream/60 text-center mt-4">
                  * Required fields. We'll contact you within 24 hours to confirm your reservation.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
