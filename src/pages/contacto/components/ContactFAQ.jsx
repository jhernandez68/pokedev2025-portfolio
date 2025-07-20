import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ContactFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar un sitio web?",
      answer: `El tiempo de desarrollo varía según el tipo de proyecto:\n\n• Landing Page: 1-2 semanas\n• Sitio Web Corporativo: 3-6 semanas\n• Tienda Online: 6-10 semanas\n• Aplicaciones Web: 8-16 semanas\n\nEstos tiempos incluyen diseño, desarrollo, pruebas y capacitación. Te proporcionamos un cronograma detallado antes de comenzar.`
    },
    {
      question: "¿Cuáles son sus formas de pago?",
      answer: `Ofrecemos múltiples opciones de pago para tu comodidad:\n\n• Transferencia bancaria\n• PSE (Pagos Seguros en Línea)\n• Tarjetas de crédito y débito\n• PayPal para clientes internacionales\n\nGeneralmente trabajamos con un 50% de anticipo y 50% al finalizar el proyecto. Para proyectos grandes, podemos establecer un plan de pagos por fases.`
    },
    {
      question: "¿Incluyen el hosting y dominio?",
      answer: `Sí, ofrecemos paquetes completos que incluyen:\n\n• Registro de dominio (.com, .co, .com.co)\n• Hosting optimizado para tu sitio\n• Certificado SSL gratuito\n• Copias de seguridad automáticas\n• Soporte técnico continuo\n\nTambién podemos trabajar con tu hosting actual si prefieres mantenerlo.`
    },
    {
      question: "¿Trabajan con empresas fuera de Colombia?",
      answer: `¡Por supuesto! Trabajamos con clientes en toda Latinoamérica:\n\n• Comunicación fluida en español\n• Pagos internacionales via PayPal\n• Reuniones virtuales en horarios convenientes\n• Experiencia con mercados regionales\n• Soporte en diferentes zonas horarias\n\nNuestra experiencia colombiana se traduce perfectamente a otros mercados latinos.`
    },
    {
      question: "¿Ofrecen garantía en sus trabajos?",
      answer: `Sí, todos nuestros proyectos incluyen:\n\n• Garantía de 6 meses contra defectos de programación\n• 30 días de ajustes menores sin costo\n• Garantía de funcionamiento correcto\n• Soporte para resolver cualquier problema técnico\n• Compromiso de calidad respaldado por contrato\n\nTu inversión está protegida con nosotros.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className="bg-white rounded-2xl shadow-brand p-6 lg:p-8">
      <div className="mb-8">
        <h3 className="font-headline font-bold text-2xl text-primary mb-2">
          Preguntas frecuentes
        </h3>
        <p className="text-text-secondary">
          Resolvemos las dudas más comunes antes de que nos contactes
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-interactive"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface transition-colors duration-200"
            >
              <h4 className="font-body font-semibold text-text-primary pr-4">
                {faq.question}
              </h4>
              <Icon
                name={openFAQ === index ? "ChevronUp" : "ChevronDown"}
                size={20}
                className={`text-text-secondary transition-transform duration-200 flex-shrink-0 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out ${
                openFAQ === index
                  ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-6 pb-4">
                <div className="pt-2 border-t border-border">
                  <p className="text-text-secondary whitespace-pre-line leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Still have questions */}
    </div>
  );
};

export default ContactFAQ;