import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Utensils } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gold mb-4">Visit Us</h2>
          <p className="text-xl text-cream/80">Experience authentic Georgian hospitality in the heart of Baku</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-warm-gray border-gold/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="text-gold mr-4 h-5 w-5" />
                    <span className="text-cream/90">Landau 14, Baku, Azerbaijan</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-gold mr-4 h-5 w-5" />
                    <span className="text-cream/90">+994 50 997 06 06</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-gold mr-4 h-5 w-5" />
                    <span className="text-cream/90">Daily: 12:00 - 01:00</span>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="text-gold mr-4 h-5 w-5" />
                    <span className="text-cream/90">Authentic Georgian Cuisine</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-warm-gray border-gold/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gold mb-4">Reservation</h3>
                <p className="text-cream/80 mb-4">
                  Reserve your table for an unforgettable Georgian dining experience. 
                  Call us directly or visit us during operating hours.
                </p>
                <Button 
                  asChild
                  className="bg-burgundy hover:bg-burgundy/80 text-cream warm-glow transition-all duration-300"
                >
                  <a href="tel:+994509970606">
                    Call for Reservation
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-warm-gray border-gold/20">
            <CardContent className="p-6">
              <div className="w-full h-64 bg-rich-brown rounded-lg flex items-center justify-center">
                <div className="text-center text-cream/70">
                  <MapPin className="h-12 w-12 text-gold mb-4 mx-auto" />
                  <p className="text-lg">Interactive Map</p>
                  <p className="text-sm">Landau 14, Baku, Azerbaijan</p>
                  <p className="text-xs mt-2 text-cream/50">
                    Map integration available for enhanced location services
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
