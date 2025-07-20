import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    businessType: '',
    monthlyRevenue: '',
    currentWebsite: '',
    marketingBudget: '',
    employees: ''
  });
  
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const businessTypes = [
    { value: 'retail', label: 'Comercio/Retail' },
    { value: 'services', label: 'Servicios Profesionales' },
    { value: 'restaurant', label: 'Restaurante/Gastronomía' },
    { value: 'healthcare', label: 'Salud/Medicina' },
    { value: 'education', label: 'Educación' },
    { value: 'manufacturing', label: 'Manufactura' },
    { value: 'other', label: 'Otro' }
  ];

  const websiteOptions = [
    { value: 'none', label: 'No tengo sitio web' },
    { value: 'basic', label: 'Sitio básico/desactualizado' },
    { value: 'decent', label: 'Sitio funcional pero mejorable' },
    { value: 'good', label: 'Sitio web moderno' }
  ];

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const revenue = parseFloat(formData.monthlyRevenue) || 0;
      const marketing = parseFloat(formData.marketingBudget) || 0;
      
      // ROI calculation based on Colombian market data
      const conversionImprovement = getConversionImprovement();
      const seoImprovement = getSEOImprovement();
      const efficiencyGains = getEfficiencyGains();
      
      const monthlyIncrease = revenue * (conversionImprovement / 100);
      const annualIncrease = monthlyIncrease * 12;
      const marketingSavings = marketing * (efficiencyGains / 100) * 12;
      
      const totalBenefit = annualIncrease + marketingSavings;
      const investment = getInvestmentEstimate();
      const roi = ((totalBenefit - investment) / investment) * 100;
      
      setResults({
        monthlyIncrease,
        annualIncrease,
        marketingSavings,
        totalBenefit,
        investment,
        roi,
        conversionImprovement,
        seoImprovement,
        efficiencyGains,
        paybackMonths: Math.ceil(investment / (monthlyIncrease + (marketingSavings / 12)))
      });
      
      setIsCalculating(false);
    }, 2000);
  };

  const getConversionImprovement = () => {
    const baseImprovement = formData.currentWebsite === 'none' ? 25 : 
                           formData.currentWebsite === 'basic' ? 18 : 
                           formData.currentWebsite === 'decent' ? 12 : 8;
    
    const businessMultiplier = formData.businessType === 'retail' ? 1.2 :
                              formData.businessType === 'services' ? 1.1 :
                              formData.businessType === 'restaurant' ? 1.3 : 1.0;
    
    return Math.round(baseImprovement * businessMultiplier);
  };

  const getSEOImprovement = () => {
    return formData.currentWebsite === 'none' ? 40 : 
           formData.currentWebsite === 'basic' ? 30 : 
           formData.currentWebsite === 'decent' ? 20 : 15;
  };

  const getEfficiencyGains = () => {
    const employees = parseInt(formData.employees) || 1;
    return Math.min(25, 5 + (employees * 2));
  };

  const getInvestmentEstimate = () => {
    const basePrice = formData.businessType === 'retail' ? 2500000 :
                     formData.businessType === 'services' ? 2000000 :
                     formData.businessType === 'restaurant' ? 1800000 : 2200000;
    
    return basePrice;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setResults(null);
  };

  const isFormValid = formData.businessType && formData.monthlyRevenue && formData.currentWebsite;

  return (
    <div className="bg-white rounded-xl border border-border p-8">
      <div className="text-center mb-8">
        <h3 className="font-headline font-bold text-2xl text-primary mb-4">
          Calculadora de ROI
        </h3>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Descubre el retorno de inversión potencial de tu nuevo sitio web con datos del mercado colombiano
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="space-y-6">
          <h4 className="font-headline font-semibold text-lg text-primary">
            Información de tu negocio
          </h4>
          
          <Select
            label="Tipo de negocio"
            placeholder="Selecciona tu industria"
            options={businessTypes}
            value={formData.businessType}
            onChange={(value) => handleInputChange('businessType', value)}
            required
          />

          <Input
            label="Ingresos mensuales actuales"
            type="number"
            placeholder="2000000"
            value={formData.monthlyRevenue}
            onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
            description="En pesos colombianos (COP)"
            required
          />

          <Select
            label="Estado actual de tu sitio web"
            placeholder="Describe tu situación actual"
            options={websiteOptions}
            value={formData.currentWebsite}
            onChange={(value) => handleInputChange('currentWebsite', value)}
            required
          />

          <Input
            label="Presupuesto mensual de marketing"
            type="number"
            placeholder="500000"
            value={formData.marketingBudget}
            onChange={(e) => handleInputChange('marketingBudget', e.target.value)}
            description="Incluye publicidad digital, redes sociales, etc."
          />

          <Input
            label="Número de empleados"
            type="number"
            placeholder="5"
            value={formData.employees}
            onChange={(e) => handleInputChange('employees', e.target.value)}
            description="Para calcular ahorros en eficiencia operativa"
          />

          <Button
            variant="default"
            fullWidth
            onClick={calculateROI}
            disabled={!isFormValid}
            loading={isCalculating}
            className="bg-brand-orange hover:bg-brand-orange/90 font-cta"
            iconName="Calculator"
            iconPosition="left"
          >
            {isCalculating ? 'Calculando...' : 'Calcular ROI'}
          </Button>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {!results && !isCalculating && (
            <div className="bg-muted rounded-lg p-8 text-center">
              <Icon name="Calculator" size={48} className="text-text-secondary mx-auto mb-4" />
              <h4 className="font-headline font-semibold text-primary mb-2">
                Completa el formulario
              </h4>
              <p className="text-text-secondary">
                Ingresa la información de tu negocio para ver tu ROI proyectado
              </p>
            </div>
          )}

          {isCalculating && (
            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <h4 className="font-headline font-semibold text-primary mb-2">
                Analizando tu negocio...
              </h4>
              <p className="text-text-secondary">
                Calculando proyecciones basadas en datos del mercado colombiano
              </p>
            </div>
          )}

          {results && (
            <div className="space-y-4">
              <h4 className="font-headline font-semibold text-lg text-primary">
                Tu ROI Proyectado
              </h4>

              {/* Main ROI Card */}
              <div className="bg-gradient-brand rounded-lg p-6 text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    {results.roi > 0 ? '+' : ''}{Math.round(results.roi)}%
                  </div>
                  <div className="text-sm opacity-90">
                    Retorno de inversión anual
                  </div>
                </div>
              </div>

              {/* Detailed Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-lg p-4">
                  <div className="text-lg font-bold text-success">
                    +${Math.round(results.monthlyIncrease).toLocaleString('es-CO')}
                  </div>
                  <div className="text-sm text-text-secondary">
                    Ingresos adicionales/mes
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <div className="text-lg font-bold text-primary">
                    {results.paybackMonths} meses
                  </div>
                  <div className="text-sm text-text-secondary">
                    Tiempo de recuperación
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <div className="text-lg font-bold text-brand-orange">
                    +{results.conversionImprovement}%
                  </div>
                  <div className="text-sm text-text-secondary">
                    Mejora en conversiones
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <div className="text-lg font-bold text-secondary">
                    +{results.seoImprovement}%
                  </div>
                  <div className="text-sm text-text-secondary">
                    Mejora en tráfico SEO
                  </div>
                </div>
              </div>

              {/* Investment Breakdown */}
              <div className="bg-muted rounded-lg p-4">
                <h5 className="font-headline font-semibold text-primary mb-3">
                  Desglose de beneficios anuales:
                </h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Ingresos adicionales:</span>
                    <span className="font-medium text-success">
                      +${Math.round(results.annualIncrease).toLocaleString('es-CO')} COP
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ahorros en marketing:</span>
                    <span className="font-medium text-success">
                      +${Math.round(results.marketingSavings).toLocaleString('es-CO')} COP
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-2">
                    <span className="font-medium">Beneficio total:</span>
                    <span className="font-bold text-success">
                      +${Math.round(results.totalBenefit).toLocaleString('es-CO')} COP
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Inversión inicial:</span>
                    <span className="font-medium text-text-secondary">
                      ${Math.round(results.investment).toLocaleString('es-CO')} COP
                    </span>
                  </div>
                </div>
              </div>

              <Button
                variant="default"
                fullWidth
                className="bg-success hover:bg-success/90 font-cta"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Solicitar Propuesta Personalizada
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 p-4 bg-muted rounded-lg">
        <p className="text-xs text-text-secondary text-center">
          * Los cálculos son estimaciones basadas en promedios de la industria colombiana. 
          Los resultados reales pueden variar según múltiples factores específicos de cada negocio.
        </p>
      </div>
    </div>
  );
};

export default ROICalculator;