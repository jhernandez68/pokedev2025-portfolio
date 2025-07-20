import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProcessVisualization = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Descubrimiento",
      description: "Analizamos tu negocio, competencia y objetivos para crear una estrategia digital efectiva.",
      icon: "Search",
      duration: "1-2 semanas",
      deliverables: [
        "Análisis de mercado colombiano",
        "Investigación de competencia",
        "Definición de objetivos",
        "Estrategia de contenido"
      ]
    },
    {
      id: 2,
      title: "Diseño",
      description: "Creamos wireframes y diseños que reflejan tu marca y optimizan la experiencia del usuario.",
      icon: "Palette",
      duration: "2-3 semanas",
      deliverables: [
        "Wireframes interactivos",
        "Diseño visual completo",
        "Guía de estilo",
        "Prototipo funcional"
      ]
    },
    {
      id: 3,
      title: "Desarrollo",
      description: "Construimos tu sitio con tecnologías modernas, optimizado para velocidad y SEO.",
      icon: "Code",
      duration: "3-4 semanas",
      deliverables: [
        "Desarrollo en React/Next.js",
        "Optimización SEO",
        "Integración de analytics",
        "Testing completo"
      ]
    },
    {
      id: 4,
      title: "Optimización",
      description: "Lanzamos tu sitio y monitoreamos su rendimiento para mejoras continuas.",
      icon: "TrendingUp",
      duration: "Continuo",
      deliverables: [
        "Lanzamiento y configuración",
        "Monitoreo de rendimiento",
        "Optimizaciones mensuales",
        "Reportes de resultados"
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-border p-8">
      <div className="text-center mb-8">
        <h3 className="font-headline font-bold text-2xl text-primary mb-4">
          Nuestro Proceso de Desarrollo
        </h3>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Un enfoque estructurado que garantiza resultados excepcionales en cada proyecto
        </p>
      </div>

      {/* Desktop Process Flow */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between mb-8">
          {processSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <button
                onClick={() => setActiveStep(index)}
                className={`relative w-16 h-16 rounded-full border-2 transition-all duration-300 ${
                  activeStep === index
                    ? 'border-primary bg-primary text-white shadow-brand'
                    : 'border-border bg-white text-text-secondary hover:border-primary/50'
                }`}
              >
                <Icon name={step.icon} size={24} className="mx-auto" />
                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                  activeStep === index
                    ? 'bg-brand-orange text-white' :'bg-muted text-text-secondary'
                }`}>
                  {step.id}
                </div>
              </button>
              
              {index < processSteps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-4 transition-colors duration-300 ${
                  activeStep > index ? 'bg-primary' : 'bg-border'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Active Step Details */}
        <div className="bg-muted rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-headline font-bold text-xl text-primary mb-2">
                {processSteps[activeStep].title}
              </h4>
              <p className="text-text-primary mb-4">
                {processSteps[activeStep].description}
              </p>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Clock" size={16} />
                <span>Duración: {processSteps[activeStep].duration}</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-headline font-semibold text-primary mb-3">
                Entregables:
              </h5>
              <ul className="space-y-2">
                {processSteps[activeStep].deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-text-primary text-sm">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Process Flow */}
      <div className="lg:hidden space-y-4">
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className={`border rounded-lg p-4 transition-all duration-300 ${
              activeStep === index
                ? 'border-primary bg-primary/5' :'border-border bg-white'
            }`}
          >
            <button
              onClick={() => setActiveStep(activeStep === index ? -1 : index)}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activeStep === index
                    ? 'bg-primary text-white' :'bg-muted text-text-secondary'
                }`}>
                  <Icon name={step.icon} size={20} />
                </div>
                <div className="text-left">
                  <h4 className="font-headline font-semibold text-primary">
                    {step.title}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {step.duration}
                  </p>
                </div>
              </div>
              <Icon 
                name={activeStep === index ? "ChevronUp" : "ChevronDown"} 
                size={20} 
                className="text-text-secondary"
              />
            </button>
            
            {activeStep === index && (
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-text-primary mb-4">
                  {step.description}
                </p>
                <div>
                  <h5 className="font-headline font-semibold text-primary mb-2">
                    Entregables:
                  </h5>
                  <ul className="space-y-1">
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-text-primary text-sm">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessVisualization;