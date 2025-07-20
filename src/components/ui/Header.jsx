import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Soluciones', path: '/soluciones' },
    { name: 'Contacto', path: '/contacto' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-brand shadow-brand' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}

          <Link
                to="/"
                className="flex items-center space-x-2 group transition-brand"
                onClick={closeMenu}
              >
                <img
                  src="/images/Logo.png"
                  alt="PokeDev"
                  className="w-10 h-10 rounded-lg shadow-interactive group-hover:shadow-interactive-hover transition-all duration-300 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-headline font-bold text-lg text-primary group-hover:text-secondary transition-colors duration-300">
                    PokeDev
                  </span>
                  <span className="font-accent text-xs text-text-secondary -mt-1">
                    Desarrollo de Software
                  </span>
                </div>
            </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-body font-medium transition-all duration-300 hover:text-primary group ${
                  isActivePath(item.path) 
                    ? 'text-primary' :'text-text-primary hover:text-primary'
                }`}
              >
                {item.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActivePath(item.path) 
                      ? 'w-full' :'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="font-cta"
              onClick={() => window.open('https://wa.me/573133070443', '_blank')}
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              WhatsApp
            </Button>
            <Button
              variant="default"
              size="sm"
              className="font-cta bg-brand-orange hover:bg-brand-orange/90 text-white shadow-interactive hover:shadow-interactive-hover interactive-lift"
              onClick={() => window.location.href = 'mailto:pokedev2025@gmail.com?subject=Cotización%20Pokedev&body=Hola,%20quiero%20cotizar%20un%20sitio%20web...'}
      >
            Solicita tu cotización
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="text-text-primary"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-4 bg-white/95 backdrop-blur-brand border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`font-body font-medium py-2 px-3 rounded-lg transition-all duration-200 ${
                    isActivePath(item.path)
                      ? 'text-primary bg-primary/5 border-l-4 border-primary' :'text-text-primary hover:text-primary hover:bg-muted'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTAs */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  className="font-cta justify-center"
                  onClick={() => {
                    window.open('https://wa.me/573133070443', '_blank');
                    closeMenu();
                  }}
                >
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  WhatsApp
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="font-cta bg-brand-orange hover:bg-brand-orange/90 text-white justify-center"
                  onClick={closeMenu}
                >
                  Solicita tu cotización
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;