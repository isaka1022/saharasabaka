import React, { useState } from 'react';

type EquipmentStatus = '確定' | '仮決定' | '未定';

interface EquipmentItem {
  name: string;
  brand: string | null;
  model: string | null;
  image: string;
  description: string;
  link: string | null;
  status: EquipmentStatus;
  weight: number | null; // グラム単位
  price: number | null; // 円単位
}

interface SponsoredEquipmentItem extends EquipmentItem {
  sponsor: string | null;
  sponsorLink: string | null;
}

interface EquipmentCategory {
  title: string;
  description: string;
  items: EquipmentItem[];
}

interface SponsoredEquipmentCategory {
  title: string;
  description: string;
  items: SponsoredEquipmentItem[];
}

const getStatusColor = (status: EquipmentStatus): string => {
  switch (status) {
    case '確定':
      return 'bg-green-500';
    case '仮決定':
      return 'bg-yellow-500';
    case '未定':
      return 'bg-gray-500';
  }
};

const calculateTotalWeight = (items: EquipmentItem[]): number => {
  return items.reduce((sum, item) => sum + (item.weight || 0), 0);
};

const calculateTotalPrice = (items: EquipmentItem[]): number => {
  return items.reduce((sum, item) => sum + (item.price || 0), 0);
};

const calculateTotalCategoryWeight = (categories: EquipmentCategory[]): number => {
  return categories.reduce((sum, category) => sum + calculateTotalWeight(category.items), 0);
};

const calculateTotalCategoryPrice = (categories: EquipmentCategory[]): number => {
  return categories.reduce((sum, category) => sum + calculateTotalPrice(category.items), 0);
};

const EquipmentsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bringing' | 'supported'>('bringing');

  // 持って行く装備
  const bringingEquipments: EquipmentCategory[] = [
    {
      title: "必須装備",
      description: "サハラマラソンの規定で必ず持参が必要な装備",
      items: [
        // ... existing code ...
      ]
    },
    {
      title: "ランニング装備",
      description: "砂漠での走行に適した特殊なランニング装備",
      items: [
        // ... existing code ...
      ]
    },
    {
      title: "食料と水",
      description: "7日間のレースを支える栄養補給",
      items: [
        // ... existing code ...
      ]
    }
  ];

  // 支援いただいた装備
  const supportedEquipments: SponsoredEquipmentCategory[] = [
    {
      title: "スポンサー提供装備",
      description: "企業・団体様からご支援いただいた装備品",
      items: [
        // ... existing code ...
      ]
    },
    {
      title: "個人サポーター提供装備",
      description: "個人サポーターの方々からご支援いただいた装備品",
      items: [
        // ... existing code ...
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8">
        <p className="text-yellow-700">
          <span className="font-bold">※ 装備リスト更新中：</span>
          現在、装備リストを随時更新しています。重量や価格、リンク等の情報は変更される可能性があります。
        </p>
      </div>

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
                  <div key={itemIndex} className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                    {item.link && (
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                        aria-label={`${item.name}の詳細を見る`}
                      />
                    )}
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className={`absolute top-0 right-0 px-3 py-1 text-sm font-medium text-white ${
                        getStatusColor(item.status)
                      }`}>
                        {item.status}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors">{item.name}</h3>
                      {item.brand && item.model ? (
                        <p className="text-sm text-gray-500 mb-4">{item.brand} {item.model}</p>
                      ) : (
                        <p className="text-sm text-gray-500 mb-4">メーカー・モデル検討中</p>
                      )}
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex flex-col space-y-2 text-sm text-gray-500">
                        {item.weight && (
                          <p>重さ: {item.weight}g</p>
                        )}
                        {item.price && (
                          <p>参考価格: ¥{item.price.toLocaleString()}</p>
                        )}
                      </div>
                      {item.link && (
                        <div className="mt-4 inline-flex items-center text-yellow-600 group-hover:text-yellow-700 font-medium">
                          詳細を見る
                          <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
                  <div key={itemIndex} className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                    {item.sponsorLink && (
                      <a 
                        href={item.sponsorLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                        aria-label={`${item.name}のスポンサー詳細を見る`}
                      />
                    )}
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className={`absolute top-0 right-0 px-3 py-1 text-sm font-medium text-white ${
                        getStatusColor(item.status)
                      }`}>
                        {item.status}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors">{item.name}</h3>
                      {item.brand && item.model ? (
                        <p className="text-sm text-gray-500 mb-4">{item.brand} {item.model}</p>
                      ) : (
                        <p className="text-sm text-gray-500 mb-4">メーカー・モデル未定</p>
                      )}
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      {item.sponsor ? (
                        <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
                          <span className="text-sm font-medium text-gray-500 mr-2">提供:</span>
                          <span className="font-medium group-hover:text-yellow-600 transition-colors">{item.sponsor}</span>
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
