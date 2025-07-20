import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqData = [
    {
      category: 'Precios y Pagos',
      questions: [
        {
          question: '¿Por qué sus precios son más altos que las plantillas?',
          answer: `Nuestros precios reflejan el valor de un desarrollo personalizado. Mientras una plantilla de $50.000 te da un diseño genérico que usan miles de sitios, nosotros creamos una solución única para tu negocio.\n\nIncluimos:\n• Código limpio y escalable desde cero\n• Diseño único para tu marca\n• Optimización SEO profesional\n• Soporte técnico continuo\n• Garantía de satisfacción\n\nLa diferencia se ve en los resultados: nuestros clientes reportan aumentos promedio del 300% en conversiones.`
        },
        {
          question: '¿Puedo pagar en cuotas sin intereses?',
          answer: `Sí, ofrecemos varias opciones de pago flexibles:\n\n• Pago completo con descuento (10-20%)\n• Pago por fases según avance del proyecto\n• Cuotas mensuales sin intereses\n\nTodas las opciones están diseñadas para adaptarse al flujo de caja de tu empresa. No cobramos intereses ni comisiones adicionales.`
        },
        {
          question: '¿Qué incluye exactamente cada plan?',
          answer: `Cada plan incluye todo lo necesario para tener presencia digital profesional:\n\n**Landing Page ($200.000):**\n• Diseño responsive\n• Formulario de contacto\n• SEO básico\n• Hosting 1 año\n• 2 revisiones\n\n**Sitio Corporativo ($800.000):**\n• Hasta 8 páginas\n• Panel de administración\n• Blog integrado\n• SEO avanzado\n• 5 revisiones\n\n**E-commerce ($2.500.000):**\n• Catálogo ilimitado\n• Pasarelas de pago\n• Gestión de inventario\n• Reportes avanzados\n• Revisiones ilimitadas primer mes`
        }
      ]
    },
    {
      category: 'Proceso y Tiempos',
      questions: [
        {
          question: '¿Cuánto tiempo toma desarrollar mi sitio web?',
          answer: `Los tiempos de desarrollo varían según la complejidad:\n\n• **Landing Page:** 5-7 días hábiles\n• **Sitio Corporativo:** 15-20 días hábiles\n• **E-commerce:** 25-30 días hábiles\n\nEstos tiempos incluyen:\n• Reunión inicial y planificación\n• Diseño y revisiones\n• Desarrollo y programación\n• Pruebas y optimización\n• Entrega y capacitación\n\nSiempre cumplimos con los plazos acordados o compensamos con descuentos.`
        },
        {
          question: '¿Qué pasa si no me gusta el diseño inicial?',
          answer: `Nuestro proceso garantiza tu satisfacción:\n\n1. **Briefing detallado:** Entendemos tu visión antes de diseñar\n2. **Mockups iniciales:** Te mostramos el concepto antes de desarrollar\n3. **Revisiones incluidas:** Cada plan incluye múltiples rondas de ajustes\n4. **Comunicación constante:** Te mantenemos informado en cada paso\n\nSi el diseño inicial no te convence, lo rediseñamos completamente sin costo adicional. Tu satisfacción es nuestra prioridad.`
        },
        {
          question: '¿Entregan el código fuente del sitio web?',
          answer: `Absolutamente sí. Al finalizar el proyecto recibes:\n\n• Código fuente completo\n• Documentación técnica\n• Credenciales de hosting y dominio\n• Manual de administración\n• Capacitación para uso básico\n\nEl sitio web es 100% tuyo. No hay dependencias ni restricciones. Puedes modificarlo, migrarlo o trabajar con otros desarrolladores cuando quieras.`
        }
      ]
    },
    {
      category: 'Soporte y Garantías',
      questions: [
        {
          question: '¿Qué tipo de soporte ofrecen después de la entrega?',
          answer: `Ofrecemos soporte integral post-entrega:\n\n**Soporte Gratuito:**\n• 30-180 días según el plan\n• Corrección de errores\n• Actualizaciones de seguridad\n• Soporte técnico básico\n\n**Soporte Extendido (opcional):**\n• Mantenimiento mensual\n• Actualizaciones de contenido\n• Backups automáticos\n• Monitoreo 24/7\n• Soporte prioritario\n\nNunca te dejamos solo después de la entrega.`
        },
        {
          question: '¿Qué garantías ofrecen?',
          answer: `Ofrecemos múltiples garantías para tu tranquilidad:\n\n**Garantía de Satisfacción:**\n• 30 días para solicitar cambios\n• Reembolso 100% si no estás satisfecho\n\n**Garantía de Entrega:**\n• Cumplimiento de plazos acordados\n• 20% de descuento si nos retrasamos\n\n**Garantía Técnica:**\n• Sitio libre de errores\n• Funcionamiento en todos los dispositivos\n• Velocidad de carga optimizada\n\nTodas nuestras garantías están respaldadas por contrato.`
        },
        {
          question: '¿Ayudan con el posicionamiento en Google?',
          answer: `Sí, el SEO es parte integral de nuestro servicio:\n\n**SEO Técnico (incluido):**\n• Estructura optimizada\n• Velocidad de carga\n• Responsive design\n• Meta tags y schema markup\n\n**SEO de Contenido:**\n• Investigación de palabras clave\n• Optimización de textos\n• Estrategia de contenido\n\n**Resultados típicos:**\n• Indexación en Google: 1-2 semanas\n• Primeras posiciones: 2-6 meses\n• Aumento de tráfico: 200-500%\n\nTambién ofrecemos servicios de SEO avanzado como complemento.`
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="font-body text-xl text-gray-600">
            Resolvemos las dudas más comunes sobre nuestros precios y servicios
          </p>
        </div>

        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-brand p-6">
                <h3 className="font-headline font-bold text-xl text-white flex items-center gap-3">
                  <Icon name="HelpCircle" size={24} />
                  {category.category}
                </h3>
              </div>

              <div className="divide-y divide-gray-200">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex;
                  const isOpen = openFAQ === globalIndex;

                  return (
                    <div key={questionIndex} className="transition-all duration-300">
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-headline font-semibold text-lg text-gray-900 pr-4">
                            {faq.question}
                          </h4>
                          <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                            <Icon name="ChevronDown" size={20} className="text-gray-500" />
                          </div>
                        </div>
                      </button>

                      <div className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-6 pb-6">
                          <div className="bg-blue-50 rounded-xl p-6">
                            <div className="font-body text-gray-700 leading-relaxed whitespace-pre-line">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-headline font-bold text-2xl text-gray-900 mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="font-body text-gray-600 mb-6">
              Nuestro equipo está listo para resolver todas tus dudas sobre precios, 
              procesos y garantías. Sin compromisos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-xl font-cta font-semibold hover:bg-green-600 transition-colors duration-300">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                WhatsApp: +57 300 123 4567
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-xl font-cta font-semibold hover:bg-blue-600 transition-colors duration-300">
                <Icon name="Phone" size={16} className="mr-2" />
                Llamar Ahora
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 bg-brand-orange text-white rounded-xl font-cta font-semibold hover:bg-brand-orange/90 transition-colors duration-300">
                <Icon name="Calendar" size={16} className="mr-2" />
                Agendar Reunión
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;