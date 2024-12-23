import React from 'react';

const Project: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">PROJECT</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="aspect-video">
            <img
              src="/images/project/sahara-marathon.jpg"
              alt="サハラマラソン"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">サハラマラソン</h3>
            <p className="text-gray-600">
              サハラマラソンは、アフリカ北西部に位置するサハラ砂漠で開催される過酷なマラソン大会です。
              6日間で約250kmを走破する究極の耐久レースであり、参加者は必要な装備や食料を背負いながら、
              灼熱の砂漠を走り抜けます。
            </p>
            <p className="text-gray-600">
              このプロジェクトを通じて、私たちは以下の目標に取り組んでいます：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>サハラ砂漠の環境保護と持続可能な開発の支援</li>
              <li>現地の子どもたちへの教育支援</li>
              <li>スポーツを通じた国際交流の促進</li>
              <li>チャレンジ精神と限界への挑戦</li>
            </ul>
            <p className="text-gray-600">
              私たちの活動は、単なるスポーツイベントへの参加を超えて、
              現地コミュニティとの深い繋がりを築き、持続可能な支援の形を模索しています。
              サハラマラソンを通じて得られる経験と感動を、より多くの人々と共有し、
              新たな可能性を切り開いていきたいと考えています。
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">クラウドファンディング実施中</h3>
            <p className="text-gray-600">
              サハラマラソンへの挑戦と、現地での支援活動の実現に向けて、
              皆様のご支援をお願いしています。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="text-xl font-bold">プロジェクトの目的</h4>
              <p className="text-gray-600">
                「小さな挑戦が、大きな挑戦につながる。だから、まずは一歩踏み出してみる。」
                このメッセージを多くの人に届けるため、2025年のサハラマラソンに挑戦します。
              </p>
              <p className="text-gray-600">
                また、このチャレンジを通じて、現地の子どもたちへの教育支援や
                環境保護活動にも取り組んでいきたいと考えています。
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
            <div className="aspect-video">
              <img
                src="/images/project/crowdfunding.jpg"
                alt="クラウドファンディング"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project; 
