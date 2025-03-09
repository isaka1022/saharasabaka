import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">お問い合わせ</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-8">
        <p className="text-center mb-8">
          お問い合わせは以下のフォームからお願いいたします。
          スポンサーに関するお問い合わせもこちらからお願いいたします。
        </p>
        
        <div className="text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf6NUloIZWpsoxhZCU7_R3mDDTmwl5fdsMXFhEzHLvbRosALg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <span>お問い合わせフォームを開く</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 
