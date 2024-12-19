import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-primary/10 to-white">
      {/* 装飾的な背景要素を追加 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          あなたの夢を実現する
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8">
          限界を超える。砂漠を走る。
        </p>
        <button className="bg-desert-orange hover:bg-desert-orange-dark text-white font-bold py-3 px-8 rounded-full transition duration-300">
          詳しく見る
        </button>
      </div>
    </div>
  );
};

export default HeroSection; 
