import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'TOP', path: '/' },
    { label: 'PROJECT', path: '/project' },
    { label: 'PROFILE', path: '/profile' },
    { label: 'SUPPORT', path: '/support' },
    { label: 'INSTAGRAM', path: 'https://www.instagram.com/saharasabaka/', external: true },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/">
              <span className="text-xl font-bold">SAHARA SABAKA</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <span className={`block w-6 h-0.5 bg-black mb-1 ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black mb-1 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              item.external ? (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <nav className="py-4">
            {menuItems.map((item) => (
              <div key={item.label} className="py-2">
                {item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-800 hover:text-gray-600 transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="block text-gray-800 hover:text-gray-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 
