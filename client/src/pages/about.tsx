import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-charcoal text-cream min-h-screen">
      <section className="py-16 sm:py-20 bg-warm-gray velvet-texture">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
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
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-gold mb-4 sm:mb-6">
                {t('about.title')}
              </h1>
              <p className="text-base sm:text-lg text-cream/90 mb-4 sm:mb-6 leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="text-base sm:text-lg text-cream/80 leading-relaxed mb-6">
                {t('about.description2')}
              </p>
              
              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center text-cream/80">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">{t('about.features.traditional')}</span>
                </div>
                <div className="flex items-center text-cream/80">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">{t('about.features.premium')}</span>
                </div>
                <div className="flex items-center text-cream/80">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">{t('about.features.elegant')}</span>
                </div>
                <div className="flex items-center text-cream/80">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">{t('about.features.expert')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}