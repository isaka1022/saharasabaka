import React from 'react';

const Supporters: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          <span className="inline-block border-b-4 border-yellow-500 pb-2">SUPPORT</span>
        </h2>
        
        {/* クラウドファンディングセクション */}
        <div className="mb-20">
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
                サハラへの挑戦の様子を見て���なにか自分もやってみようかな」と思える人が少しでも増えるように、
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

        {/* スポンサー募集セクション */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">スポンサー募集</h3>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              サハラマラソンへの挑戦をサポートしていただけるスポンサーを募集しています。
              企業様、個人様問わず、ご支援いただける方は下記よりお問い合わせください。
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
              >
                スポンサーに関するお問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supporters; 
