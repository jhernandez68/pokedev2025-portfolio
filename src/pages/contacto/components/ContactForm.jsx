import React, { useState } from 'react'
import Button from '../../../components/ui/Button'
import Input from '../../../components/ui/Input'
import Select from '../../../components/ui/Select'
import { Checkbox } from '../../../components/ui/Checkbox'
import Icon from '../../../components/AppIcon'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: '',
    acceptTerms: false,
    acceptMarketing: false
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceOptions = [
    { value: '', label: 'Selecciona un servicio' },
    { value: 'landing-page', label: 'Landing Page' },
    { value: 'wordpress', label: 'Sitio WordPress' },
    { value: 'seo', label: 'Optimización SEO y velocidad' },
    { value: 'software-a-medida', label: 'Software a la medida (Docker)' }
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido'
    if (!formData.email.trim()) newErrors.email = 'El email es requerido'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido'
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido'
    if (!formData.serviceType) newErrors.serviceType = 'Selecciona un servicio'
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido'
    if (!formData.acceptTerms) newErrors.acceptTerms = 'Debes aceptar los términos'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        message: '',
        acceptTerms: false,
        acceptMarketing: false
      })
    } catch (error) {
      alert('Error al enviar el mensaje. Por favor intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-brand-lg p-6 lg:p-8 text-center flex flex-col items-center">
        <Icon name="CheckCircle" size={64} className="text-green-500 mb-6" />
        <h3 className="font-headline font-bold text-2xl text-primary mb-2">
          ¡Gracias por tu mensaje!
        </h3>
        <p className="text-text-secondary text-lg mb-6 max-w-md">
          Hemos recibido tu solicitud y te contactaremos en menos de 2 horas durante días hábiles.
        </p>
        <Button
          variant="default"
          className="bg-brand-orange hover:bg-brand-orange/90 text-white"
          onClick={() => setIsSubmitted(false)}
        >
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-brand-lg p-6 lg:p-8">
      <div className="mb-6">
        <h3 className="font-headline font-bold text-2xl text-primary mb-2">
          Solicita tu cotización
        </h3>
        <p className="text-text-secondary">
          Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Nombre completo"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Tu nombre"
            required
            error={errors.name}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="tu@email.com"
            required
            error={errors.email}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Teléfono"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+57 300 123 4567"
            required
            error={errors.phone}
          />
          <Input
            label="Empresa (opcional)"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Nombre de tu empresa"
          />
        </div>

        <Select
          label="Tipo de servicio"
          options={serviceOptions}
          value={formData.serviceType}
          onChange={(value) => handleInputChange({ target: { name: 'serviceType', value } })}
          error={errors.serviceType}
          required
        />

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Mensaje <span className="text-error">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle importante..."
            rows={4}
            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            required
          />
          {errors.message && (
            <p className="mt-1 text-sm text-error">{errors.message}</p>
          )}
        </div>

        <div className="space-y-3">
          <Checkbox
            label="Acepto los términos y condiciones y la política de privacidad"
            checked={formData.acceptTerms}
            onChange={(e) => handleInputChange(e)}
            name="acceptTerms"
            required
            error={errors.acceptTerms}
          />
          <Checkbox
            label="Acepto recibir información comercial y promociones por email"
            checked={formData.acceptMarketing}
            onChange={(e) => handleInputChange(e)}
            name="acceptMarketing"
          />
        </div>

        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubmitting}
          className="bg-brand-orange hover:bg-brand-orange/90 text-white font-cta"
          iconName="Send"
          iconPosition="right"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
        </Button>

        <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
          <Icon name="Clock" size={16} />
          <span>Respondemos en menos de 2 horas durante días hábiles</span>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
