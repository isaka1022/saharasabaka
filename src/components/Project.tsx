import React from 'react';

const Project: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">PROJECT</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <img
            src="/logo.png"
            alt="サハラサバカ"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">サハラサバカ</h3>
            <p className="text-gray-600">
              2024年3月、フルマラソンの完走経験すらなかったエンジニアの僕ですが、世界一過酷といわれる「サハラマラソン」への挑戦を決めました。
              そこから1年弱準備とたくさんの人たちの応援をいただきながら、2025年4月の完走を目指します。
              一見無謀で"バカ"とも思えるこの取り組みを「サハラサバカ」と名付けました。
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">サハラマラソンとは？</h3>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600">
              Marathon des Sables THE LEGENDARY（通称：サハラマラソン）は、1986年から開催されている世界一最過酷なマラソン大会です。
              モロッコのサハラ砂漠を舞台に、11日間のうち9日間を砂漠で過ごし、6つのステージに分けて約250kmを走破する究極の耐久レースです。
            </p>
            <p className="text-gray-600">
              参加者は全ての装備と食料を背負って走り、水だけが主催者から支給されます。
              コース上約10kmごとに設置されたチェックポイントを頼りに。灼熱の砂漠を走ります。
            </p>
            <p className="text-gray-600">
              2024年のステージは以下の距離配分で構成されています。
              <br />・Stage 1: 31.1 km
              <br />・Stage 2: 40.8 km
              <br />・Stage 3: 85.3 km（48時間かけて走破）
              <br />・Stage 4: 43.1 km
              <br />・Stage 5: 31.4 km
              <br />・Stage 6: 21.1 km
            </p>
            <div className="mt-6">
              <a
                href="https://camp-fire.jp/projects/776874/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                プロジェクトを支援する
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
