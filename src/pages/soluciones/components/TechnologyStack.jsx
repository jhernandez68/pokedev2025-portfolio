import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnologyStack = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const technologies = {
    frontend: {
      title: "Frontend & UI",
      description: "Tecnologías modernas para interfaces rápidas y atractivas",
      icon: "Monitor",
      color: "bg-blue-500",
      items: [
        {
          name: "React 18",
          description: "Biblioteca líder para interfaces de usuario interactivas",
          icon: "Zap",
          benefits: ["Componentes reutilizables", "Rendimiento optimizado", "Ecosistema robusto"]
        },
        {
          name: "Next.js",
          description: "Framework de React para aplicaciones de producción",
          icon: "Rocket",
          benefits: ["SEO optimizado", "Carga ultra-rápida", "Escalabilidad"]
        },
        {
          name: "Tailwind CSS",
          description: "Framework de CSS para diseños personalizados",
          icon: "Palette",
          benefits: ["Diseño consistente", "Desarrollo ágil", "Responsive nativo"]
        }
      ]
    },
    backend: {
      title: "Backend & APIs",
      description: "Infraestructura sólida y escalable para tu negocio",
      icon: "Server",
      color: "bg-green-500",
      items: [
        {
          name: "Node.js",
          description: "Runtime de JavaScript para el servidor",
          icon: "Cpu",
          benefits: ["Alto rendimiento", "Escalabilidad", "Ecosistema amplio"]
        },
        {
          name: "Express.js",
          description: "Framework web minimalista y flexible",
          icon: "Layers",
          benefits: ["APIs RESTful", "Middleware robusto", "Desarrollo rápido"]
        },
        {
          name: "MongoDB",
          description: "Base de datos NoSQL flexible y escalable",
          icon: "Database",
          benefits: ["Esquemas flexibles", "Consultas potentes", "Escalabilidad horizontal"]
        }
      ]
    },
    tools: {
      title: "Herramientas & DevOps",
      description: "Flujo de trabajo optimizado para entregas de calidad",
      icon: "Settings",
      color: "bg-purple-500",
      items: [
        {
          name: "Git & GitHub",
          description: "Control de versiones y colaboración",
          icon: "GitBranch",
          benefits: ["Historial completo", "Colaboración eficiente", "Despliegues seguros"]
        },
        {
          name: "Vercel",
          description: "Plataforma de despliegue para aplicaciones modernas",
          icon: "Cloud",
          benefits: ["Despliegues automáticos", "CDN global", "Monitoreo integrado"]
        },
        {
          name: "Analytics",
          description: "Herramientas de análisis y monitoreo",
          icon: "BarChart3",
          benefits: ["Métricas en tiempo real", "Optimización continua", "ROI medible"]
        }
      ]
    }
  };

  const categories = Object.keys(technologies);

  return (
    <div className="bg-white rounded-xl border border-border p-8">
      <div className="text-center mb-8">
        <h3 className="font-headline font-bold text-2xl text-primary mb-4">
          Tecnologías que Usamos
        </h3>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Stack tecnológico moderno y probado para crear soluciones web de clase mundial
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => {
          const tech = technologies[category];
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-brand'
                  : 'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={tech.icon} size={18} />
              <span>{tech.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Content */}
      <div className="space-y-6">
        <div className="text-center">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${technologies[activeCategory].color} mb-4`}>
            <Icon name={technologies[activeCategory].icon} size={32} className="text-white" />
          </div>
          <h4 className="font-headline font-bold text-xl text-primary mb-2">
            {technologies[activeCategory].title}
          </h4>
          <p className="text-text-secondary">
            {technologies[activeCategory].description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {technologies[activeCategory].items.map((item, index) => (
            <div
              key={index}
              className="bg-muted rounded-lg p-6 hover:shadow-brand transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-brand transition-shadow">
                  <Icon name={item.icon} size={20} className="text-primary" />
                </div>
                <h5 className="font-headline font-semibold text-primary">
                  {item.name}
                </h5>
              </div>
              
              <p className="text-text-primary text-sm mb-4">
                {item.description}
              </p>
              
              <div className="space-y-2">
                <h6 className="font-medium text-primary text-sm">Beneficios:</h6>
                <ul className="space-y-1">
                  {item.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-2">
                      <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary text-xs">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <div className="bg-gradient-brand rounded-lg p-6 text-white">
          <h4 className="font-headline font-bold text-lg mb-2">
            ¿Quieres saber más sobre nuestro stack tecnológico?
          </h4>
          <p className="mb-4 opacity-90">
            Agenda una consulta gratuita y te explicamos cómo estas tecnologías beneficiarán tu proyecto
          </p>
          <button className="bg-white text-primary px-6 py-2 rounded-lg font-cta hover:bg-gray-50 transition-colors inline-flex items-center space-x-2">
            <Icon name="Calendar" size={16} />
            <span>Agendar Consulta</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;