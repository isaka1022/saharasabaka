import React from 'react';

const Supporters: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          <span className="inline-block border-b-4 border-yellow-500 pb-2">SUPPORT</span>
        </h2>
        
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            サハラマラソンへの挑戦の様子はSNSやWEBを通して発信していく予定です。
            そんな挑戦の様子を見て「なにか自分もやってみようかな」と思える人が少しでも増えるように、
            そして支援の輪が広がるように、クラウドファンディングを実施しています。
          </p>
          
          <div className="flex justify-center">
            <a
              href="#crowdfunding"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
            >
              クラウドファンディングで応援する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supporters; 
