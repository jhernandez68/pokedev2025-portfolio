import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      value: '+57 300 123 4567',
      description: 'Respuesta inmediata',
      action: () => window.open('https://wa.me/573133070443?text=Hola, me interesa conocer más sobre sus servicios de desarrollo web')
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'pokedev2025@gmail.com',
      description: 'Respuesta en 2 horas',
      action: () => window.open('mailto:pokedev2025@gmail.com')
    }
  ];

  const businessInfo = [
    {
      label: 'NIT',
      value: '900.123.456-7'
    },
    {
      label: 'Registro Mercantil',
      value: 'Cámara de Comercio de Bogotá'
    },
    {
      label: 'Actividad Económica',
      value: 'Desarrollo de Software y Páginas Web'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="bg-white rounded-2xl shadow-brand p-6">
        <h3 className="font-headline font-bold text-xl text-primary mb-6">
          Múltiples formas de contactarnos
        </h3>
        
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              onClick={method.action}
              className="flex items-start space-x-4 p-4 rounded-lg hover:bg-surface transition-colors duration-200 cursor-pointer group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                <Icon 
                  name={method.icon} 
                  size={20} 
                  className="text-primary"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-body font-medium text-text-primary group-hover:text-primary transition-colors duration-200">
                  {method.title}
                </h4>
                <p className="font-body font-semibold text-primary text-sm">
                  {method.value}
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  {method.description}
                </p>
              </div>
              
              <Icon 
                name="ExternalLink" 
                size={16} 
                className="text-text-secondary group-hover:text-primary transition-colors duration-200"
              />
            </div>
          ))}
        </div>
      </div>



      {/* Office Hours */}
      <div className="bg-white rounded-2xl shadow-brand p-6">
        <h3 className="font-headline font-bold text-xl text-primary mb-6">
          Horarios de atención
        </h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-body text-text-primary">Lunes - Viernes</span>
            <span className="font-body font-medium text-primary">8:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-body text-text-primary">Sábados</span>
            <span className="font-body font-medium text-text-secondary">9:00 AM - 2:00 PM</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-body text-text-primary">Domingos</span>
            <span className="font-body font-medium text-text-secondary">Cerrado</span>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-surface rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-brand-orange" />
            <span className="text-sm text-text-secondary">
              Zona horaria: COT (UTC-5)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;