import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SuccessMetrics = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({});

  const metrics = [
    {
      title: "Mejora en Conversiones",
      value: 35,
      suffix: "%",
      description: "Incremento promedio en ventas y leads de nuestros clientes",
      icon: "TrendingUp",
      color: "text-success",
      bgColor: "bg-success/10",
      details: [
        "Optimización de formularios de contacto",
        "Mejora en llamadas a la acción",
        "Diseño centrado en conversión",
        "A/B testing continuo"
      ]
    },
    {
      title: "Reducción en Tiempo de Carga",
      value: 65,
      suffix: "%",
      description: "Sitios web más rápidos que mejoran la experiencia del usuario",
      icon: "Zap",
      color: "text-brand-orange",
      bgColor: "bg-brand-orange/10",
      details: [
        "Optimización de imágenes automática",
        "Código limpio y eficiente",
        "CDN global incluido",
        "Caché inteligente"
      ]
    },
    {
      title: "Mejora en Posicionamiento SEO",
      value: 150,
      suffix: "%",
      description: "Incremento en tráfico orgánico desde motores de búsqueda",
      icon: "Search",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      details: [
        "SEO técnico avanzado",
        "Contenido optimizado",
        "Estructura de datos rica",
        "Velocidad de carga optimizada"
      ]
    },
    {
      title: "Satisfacción del Cliente",
      value: 98,
      suffix: "%",
      description: "Clientes satisfechos que recomiendan nuestros servicios",
      icon: "Heart",
      color: "text-primary",
      bgColor: "bg-primary/10",
      details: [
        "Comunicación transparente",
        "Entrega puntual",
        "Soporte post-lanzamiento",
        "Resultados medibles"
      ]
    }
  ];

  const clientResults = [
    {
      client: "Restaurante El Sabor",
      industry: "Gastronomía",
      metric: "Pedidos online",
      improvement: "+180%",
      timeframe: "3 meses",
      description: "Implementación de sistema de pedidos online con integración a WhatsApp"
    },
    {
      client: "Clínica Dental Sonrisa",
      industry: "Salud",
      metric: "Citas agendadas",
      improvement: "+120%",
      timeframe: "2 meses",
      description: "Sistema de citas online y optimización SEO local"
    },
    {
      client: "Boutique Moda Urbana",
      industry: "Retail",
      metric: "Ventas online",
      improvement: "+250%",
      timeframe: "4 meses",
      description: "E-commerce completo con integración a redes sociales"
    },
    {
      client: "Estudio Jurídico Pérez",
      industry: "Servicios",
      metric: "Consultas",
      improvement: "+90%",
      timeframe: "6 semanas",
      description: "Sitio web profesional con formularios optimizados"
    }
  ];

  // Animate values on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      metrics.forEach((metric, index) => {
        animated[index] = metric.value;
      });
      setAnimatedValues(animated);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Counter animation effect
  useEffect(() => {
    metrics.forEach((metric, index) => {
      if (animatedValues[index] !== undefined) return;
      
      let start = 0;
      const end = metric.value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setAnimatedValues(prev => ({ ...prev, [index]: end }));
          clearInterval(timer);
        } else {
          setAnimatedValues(prev => ({ ...prev, [index]: Math.floor(start) }));
        }
      }, 16);
    });
  }, []);

  return (
    <div className="bg-white rounded-xl border border-border p-8">
      <div className="text-center mb-8">
        <h3 className="font-headline font-bold text-2xl text-primary mb-4">
          Resultados que Hablan por Sí Solos
        </h3>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Métricas reales de proyectos exitosos que demuestran el impacto de nuestro trabajo
        </p>
      </div>

      {/* Main Metrics Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
              activeMetric === index
                ? 'border-primary shadow-brand-lg scale-105'
                : 'border-border hover:border-primary/30 hover:shadow-brand'
            }`}
            onClick={() => setActiveMetric(index)}
          >
            <div className={`w-12 h-12 rounded-lg ${metric.bgColor} flex items-center justify-center mb-4`}>
              <Icon name={metric.icon} size={24} className={metric.color} />
            </div>
            
            <div className="text-3xl font-bold text-primary mb-2">
              {animatedValues[index] || 0}{metric.suffix}
            </div>
            
            <h4 className="font-headline font-semibold text-primary mb-2">
              {metric.title}
            </h4>
            
            <p className="text-text-secondary text-sm">
              {metric.description}
            </p>

            {activeMetric === index && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Check" size={14} className="text-white" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Active Metric Details */}
      <div className="bg-muted rounded-lg p-6 mb-8">
        <h4 className="font-headline font-semibold text-primary mb-4">
          Cómo logramos {metrics[activeMetric].title.toLowerCase()}:
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          {metrics[activeMetric].details.map((detail, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
              <span className="text-text-primary text-sm">{detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Client Success Stories */}
      <div>
        <h4 className="font-headline font-semibold text-lg text-primary mb-6 text-center">
          Casos de Éxito Reales
        </h4>
        
        <div className="grid md:grid-cols-2 gap-6">
          {clientResults.map((result, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-lg p-6 hover:shadow-brand transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h5 className="font-headline font-semibold text-primary">
                    {result.client}
                  </h5>
                  <span className="text-sm text-text-secondary">
                    {result.industry}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-success">
                    {result.improvement}
                  </div>
                  <div className="text-xs text-text-secondary">
                    en {result.timeframe}
                  </div>
                </div>
              </div>
              
              <div className="mb-3">
                <span className="text-sm font-medium text-primary">
                  {result.metric}
                </span>
              </div>
              
              <p className="text-text-secondary text-sm">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <div className="bg-gradient-brand rounded-lg p-6 text-white">
          <h4 className="font-headline font-bold text-lg mb-2">
            ¿Listo para obtener resultados similares?
          </h4>
          <p className="mb-4 opacity-90">
            Únete a más de 50 empresas colombianas que han transformado su presencia digital con PokeDev
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-primary px-6 py-2 rounded-lg font-cta hover:bg-gray-50 transition-colors inline-flex items-center space-x-2">
              <Icon name="MessageCircle" size={16} />
              <span>Solicitar Consulta</span>
            </button>
            <button className="border border-white/30 text-white px-6 py-2 rounded-lg font-cta hover:bg-white/10 transition-colors inline-flex items-center space-x-2">
              <Icon name="FileText" size={16} />
              <span>Ver Más Casos</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMetrics;