import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import PricingHero from './components/PricingHero';
import PricingTiers from './components/PricingTiers';
import ROICalculator from './components/ROICalculator';
import ValueProposition from './components/ValueProposition';
import PaymentOptions from './components/PaymentOptions';
import FAQ from './components/FAQ';

const PreciosPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Precios Transparentes - Desarrollo Web Profesional | PokeDev</title>
        <meta 
          name="description" 
          content="Conoce nuestros precios transparentes para desarrollo web en Colombia. Landing Pages desde $200.000, Sitios Corporativos desde $800.000 y E-commerce desde $2.500.000 COP. Sin sorpresas, con garantía." 
        />
        <meta name="keywords" content="precios desarrollo web, sitio web Colombia, landing page precio, e-commerce Colombia, desarrollo web Bogotá" />
        <meta property="og:title" content="Precios Transparentes - Desarrollo Web Profesional | PokeDev" />
        <meta property="og:description" content="Precios claros y justos para desarrollo web profesional en Colombia. Desde $200.000 COP con garantía de satisfacción." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pokedev.co/precios" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-16">
          <PricingHero />
          <PricingTiers />
          <ROICalculator />
          <ValueProposition />
          <PaymentOptions />
          <FAQ />
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-xl">PokeDev</h3>
                    <p className="font-accent text-sm text-gray-400">Desarrollo de Software</p>
                  </div>
                </div>
                <p className="font-body text-gray-300 leading-relaxed mb-6">
                  Transformamos ideas en experiencias digitales que impulsan el crecimiento de tu negocio. 
                  Desarrollo web profesional con garantía de resultados.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-headline font-semibold text-lg mb-6">Servicios</h4>
                <ul className="space-y-3">
                  <li><a href="/soluciones" className="font-body text-gray-300 hover:text-white transition-colors">Landing Pages</a></li>
                  <li><a href="/soluciones" className="font-body text-gray-300 hover:text-white transition-colors">Sitios Corporativos</a></li>
                  <li><a href="/soluciones" className="font-body text-gray-300 hover:text-white transition-colors">E-commerce</a></li>
                  <li><a href="/soluciones" className="font-body text-gray-300 hover:text-white transition-colors">SEO</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-headline font-semibold text-lg mb-6">Contacto</h4>
                <ul className="space-y-3">
                  <li className="font-body text-gray-300">+57 300 123 4567</li>
                  <li className="font-body text-gray-300">pokedev2025@gmail.com</li>
                  <li className="font-body text-gray-300">Bogotá, Colombia</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="font-body text-gray-400 text-sm">
                © {new Date().getFullYear()} PokeDev. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="font-body text-gray-400 hover:text-white text-sm transition-colors">Términos</a>
                <a href="#" className="font-body text-gray-400 hover:text-white text-sm transition-colors">Privacidad</a>
                <a href="#" className="font-body text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PreciosPage;