import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import ConsultationBooking from './components/ConsultationBooking';
import ContactFAQ from './components/ContactFAQ';
import WhatsAppFloat from './components/WhatsAppFloat';
import TrustSignals from './components/TrustSignals';
import Icon from '../../components/AppIcon';

const ContactoPage = () => {
  return (
    <>
      <Helmet>
        <title>Contacto - PokeDev | Solicita tu Cotización Web</title>
        <meta name="description" content="Contacta a PokeDev para tu proyecto web. Formulario inteligente, WhatsApp directo, consultas gratuitas. Respondemos en menos de 2 horas. ¡Comienza hoy!" />
        <meta name="keywords" content="contacto pokedev, cotización web colombia, desarrollo web bogotá, consulta gratuita, whatsapp web developer" />
        <meta property="og:title" content="Contacto - PokeDev | Solicita tu Cotización Web" />
        <meta property="og:description" content="Múltiples formas de contactarnos. Formulario inteligente, WhatsApp directo y consultas gratuitas. Tu proyecto web comienza aquí." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pokedev.co/contacto" />
      </Helmet>

      <div className="min-h-screen bg-surface">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-brand text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Icon name="MessageSquare" size={32} className="text-white" />
                </div>
                <div className="text-left">
                  <h1 className="font-headline font-bold text-4xl lg:text-5xl mb-2">
                    Hablemos de tu proyecto
                  </h1>
                  <p className="text-white/90 text-lg">
                    Múltiples formas de contactarnos, respuesta garantizada
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <h3 className="font-body font-semibold mb-1">Respuesta rápida</h3>
                  <p className="text-white/80 text-sm">Menos de 2 horas en días hábiles</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="MessageCircle" size={24} className="text-white" />
                  </div>
                  <h3 className="font-body font-semibold mb-1">WhatsApp directo</h3>
                  <p className="text-white/80 text-sm">Comunicación inmediata</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="Calendar" size={24} className="text-white" />
                  </div>
                  <h3 className="font-body font-semibold mb-1">Consulta gratuita</h3>
                  <p className="text-white/80 text-sm">30 min sin compromiso</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Contact Form */}
              <div className="lg:col-span-2 space-y-8">
                <ContactForm />
              </div>
              
              {/* Right Column - Contact Info & Trust Signals */}
              <div className="space-y-8">
                <ContactInfo />
                <TrustSignals />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactFAQ />
          </div>
        </section>


        {/* WhatsApp Float */}
        <WhatsAppFloat />

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-2xl">PokeDev</h3>
                  <p className="text-white/80 text-sm">Desarrollo de Software</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Transformamos ideas en experiencias digitales excepcionales. 
                Tu éxito digital es nuestro compromiso.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <a href="/soluciones" className="text-white/80 hover:text-white transition-colors duration-200">
                  Soluciones
                </a>
                <a href="/contacto" className="text-white hover:text-white transition-colors duration-200">
                  Contacto
                </a>
              </div>
              
              <div className="border-t border-white/20 pt-6">
                <p className="text-white/60 text-sm">
                  © {new Date().getFullYear()} PokeDev. Todos los derechos reservados. 
                  Hecho con ❤️ en Colombia.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactoPage;