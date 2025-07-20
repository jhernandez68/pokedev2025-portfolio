import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ComparisonMatrix = () => {
  const [activeTab, setActiveTab] = useState('features');

  const comparisonData = {
    features: {
      title: "Características del Servicio",
      items: [
        {
          feature: "Diseño personalizado",
          pokedev: true,
          templates: false,
          competitors: "partial",
          description: "Diseño único que refleja tu marca"
        },
        {
          feature: "Código optimizado",
          pokedev: true,
          templates: false,
          competitors: true,
          description: "Desarrollo limpio y eficiente"
        },
        {
          feature: "SEO avanzado",
          pokedev: true,
          templates: "basic",
          competitors: "basic",
          description: "Optimización completa para buscadores"
        },
        {
          feature: "Responsive design",
          pokedev: true,
          templates: true,
          competitors: true,
          description: "Adaptación perfecta a todos los dispositivos"
        },
        {
          feature: "Velocidad de carga",
          pokedev: "excellent",
          templates: "poor",
          competitors: "good",
          description: "Tiempos de carga ultra-rápidos"
        },
        {
          feature: "Soporte técnico",
          pokedev: "24/7",
          templates: "limited",
          competitors: "business",
          description: "Asistencia cuando la necesites"
        },
        {
          feature: "Actualizaciones",
          pokedev: "included",
          templates: "manual",
          competitors: "extra",
          description: "Mantenimiento y mejoras continuas"
        },
        {
          feature: "Integración con herramientas",
          pokedev: "unlimited",
          templates: "basic",
          competitors: "limited",
          description: "Conexión con tus sistemas existentes"
        }
      ]
    },
    pricing: {
      title: "Comparación de Precios",
      items: [
        {
          feature: "Sitio web básico",
          pokedev: "$1.500.000",
          templates: "$200.000",
          competitors: "$2.000.000",
          description: "Landing page profesional"
        },
        {
          feature: "Sitio corporativo",
          pokedev: "$2.500.000",
          templates: "$500.000",
          competitors: "$4.000.000",
          description: "Sitio completo con múltiples páginas"
        },
        {
          feature: "E-commerce",
          pokedev: "$4.000.000",
          templates: "$800.000",
          competitors: "$6.000.000",
          description: "Tienda online completa"
        },
        {
          feature: "Mantenimiento mensual",
          pokedev: "$150.000",
          templates: "$0",
          competitors: "$300.000",
          description: "Soporte y actualizaciones"
        },
        {
          feature: "Hosting incluido",
          pokedev: "1 año",
          templates: "No",
          competitors: "6 meses",
          description: "Alojamiento web profesional"
        },
        {
          feature: "Dominio incluido",
          pokedev: "1 año",
          templates: "No",
          competitors: "1 año",
          description: "Registro de dominio .com"
        }
      ]
    },
    results: {
      title: "Resultados Esperados",
      items: [
        {
          feature: "Tiempo de desarrollo",
          pokedev: "4-6 semanas",
          templates: "1-2 días",
          competitors: "8-12 semanas",
          description: "Desde inicio hasta lanzamiento"
        },
        {
          feature: "Mejora en conversiones",
          pokedev: "+25-40%",
          templates: "+5-10%",
          competitors: "+15-25%",
          description: "Incremento en ventas/leads"
        },
        {
          feature: "Posicionamiento SEO",
          pokedev: "Top 3 en 6 meses",
          templates: "Página 2-3",
          competitors: "Top 10 en 6 meses",
          description: "Ranking en Google"
        },
        {
          feature: "Velocidad de carga",
          pokedev: "<2 segundos",
          templates: "4-8 segundos",
          competitors: "2-4 segundos",
          description: "Tiempo promedio de carga"
        },
        {
          feature: "Score de rendimiento",
          pokedev: "95-100",
          templates: "40-60",
          competitors: "70-85",
          description: "Puntuación Google PageSpeed"
        },
        {
          feature: "Tasa de rebote",
          pokedev: "<30%",
          templates: ">60%",
          competitors: "40-50%",
          description: "Usuarios que abandonan rápido"
        }
      ]
    }
  };

  const tabs = [
    { key: 'features', label: 'Características', icon: 'Settings' },
    { key: 'pricing', label: 'Precios', icon: 'DollarSign' },
    { key: 'results', label: 'Resultados', icon: 'TrendingUp' }
  ];

  const getValueDisplay = (value, type) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Icon name="Check" size={20} className="text-success mx-auto" />
      ) : (
        <Icon name="X" size={20} className="text-error mx-auto" />
      );
    }
    
    if (value === 'partial' || value === 'basic') {
      return <Icon name="Minus" size={20} className="text-warning mx-auto" />;
    }
    
    if (value === 'excellent') {
      return <div className="text-success font-semibold text-center">Excelente</div>;
    }
    
    if (value === 'poor') {
      return <div className="text-error font-semibold text-center">Deficiente</div>;
    }
    
    if (value === 'good') {
      return <div className="text-warning font-semibold text-center">Bueno</div>;
    }
    
    if (value === '24/7') {
      return <div className="text-success font-semibold text-center">24/7</div>;
    }
    
    if (value === 'limited') {
      return <div className="text-warning font-semibold text-center">Limitado</div>;
    }
    
    if (value === 'business') {
      return <div className="text-warning font-semibold text-center">Horario</div>;
    }
    
    return <div className="text-center font-medium">{value}</div>;
  };

  const getColumnStyle = (column) => {
    if (column === 'pokedev') {
      return 'bg-primary/5 border-primary/20';
    }
    return 'bg-gray-50';
  };

  return (
    <div className="bg-white rounded-xl border border-border p-8">
      <div className="text-center mb-8">
        <h3 className="font-headline font-bold text-2xl text-primary mb-4">
          ¿Por qué elegir PokeDev?
        </h3>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Comparamos nuestro enfoque personalizado con plantillas y competidores tradicionales
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeTab === tab.key
                ? 'bg-primary text-white shadow-brand'
                : 'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
            }`}
          >
            <Icon name={tab.icon} size={18} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="font-headline font-semibold text-primary">
              {comparisonData[activeTab].title}
            </div>
            <div className={`text-center p-3 rounded-lg ${getColumnStyle('pokedev')}`}>
              <div className="font-headline font-bold text-primary">PokeDev</div>
              <div className="text-xs text-text-secondary mt-1">Desarrollo personalizado</div>
            </div>
            <div className={`text-center p-3 rounded-lg ${getColumnStyle('templates')}`}>
              <div className="font-headline font-bold text-text-primary">Plantillas</div>
              <div className="text-xs text-text-secondary mt-1">WordPress/Wix</div>
            </div>
            <div className={`text-center p-3 rounded-lg ${getColumnStyle('competitors')}`}>
              <div className="font-headline font-bold text-text-primary">Competencia</div>
              <div className="text-xs text-text-secondary mt-1">Agencias tradicionales</div>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-2">
            {comparisonData[activeTab].items.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 py-3 border-b border-border last:border-b-0">
                <div className="flex flex-col">
                  <div className="font-medium text-primary">{item.feature}</div>
                  <div className="text-xs text-text-secondary mt-1">{item.description}</div>
                </div>
                <div className={`p-3 rounded-lg ${getColumnStyle('pokedev')}`}>
                  {getValueDisplay(item.pokedev, 'pokedev')}
                </div>
                <div className={`p-3 rounded-lg ${getColumnStyle('templates')}`}>
                  {getValueDisplay(item.templates, 'templates')}
                </div>
                <div className={`p-3 rounded-lg ${getColumnStyle('competitors')}`}>
                  {getValueDisplay(item.competitors, 'competitors')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 bg-gradient-brand rounded-lg p-6 text-white">
        <div className="text-center">
          <h4 className="font-headline font-bold text-lg mb-2">
            La diferencia está en los detalles
          </h4>
          <p className="mb-4 opacity-90">
            Mientras otros ofrecen soluciones genéricas, nosotros creamos experiencias digitales únicas que impulsan tu negocio
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} />
              <span className="text-sm">Calidad garantizada</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span className="text-sm">Entrega puntual</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span className="text-sm">Soporte continuo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonMatrix;