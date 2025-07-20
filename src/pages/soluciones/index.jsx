import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import ProcessVisualization from './components/ProcessVisualization';
import TechnologyStack from './components/TechnologyStack';
import ROICalculator from './components/ROICalculator';
import ComparisonMatrix from './components/ComparisonMatrix';
import SuccessMetrics from './components/SuccessMetrics';

const SolucionesPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'es';
    setCurrentLanguage(savedLanguage);
  }, []);

const services = [
  {
    title: "Landing Page",
    subtitle: "Página de aterrizaje optimizada",
    description: "Página única diseñada para convertir visitantes en clientes. Perfecta para campañas publicitarias, lanzamientos o servicios independientes.",
    icon: "Rocket",
    startingPrice: 200000,
    deliveryTime: "2-3 semanas",
    features: [
      "Diseño responsive y moderno",
      "Optimización SEO básica",
      "Formulario de contacto integrado",
      "Hosting incluido 3 meses",
      "Dominio .com incluido (1 año)",
      "Certificado SSL gratuito",
      "Optimización de velocidad",
      "Integración con redes sociales",
      "Conexión con WhatsApp",
      "Carga rápida (<2s)"
    ]
  },
  {
    title: "Sitio Web WordPress",
    subtitle: "Presencia digital completa",
    description: "Sitio administrable con múltiples secciones, optimizado para posicionamiento web, velocidad y experiencia de usuario.",
    icon: "LayoutTemplate",
    startingPrice: 450000,
    deliveryTime: "3-4 semanas",
    features: [
      "Hasta 6 secciones personalizadas",
      "Panel de administración WordPress",
      "Diseño adaptado a tu negocio",
      "Optimización SEO avanzada",
      "Velocidad de carga optimizada",
      "Certificado SSL + backups automáticos",
      "Integración con redes sociales",
      "Formularios de contacto",
      "Instalación de plugins clave",
      "Soporte técnico por 2 meses"
    ],
    featured: true
  },
  {
    title: "Software a la Medida",
    subtitle: "Desarrollo dockerizado escalable",
    description: "Soluciones personalizadas con frontend y backend profesional, despliegue con Docker y base de datos.",
    icon: "Server",
    startingPrice: 1000000,
    deliveryTime: "6-8 semanas",
    features: [
      "Backend con FastAPI o Django",
      "Frontend con React o Vue",
      "Docker + NGINX + Certbot (SSL)",
      "Base de datos PostgreSQL o MongoDB",
      "Panel administrativo personalizado",
      "API RESTful documentada",
      "Autenticación y seguridad básica",
      "Escalabilidad asegurada",
      "Deploy en VPS (ej: DigitalOcean)",
      "Integración con otros servicios"
    ]
  }
];


  const heroFeatures = [
    {
      icon: "Code",
      title: "Desarrollo Personalizado",
      description: "No usamos plantillas. Cada línea de código está pensada para tu negocio específico."
    },
    {
      icon: "Zap",
      title: "Velocidad Optimizada",
      description: "Sitios web que cargan en menos de 2 segundos, mejorando tu posicionamiento en Google."
    },
    {
      icon: "Shield",
      title: "Seguridad Garantizada",
      description: "Implementamos las mejores prácticas de seguridad web y certificados SSL gratuitos."
    },
    {
      icon: "TrendingUp",
      title: "SEO Avanzado",
      description: "Optimización completa para motores de búsqueda desde el primer día."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Soluciones Web Profesionales | PokeDev - Desarrollo Web en Colombia</title>
        <meta name="description" content="Descubre nuestras soluciones web personalizadas: Landing Pages, Sitios Corporativos y E-commerce. Desarrollo profesional con tecnologías modernas y resultados garantizados." />
        <meta name="keywords" content="desarrollo web colombia, sitios web corporativos, e-commerce colombia, landing pages, react nextjs" />
        <meta property="og:title" content="Soluciones Web Profesionales | PokeDev" />
        <meta property="og:description" content="Soluciones web personalizadas que impulsan tu negocio. Desde landing pages hasta e-commerce completo." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://pokedev.co/soluciones" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-brand text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Soluciones Web que
                <span className="block text-brand-orange">Impulsan tu Negocio</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
                Creamos soluciones digitales únicas que posicionan y convierten. 
                Cada proyecto está diseñado para generar resultados reales en el mercado colombiano.
              </p>
            </div>

            {/* Hero Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {heroFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} size={32} className="text-brand-orange" />
                  </div>
                  <h3 className="font-headline font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm opacity-80">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-primary mb-4">
                Nuestras Soluciones
              </h2>
              <p className="text-xl text-text-secondary max-w-xl mx-auto">
                Todos incluyen nuestro compromiso con la calidad y resultados medibles.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  isPopular={index === 1}
                />
              ))}
            </div>

          </div>
        </section>


        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
                    <Icon name="Code" size={20} className="text-white" />
                  </div>
                  <span className="font-headline font-bold text-lg">PokeDev</span>
                </div>
                <p className="text-sm opacity-80">
                  Transformamos ideas en experiencias digitales excepcionales
                </p>
              </div>
              
              <div>
                <h4 className="font-headline font-semibold mb-4">Soluciones</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>Landing Pages</li>
                  <li>Sitios Corporativos</li>
                  <li>E-commerce</li>
                  <li>Aplicaciones Web</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-headline font-semibold mb-4">Empresa</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><Link to="/precios" className="hover:text-brand-orange transition-colors">Precios</Link></li>
                  <li><Link to="/contacto" className="hover:text-brand-orange transition-colors">Contacto</Link></li>
                  <li>Blog (proximamente)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-headline font-semibold mb-4">Contacto</h4>
                <div className="space-y-2 text-sm opacity-80">
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} />
                    <span>pokedev2025@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} />
                    <span>+57 300 123 4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} />
                    <span>Bogotá, Colombia</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
              <p>&copy; {new Date().getFullYear()} PokeDev. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SolucionesPage;