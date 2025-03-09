import React, { useState } from 'react';

type EquipmentStatus = '確定' | '仮決定' | '未定';

interface EquipmentItem {
  name: string;
  brand: string | null;
  model: string | null;
  image: string | null;
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
        {
          name: "リュック",
          brand: "omm",
          model: "ファントム25",
          image: "/images/equipments/backpack_omm_phantom25.webp",
          description: "軽量で機能的なバックパック。レース中の装備収納用。",
          link: "https://theomm.jp/products/phantom-25",
          status: "確定" as const,
          weight: 505,
          price: null
        },
        {
          name: "ストック",
          brand: "モンベル",
          model: "アルパイン フォールディングポール 130",
          image: "/images/equipments/poles_montbell_alpine.jpg",
          description: "砂漠での歩行・走行をサポートする折りたたみ式ポール。",
          link: "https://webshop.montbell.jp/goods/disp.php?product_id=1140267",
          status: "確定" as const,
          weight: 234,
          price: null
        },
        {
          name: "ドリンクボトル",
          brand: "raidlight",
          model: "ハードフラスクボトル(750ml)",
          image: "/images/equipments/bottle_raidlight_hardflask.webp",
          description: "耐久性のある軽量ボトル。水分補給用。2本必要。",
          link: "https://raidlight.jp/?pid=178400116",
          status: "確定" as const,
          weight: 180,
          price: null
        },
        {
          name: "ヘッドライト",
          brand: "Gentos",
          model: "DRF-233D",
          image: "/images/equipments/headlight_gentos_drf233d.jpg",
          description: "夜間走行や夜のキャンプで使用。",
          link: "https://www.gentos.jp/products/series/drf/drf-233d/",
          status: "確定" as const,
          weight: 207,
          price: null
        },
        {
          name: "バッテリー",
          brand: null,
          model: null,
          image: "/images/equipments/battery.jpg",
          description: "ヘッドライト用予備バッテリー。",
          link: null,
          status: "未定" as const,
          weight: 50,
          price: null
        },
        {
          name: "シュラフ",
          brand: "モンベル",
          model: "シームレス ダウンハガー800 #3",
          image: "/images/equipments/sleepingbag_montbell_downhugger.jpg",
          description: "夜間の砂漠の寒さから身を守るための超軽量寝袋。",
          link: "https://webshop.montbell.jp/goods/disp.php?product_id=1121401",
          status: "確定" as const,
          weight: 531,
          price: null
        },
        {
          name: "ダウンジャケット",
          brand: "ユニクロ",
          model: "ウルトラライトダウン",
          image: "/images/equipments/downjacket_uniqlo_ultralight.webp",
          description: "夜間の保温用の軽量ダウンジャケット。",
          link: "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/product/ultra-light-down-jacket/",
          status: "確定" as const,
          weight: 220,
          price: 7000
        },
        {
          name: "靴下",
          brand: null,
          model: "ドライマックス ライト・トレイル・ラン (1/4Crew)",
          image: "/images/equipments/socks_drymax_trailrun.webp",
          description: "速乾性と耐久性を備えたトレイルランニング用靴下。",
          link: "https://amzn.to/3DAs89F",
          status: "確定" as const,
          weight: 34,
          price: 2400
        },
        {
          name: "枕",
          brand: "SEA TO SUMMIT",
          model: "エアロウルトラライトピロー (レギュラー)",
          image: "/images/equipments/pillow_seatosummit_aero.jpg",
          description: "超軽量の空気枕。快適な睡眠のために必須。",
          link: "https://amzn.to/3QSxXSZ",
          status: "確定" as const,
          weight: 60,
          price: 5170
        },
        {
          name: "エマージェンシーキット",
          brand: null,
          model: null,
          image: "/images/equipments/emergency_kit.jpg",
          description: "安全ピン、コンパス、シグナルミラー、サバイバルシート、消毒液、ライター、ナイフ、ハサミ、ホイッスル、テーピング等を含む緊急用キット。",
          link: null,
          status: "未定" as const,
          weight: 300,
          price: 8000
        },
        {
          name: "皮膚保護クリーム",
          brand: null,
          model: "プロテクト J1",
          image: "/images/equipments/cream_protect_j1.jpg",
          description: "砂漠での皮膚保護用クリーム。",
          link: "https://amzn.to/3FflRRl",
          status: "確定" as const,
          weight: 45,
          price: 1540
        },
        {
          name: "日焼け止め",
          brand: null,
          model: "Top Athlete Sun Protect Fighter",
          image: "/images/equipments/sunscreen.jpg",
          description: "強い日差しからの保護用日焼け止め。",
          link: "https://amzn.to/4iboodP",
          status: "確定" as const,
          weight: 62,
          price: 4070
        },
        {
          name: "カトラリー",
          brand: null,
          model: null,
          image: "/images/equipments/fork.jpg",
          description: "食事用の軽量カトラリー。",
          link: null,
          status: "未定" as const,
          weight: null,
          price: null
        },
        {
          name: "カメラ",
          brand: "insta360",
          model: "X4",
          image: "/images/equipments/camera_insta360_x4_main.jpg",
          description: "記録用カメラ、予備バッテリー、自撮り棒付き。8K 360度撮影対応、防水機能搭載。",
          link: "https://amzn.to/4iyOhEf",
          status: "未定" as const,
          weight: null,
          price: 79800
        }
      ]
    },
    {
      title: "ランニング装備",
      description: "砂漠での走行に適した特殊なランニング装備",
      items: [
        {
          name: "シューズ",
          brand: "MERRELL",
          model: "AGILITY PEAK 5",
          image: "/images/equipments/shoes_merrell_agilitypeak5.jpg",
          description: "砂漠の不安定な地形でも安定して走れるトレイルランニングシューズ。",
          link: "https://amzn.to/41PSH43",
          status: "確定" as const,
          weight: null,
          price: 19800
        },
        {
          name: "Tシャツ",
          brand: null,
          model: null,
          image: "/images/equipments/shirt_montrail_tech.jpg",
          description: "UVカット機能と速乾性を備えた軽量シャツ。",
          link: null,
          status: "未定" as const,
          weight: null,
          price: null
        },
        {
          name: "ハーフパンツ",
          brand: null,
          model: null,
          image: "/images/equipments/shorts_nike_trail.jpg",
          description: "軽量で動きやすいトレイルランニング用パンツ。",
          link: null,
          status: "未定" as const,
          weight: null,
          price: null
        },
        {
          name: "アームカバー",
          brand: "コロンビア",
          model: "フリーザーゼロ",
          image: "/images/equipments/armcover_columbia_freezer.jpg",
          description: "日焼け対策と体温調整用のアームカバー。",
          link: null,
          status: "仮決定" as const,
          weight: 60,
          price: 3000
        },
        {
          name: "タイツ",
          brand: "ドン・キホーテ",
          model: null,
          image: "/images/equipments/tights_donki.jpg",
          description: "夜間の保温用タイツ。",
          link: null,
          status: "仮決定" as const,
          weight: 180,
          price: 2000
        },
        {
          name: "下着（上）",
          brand: "finetrack",
          model: "ドライレイヤークールノースリーブ",
          image: "/images/equipments/underwear_top_finetrack.jpg",
          description: "速乾性の高い機能性アンダーウェア。",
          link: null,
          status: "確定" as const,
          weight: 80,
          price: 4000
        },
        {
          name: "下着（下）",
          brand: "finetrack",
          model: "ドライレイヤークールボクサー",
          image: "/images/equipments/underwear_bottom_finetrack.jpg",
          description: "速乾性の高い機能性アンダーウェア。",
          link: null,
          status: "確定" as const,
          weight: 70,
          price: 3500
        },
        {
          name: "歯ブラシ",
          brand: "GLEAVI",
          model: "刑務所の歯ブラシ",
          image: "/images/equipments/toothbrush_gleavi.jpg",
          description: "コンパクトな歯ブラシ。",
          link: null,
          status: "確定" as const,
          weight: null,
          price: 1250
        }
      ]
    },
    {
      title: "食料と水",
      description: "7日間のレースを支える栄養補給",
      items: [
        {
          name: "ソルトタブレット",
          brand: "Soorb",
          model: "TOOTH TABLET",
          image: "/images/equipments/salt_tablets.jpg",
          description: "電解質補給用のソルトタブレット。",
          link: null,
          status: "確定" as const,
          weight: null,
          price: 1980
        },
        {
          name: "カトラリー",
          brand: null,
          model: null,
          image: "/images/equipments/fork.jpg",
          description: "食事用の軽量カトラリー。",
          link: null,
          status: "未定" as const,
          weight: null,
          price: null
        },
        {
          name: "洗濯洗剤",
          brand: null,
          model: null,
          image: "/images/equipments/detergent_travel.jpg",
          description: "ウェアの洗濯用洗剤。",
          link: null,
          status: "未定" as const,
          weight: 50,
          price: 500
        },
        {
          name: "コンソメ",
          brand: "味の素",
          model: "KKコンソメ 固形30個入パウチ",
          image: "/images/equipments/consomme_stock.jpg",
          description: "栄養補給用のコンソメ。",
          link: "https://amzn.to/3XFhC7Z",
          status: "未定" as const,
          weight: null,
          price: 405
        }
      ]
    }
  ];

  // 支援いただいた装備
  const supportedEquipments: SponsoredEquipmentCategory[] = [
    {
      title: "スポンサー提供装備",
      description: "企業・団体様からご支援いただいた装備品",
      items: [
        {
          name: "トレイルランニングシューズ",
          brand: null,
          model: null,
          image: "/images/equipments/shoes_hoka_speedgoat5.jpg",
          description: "砂漠走行用シューズのスポンサーを募集中です。",
          sponsor: null,
          sponsorLink: null,
          status: "未定" as const,
          link: null,
          weight: null,
          price: null
        },
        {
          name: "サプリメント",
          brand: null,
          model: null,
          image: "/images/equipments/supplements_endurance.jpg",
          description: "長時間運動用サプリメントのスポンサーを募集中です。",
          sponsor: null,
          sponsorLink: null,
          status: "未定" as const,
          link: null,
          weight: null,
          price: null
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
          image: "/images/equipments/pouch_waterproof.jpg",
          description: "貴重品保管用防水ポーチのサポーターを募集中です。",
          sponsor: null,
          sponsorLink: null,
          status: "未定" as const,
          link: null,
          weight: null,
          price: null
        }
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
            <section key={categoryIndex} className="mb-16">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-yellow-500">{category.title}</h2>
              <p className="text-gray-600 mb-8">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
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
                    <div className="flex flex-row items-start p-4 sm:p-6">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 relative bg-gray-50 rounded-lg overflow-hidden">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.parentElement?.querySelector('.fallback-image')?.classList.remove('hidden');
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-gray-400 text-center">
                              <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <p className="font-medium text-xs">NO IMAGE</p>
                            </div>
                          </div>
                        )}
                        <div className="fallback-image hidden w-full h-full flex items-center justify-center">
                          <div className="text-gray-400 text-center">
                            <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="font-medium text-xs">NO IMAGE</p>
                          </div>
                        </div>
                        <div className={`absolute top-0 right-0 px-2 py-1 text-xs font-medium text-white ${
                          getStatusColor(item.status)
                        }`}>
                          {item.status}
                        </div>
                      </div>
                      <div className="flex-grow ml-4 sm:ml-6">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors">{item.name}</h3>
                        {item.brand && item.model ? (
                          <p className="text-xs sm:text-sm text-gray-500 mb-2">{item.brand} {item.model}</p>
                        ) : (
                          <p className="text-xs sm:text-sm text-gray-500 mb-2">メーカー・モデル検討中</p>
                        )}
                        <p className="text-sm sm:text-base text-gray-600 mb-2">{item.description}</p>
                        <div className="flex flex-col space-y-1 text-xs sm:text-sm text-gray-500">
                          {item.weight && (
                            <p>重さ: {item.weight}g</p>
                          )}
                          {item.price && (
                            <p>参考価格: ¥{item.price.toLocaleString()}</p>
                          )}
                        </div>
                        {item.link && (
                          <div className="mt-2 inline-flex items-center text-yellow-600 group-hover:text-yellow-700 font-medium">
                            詳細を見る
                            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </>
      )}

      {/* 支援いただいた装備 */}
      {activeTab === 'supported' && (
        <>
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-yellow-500">装備サポートについて</h2>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
              <p className="text-gray-600 mb-4">
                サハラマラソンの挑戦にあたり、多くの企業様や個人サポーターの方々から装備品のご支援をいただいています。
                皆様のご支援のおかげで、より安全に、より効率的にレースに挑むことができます。
              </p>
              <p className="text-gray-600">
                この場を借りて、心より感謝申し上げます。
              </p>
            </div>
          </section>

          {supportedEquipments.map((category, categoryIndex) => (
            <section key={categoryIndex} className="mb-16">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-yellow-500">{category.title}</h2>
              <p className="text-gray-600 mb-8">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
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
                    <div className="flex flex-row items-start p-4 sm:p-6">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 relative bg-gray-50 rounded-lg overflow-hidden">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.parentElement?.querySelector('.fallback-image')?.classList.remove('hidden');
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-gray-400 text-center">
                              <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <p className="font-medium text-xs">NO IMAGE</p>
                            </div>
                          </div>
                        )}
                        <div className="fallback-image hidden w-full h-full flex items-center justify-center">
                          <div className="text-gray-400 text-center">
                            <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <p className="font-medium text-xs">NO IMAGE</p>
                          </div>
                        </div>
                        <div className={`absolute top-0 right-0 px-2 py-1 text-xs font-medium text-white ${
                          getStatusColor(item.status)
                        }`}>
                          {item.status}
                        </div>
                      </div>
                      <div className="flex-grow ml-4 sm:ml-6">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors">{item.name}</h3>
                        {item.brand && item.model ? (
                          <p className="text-xs sm:text-sm text-gray-500 mb-2">{item.brand} {item.model}</p>
                        ) : (
                          <p className="text-xs sm:text-sm text-gray-500 mb-2">メーカー・モデル未定</p>
                        )}
                        <p className="text-sm sm:text-base text-gray-600 mb-2">{item.description}</p>
                        {item.sponsor ? (
                          <div className="flex items-center mt-2 pt-2 border-t border-gray-200">
                            <span className="text-sm font-medium text-gray-500 mr-2">提供:</span>
                            <span className="font-medium group-hover:text-yellow-600 transition-colors">{item.sponsor}</span>
                          </div>
                        ) : (
                          <div className="flex items-center mt-2 pt-2 border-t border-gray-200">
                            <span className="text-sm font-medium text-blue-600">スポンサー募集中</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-yellow-500">装備サポートのお問い合わせ</h3>
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
          </section>
        </>
      )}
    </div>
  );
};

export default EquipmentsPage; 
