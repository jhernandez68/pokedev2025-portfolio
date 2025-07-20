import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Show after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Auto expand after 5 seconds if not interacted
    const expandTimer = setTimeout(() => {
      if (!hasInteracted) {
        setIsExpanded(true);
        // Auto collapse after 10 seconds
        setTimeout(() => {
          setIsExpanded(false);
        }, 10000);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(expandTimer);
    };
  }, [hasInteracted]);

  const handleWhatsAppClick = () => {
    setHasInteracted(true);
    setIsExpanded(false);
    
    // Get current page context for personalized message
    const currentPath = window.location.pathname;
    let message = "Hola, me interesa conocer más sobre sus servicios de desarrollo web";
    
    if (currentPath.includes('contacto')) {
      message = "Hola, estoy en su página de contacto y me gustaría conversar sobre mi proyecto";
    }
    
    window.open(`https://wa.me/573133070443?text=${encodeURIComponent(message)}`);
  };

  const toggleExpanded = () => {
    setHasInteracted(true);
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Card */}
      <div
        className={`mb-4 transition-all duration-300 ease-in-out ${
          isExpanded
            ? 'opacity-100 transform translate-y-0 scale-100'
            : 'opacity-0 transform translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-brand-lg p-4 max-w-xs border border-border">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Icon name="MessageCircle" size={16} className="text-white" />
              </div>
              <div>
                <h4 className="font-body font-semibold text-sm text-text-primary">
                  PokeDev
                </h4>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-text-secondary">En línea</span>
                </div>
              </div>
            </div>
            <button
              onClick={toggleExpanded}
              className="text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <Icon name="X" size={16} />
            </button>
          </div>
          
          <p className="text-sm text-text-secondary mb-3">
            ¡Hola! 👋 ¿Tienes alguna pregunta sobre nuestros servicios? Estamos aquí para ayudarte.
          </p>
          
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg py-2 px-3 text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Icon name="MessageCircle" size={16} />
            <span>Iniciar chat</span>
          </button>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={isExpanded ? handleWhatsAppClick : toggleExpanded}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-brand-lg flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-subtle"
        aria-label="Abrir WhatsApp"
      >
        <Icon name="MessageCircle" size={24} className="text-white" />
        
        {/* Notification dot */}
        {!hasInteracted && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        )}
      </button>

      {/* Ripple effect */}
      <div className="absolute inset-0 w-14 h-14 bg-green-500 rounded-full animate-ping opacity-20 pointer-events-none"></div>
    </div>
  );
};

export default WhatsAppFloat;