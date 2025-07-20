import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ValueProposition = () => {
  const [activeTab, setActiveTab] = useState('custom');

  const comparisonData = {
    custom: {
      title: 'Desarrollo Personalizado',
      subtitle: 'Lo que ofrecemos en PokeDev',
      color: 'green',
      features: [
        {
          icon: 'Code',
          title: 'Código limpio y escalable',
          description: 'Desarrollamos desde cero con las mejores prácticas de programación'
        },
        {
          icon: 'Palette',
          title: 'Diseño único y profesional',
          description: 'Cada elemento visual es creado específicamente para tu marca'
        },
        {
          icon: 'Zap',
          title: 'Optimización de rendimiento',
          description: 'Sitios web rápidos que mejoran la experiencia del usuario'
        },
        {
          icon: 'Search',
          title: 'SEO desde el inicio',
          description: 'Estructura y contenido optimizado para motores de búsqueda'
        },
        {
          icon: 'Smartphone',
          title: 'Responsive real',
          description: 'Adaptación perfecta a todos los dispositivos y pantallas'
        },
        {
          icon: 'Headphones',
          title: 'Soporte técnico continuo',
          description: 'Mantenimiento, actualizaciones y soporte cuando lo necesites'
        }
      ]
    },
    template: {
      title: 'Plantillas/Templates',
      subtitle: 'Lo que encuentras en otros lugares',
      color: 'red',
      features: [
        {
          icon: 'Copy',
          title: 'Código genérico reutilizado',
          description: 'Misma base de código para múltiples clientes'
        },
        {
          icon: 'Image',
          title: 'Diseños predefinidos',
          description: 'Opciones limitadas de personalización visual'
        },
        {
          icon: 'Turtle',
          title: 'Carga lenta por exceso',
          description: 'Código innecesario que ralentiza el sitio web'
        },
        {
          icon: 'AlertTriangle',
          title: 'SEO básico o inexistente',
          description: 'Configuración mínima sin optimización real'
        },
        {
          icon: 'Monitor',
          title: 'Responsive limitado',
          description: 'Adaptación básica que no funciona en todos los casos'
        },
        {
          icon: 'Clock',
          title: 'Soporte temporal',
          description: 'Ayuda limitada en tiempo y alcance'
        }
      ]
    }
  };

  const testimonials = [
    {
      id: 1,
      name: 'Carlos Mendoza',
      company: 'Café Tostao',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote: `"Probé con plantillas baratas antes de llegar a PokeDev. La diferencia es abismal. Mi sitio ahora carga en 2 segundos y las ventas online aumentaron 300%."`,
      metrics: {
        before: 'Plantilla WordPress',
        after: 'Sitio personalizado',
        improvement: '+300% ventas'
      }
    },
    {
      id: 2,
      name: 'Ana Rodríguez',
      company: 'Estudio Jurídico AR',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      quote: `"La inversión se pagó sola en 3 meses. Ahora aparezco en la primera página de Google y recibo consultas todos los días."`,
      metrics: {
        before: 'Sin presencia digital',
        after: 'Primera página Google',
        improvement: 'ROI 400%'
      }
    },
    {
      id: 3,
      name: 'Miguel Torres',
      company: 'Torres Construcciones',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      quote: `"Intenté hacerlo yo mismo con plantillas. Perdí 6 meses y no funcionaba bien. PokeDev lo resolvió en 3 semanas y ahora tengo clientes de toda Colombia."`,
      metrics: {
        before: '6 meses perdidos',
        after: '3 semanas entrega',
        improvement: 'Clientes nacionales'
      }
    }
  ];

  const currentData = comparisonData[activeTab];
  const colorClasses = {
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'text-green-500',
      title: 'text-green-700',
      button: 'bg-green-500 text-white'
    },
    red: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: 'text-red-500',
      title: 'text-red-700',
      button: 'bg-red-500 text-white'
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Por qué no somos los más baratos
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            La diferencia entre una plantilla de $50.000 y un desarrollo personalizado de $800.000 
            no está solo en el precio, está en los resultados que obtienes.
          </p>
        </div>

        {/* Comparison Tabs */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col sm:flex-row bg-white rounded-2xl p-2 shadow-lg mb-8">
            <button
              onClick={() => setActiveTab('custom')}
              className={`flex-1 py-4 px-6 rounded-xl font-headline font-semibold transition-all duration-300 ${
                activeTab === 'custom' ?'bg-green-500 text-white shadow-lg' :'text-gray-600 hover:text-green-600'
              }`}
            >
              <Icon name="Star" size={20} className="inline mr-2" />
              Desarrollo Personalizado
            </button>
            <button
              onClick={() => setActiveTab('template')}
              className={`flex-1 py-4 px-6 rounded-xl font-headline font-semibold transition-all duration-300 ${
                activeTab === 'template' ?'bg-red-500 text-white shadow-lg' :'text-gray-600 hover:text-red-600'
              }`}
            >
              <Icon name="Package" size={20} className="inline mr-2" />
              Plantillas/Templates
            </button>
          </div>

          <div className={`rounded-2xl p-8 ${colorClasses[currentData.color].bg} ${colorClasses[currentData.color].border} border-2 transition-all duration-500`}>
            <div className="text-center mb-8">
              <h3 className={`font-headline font-bold text-2xl mb-2 ${colorClasses[currentData.color].title}`}>
                {currentData.title}
              </h3>
              <p className="font-body text-gray-600">
                {currentData.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentData.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[currentData.color].bg}`}>
                    <Icon 
                      name={feature.icon} 
                      size={20} 
                      className={colorClasses[currentData.color].icon} 
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline font-semibold text-lg text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="font-body text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Success Stories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-headline font-bold text-2xl md:text-3xl text-gray-900 mb-4">
              Clientes que probaron ambas opciones
            </h3>
            <p className="font-body text-lg text-gray-600">
              Testimonios reales de empresarios que invirtieron en calidad
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-headline font-semibold text-lg text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="font-body text-sm text-gray-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <blockquote className="font-body text-gray-700 leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </blockquote>

                <div className="bg-green-50 rounded-xl p-4">
                  <h5 className="font-headline font-semibold text-sm text-green-700 mb-3">
                    Resultados obtenidos:
                  </h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-body text-xs text-gray-600">Antes:</span>
                      <span className="font-body text-xs text-gray-900">{testimonial.metrics.before}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-xs text-gray-600">Después:</span>
                      <span className="font-body text-xs text-gray-900">{testimonial.metrics.after}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-green-200">
                      <span className="font-body text-xs font-semibold text-green-700">Mejora:</span>
                      <span className="font-body text-xs font-bold text-green-600">{testimonial.metrics.improvement}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Summary */}
        <div className="bg-gradient-brand rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="font-headline font-bold text-2xl md:text-3xl mb-6">
            La diferencia está en los resultados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={24} className="text-white" />
              </div>
              <h4 className="font-headline font-bold text-xl mb-2">Más Ventas</h4>
              <p className="font-body text-white/80 text-sm">
                Sitios optimizados que convierten visitantes en clientes reales
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={24} className="text-white" />
              </div>
              <h4 className="font-headline font-bold text-xl mb-2">Mejor Posicionamiento</h4>
              <p className="font-body text-white/80 text-sm">
                Aparecer en Google cuando tus clientes te buscan
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-white" />
              </div>
              <h4 className="font-headline font-bold text-xl mb-2">Más Credibilidad</h4>
              <p className="font-body text-white/80 text-sm">
                Imagen profesional que genera confianza en tus clientes
              </p>
            </div>
          </div>
          <p className="font-body text-lg text-white/90 mb-6">
            No vendemos sitios web, vendemos herramientas de crecimiento empresarial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-xl font-cta font-semibold hover:bg-gray-100 transition-colors duration-300">
              Ver Casos de Éxito
            </button>
            <button className="bg-brand-orange text-white px-8 py-3 rounded-xl font-cta font-semibold hover:bg-brand-orange/90 transition-colors duration-300">
              Solicitar Propuesta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;