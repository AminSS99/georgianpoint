import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";

export default function HeroSection() {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
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
          Georgian Point
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-cream/90 font-light">
          Authentic Georgian Cuisine in the Heart of Baku
        </p>
        <p className="text-lg mb-8 text-cream/80 max-w-2xl mx-auto">
          Experience the rich flavors and warm hospitality of Georgia in our sophisticated, 
          dimly-lit restaurant featuring velvet textures and elevated dining
        </p>
        
        {/* Restaurant Info */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 text-sm sm:text-base">
          <div className="flex items-center text-gold">
            <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            <span className="text-center sm:text-left">Landau 14, Baku, Azerbaijan</span>
          </div>
          <div className="flex items-center text-gold">
            <Clock className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            <span>Daily 12:00 - 01:00</span>
          </div>
          <div className="flex items-center text-gold">
            <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            <span>+994 50 997 06 06</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <Button 
          onClick={scrollToMenu}
          className="bg-burgundy hover:bg-burgundy/80 text-cream px-8 py-4 text-lg font-semibold warm-glow transition-all duration-300"
        >
          Explore Our Menu
        </Button>
      </div>
    </section>
  );
}
