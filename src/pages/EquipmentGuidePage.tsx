import React from 'react';
import { AffiliateLink } from '../components/AffiliateLink';

const EquipmentGuidePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">サハラマラソン装備選びの完全ガイド</h1>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8">
        <p className="text-yellow-700">
          <span className="font-bold">このガイドについて：</span>
          実際にサハラマラソンに挑戦する過程で学んだ装備選びのノウハウをまとめました。
          初めて砂漠マラソンに挑戦する方の参考になれば幸いです。
        </p>
      </div>

      {/* 装備選びの基本原則 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-yellow-500">装備選びの3つの原則</h2>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-yellow-600">1. 軽量性を最優先</h3>
            <p className="text-gray-700 leading-relaxed">
              サハラマラソンでは全ての装備を背負って250kmを走ります。
              1gの重量差が体への負担に直結するため、可能な限り軽量な装備を選ぶことが重要です。
              目安として、全装備の総重量は6.5kg〜8kg程度に抑えるのが理想的です。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-yellow-600">2. 信頼性と耐久性</h3>
            <p className="text-gray-700 leading-relaxed">
              極限環境で7日間使用するため、装備の故障は致命的です。
              特にシューズ、バックパック、寝袋などの主要装備は、
              実績のあるブランドの信頼性の高いモデルを選ぶことをお勧めします。
              事前に十分なトレーニングで試用し、問題がないか確認しましょう。
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-3 text-yellow-600">3. 多機能性よりシンプルさ</h3>
            <p className="text-gray-700 leading-relaxed">
              多機能な装備は魅力的に見えますが、砂漠では故障のリスクも高まります。
              できるだけシンプルで壊れにくい装備を選び、
              本当に必要な機能だけを持つものを選択しましょう。
            </p>
          </div>
        </div>
      </section>

      {/* カテゴリ別おすすめ装備 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-yellow-500">カテゴリ別おすすめ装備</h2>

        {/* シューズ */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">トレイルランニングシューズ</h3>
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <p className="text-gray-700 mb-4 leading-relaxed">
              シューズ選びは最も重要です。砂漠の不安定な地形に対応できるトレイルランニングシューズを選びましょう。
              ポイントは、適度なクッション性、優れたグリップ力、そして砂が入りにくい構造です。
            </p>

            <div className="border-t pt-4">
              <h4 className="font-bold mb-2">おすすめモデル</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <img
                    src="/images/equipments/shoes_merrell_agilitypeak5.jpg"
                    alt="MERRELL AGILITY PEAK 5"
                    className="w-32 h-32 object-contain"
                  />
                  <div className="flex-1">
                    <h5 className="font-bold text-lg mb-2">MERRELL AGILITY PEAK 5</h5>
                    <p className="text-sm text-gray-600 mb-3">
                      安定性とグリップ力に優れたトレイルランニングシューズ。
                      不安定な砂地でも足をしっかりサポートしてくれます。
                    </p>
                    <AffiliateLink
                      href="https://amzn.to/41PSH43"
                      productName="MERRELL AGILITY PEAK 5"
                      type="equipment"
                      className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                      Amazonで見る
                    </AffiliateLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* バックパック */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">バックパック</h3>
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <p className="text-gray-700 mb-4 leading-relaxed">
              バックパックは軽量性と耐久性のバランスが重要です。
              容量は20〜30L程度が目安。通気性の良いメッシュバックパネルがあると快適性が向上します。
            </p>

            <div className="border-t pt-4">
              <h4 className="font-bold mb-2">おすすめモデル</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <img
                    src="/images/equipments/backpack_omm_phantom25.webp"
                    alt="OMM Phantom 25"
                    className="w-32 h-32 object-contain"
                  />
                  <div className="flex-1">
                    <h5 className="font-bold text-lg mb-2">OMM Phantom 25</h5>
                    <p className="text-sm text-gray-600 mb-3">
                      わずか505gの超軽量バックパック。
                      シンプルな構造で信頼性が高く、長時間の使用でも快適です。
                    </p>
                    <AffiliateLink
                      href="https://theomm.jp/products/phantom-25"
                      productName="OMM Phantom 25"
                      type="equipment"
                      className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                      公式サイトで見る
                    </AffiliateLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 寝袋 */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-4">寝袋（シュラフ）</h3>
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <p className="text-gray-700 mb-4 leading-relaxed">
              砂漠の夜は予想以上に冷え込みます（0〜5℃程度）。
              軽量ながら保温性の高いダウンシュラフがおすすめです。
              コンフォート温度が5℃以下のものを選びましょう。
            </p>

            <div className="border-t pt-4">
              <h4 className="font-bold mb-2">おすすめモデル</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <img
                    src="/images/equipments/sleepingbag_montbell_downhugger.jpg"
                    alt="モンベル シームレス ダウンハガー800 #3"
                    className="w-32 h-32 object-contain"
                  />
                  <div className="flex-1">
                    <h5 className="font-bold text-lg mb-2">モンベル シームレス ダウンハガー800 #3</h5>
                    <p className="text-sm text-gray-600 mb-3">
                      わずか531gで快適温度0℃の高性能ダウンシュラフ。
                      コンパクトに収納でき、復元力も優れています。
                    </p>
                    <AffiliateLink
                      href="https://webshop.montbell.jp/goods/disp.php?product_id=1121401"
                      productName="モンベル ダウンハガー800 #3"
                      type="equipment"
                      className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                      モンベル公式で見る
                    </AffiliateLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 装備の軽量化テクニック */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-yellow-500">装備の軽量化テクニック</h2>

        <div className="bg-white rounded-lg shadow-md p-6">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl">✓</span>
              <div>
                <strong className="text-gray-800">歯ブラシの柄を切る：</strong>
                <span className="text-gray-600">10〜15g軽量化できます</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl">✓</span>
              <div>
                <strong className="text-gray-800">タグやラベルを取り除く：</strong>
                <span className="text-gray-600">数グラムでも積み重なれば大きな差に</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl">✓</span>
              <div>
                <strong className="text-gray-800">小分け用のジップロックを最小限に：</strong>
                <span className="text-gray-600">必要最小限のサイズを選ぶ</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl">✓</span>
              <div>
                <strong className="text-gray-800">マルチユース可能な装備を優先：</strong>
                <span className="text-gray-600">1つで複数の用途に使えるものを選ぶ</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* まとめ */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-yellow-500">まとめ</h2>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            サハラマラソンの装備選びは、軽量性・信頼性・シンプルさのバランスが重要です。
            自分の体力や経験に合わせて、慎重に選択しましょう。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            何より大切なのは、本番前に十分なトレーニングで装備を試用し、
            自分に合っているか確認することです。
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold">
            このガイドが、皆さんのサハラマラソン挑戦の一助になれば幸いです。
          </p>
        </div>
      </section>

      {/* 関連リンク */}
      <section>
        <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-yellow-500">関連ページ</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="/equipments"
            className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-lg mb-2 text-yellow-600">装備一覧</h3>
            <p className="text-gray-600 text-sm">実際に持って行く装備の詳細リスト</p>
          </a>

          <a
            href="/race"
            className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold text-lg mb-2 text-yellow-600">レース情報</h3>
            <p className="text-gray-600 text-sm">サハラマラソンの詳細情報</p>
          </a>
        </div>
      </section>
    </div>
  );
};

export default EquipmentGuidePage;
