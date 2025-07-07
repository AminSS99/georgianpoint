import { useTranslation } from 'react-i18next';
import logoImage from '@assets/Vector_1751294472760.png';

export default function Footer() {
  const { t } = useTranslation();

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <footer className="bg-rich-brown py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoImage} 
                alt="Georgian Point Logo" 
                className="h-8 w-8"
              />
              <h3 className="text-2xl font-bold text-gold">Georgian Point</h3>
            </div>
            <p className="text-cream/80 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Georgian.Point.Restaurant?mibextid=ZbWKwL" className="text-gold hover:text-cream transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.496v-9.294H9.689V11.237h3.132V8.751c0-3.111 1.89-4.807 4.659-4.807 1.325 0 2.46-.099 2.795-.143v3.237l-1.916.001c-1.503 0-1.802.716-1.802 1.767v2.313h3.587l-.59 3.666h-2.997V24h6.115C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/georgian_point_restaurant/?igsh=bTV2OHFxN2ZsaDR6#" className="text-gold hover:text-cream transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@georgian_point?_t=8bxt6twxdUv&_r=1&fbclid=PAZXh0bgNhZW0CMTEAAabkBMi4YAgJItA1unbfjyiI77VHApNuE3jaFiNeHbHY_po4ZRVGF9ZfnwY_aem_odpIOW_DmjCKxTHJWM6kWg" className="text-gold hover:text-cream transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525 2.001A8.995 8.995 0 0 0 4.9 10.052v3.526c0 .16-.145.29-.324.29-.179 0-.324-.13-.324-.29V8.046c0-.882-.718-1.6-1.6-1.6-.882 0-1.6.718-1.6 1.6v8.204c0 2.206 1.794 4 4 4h9.805c.882 0 1.6-.718 1.6-1.6v-2.71c0-.882.718-1.6 1.6-1.6.882 0 1.6.718 1.6 1.6v2.71c0 3.09-2.51 5.6-5.6 5.6H5.35c-3.09 0-5.6-2.51-5.6-5.6V8.046c0-4.004 3.255-7.258 7.258-7.258h5.688c.882 0 1.6.718 1.6 1.6s-.718 1.6-1.6 1.6h-5.688c-2.206 0-4 1.794-4 4v.266a8.995 8.995 0 0 0 12.016 7.428V8.046c0-.882-.718-1.6-1.6-1.6s-1.6.718-1.6 1.6v2.247c0 .16-.145.29-.324.29-.179 0-.324-.13-.324-.29V2.001c0-.882-.718-1.6-1.6-1.6z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-gold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-cream/80">
              <li>
                <button 
                  onClick={() => handleNavigation("/menu")} 
                  className="hover:text-gold transition-colors"
                >
                  {t('nav.menu')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/gallery")} 
                  className="hover:text-gold transition-colors"
                >
                  {t('nav.gallery')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/contact")} 
                  className="hover:text-gold transition-colors"
                >
                  {t('nav.contact')}
                </button>
              </li>

            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-gold mb-4">{t('footer.hoursLocation')}</h4>
            <div className="text-cream/80 space-y-2">
              <p>{t('hero.location')}</p>
              <p>{t('hero.hours')}</p>
              <p>{t('hero.phone')}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gold/20 mt-8 pt-8 text-center text-cream/60">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
