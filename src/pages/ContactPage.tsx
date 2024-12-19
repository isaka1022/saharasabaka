import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <main className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-center mb-8">
            お問い合わせは以下のInstagramのDMからお願いいたします。
          </p>
          
          <div className="text-center">
            <a
              href="https://www.instagram.com/saharasabaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              <img
                src="/images/common/r_instagram.png"
                alt="Instagram"
                className="w-6 h-6"
              />
              <span>Instagram DMを開く</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage; 
