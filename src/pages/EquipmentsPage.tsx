import React, { useState } from 'react';

const EquipmentsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bringing' | 'supported'>('bringing');

  // 持って行く装備
  const bringingEquipments = [
    {
      title: "必須装備",
      description: "サハラマラソンの規定で必ず持参が必要な装備",
      items: [
        {
          name: "バックパック",
          brand: "WAA Ultra Equipment",
          model: "Ultra Carrier Shirt 3.0",
          image: "/images/equipments/backpack.jpg",
          description: "レース中の全ての装備を収納するバックパック。軽量かつ背負いやすさを重視して選定。",
          link: "https://www.waa-ultra.com/en/ultra-carrier-shirt/37-ultra-carrier-shirt-30.html",
          status: "決定"
        },
        {
          name: "寝袋",
          brand: null,
          model: null,
          image: "/images/equipments/sleepingbag.jpg",
          description: "夜間の砂漠の寒さから身を守るための超軽量寝袋。最小限の重量で十分な保温性能を確保するものを選定予定。",
          link: null,
          status: "検討中"
        },
        {
          name: "ヘッドランプ",
          brand: "PETZL",
          model: "SWIFT RL",
          image: "/images/equipments/headlamp.jpg",
          description: "夜間走行や夜のキャンプで使用。充電式で明るさ調整可能。",
          link: "https://www.petzl.com/INT/en/Sport/PERFORMANCE-headlamps/SWIFT-RL",
          status: "決定"
        }
      ]
    },
    {
      title: "ランニング装備",
      description: "砂漠での走行に適した特殊なランニング装備",
      items: [
        {
          name: "ランニングシューズ",
          brand: "HOKA",
          model: "Speedgoat 5",
          image: "/images/equipments/shoes.jpg",
          description: "砂漠の不安定な地形でも安定して走れるトレイルランニングシューズ。砂の侵入を防ぐゲイター付き。",
          link: "https://www.hoka.com/",
          status: "決定"
        },
        {
          name: "ランニングウェア",
          brand: null,
          model: null,
          image: "/images/equipments/shirt.jpg",
          description: "UVカット機能と速乾性を備えた軽量シャツ。砂漠の強い日差しから身を守るものを選定予定。",
          link: null,
          status: "検討中"
        },
        {
          name: "サングラス",
          brand: null,
          model: null,
          image: "/images/equipments/sunglasses.jpg",
          description: "砂漠の強い日差しと砂から目を保護するためのスポーツサングラス。",
          link: null,
          status: "検討中"
        }
      ]
    },
    {
      title: "食料と水",
      description: "7日間のレースを支える栄養補給",
      items: [
        {
          name: "フリーズドライ食品",
          brand: null,
          model: null,
          image: "/images/equipments/freezedried.jpg",
          description: "軽量で栄養価の高いフリーズドライ食品。お湯を注ぐだけで食べられるものを選定予定。",
          link: null,
          status: "検討中"
        },
        {
          name: "エナジージェル",
          brand: "GU Energy",
          model: "Energy Gel",
          image: "/images/equipments/energygel.jpg",
          description: "走行中のエネルギー補給用。素早く吸収される炭水化物を含む。",
          link: "https://guenergy.com/",
          status: "決定"
        },
        {
          name: "ソルトタブレット",
          brand: null,
          model: null,
          image: "/images/equipments/salttablets.jpg",
          description: "暑さによる発汗で失われる電解質を補給するためのタブレット。",
          link: null,
          status: "検討中"
        }
      ]
    }
  ];

  // 支援いただいた装備
  const supportedEquipments = [
    {
      title: "スポンサー提供装備",
      description: "企業・団体様からご支援いただいた装備品",
      items: [
        {
          name: "トレイルランニングシューズ",
          brand: "HOKA",
          model: "Speedgoat 5",
          image: "/images/equipments/sponsored-shoes.jpg",
          description: "株式会社〇〇様よりご提供いただいた砂漠走行用シューズ。",
          sponsor: "株式会社〇〇",
          sponsorLink: "https://example.com",
          status: "決定"
        },
        {
          name: "サプリメント",
          brand: null,
          model: null,
          image: "/images/equipments/sponsored-supplements.jpg",
          description: "長時間運動用サプリメントのスポンサーを募集中です。",
          sponsor: null,
          sponsorLink: null,
          status: "募集中"
        }
      ]
    },
    {
      title: "個人サポーター提供装備",
      description: "個人サポーターの方々からご支援いただいた装備品",
      items: [
        {
          name: "防水ポーチ",
          brand: null,
          model: null,
          image: "/images/equipments/sponsored-pouch.jpg",
          description: "貴重品保管用防水ポーチのサポーターを募集中です。",
          sponsor: null,
          sponsorLink: null,
          status: "募集中"
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">サハラマラソンの装備</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 text-center">
        サハラマラソンでは、7日間のレース中に必要な全ての装備を自分で背負って走ります。
        極限の環境で生き抜くための装備選びは、レース完走の鍵となります。
      </p>

      {/* タブ切り替え */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-6 py-3 text-lg font-medium rounded-l-lg ${
              activeTab === 'bringing'
                ? 'bg-yellow-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('bringing')}
          >
            持って行く装備
          </button>
          <button
            type="button"
            className={`px-6 py-3 text-lg font-medium rounded-r-lg ${
              activeTab === 'supported'
                ? 'bg-yellow-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('supported')}
          >
            支援いただいた装備
          </button>
        </div>
      </div>

      {/* 持って行く装備 */}
      {activeTab === 'bringing' && (
        <>
          {bringingEquipments.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-yellow-500">{category.title}</h2>
              <p className="text-gray-600 mb-8">{category.description}</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className={`absolute top-0 right-0 px-3 py-1 text-sm font-medium text-white ${
                        item.status === '決定' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}>
                        {item.status}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      {item.brand && item.model ? (
                        <p className="text-sm text-gray-500 mb-4">{item.brand} {item.model}</p>
                      ) : (
                        <p className="text-sm text-gray-500 mb-4">メーカー・モデル検討中</p>
                      )}
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      {item.link && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center"
                        >
                          詳細を見る
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-yellow-50 p-8 rounded-lg shadow-md max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-4 text-center">装備の総重量</h2>
            <p className="text-lg text-center mb-6">
              必須装備と食料を含めた総重量: <span className="font-bold text-yellow-700">約8kg（予定）</span>
            </p>
            <p className="text-gray-600">
              サハラマラソンのルールでは、食料、装備、個人的な持ち物を含めて全て自分で持ち運ぶ必要があります。
              水だけは主催者から支給され、チェックポイントで補給できます。
              装備の軽量化は重要ですが、安全性と機能性のバランスを考慮して選定しています。
            </p>
          </div>
        </>
      )}

      {/* 支援いただいた装備 */}
      {activeTab === 'supported' && (
        <>
          <div className="bg-yellow-50 p-8 rounded-lg shadow-md max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-4 text-center">装備サポートについて</h2>
            <p className="text-gray-600 mb-4">
              サハラマラソンの挑戦にあたり、多くの企業様や個人サポーターの方々から装備品のご支援をいただいています。
              皆様のご支援のおかげで、より安全に、より効率的にレースに挑むことができます。
            </p>
            <p className="text-gray-600">
              この場を借りて、心より感謝申し上げます。
            </p>
          </div>

          {supportedEquipments.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-yellow-500">{category.title}</h2>
              <p className="text-gray-600 mb-8">{category.description}</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className={`absolute top-0 right-0 px-3 py-1 text-sm font-medium text-white ${
                        item.status === '決定' ? 'bg-green-500' : 'bg-blue-500'
                      }`}>
                        {item.status}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      {item.brand && item.model ? (
                        <p className="text-sm text-gray-500 mb-4">{item.brand} {item.model}</p>
                      ) : (
                        <p className="text-sm text-gray-500 mb-4">メーカー・モデル未定</p>
                      )}
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      {item.sponsor ? (
                        <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
                          <span className="text-sm font-medium text-gray-500 mr-2">提供:</span>
                          {item.sponsorLink ? (
                            <a 
                              href={item.sponsorLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-yellow-600 hover:text-yellow-700 font-medium"
                            >
                              {item.sponsor}
                            </a>
                          ) : (
                            <span className="font-medium">{item.sponsor}</span>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
                          <span className="text-sm font-medium text-blue-600">スポンサー募集中</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-16">
            <h3 className="text-xl font-bold mb-6">装備サポートのお問い合わせ</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              サハラマラソンに必要な装備や道具のご提供も引き続き募集しております。
              ご協力いただける方は、下記のお問い合わせフォームよりご連絡ください。
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf6NUloIZWpsoxhZCU7_R3mDDTmwl5fdsMXFhEzHLvbRosALg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
            >
              装備サポートに関するお問い合わせ
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default EquipmentsPage; 
