import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSignals = () => {
  const securityBadges = [
    {
      icon: 'Shield',
      title: 'SSL Certificado',
      description: 'Conexión segura'
    },
    {
      icon: 'Lock',
      title: 'Datos Protegidos',
      description: 'GDPR Compliant'
    },
    {
      icon: 'CheckCircle',
      title: 'Empresa Verificada',
      description: 'Registro mercantil'
    }
  ];

  const clientLogos = [
    {
      name: 'TechCorp Colombia',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center'
    },
    {
      name: 'Innovar Solutions',
      logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&h=60&fit=crop&crop=center'
    },
    {
      name: 'Digital Ventures',
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop&crop=center'
    },
    {
      name: 'StartUp Bogotá',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center'
    }
  ];

  const testimonials = [
    {
      name: 'María González',
      company: 'Directora de Marketing, TechCorp',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      text: `"PokeDev transformó completamente nuestra presencia digital. El equipo es profesional y los resultados superaron nuestras expectativas."`
    },
    {
      name: 'Carlos Rodríguez',
      company: 'CEO, Innovar Solutions',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      text: `"Excelente servicio y atención. Cumplieron con todos los tiempos acordados y el sitio web ha aumentado nuestras ventas en un 40%."`
    }
  ];

  const stats = [
    {
      number: '150+',
      label: 'Proyectos completados'
    },
    {
      number: '98%',
      label: 'Clientes satisfechos'
    },
    {
      number: '5 años',
      label: 'De experiencia'
    },
    {
      number: '24/7',
      label: 'Soporte disponible'
    }
  ];

  return (
    <div className="space-y-8">


      {/* Client Logos */}
      <div className="bg-white rounded-2xl shadow-brand p-6">
        <h3 className="font-headline font-bold text-xl text-primary mb-6 text-center">
          Empresas que confían en nosotros
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clientLogos.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4 border border-border rounded-lg hover:shadow-interactive transition-shadow duration-200">
              <Image
                src={client.logo}
                alt={client.name}
                className="max-w-full h-8 object-contain opacity-60 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TrustSignals;