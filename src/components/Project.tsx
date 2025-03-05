import React from 'react';

const Project: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          <span className="inline-block border-b-4 border-orange-500 pb-2">PROJECT</span>
        </h2>

        {/* プロジェクト概要 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute -inset-4 bg-orange-100 rounded-lg opacity-50 transform -rotate-3"></div>
            <img
              src="/logo.png"
              alt="サハラサバカ"
              className="relative w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">サハラサバカ</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              2024年3月「世界一過酷」とまでいわれるサハラマラソンへの挑戦を決めました。
              そこから1年をかけて準備をし、2025年4月に挑戦、完走を目指します。
              いきなりサハラを走るなんて、「バカ」とも思えるこの取り組みを「サハラサバカ」と命名しています。
            </p>
          </div>
        </div>

        {/* サハラマラソン説明 */}
        <div className="bg-white rounded-2xl p-10 shadow-lg">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">サハラマラソンとは？</h3>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Marathon des Sables THE LEGENDARY（通称：サハラマラソン）は、1986年から開催されている世界一最過酷なマラソン大会です。
              モロッコのサハラ砂漠を舞台に、11日間のうち9日間を砂漠で過ごし、6つのステージに分けて約250kmを走破する究極の耐久レースです。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              参加者は全ての装備と食料を背負って走り、水だけが主催者から支給されます。
              コース上約10kmごとに設置されたチェックポイントを頼りに、灼熱の砂漠を走ります。
            </p>

            <div className="relative mb-10 max-w-2xl mx-auto">
              <div className="absolute -inset-4 bg-orange-100 rounded-lg opacity-50 transform -rotate-3"></div>
              <img
                src="/images/sahara-hero.jpg"
                alt="サハラマラソンヒーロー"
                className="relative w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* ステージ情報 */}
            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">2024年 ステージ構成</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="font-bold text-orange-500">Stage 1</div>
                  <div className="text-lg">31.1 km</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="font-bold text-orange-500">Stage 2</div>
                  <div className="text-lg">40.8 km</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="font-bold text-orange-500">Stage 3</div>
                  <div className="text-lg">85.3 km</div>
                  <div className="text-sm text-gray-500">48時間制限</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="font-bold text-orange-500">Stage 4</div>
                  <div className="text-lg">43.1 km</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="font-bold text-orange-500">Stage 5</div>
                  <div className="text-lg">31.4 km</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="font-bold text-orange-500">Stage 6</div>
                  <div className="text-lg">21.1 km</div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="https://www.marathondessables.com/mds-legendary"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
              >
                公式サイト
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project; 
