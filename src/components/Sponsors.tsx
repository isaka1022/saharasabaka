import React from 'react';

const Supporters: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          <span className="inline-block border-b-4 border-yellow-500 pb-2">SUPPORT</span>
        </h2>

        {/* スポンサー募集セクション */}
        <div className="mb-32">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">スポンサー募集</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
              サハラマラソンへの挑戦をサポートしていただけるスポンサーを募集しています。
              企業様、個人様問わず、以下のプランからご支援いただけます。（「ブレインナビオン」の決済システムを利用しています。）
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* 個人スポンサープラン */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-gray-800 mb-4">個人スポンサープラン</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://brainnavi-online.com/set/5602"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium">メッセージプラン</span>
                        <span className="text-yellow-700">5,000円</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        御礼のメッセージを送らせていただきます。
                      </p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brainnavi-online.com/set/5603"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium">ビデオレター受取プラン</span>
                        <span className="text-yellow-700">10,000円</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        サハラ砂漠から御礼のビデオメッセージをお送りします。
                      </p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brainnavi-online.com/set/5604"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium">懇親会プラン</span>
                        <span className="text-yellow-700">20,000円</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        サハラ砂漠から御礼のビデオメッセージをお送りします。<br />
                        2025年5月以降開催で予定の成果報告会にご招待させていたいだきます。
                      </p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brainnavi-online.com/set/5605"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium">活動報告まとめプラン</span>
                        <span className="text-yellow-700">30,000円</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        サハラ砂漠から御礼のビデオメッセージをお送りします。<br />
                        活動報告をPDFとしてお送りさせていただきます。
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* 企業スポンサープラン */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-gray-800 mb-4">企業スポンサープラン</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://brainnavi-online.com/set/5606"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium">ビデオスポンサー</span>
                        <span className="text-yellow-700">20,000円</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        御礼ビデオメッセージのクレジット表記させていただきます（クレジット名は指定可能）
                      </p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brainnavi-online.com/set/5607"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium">サイトスポンサー</span>
                        <span className="text-yellow-700">30,000円</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        プロジェクトサイトに支援者のお名前を掲載させていただきます<br />
                        <a href="https://saharasabaka.com" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700">
                          https://saharasabaka.com
                        </a>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brainnavi-online.com/set/5607"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium">サイトスポンサー（ロゴ）</span>
                        <span className="text-yellow-700">50,000円</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        プロジェクトサイトスポンサーページに ロゴまたはリンクの掲載をさせていただきます<br />
                        <a href="https://saharasabaka.com" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700">
                          https://saharasabaka.com
                        </a>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://brainnavi-online.com/set/5607"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium">ウェアスポンサー</span>
                        <span className="text-yellow-700">100,000円</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        当日着用ウェアのいずれかにロゴを掲載させていただきます。
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf6NUloIZWpsoxhZCU7_R3mDDTmwl5fdsMXFhEzHLvbRosALg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
              >
                スポンサーに関するお問い合わせ
              </a>
            </div>
          </div>
        </div>
        
        {/* クラウドファンディングセクション */}
        <div className="mb-32">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">クラウドファンディング</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="w-full">
              <img
                src="/images/crowd-funding.png"
                alt="クラウドファンディングの様子"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
            
            <div className="text-left">
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                サハラへの挑戦の様子を見て「なにか自分もやってみようかな」と思える人が少しでも増えるように、
                そして支援の輪が広がるように、クラウドファンディングを実施します。
              </p>
              <p className="text-lg font-semibold text-red-600 mb-4">
                ※クラウドファンディングは終了いたしました。たくさんのご支援ありがとうございました。
              </p>
              <div className="mt-6">
                <a
                  href="https://camp-fire.jp/projects/776874/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  <span>クラウドファンディング実績を見る</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* スポンサーロゴセクション */}
        <div className="mb-32">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">スポンサー企業</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 items-center max-w-3xl mx-auto">
            <div className="w-full flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/sponsors/01_mybest.svg"
                alt="株式会社マイベスト"
                className="w-full h-auto max-h-24 object-contain"
              />
            </div>
            <div className="w-full flex justify-center items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/images/sponsors/02_yamatojk.svg"
                alt="ヤマト住建株式会社"
                className="w-full h-auto max-h-24 object-contain"
              />
            </div>
          </div>
        </div>

        {/* 個人スポンサーセクション */}
        <div className="mb-32">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">個人スポンサー</h3>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-yellow-50 rounded-full px-6 py-2 text-yellow-800 font-medium hover:bg-yellow-100 transition-colors">
                  naopr
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 物資提供セクション */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">物資提供</h3>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-lg text-gray-600 leading-relaxed mb-6 text-center">
                サハラマラソンに必要な物資のご提供も募集しております。<br />
                ご提供いただける方は、下記のお問い合わせフォームよりご連絡ください。
              </p>
              <div className="flex justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf6NUloIZWpsoxhZCU7_R3mDDTmwl5fdsMXFhEzHLvbRosALg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
                >
                  物資提供に関するお問い合わせ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supporters; 
