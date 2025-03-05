import React from 'react';

const EquipmentsPage: React.FC = () => {
  const equipmentCategories = [
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
          link: "https://www.waa-ultra.com/en/ultra-carrier-shirt/37-ultra-carrier-shirt-30.html"
        },
        {
          name: "寝袋",
          brand: "Mountain Hardwear",
          model: "Phantom 30F/-1C",
          image: "/images/equipments/sleepingbag.jpg",
          description: "夜間の砂漠の寒さから身を守るための超軽量寝袋。最小限の重量で十分な保温性能を確保。",
          link: "https://www.mountainhardwear.com/"
        },
        {
          name: "ヘッドランプ",
          brand: "PETZL",
          model: "SWIFT RL",
          image: "/images/equipments/headlamp.jpg",
          description: "夜間走行や夜のキャンプで使用。充電式で明るさ調整可能。",
          link: "https://www.petzl.com/INT/en/Sport/PERFORMANCE-headlamps/SWIFT-RL"
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
          link: "https://www.hoka.com/"
        },
        {
          name: "ランニングウェア",
          brand: "Salomon",
          model: "S/LAB SENSE TEE",
          image: "/images/equipments/shirt.jpg",
          description: "UVカット機能と速乾性を備えた軽量シャツ。砂漠の強い日差しから身を守る。",
          link: "https://www.salomon.com/"
        },
        {
          name: "サングラス",
          brand: "Oakley",
          model: "Radar EV Path",
          image: "/images/equipments/sunglasses.jpg",
          description: "砂漠の強い日差しと砂から目を保護するためのスポーツサングラス。",
          link: "https://www.oakley.com/"
        }
      ]
    },
    {
      title: "食料と水",
      description: "7日間のレースを支える栄養補給",
      items: [
        {
          name: "フリーズドライ食品",
          brand: "Mountain House",
          model: "Various",
          image: "/images/equipments/freezedried.jpg",
          description: "軽量で栄養価の高いフリーズドライ食品。お湯を注ぐだけで食べられる。",
          link: "https://mountainhouse.com/"
        },
        {
          name: "エナジージェル",
          brand: "GU Energy",
          model: "Energy Gel",
          image: "/images/equipments/energygel.jpg",
          description: "走行中のエネルギー補給用。素早く吸収される炭水化物を含む。",
          link: "https://guenergy.com/"
        },
        {
          name: "ソルトタブレット",
          brand: "SaltStick",
          model: "Caps",
          image: "/images/equipments/salttablets.jpg",
          description: "暑さによる発汗で失われる電解質を補給するためのタブレット。",
          link: "https://saltstick.com/"
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

      {equipmentCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-16">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-yellow-500">{category.title}</h2>
          <p className="text-gray-600 mb-8">{category.description}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{item.brand} {item.model}</p>
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
          必須装備と食料を含めた総重量: <span className="font-bold text-yellow-700">約8kg</span>
        </p>
        <p className="text-gray-600">
          サハラマラソンのルールでは、食料、装備、個人的な持ち物を含めて全て自分で持ち運ぶ必要があります。
          水だけは主催者から支給され、チェックポイントで補給できます。
          装備の軽量化は重要ですが、安全性と機能性のバランスを考慮して選定しています。
        </p>
      </div>
    </div>
  );
};

export default EquipmentsPage; 
