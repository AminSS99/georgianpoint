import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Utensils, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold mb-4">Visit Us</h2>
          <p className="text-lg sm:text-xl text-cream/80">Experience authentic Georgian hospitality in the heart of Baku</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <Card className="bg-warm-gray border-gold/20">
            <CardContent className="p-3 sm:p-5">
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

              {/* Social Media Links */}
              <div className="mt-6 pt-6 border-t border-gold/20 flex space-x-4 justify-center sm:justify-start">
                <a href="https://www.facebook.com/Georgian.Point.Restaurant?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-cream hover:text-gold transition-colors" />
                </a>
                <a href="https://www.instagram.com/georgian_point_restaurant/?igsh=bTV2OHFxN2ZsaDR6#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-6 w-6 text-cream hover:text-gold transition-colors" />
                </a>
                <a href="https://www.tiktok.com/@georgian_point" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <FaTiktok className="h-6 w-6 text-cream hover:text-gold transition-colors" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Map Section */}
          <Card className="bg-warm-gray border-gold/20">
            <CardContent className="p-3 sm:p-5">
              <h3 className="text-xl sm:text-2xl font-semibold text-gold mb-4">Our Location</h3>
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
      </div>
    </section>
  );
}
