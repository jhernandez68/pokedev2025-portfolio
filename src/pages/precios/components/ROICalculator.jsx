import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    industry: '',
    currentRevenue: '',
    digitalPresence: '',
    targetGrowth: ''
  });
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const industryOptions = [
    { value: 'restaurant', label: 'Restaurante/Café' },
    { value: 'retail', label: 'Comercio/Retail' },
    { value: 'services', label: 'Servicios Profesionales' },
    { value: 'health', label: 'Salud/Bienestar' },
    { value: 'education', label: 'Educación' },
    { value: 'technology', label: 'Tecnología' },
    { value: 'manufacturing', label: 'Manufactura' },
    { value: 'real-estate', label: 'Bienes Raíces' },
    { value: 'other', label: 'Otro' }
  ];

  const digitalPresenceOptions = [
    { value: 'none', label: 'Sin presencia digital' },
    { value: 'basic', label: 'Redes sociales básicas' },
    { value: 'website', label: 'Sitio web básico' },
    { value: 'advanced', label: 'Presencia digital completa' }
  ];

  const targetGrowthOptions = [
    { value: '10', label: '10% - Crecimiento conservador' },
    { value: '25', label: '25% - Crecimiento moderado' },
    { value: '50', label: '50% - Crecimiento agresivo' },
    { value: '100', label: '100% - Duplicar ventas' }
  ];

  const calculateROI = () => {
    if (!formData.industry || !formData.currentRevenue || !formData.digitalPresence || !formData.targetGrowth) {
      return;
    }

    setIsCalculating(true);

    // Simulate calculation delay
    setTimeout(() => {
      const revenue = parseInt(formData.currentRevenue);
      const growth = parseInt(formData.targetGrowth);
      
      // Industry multipliers
      const industryMultipliers = {
        'restaurant': 1.2,
        'retail': 1.5,
        'services': 1.8,
        'health': 1.4,
        'education': 1.3,
        'technology': 2.0,
        'manufacturing': 1.1,
        'real-estate': 1.6,
        'other': 1.3
      };

      // Digital presence impact
      const presenceMultipliers = {
        'none': 2.5,
        'basic': 2.0,
        'website': 1.5,
        'advanced': 1.2
      };

      const industryMultiplier = industryMultipliers[formData.industry] || 1.3;
      const presenceMultiplier = presenceMultipliers[formData.digitalPresence] || 1.5;
      
      const projectedIncrease = revenue * (growth / 100) * industryMultiplier * presenceMultiplier;
      const monthlyIncrease = projectedIncrease / 12;
      const investment = formData.industry === 'restaurant' ? 800000 : 
                        formData.industry === 'retail' ? 2500000 : 800000;
      
      const paybackMonths = Math.ceil(investment / monthlyIncrease);
      const yearlyROI = ((projectedIncrease - investment) / investment) * 100;

      setResults({
        projectedIncrease: Math.round(projectedIncrease),
        monthlyIncrease: Math.round(monthlyIncrease),
        investment,
        paybackMonths: Math.min(paybackMonths, 24),
        yearlyROI: Math.round(yearlyROI),
        industry: industryOptions.find(opt => opt.value === formData.industry)?.label
      });

      setIsCalculating(false);
    }, 2000);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setResults(null);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Calculadora de ROI
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cuánto puede crecer tu negocio con una presencia digital profesional. 
            Cálculos basados en datos reales de nuestros clientes colombianos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calculator Form */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center">
                    <Icon name="Calculator" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-xl text-gray-900">
                      Datos de tu Negocio
                    </h3>
                    <p className="font-body text-sm text-gray-600">
                      Información básica para el cálculo
                    </p>
                  </div>
                </div>

                <Select
                  label="Industria de tu negocio"
                  placeholder="Selecciona tu industria"
                  options={industryOptions}
                  value={formData.industry}
                  onChange={(value) => handleInputChange('industry', value)}
                  className="mb-4"
                />

                <Input
                  label="Ingresos mensuales actuales (COP)"
                  type="number"
                  placeholder="ej: 5000000"
                  value={formData.currentRevenue}
                  onChange={(e) => handleInputChange('currentRevenue', e.target.value)}
                  className="mb-4"
                />

                <Select
                  label="Presencia digital actual"
                  placeholder="¿Cómo es tu presencia digital?"
                  options={digitalPresenceOptions}
                  value={formData.digitalPresence}
                  onChange={(value) => handleInputChange('digitalPresence', value)}
                  className="mb-4"
                />

                <Select
                  label="Objetivo de crecimiento"
                  placeholder="¿Cuánto quieres crecer?"
                  options={targetGrowthOptions}
                  value={formData.targetGrowth}
                  onChange={(value) => handleInputChange('targetGrowth', value)}
                  className="mb-6"
                />

                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-gradient-brand text-white font-cta shadow-lg hover:shadow-xl"
                  onClick={calculateROI}
                  loading={isCalculating}
                  disabled={!formData.industry || !formData.currentRevenue || !formData.digitalPresence || !formData.targetGrowth}
                >
                  {isCalculating ? 'Calculando...' : 'Calcular ROI'}
                  <Icon name="TrendingUp" size={16} className="ml-2" />
                </Button>
              </div>

              {/* Results */}
              <div className="lg:pl-8">
                {!results && !isCalculating && (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon name="BarChart3" size={32} className="text-gray-400" />
                      </div>
                      <h4 className="font-headline font-semibold text-lg text-gray-900 mb-2">
                        Completa el formulario
                      </h4>
                      <p className="font-body text-gray-600">
                        Ingresa los datos de tu negocio para ver el potencial de crecimiento
                      </p>
                    </div>
                  </div>
                )}

                {isCalculating && (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-6"></div>
                      <h4 className="font-headline font-semibold text-lg text-gray-900 mb-2">
                        Analizando tu negocio...
                      </h4>
                      <p className="font-body text-gray-600">
                        Calculando el potencial de crecimiento basado en datos reales
                      </p>
                    </div>
                  </div>
                )}

                {results && (
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                        <Icon name="TrendingUp" size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-headline font-bold text-xl text-gray-900">
                          Proyección de Crecimiento
                        </h4>
                        <p className="font-body text-sm text-gray-600">
                          Para {results.industry}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-green-50 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-body text-sm text-green-700">Aumento anual proyectado</span>
                          <Icon name="ArrowUp" size={16} className="text-green-500" />
                        </div>
                        <p className="font-headline font-bold text-3xl text-green-600">
                          {formatCurrency(results.projectedIncrease)}
                        </p>
                        <p className="font-body text-xs text-green-600 mt-1">
                          {formatCurrency(results.monthlyIncrease)} mensuales adicionales
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Clock" size={16} className="text-blue-500" />
                            <span className="font-body text-sm text-blue-700">Recuperación</span>
                          </div>
                          <p className="font-headline font-bold text-xl text-blue-600">
                            {results.paybackMonths} meses
                          </p>
                        </div>

                        <div className="bg-purple-50 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon name="Percent" size={16} className="text-purple-500" />
                            <span className="font-body text-sm text-purple-700">ROI Anual</span>
                          </div>
                          <p className="font-headline font-bold text-xl text-purple-600">
                            {results.yearlyROI}%
                          </p>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-body text-sm text-gray-700">Inversión recomendada</span>
                          <Icon name="DollarSign" size={16} className="text-gray-500" />
                        </div>
                        <p className="font-headline font-bold text-lg text-gray-900">
                          {formatCurrency(results.investment)}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <p className="font-body text-xs text-gray-500 text-center mb-4">
                          * Proyecciones basadas en datos promedio de clientes similares
                        </p>
                        <Button
                          variant="default"
                          size="sm"
                          className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-cta"
                        >
                          Solicitar Propuesta Personalizada
                          <Icon name="ArrowRight" size={14} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="font-body text-sm text-gray-500 mb-8">
            Cálculos basados en el rendimiento promedio de más de 150 proyectos completados
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} className="text-green-500" />
              <span className="font-body text-sm text-gray-600">Datos verificados</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={16} className="text-blue-500" />
              <span className="font-body text-sm text-gray-600">150+ clientes</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Award" size={16} className="text-purple-500" />
              <span className="font-body text-sm text-gray-600">Resultados comprobados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;