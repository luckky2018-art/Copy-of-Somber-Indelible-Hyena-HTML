import React, { useState } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiPhone } = FiIcons;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary-600">
              Silver Tech Concierge
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#como-funciona" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Como Funciona
            </a>
            <a href="#precos" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Preços
            </a>
            <a href="#depoimentos" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Depoimentos
            </a>
            <a href="#faq" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              FAQ
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-primary-600">
              <SafeIcon icon={FiPhone} className="w-5 h-5" />
              <span className="font-medium">(11) 9999-9999</span>
            </div>
            <button className="px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all duration-200 font-medium">
              Agendar Suporte
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <SafeIcon 
              icon={isMenuOpen ? FiX : FiMenu} 
              className="w-6 h-6 text-gray-700" 
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-3">
              <a href="#como-funciona" className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
                Como Funciona
              </a>
              <a href="#precos" className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
                Preços
              </a>
              <a href="#depoimentos" className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
                Depoimentos
              </a>
              <a href="#faq" className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2">
                FAQ
              </a>
            </nav>
            <div className="flex flex-col space-y-3 mt-4">
              <div className="flex items-center space-x-2 text-primary-600 justify-center">
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span className="font-medium">(11) 9999-9999</span>
              </div>
              <button className="w-full px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all duration-200 font-medium">
                Agendar Suporte
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;