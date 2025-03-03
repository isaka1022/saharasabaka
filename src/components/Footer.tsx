import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItem {
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { label: 'TOP', path: '/' },
  { label: 'PROJECT', path: '/project' },
  { label: 'PROFILE', path: '/profile' },
  { label: 'RACE', path: '/race' },
  // { label: 'MEMBERS', path: '/members' },
  { label: 'SUPPORT', path: '/support' },
  { label: 'CONTACT', path: '/contact' },
];

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/saharasabaka/',
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@saharasabaka',
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

const Footer: React.FC = () => {
  const startYear = 2024;
  const currentYear = new Date().getFullYear();
  const yearDisplay = currentYear > startYear ? `${startYear}-${currentYear}` : startYear;
  const location = useLocation();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src="/logo.png" alt="サハラサバカ" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-300 mb-6">
              サハラマラソンに挑戦するプロジェクト。過酷な砂漠を走り抜け、限界に挑む私たちの旅路をご覧ください。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors transform hover:scale-110 duration-300"
                  aria-label={social.name}
                >
                  <div className="w-6 h-6">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              メニュー
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <nav>
              <ul className="space-y-3">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path || 
                    (location.pathname === '/' && item.path === '/');
                  return (
                    <li key={item.label}>
                      <Link
                        to={item.path}
                        className={`text-gray-300 hover:text-white transition-colors ${isActive ? 'text-primary' : ''}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              お問い合わせ
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <p className="text-gray-300 mb-4">
              プロジェクトに関するお問い合わせやサポートについては、お気軽にご連絡ください。
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-primary hover:text-primary-300 transition-colors"
            >
              お問い合わせフォーム
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              Copyright © {yearDisplay} サハラサバカ All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
              <Link to="/terms" className="hover:text-white transition-colors">利用規約</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
