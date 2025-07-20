import React from 'react';
import Icon from '../../../components/AppIcon';

const PricingHero = () => {
  return (
    <section className="relative bg-gradient-brand text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Precios Transparentes,
            <span className="block text-brand-orange">Valor Garantizado</span>
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Creamos soluciones digitales que transforman tu negocio. 
            Conoce exactamente qué recibes por tu inversión.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-white/80">
              <Icon name="Shield" size={20} />
              <span className="font-body">Garantía de satisfacción</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center gap-2 text-white/80">
              <Icon name="Clock" size={20} />
              <span className="font-body">Entrega puntual</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center gap-2 text-white/80">
              <Icon name="Users" size={20} />
              <span className="font-body">Soporte continuo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;