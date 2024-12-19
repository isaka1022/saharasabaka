import React from 'react';

const JourneySection: React.FC = () => {
  const milestones = [
    {
      date: '2023年8月',
      title: 'サハラマラソンとの出会い',
      description: 'トマト祭りでサハラマラソン参加者と出会う'
    },
    {
      date: '2024年1月',
      title: '参加決定',
      description: '2025年大会へのエントリーを決意'
    },
    {
      date: '2024年4月',
      title: 'トレーニング開始',
      description: '本格的な砂漠マラソンの準備を開始'
    },
    {
      date: '2025年4月',
      title: 'サハラマラソン',
      description: '砂漠250kmへの挑戦'
    }
  ];

  return (
    <section className="py-20 bg-sand-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">挑戦の軌跡</h2>
        
        <div className="relative">
          {/* タイムライン */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-desert-orange"></div>
          
          {/* マイルストーン */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`flex ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } items-center justify-center`}
              >
                <div className="w-5/12">
                  <div className={`${
                    index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                  }`}>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 mb-1">{milestone.date}</p>
                    <p>{milestone.description}</p>
                  </div>
                </div>
                
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-desert-orange rounded-full relative z-10"></div>
                </div>
                
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection; 
