import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PaymentOptions = () => {
  const [selectedPlan, setSelectedPlan] = useState('corporate');

  const paymentPlans = {
    landing: {
      name: 'Landing Page',
      total: 200000,
      options: [
        {
          id: 'landing-full',
          name: 'Pago Completo',
          discount: 10,
          finalPrice: 180000,
          description: 'Pago único con descuento',
          popular: true,
          payments: [
            { phase: 'Pago único', amount: 180000, timing: 'Al iniciar proyecto' }
          ]
        },
        {
          id: 'landing-split',
          name: 'Pago Dividido',
          discount: 0,
          finalPrice: 200000,
          description: '50% inicio, 50% entrega',
          popular: false,
          payments: [
            { phase: 'Inicio', amount: 100000, timing: 'Al firmar contrato' },
            { phase: 'Entrega', amount: 100000, timing: 'Al entregar sitio' }
          ]
        }
      ]
    },
    corporate: {
      name: 'Sitio Corporativo',
      total: 800000,
      options: [
        {
          id: 'corporate-full',
          name: 'Pago Completo',
          discount: 15,
          finalPrice: 680000,
          description: 'Pago único con máximo descuento',
          popular: true,
          payments: [
            { phase: 'Pago único', amount: 680000, timing: 'Al iniciar proyecto' }
          ]
        },
        {
          id: 'corporate-phases',
          name: 'Por Fases',
          discount: 5,
          finalPrice: 760000,
          description: 'Pago según avance del proyecto',
          popular: false,
          payments: [
            { phase: 'Inicio', amount: 250000, timing: 'Al firmar contrato' },
            { phase: 'Diseño', amount: 250000, timing: 'Aprobación de diseños' },
            { phase: 'Desarrollo', amount: 130000, timing: 'Desarrollo completado' },
            { phase: 'Entrega', amount: 130000, timing: 'Sitio en producción' }
          ]
        },
        {
          id: 'corporate-monthly',
          name: 'Mensual',
          discount: 0,
          finalPrice: 800000,
          description: 'Cuotas mensuales sin intereses',
          popular: false,
          payments: [
            { phase: 'Cuota 1', amount: 200000, timing: 'Al firmar contrato' },
            { phase: 'Cuota 2', amount: 200000, timing: 'Mes 1' },
            { phase: 'Cuota 3', amount: 200000, timing: 'Mes 2' },
            { phase: 'Cuota 4', amount: 200000, timing: 'Mes 3' }
          ]
        }
      ]
    },
    ecommerce: {
      name: 'E-commerce',
      total: 2500000,
      options: [
        {
          id: 'ecommerce-full',
          name: 'Pago Completo',
          discount: 20,
          finalPrice: 2000000,
          description: 'Pago único con máximo descuento',
          popular: true,
          payments: [
            { phase: 'Pago único', amount: 2000000, timing: 'Al iniciar proyecto' }
          ]
        },
        {
          id: 'ecommerce-phases',
          name: 'Por Fases',
          discount: 10,
          finalPrice: 2250000,
          description: 'Pago según hitos del proyecto',
          popular: false,
          payments: [
            { phase: 'Inicio', amount: 600000, timing: 'Al firmar contrato' },
            { phase: 'Diseño', amount: 500000, timing: 'Aprobación de diseños' },
            { phase: 'Desarrollo', amount: 550000, timing: 'Funcionalidades core' },
            { phase: 'Testing', amount: 300000, timing: 'Pruebas completadas' },
            { phase: 'Entrega', amount: 300000, timing: 'Tienda en producción' }
          ]
        },
        {
          id: 'ecommerce-monthly',
          name: 'Mensual',
          discount: 0,
          finalPrice: 2500000,
          description: 'Cuotas mensuales sin intereses',
          popular: false,
          payments: [
            { phase: 'Cuota 1', amount: 500000, timing: 'Al firmar contrato' },
            { phase: 'Cuota 2', amount: 400000, timing: 'Mes 1' },
            { phase: 'Cuota 3', amount: 400000, timing: 'Mes 2' },
            { phase: 'Cuota 4', amount: 400000, timing: 'Mes 3' },
            { phase: 'Cuota 5', amount: 400000, timing: 'Mes 4' },
            { phase: 'Cuota 6', amount: 400000, timing: 'Mes 5' }
          ]
        }
      ]
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const currentPlan = paymentPlans[selectedPlan];

  const paymentMethods = [
    {
      name: 'Transferencia Bancaria',
      icon: 'CreditCard',
      description: 'Pago directo a cuenta empresarial',
      benefits: ['Sin comisiones adicionales', 'Proceso inmediato', 'Comprobante automático']
    },
    {
      name: 'PSE',
      icon: 'Smartphone',
      description: 'Pago seguro electrónico',
      benefits: ['Débito directo desde tu banco', 'Confirmación inmediata', 'Máxima seguridad']
    },
    {
      name: 'Nequi/Daviplata',
      icon: 'Zap',
      description: 'Billeteras digitales',
      benefits: ['Pago desde tu celular', 'Sin comisiones', 'Confirmación instantánea']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Opciones de Pago Flexibles
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Adaptamos las formas de pago a las necesidades de tu empresa. 
            Sin intereses, sin letra pequeña, con total transparencia.
          </p>
        </div>

        {/* Plan Selector */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-gray-100 rounded-2xl p-2">
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(paymentPlans).map(([key, plan]) => (
                <button
                  key={key}
                  onClick={() => setSelectedPlan(key)}
                  className={`py-3 px-4 rounded-xl font-headline font-semibold text-sm transition-all duration-300 ${
                    selectedPlan === key
                      ? 'bg-white text-primary shadow-lg'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {currentPlan.options.map((option) => (
              <div
                key={option.id}
                className={`relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-lg ${
                  option.popular 
                    ? 'border-green-500 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full font-headline font-semibold text-sm">
                    Más Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="font-headline font-bold text-xl text-gray-900 mb-2">
                    {option.name}
                  </h3>
                  <p className="font-body text-gray-600 text-sm mb-4">
                    {option.description}
                  </p>

                  <div className="mb-4">
                    {option.discount > 0 && (
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="font-body text-sm text-gray-400 line-through">
                          {formatCurrency(currentPlan.total)}
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                          -{option.discount}%
                        </span>
                      </div>
                    )}
                    <div className="font-headline font-bold text-3xl text-primary">
                      {formatCurrency(option.finalPrice)}
                    </div>
                    {option.discount > 0 && (
                      <p className="font-body text-sm text-green-600 mt-1">
                        Ahorras {formatCurrency(currentPlan.total - option.finalPrice)}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-headline font-semibold text-sm text-gray-900 mb-3">
                    Cronograma de Pagos:
                  </h4>
                  {option.payments.map((payment, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-headline font-semibold text-sm text-gray-900">
                          {payment.phase}
                        </p>
                        <p className="font-body text-xs text-gray-600">
                          {payment.timing}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-headline font-bold text-primary">
                          {formatCurrency(payment.amount)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  variant={option.popular ? "default" : "outline"}
                  size="lg"
                  className={`w-full font-cta ${
                    option.popular 
                      ? 'bg-green-500 hover:bg-green-600 text-white' :''
                  }`}
                >
                  Seleccionar Plan
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-headline font-bold text-2xl md:text-3xl text-gray-900 mb-4">
              Métodos de Pago Disponibles
            </h3>
            <p className="font-body text-lg text-gray-600">
              Elige la forma de pago que más te convenga
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-gray-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={method.icon} size={24} className="text-white" />
                </div>
                <h4 className="font-headline font-bold text-lg text-gray-900 mb-2">
                  {method.name}
                </h4>
                <p className="font-body text-gray-600 mb-6">
                  {method.description}
                </p>
                <ul className="space-y-2">
                  {method.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={14} className="text-green-500 flex-shrink-0" />
                      <span className="font-body text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-8">
              <Icon name="Shield" size={32} className="text-white" />
            </div>
            
            <h3 className="font-headline font-bold text-2xl md:text-3xl text-gray-900 mb-6">
              Garantía de Satisfacción Total
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <Icon name="RefreshCw" size={24} className="text-blue-500 mx-auto mb-4" />
                <h4 className="font-headline font-semibold text-lg text-gray-900 mb-2">
                  Revisiones Ilimitadas
                </h4>
                <p className="font-body text-gray-600 text-sm">
                  Ajustamos el diseño y funcionalidades hasta que quedes 100% satisfecho
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <Icon name="Clock" size={24} className="text-green-500 mx-auto mb-4" />
                <h4 className="font-headline font-semibold text-lg text-gray-900 mb-2">
                  Entrega Garantizada
                </h4>
                <p className="font-body text-gray-600 text-sm">
                  Si no cumplimos con los tiempos acordados, te devolvemos el 20% del pago
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h4 className="font-headline font-bold text-xl text-gray-900 mb-4">
                Política de Reembolso
              </h4>
              <p className="font-body text-gray-600 leading-relaxed mb-6">
                Si en los primeros 30 días después de la entrega no estás satisfecho con el resultado, 
                te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="font-cta"
                >
                  <Icon name="FileText" size={16} className="mr-2" />
                  Ver Términos Completos
                </Button>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-brand-orange hover:bg-brand-orange/90 text-white font-cta"
                >
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Consultar Garantías
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentOptions;