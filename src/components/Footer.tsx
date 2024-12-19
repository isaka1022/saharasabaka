import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { label: 'TOP', path: '/' },
  { label: 'PROJECT', path: '/project' },
  { label: 'PROFILE', path: '/profile' },
  { label: 'SUPPORT', path: '/support' },
  { label: 'INSTAGRAM', path: 'https://www.instagram.com/saharasabaka/', external: true },
  { label: 'CONTACT', path: '/contact' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-6">
            {menuItems.map((item) => (
              <li key={item.label}>
                {item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://www.instagram.com/saharasabaka/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="/images/common/r_instagram.png"
              alt="Instagram"
              className="w-12 h-12 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>Copyright © 2024 Sahara Sabaka All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
