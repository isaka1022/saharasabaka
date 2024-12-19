import React from 'react';

const Supporters: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">Support</h2>
        
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg mb-8">
            サハラマラソンへの挑戦の様子はSNSやWEBを通して発信していく予定です。
            そんな挑戦の様子を見て「なにか自分もやってみようかな」と思える人が少しでも増えるように、
            そして支援の輪が広がるように、クラウドファンディングを実施しています。
          </p>
          
          <div className="flex justify-center gap-8">
            <a
              href="#crowdfunding"
              className="inline-block px-8 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
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
