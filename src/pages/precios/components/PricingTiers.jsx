import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingTiers = () => {
  const [hoveredTier, setHoveredTier] = useState(null);

  const pricingTiers = [
    {
      id: 'landing',
      name: 'Landing Page',
      subtitle: 'Perfecto para emprendedores',
      price: '200.000',
      originalPrice: '300.000',
      popular: false,
      description: 'Ideal para validar tu idea de negocio y generar primeras conversiones',
      features: [
        'Diseño responsive profesional',
        'Optimización SEO básica',
        'Formulario de contacto',
        'Integración con WhatsApp',
        'Hosting por 1 año incluido',
        'SSL y seguridad básica',
        '2 revisiones incluidas'
      ],
      technicalSpecs: [
        'Tiempo de carga < 3 segundos',
        'Compatible con todos los dispositivos',
        'Optimizado para Google',
        'Backup automático semanal'
      ],
      businessOutcomes: [
        'Presencia digital profesional',
        'Generación de leads 24/7',
        'Credibilidad ante clientes',
        'Base para crecimiento digital'
      ],
      deliveryTime: '5-7 días',
      support: '30 días gratis',
      color: 'blue'
    },
    {
      id: 'corporate',
      name: 'Sitio Corporativo',
      subtitle: 'Para empresas en crecimiento',
      price: '800.000',
      originalPrice: '1.200.000',
      popular: true,
      description: 'Sitio web completo que posiciona tu empresa como líder en tu sector',
      features: [
        'Hasta 8 páginas personalizadas',
        'Panel de administración',
        'Blog integrado',
        'Galería de proyectos',
        'Múltiples formularios',
        'Integración redes sociales',
        'SEO avanzado',
        'Analytics configurado',
        '5 revisiones incluidas'
      ],
      technicalSpecs: [
        'CMS personalizado',
        'Optimización de imágenes automática',
        'Sitemap XML',
        'Schema markup',
        'Backup diario automático'
      ],
      businessOutcomes: [
        'Autoridad en tu industria',
        'Mejor posicionamiento Google',
        'Generación de contenido',
        'Captación de clientes cualificados'
      ],
      deliveryTime: '15-20 días',
      support: '90 días gratis',
      color: 'purple'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      subtitle: 'Vende online profesionalmente',
      price: '2.500.000',
      originalPrice: '3.500.000',
      popular: false,
      description: 'Tienda online completa con todas las funcionalidades para vender más',
      features: [
        'Catálogo de productos ilimitado',
        'Carrito de compras avanzado',
        'Pasarelas de pago colombianas',
        'Gestión de inventario',
        'Panel de administración completo',
        'Reportes y analytics',
        'SEO para productos',
        'Integración con redes sociales',
        'Sistema de cupones',
        'Revisiones ilimitadas primer mes'
      ],
      technicalSpecs: [
        'Integración Wompi/PayU',
        'Certificado SSL premium',
        'CDN para velocidad',
        'Backup diario con restauración',
        'Monitoreo 24/7'
      ],
      businessOutcomes: [
        'Canal de ventas 24/7',
        'Expansión geográfica',
        'Automatización de ventas',
        'Datos para toma de decisiones'
      ],
      deliveryTime: '25-30 días',
      support: '6 meses gratis',
      color: 'orange'
    }
  ];

  const getColorClasses = (color, isHovered, isPopular) => {
    const colors = {
      blue: {
        border: isHovered ? 'border-blue-500' : 'border-gray-200',
        badge: 'bg-blue-500',
        price: 'text-blue-600',
        button: 'bg-blue-500 hover:bg-blue-600'
      },
      purple: {
        border: isHovered || isPopular ? 'border-purple-500' : 'border-gray-200',
        badge: 'bg-purple-500',
        price: 'text-purple-600',
        button: 'bg-purple-500 hover:bg-purple-600'
      },
      orange: {
        border: isHovered ? 'border-orange-500' : 'border-gray-200',
        badge: 'bg-orange-500',
        price: 'text-orange-600',
        button: 'bg-orange-500 hover:bg-orange-600'
      }
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Elige el Plan Perfecto para tu Negocio
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Cada plan está diseñado para diferentes etapas de crecimiento empresarial. 
            Todos incluyen código limpio, diseño responsive y soporte técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {pricingTiers.map((tier) => {
            const isHovered = hoveredTier === tier.id;
            const colorClasses = getColorClasses(tier.color, isHovered, tier.popular);
            
            return (
              <div
                key={tier.id}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                  colorClasses.border
                } ${tier.popular ? 'lg:scale-105 lg:-mt-4' : ''}`}
                onMouseEnter={() => setHoveredTier(tier.id)}
                onMouseLeave={() => setHoveredTier(null)}
              >
                {tier.popular && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${colorClasses.badge} text-white px-6 py-2 rounded-full font-headline font-semibold text-sm`}>
                    Más Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="font-headline font-bold text-2xl text-gray-900 mb-2">
                      {tier.name}
                    </h3>
                    <p className="font-body text-gray-600 mb-4">{tier.subtitle}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className={`font-headline font-bold text-4xl ${colorClasses.price}`}>
                          ${tier.price}
                        </span>
                        <span className="font-body text-gray-600">COP</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-body text-sm text-gray-400 line-through">
                          ${tier.originalPrice} COP
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                          Ahorra {Math.round(((parseInt(tier.originalPrice) - parseInt(tier.price)) / parseInt(tier.originalPrice)) * 100)}%
                        </span>
                      </div>
                    </div>

                    <p className="font-body text-sm text-gray-600 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-headline font-semibold text-lg text-gray-900 mb-4">
                      Incluye:
                    </h4>
                    <ul className="space-y-3">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Icon 
                            name="Check" 
                            size={16} 
                            className="text-green-500 mt-0.5 flex-shrink-0" 
                          />
                          <span className="font-body text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Details */}
                  {isHovered && (
                    <div className="mb-8 space-y-6 animate-in fade-in duration-300">
                      <div>
                        <h5 className="font-headline font-semibold text-sm text-gray-900 mb-3 flex items-center gap-2">
                          <Icon name="Settings" size={16} />
                          Especificaciones Técnicas
                        </h5>
                        <ul className="space-y-2">
                          {tier.technicalSpecs.map((spec, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="font-body text-xs text-gray-600">{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-headline font-semibold text-sm text-gray-900 mb-3 flex items-center gap-2">
                          <Icon name="TrendingUp" size={16} />
                          Resultados Esperados
                        </h5>
                        <ul className="space-y-2">
                          {tier.businessOutcomes.map((outcome, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="font-body text-xs text-gray-600">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Quick Info */}
                  <div className="flex justify-between items-center mb-8 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <Icon name="Clock" size={16} className="text-gray-500 mx-auto mb-1" />
                      <p className="font-body text-xs text-gray-600">Entrega</p>
                      <p className="font-headline font-semibold text-sm text-gray-900">{tier.deliveryTime}</p>
                    </div>
                    <div className="text-center">
                      <Icon name="Headphones" size={16} className="text-gray-500 mx-auto mb-1" />
                      <p className="font-body text-xs text-gray-600">Soporte</p>
                      <p className="font-headline font-semibold text-sm text-gray-900">{tier.support}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="default"
                    size="lg"
                    className={`w-full ${colorClasses.button} text-white font-cta shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Solicitar {tier.name}
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>

                  <p className="font-body text-xs text-gray-500 text-center mt-4">
                    Sin compromisos • Consulta gratuita • Garantía incluida
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="font-headline font-bold text-2xl text-gray-900 mb-4">
              ¿Necesitas algo diferente?
            </h3>
            <p className="font-body text-gray-600 mb-6">
              Cada negocio es único. Si ninguno de estos planes se ajusta perfectamente a tus necesidades, 
              creamos una propuesta personalizada sin costo adicional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="font-cta"
              >
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Consulta Personalizada
              </Button>
              <Button
                variant="default"
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-cta"
              >
                <Icon name="Phone" size={16} className="mr-2" />
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;