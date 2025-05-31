import React from 'react';

interface ProjectProps {
  showPreparationInfo?: boolean;
}

const Project: React.FC<ProjectProps> = ({ showPreparationInfo = false }) => {
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
              2024年3月に「世界一過酷」とまでいわれるサハラマラソンへの挑戦を決意しました。
              1年をかけて準備をし、2025年4月についに挑戦を果たし、見事完走を達成しました。
              いきなりサハラを走るなんて、「バカ」とも思えるこの取り組みを「サハラサバカ」と名付けて
              多くの方々に支えられながら夢を実現することができました。
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
              コース上約10kmごとに設置されたチェックポイントを頼りに、灼熱の砂漠を走りました。
            </p>

            <div className="relative mb-10 max-w-2xl mx-auto">
              <div className="absolute -inset-4 bg-orange-100 rounded-lg opacity-50 transform -rotate-3"></div>
              <img
                src="/images/sahara-hero.jpg"
                alt="サハラマラソンヒーロー"
                className="relative w-full h-auto object-cover rounded-lg shadow-lg"
              />
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

        {/* 完走体験談 */}
        <div className="bg-white rounded-2xl p-10 shadow-lg mt-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">完走体験談</h3>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-green-800 mb-4">挑戦の結果</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                2025年4月、ついにサハラマラソンに挑戦し、見事完走を果たしました。
                約250kmの過酷な砂漠での旅は、想像を超える困難との戦いでしたが、
                多くの学びと感動を得ることができました。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">最も困難だったこと</h5>
                  <p className="text-gray-600 text-sm">
                    灼熱の太陽、砂嵐、そして重い荷物を背負っての長距離移動。
                    特に3日目の長距離ステージは試練でした。
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">最も印象的だったこと</h5>
                  <p className="text-gray-600 text-sm">
                    砂漠の美しい夜空と、世界中から集まった参加者との交流。
                    困難を共有する仲間たちとの絆は一生の宝物です。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-blue-800 mb-4">支えてくださった皆様へ</h4>
              <p className="text-gray-700 leading-relaxed">
                この挑戦は一人では決して成し遂げることができませんでした。
                スポンサーの皆様、応援してくださった方々、家族や友人、
                そして準備期間中にサポートしてくださった全ての方々に心から感謝申し上げます。
                皆様の支えがあったからこそ、この夢を実現することができました。
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-orange-800 mb-4">今後について</h4>
              <p className="text-gray-700 leading-relaxed">
                サハラマラソンの完走は終わりではなく、新たなスタートです。
                この経験を通じて得た学びや感動を、多くの方々と共有していきたいと思います。
                また、次なる挑戦についても現在検討中です。
              </p>
            </div>
          </div>
        </div>

        {/* 大会記録・データ */}
        <div className="bg-white rounded-2xl p-10 shadow-lg mt-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">2025年大会記録</h3>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* 実際の体験データ */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4">実際の体験</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <h5 className="font-semibold text-gray-800 mb-2">総距離</h5>
                  <p className="text-2xl font-bold text-orange-500">約250km</p>
                  <p className="text-sm text-gray-600">6ステージで完走</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <h5 className="font-semibold text-gray-800 mb-2">期間</h5>
                  <p className="text-2xl font-bold text-orange-500">11日間</p>
                  <p className="text-sm text-gray-600">2025年4月4日-14日</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <h5 className="font-semibold text-gray-800 mb-2">荷物重量</h5>
                  <p className="text-2xl font-bold text-orange-500">約12kg</p>
                  <p className="text-sm text-gray-600">食料・装備一式</p>
                </div>
              </div>
            </div>

            {/* 各ステージの振り返り */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4">各ステージの振り返り</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-700 mb-2">ステージ1（約34km）</h5>
                  <p className="text-gray-600 text-sm">
                    レースの始まり。緊張と興奮の中でのスタート。砂漠の美しさに感動しながらも、
                    これから始まる長い旅への不安も感じました。
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-700 mb-2">ステージ2（約39km）</h5>
                  <p className="text-gray-600 text-sm">
                    砂丘での走行が本格化。足を取られる砂地に苦戦しましたが、
                    徐々に砂漠での走り方を覚えていきました。
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-700 mb-2">ステージ3（約86km）</h5>
                  <p className="text-gray-600 text-sm">
                    最も過酷な長距離ステージ。夜通し走り続ける体験は忘れられません。
                    星空の下での走行は苦しくも美しい思い出です。
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-700 mb-2">ステージ4-6</h5>
                  <p className="text-gray-600 text-sm">
                    疲労が蓄積する中でも、仲間との絆と応援の力で最後まで走り抜きました。
                    ゴールの瞬間は言葉では表せない感動でした。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 学んだこと・メッセージ */}
        {showPreparationInfo && (
          <div className="bg-white rounded-2xl p-10 shadow-lg mt-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">この挑戦から学んだこと</h3>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-4">準備の大切さ</h4>
                <p className="text-gray-600 leading-relaxed">
                  1年間の準備期間は決して無駄ではありませんでした。体力作り、装備の選定、
                  メンタルの準備など、すべてが本番で活かされました。
                  特に長距離走の練習と荷物を背負っての訓練は不可欠でした。
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-4">人とのつながりの力</h4>
                <p className="text-gray-600 leading-relaxed">
                  砂漠で出会った世界中の参加者たちとの交流は、この挑戦の最も価値ある部分でした。
                  言語や文化の違いを超えて、困難を共有し支え合う体験は人生を豊かにしてくれました。
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-4">限界への挑戦</h4>
                <p className="text-gray-600 leading-relaxed">
                  自分の限界だと思っていた境界線は、実は思い込みに過ぎませんでした。
                  適切な準備と強い意志があれば、人は想像以上のことを成し遂げられるということを
                  身をもって体験しました。
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-orange-800 mb-4">これから挑戦される方へ</h4>
                <p className="text-gray-700 leading-relaxed">
                  サハラマラソンは確かに過酷な挑戦ですが、適切な準備と強い意志があれば
                  必ず完走できます。大切なのは一歩一歩を積み重ねること、そして諦めないことです。
                  皆さんの挑戦を心から応援しています。
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project; 
