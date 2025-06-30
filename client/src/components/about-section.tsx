export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-warm-gray velvet-texture">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Georgian Point restaurant interior" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gold mb-6">
              A Taste of Georgia in Baku
            </h2>
            <p className="text-lg text-cream/90 mb-6 leading-relaxed">
              Georgian Point brings you the authentic flavors of Georgian cuisine in a sophisticated, 
              warm atmosphere. Our dimly-lit dining room features rich velvet textures, exposed brick accents, 
              and an elevated sense of style that creates the perfect backdrop for an unforgettable dining experience.
            </p>
            <p className="text-lg text-cream/80 leading-relaxed">
              From traditional khinkali and khachapuri to premium wines and spirits, 
              every dish is crafted with attention to detail and respect for Georgian culinary traditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
