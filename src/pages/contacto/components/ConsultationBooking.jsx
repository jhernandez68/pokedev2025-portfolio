import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ConsultationBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [meetingType, setMeetingType] = useState('');
  const [isBooking, setIsBooking] = useState(false);

  // Generate available dates (next 14 days, excluding weekends)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let currentDate = new Date(today);
    currentDate.setDate(currentDate.getDate() + 1); // Start from tomorrow

    while (dates.length < 10) {
      const dayOfWeek = currentDate.getDay();
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        const dateStr = currentDate.toISOString().split('T')[0];
        const displayDate = currentDate.toLocaleDateString('es-CO', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        dates.push({
          value: dateStr,
          label: displayDate.charAt(0).toUpperCase() + displayDate.slice(1)
        });
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return [{ value: '', label: 'Selecciona una fecha' }, ...dates];
  };

  const availableTimes = [
    { value: '', label: 'Selecciona una hora' },
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '17:00', label: '5:00 PM' }
  ];

  const meetingTypes = [
    { value: '', label: 'Tipo de reunión' },
    { value: 'video', label: 'Videollamada (Google Meet)' },
    { value: 'telefonica', label: 'Llamada telefónica' }
  ];

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !meetingType) {
      alert('Por favor completa todos los campos');
      return;
    }

    setIsBooking(true);

    try {
      // Simulate booking process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert(`¡Consulta agendada! Te hemos enviado los detalles por email.\n\nFecha: ${selectedDate}\nHora: ${selectedTime}\nTipo: ${meetingType}`);
      
      // Reset form
      setSelectedDate('');
      setSelectedTime('');
      setMeetingType('');
      
    } catch (error) {
      alert('Error al agendar la consulta. Por favor intenta nuevamente.');
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-brand-lg p-6 lg:p-8">
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Calendar" size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-headline font-bold text-2xl text-primary">
              Agenda una consulta
            </h3>
            <p className="text-text-secondary text-sm">
              Conversemos sobre tu proyecto sin compromiso
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Meeting Type Selection */}
        <Select
          label="Tipo de reunión"
          options={meetingTypes}
          value={meetingType}
          onChange={setMeetingType}
          required
        />

        {/* Date Selection */}
        <Select
          label="Fecha disponible"
          options={generateAvailableDates()}
          value={selectedDate}
          onChange={setSelectedDate}
          required
        />

        {/* Time Selection */}
        <Select
          label="Hora preferida"
          options={availableTimes}
          value={selectedTime}
          onChange={setSelectedTime}
          required
        />

        {/* Meeting Details */}
        {meetingType && (
          <div className="p-4 bg-surface rounded-lg border border-border">
            <h4 className="font-body font-semibold text-text-primary mb-2">
              Detalles de la reunión:
            </h4>
            <div className="space-y-2 text-sm text-text-secondary">
              {meetingType === 'video' && (
                <div className="flex items-center space-x-2">
                  <Icon name="Video" size={16} />
                  <span>Recibirás el enlace de Google Meet por email</span>
                </div>
              )}
              {meetingType === 'presencial-bogota' && (
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Oficina en Zona Rosa, Bogotá - Dirección por confirmar</span>
                </div>
              )}
              {meetingType === 'presencial-medellin' && (
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Oficina en El Poblado, Medellín - Dirección por confirmar</span>
                </div>
              )}
              {meetingType === 'telefonica' && (
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>Te llamaremos al número que proporciones</span>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Duración: 30-45 minutos</span>
              </div>
            </div>
          </div>
        )}

        {/* What to Expect */}
        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
          <h4 className="font-body font-semibold text-primary mb-3">
            ¿Qué puedes esperar de la consulta?
          </h4>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-start space-x-2">
              <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
              <span>Análisis gratuito de tus necesidades digitales</span>
            </li>
            <li className="flex items-start space-x-2">
              <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
              <span>Recomendaciones personalizadas para tu negocio</span>
            </li>
            <li className="flex items-start space-x-2">
              <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
              <span>Cotización preliminar sin compromiso</span>
            </li>
            <li className="flex items-start space-x-2">
              <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
              <span>Cronograma y próximos pasos claros</span>
            </li>
          </ul>
        </div>

        {/* Book Button */}
        <Button
          variant="default"
          size="lg"
          fullWidth
          loading={isBooking}
          onClick={handleBooking}
          className="bg-primary hover:bg-primary/90 text-white font-cta"
          iconName="Calendar"
          iconPosition="left"
        >
          {isBooking ? 'Agendando...' : 'Agendar consulta gratuita'}
        </Button>

        {/* Additional Info */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
            <Icon name="Shield" size={16} className="text-success" />
            <span>Sin compromiso • Consulta 100% gratuita</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
            <Icon name="Clock" size={16} />
            <span>Confirmación inmediata por email y WhatsApp</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBooking;