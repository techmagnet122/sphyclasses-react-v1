import React, { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, Zap } from 'lucide-react';
import { ThemeContext } from "../context/ThemeContext";
import { headerSphyClassesLogo } from "../s3AccessorUrls/s3Urls";


const Header = () => {
  const { isDark, toggleTheme } = React.useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Programs', 'Features', 'Testimonials', 'Contact'];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={headerSphyClassesLogo} alt="sphyLogo" 
          className="h-12 w-12 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight break-words">S-PHY CLASSES</h1>
            <p className="text-xs sm:text-sm md:text-base font-semibold text-blue-700 dark:text-blue-300 leading-snug break-words">Forum for Science and Mathematics in Dhanbad</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} 
               className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} 
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} 
                  className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} 
               className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
               onClick={() => setIsMenuOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;