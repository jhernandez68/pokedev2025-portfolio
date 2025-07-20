import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, isPopular = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`relative bg-white rounded-xl border-2 transition-all duration-300 hover:shadow-brand-lg ${
      isPopular 
        ? 'border-brand-orange shadow-brand-lg scale-105' 
        : 'border-border hover:border-primary/30'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-brand-orange text-white px-4 py-1 rounded-full text-sm font-cta">
            Más Popular
          </div>
        </div>
      )}
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              isPopular ? 'bg-brand-orange' : 'bg-primary'
            }`}>
              <Icon name={service.icon} size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-headline font-bold text-xl text-primary">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {service.subtitle}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              ${service.startingPrice.toLocaleString('es-CO')} COP
            </div>
            <div className="text-sm text-text-secondary">
              Desde
            </div>
          </div>
        </div>

        <p className="text-text-primary mb-6 leading-relaxed">
          {service.description}
        </p>

        <div className="space-y-4 mb-6">
          <h4 className="font-headline font-semibold text-primary">
            Incluye:
          </h4>
          <ul className="space-y-2">
            {service.features.slice(0, isExpanded ? service.features.length : 4).map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                <span className="text-text-primary text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          {service.features.length > 4 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-secondary hover:text-primary transition-colors text-sm font-medium flex items-center space-x-1"
            >
              <span>{isExpanded ? 'Ver menos' : `Ver ${service.features.length - 4} más`}</span>
              <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} />
            </button>
          )}
        </div>

        <div className="space-y-3">
        <Button
          variant="default"
          fullWidth
          className={`font-cta ${
            isPopular 
              ? 'bg-brand-orange hover:bg-brand-orange/90'
              : 'bg-primary hover:bg-primary/90'
          }`}
          iconName="MessageCircle"
          iconPosition="left"
          onClick={() => window.open('https://wa.me/573133070443', '_blank')}
        >
          Solicitar Cotización
        </Button>
          
        </div>

        {service.deliveryTime && (
          <div className="mt-4 p-3 bg-muted rounded-lg">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-text-secondary" />
              <span className="text-sm text-text-secondary">
                Tiempo de entrega: <span className="font-medium text-primary">{service.deliveryTime}</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;