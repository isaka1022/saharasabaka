import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // スクロール検出
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // メニューが開いているときにスクロールを無効化
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { to: '/', label: 'ホーム' },
    { to: '/profile', label: 'プロフィール' },
    { to: '/project', label: '完走報告' },
    { to: '/race', label: 'レース' },
    { to: '/equipments', label: '装備' },
    { to: '/support', label: 'サポート' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/saharasabaka/',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@saharasabaka',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center -my-4">
            <Link to="/" className="transition-transform hover:scale-105 duration-300">
              <img 
                src="/logo.png" 
                alt="サハラサバカ" 
                className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'} w-auto`} 
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-primary-500 p-2 rounded-md"
            aria-expanded={isOpen}
            aria-label="メニューを開く"
          >
            <span className={`block w-6 h-0.5 bg-black mb-1 transition-transform duration-300 ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black mb-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.to || 
                  (location.pathname === '/' && item.to === '/');
                return (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className={`text-gray-800 hover:text-primary transition-colors relative ${isActive ? 'font-medium' : ''}`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center ml-8 space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-primary transition-colors transform hover:scale-110 duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Mobile menu */}
        <div 
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
          aria-hidden={!isOpen}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="focus:outline-none focus:ring-2 focus:ring-primary-500 p-2 rounded-md"
              aria-label="メニューを閉じる"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full -mt-16">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.to || 
                (location.pathname === '/' && item.to === '/');
              return (
                <div key={item.label} className="py-3">
                  <Link
                    to={item.to}
                    className={`block text-2xl font-display ${isActive ? 'text-primary font-medium' : 'text-gray-800'} hover:text-primary transition-colors`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
            <div className="flex space-x-6 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <div className="w-8 h-8">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 
