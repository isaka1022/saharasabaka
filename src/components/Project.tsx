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
              2024年3月「世界一過酷」とまでいわれるサハラマラソンへの挑戦を決めました。
              そこから1年をかけて準備をし、2025年4月に挑戦、完走を目指します。
              いきなりサハラを走るなんて、「バカ」とも思えるこの取り組みを「サハラサバカ」と名付けました。
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

        {/* ソーシャルメディアリンク */}
        <div className="bg-white rounded-2xl p-10 shadow-lg mt-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">大会情報の確認方法</h3>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            その他のリアルタイム情報
大会期間中のリアルタイム情報の確認方法については、現在調整中です。 詳細が決まり次第、このページでお知らせいたします。
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4">公式ソーシャルメディア</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="https://www.facebook.com/HALFMARATHONDESSABLES/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/marathondessables/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://x.com/marathonDsables"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X (Twitter)
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4">有志による情報発信</h4>
              <div className="space-y-4">
                <a
                  href="https://www.facebook.com/sandonnee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  サンドネ（Facebookページ）
                </a>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-yellow-800 mb-2">その他のリアルタイム情報</h5>
                  <p className="text-gray-600">
                    大会期間中のリアルタイム情報の確認方法については、現在調整中です。
                    詳細が決まり次第、このページでお知らせいたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 大会スケジュール */}
        <div className="bg-white rounded-2xl p-10 shadow-lg mt-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">2025年大会スケジュール</h3>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* 4月2-3日 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4">4月2-3日：モロッコ到着</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">到着オプション</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>オプション1：マラケシュ到着（シャトルバス利用可能）</li>
                    <li>オプション2：ワルザザート到着（各自でホテルまで移動）</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4月4日 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4">4月4日：ビバークへの移動</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">午前</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>7:30集合、8:00出発</li>
                    <li>集合場所：Karam Palace、Berbère Palace、または空港から選択可能</li>
                    <li>ロードブック、ランチ、水の配布</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">移動</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>移動時間：約6時間</li>
                    <li>途中で休憩あり</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">ビバーク到着後</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>テント割り当て</li>
                    <li>自給自足生活開始</li>
                    <li>ウェルカムブリーフィング参加</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4月5日 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4">4月5日：テクニカルチェック</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">朝</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>自給自足での朝食</li>
                    <li>5リットルの水の配布</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">テクニカルチェック</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>スタッフがテントに来訪</li>
                    <li>必須装備のチェック</li>
                    <li>パスポートと書類確認</li>
                    <li>バッグの重量チェック（6.5kg〜15kg）</li>
                    <li>医療証明書とECGの確認</li>
                    <li>GPSビーコンの受け取り</li>
                    <li>ゼッケンの受け取り</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">レース説明</h5>
                  <p className="text-gray-600">
                    6つのステージに関する説明とレースのアドバイスを含むブリーフィング
                  </p>
                </div>
              </div>
            </div>

            {/* 4月6-12日 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4">4月6-12日：レース期間</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">チェックポイント（CP）情報</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>約7-12km間隔で設置</li>
                    <li>給水ポイント</li>
                    <li>日陰での休憩エリア</li>
                    <li>医療支援</li>
                    <li>今年から首元にの氷水をかけられる（医療チーム提供）</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">給水について</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>最低必要容量：1.5リットル</li>
                    <li>CPでは2リットルの水筒で給水可能</li>
                    <li>ステージ終了時に5リットルの水を支給</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4月12-14日 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4">4月12-14日：レース終了後</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">4月12日</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>ワルザザートへの移動（約6時間）</li>
                    <li>ホテルチェックイン</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">4月13日</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>フィニッシャーTシャツの配布</li>
                    <li>MDSストアでの買い物</li>
                    <li>表彰式とガラディナー</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">4月14日</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>マラケシュへの移動（約4時間）</li>
                    <li>空港または市内中心部での下車</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 重要な準備情報 */}
        {showPreparationInfo && (
          <div className="bg-white rounded-2xl p-10 shadow-lg mt-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">重要な準備情報</h3>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="space-y-8">

              {/* ビバーク（キャンプ）生活 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-4">ビバーク（キャンプ）生活について</h4>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    滞在中は伝説的なMDSビバークで過ごします。8人用のベルベルテントで他の参加者と共同生活を送ります。
                    テントが満員でない場合、主催者側で再配置が行われる可能性があります。
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-yellow-800 mb-2">自給自足について</h5>
                    <p className="text-gray-600">
                      食料は自己調達が基本となります。最初の5リットルの水は主催者から支給され、飲料用と調理用に使用できます。
                      ステージ開始前の数日間はカロリー制限はありませんので、自由に食事を管理できます。
                    </p>
                  </div>
                </div>
              </div>

              {/* 重要な装備情報 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-4">注意事項</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2">コンソメについて</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>14個のコンソメキューブが必須装備</li>
                      <li>推奨使用量：1日2個以上</li>
                      <li>使用方法：
                        <ul className="list-disc list-inside ml-4">
                          <li>夜：お湯で溶かしてスープとして（2個を大きめのカップ1杯の水で）</li>
                          <li>日中：水筒に入れて（2個を500mlの水で）</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2">医療・健康面の注意</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>自己投薬には十分注意が必要</li>
                      <li>イブプロフェンやケトプロフェンなどの非ステロイド性抗炎症薬（NSAIDs）は避ける</li>
                      <li>痛み止めが必要な場合は、パラセタモールやドリプランを推奨</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2">その他の注意点</h5>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>靴擦れ防止にコンピードを予防的に使用しない</li>
                      <li>摩擦が起こりやすい部分の除毛は避ける</li>
                      <li>装備は可能な限り軽量化を心がける</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* トイレ情報 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-4">トイレについて</h4>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    ビバークには遊牧民式トイレが設置されます：
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>テント式</li>
                    <li>穴付きの便座</li>
                    <li>生分解性コーン粒袋を使用</li>
                    <li>男女別のトイレが用意され、チェックポイントにも設置</li>
                    <li>トイレットペーパーやウェットティッシュは各自で用意が必要</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project; 
