import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-warm-gray velvet-texture">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Georgian Point restaurant interior with warm lighting and elegant atmosphere" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-4 sm:mb-6">
              A Taste of Georgia in Baku
            </h2>
            <p className="text-base sm:text-lg text-cream/90 mb-4 sm:mb-6 leading-relaxed">
              Georgian Point brings you the authentic flavors of Georgian cuisine in a sophisticated, 
              warm atmosphere. Our dimly-lit dining room features rich velvet textures, exposed brick accents, 
              and an elevated sense of style that creates the perfect backdrop for an unforgettable dining experience.
            </p>
            <p className="text-base sm:text-lg text-cream/80 leading-relaxed mb-6">
              From traditional khinkali and khachapuri to premium wines and spirits, 
              every dish is crafted with attention to detail and respect for Georgian culinary traditions.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center text-cream/80">
                <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-sm sm:text-base">Traditional Recipes</span>
              </div>
              <div className="flex items-center text-cream/80">
                <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-sm sm:text-base">Premium Ingredients</span>
              </div>
              <div className="flex items-center text-cream/80">
                <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-sm sm:text-base">Elegant Atmosphere</span>
              </div>
              <div className="flex items-center text-cream/80">
                <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-sm sm:text-base">Expert Chefs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
