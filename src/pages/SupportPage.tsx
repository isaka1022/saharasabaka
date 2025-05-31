import React from 'react';
import Supporters from '../components/Sponsors';

const SupportPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">感謝の気持ち</h1>
      
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-green-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
            🏆 サハラマラソン完走を達成しました！
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
            皆様のご支援とご声援のおかげで、2025年4月のサハラマラソンを見事完走することができました。
            約250kmの過酷な砂漠での旅は、想像を超える困難との戦いでしたが、
            皆様からいただいた温かいご支援が大きな力となりました。
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            心から感謝申し上げます。本当にありがとうございました。
          </p>
        </div>
      </div>
      
      <Supporters />
    </div>
  );
};

export default SupportPage; 
