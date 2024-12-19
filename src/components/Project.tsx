import React, { useState } from 'react';

const Project: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">Project</h2>
        
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">サハラマラソン2025</h3>
          <p className="text-lg mb-4">250kmを走り切るチャレンジ</p>
        </div>

        <div className="text-base leading-relaxed mb-8">
          <p className="mb-4">
            僕はこのたび「小さな挑戦が、大きな挑戦につながる。だから、まずは一歩踏み出してみる。」というメッセージを込めて、
            2025年に開催のサハラマラソンにエントリーし、250kmを走り切るチャレンジをします！
          </p>

          <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[2000px]' : 'max-h-0'}`}>
            <p className="mb-4">
              『Marathon Des Sables（通称: サハラマラソン）』とは毎年4月ごろにモロッコのサハラ砂漠で開催されている250kmを走るマラソンです。
              レースの期間は7日間。ランナーはレースで使う全ての衣食住を背負って走るため【世の中で最も過酷なレース】と言われています。
            </p>
            <p className="mb-4">
              しかも走るのは、サハラ砂漠。日中の最高気温は50℃を超えることもあり、起伏も多い厳しい環境です。
            </p>
            <p className="mb-4">
              「一度きりの人生で、せっかくこの地球で生まれたのだから、サハラを走った人生とそうでない人生のどちらが良い？」
              この言葉が、僕の中でサハラマラソンチャレンジを決めました。
            </p>
            <p className="mb-4">
              かつての僕のような、一歩踏み出せないという人はたくさんいると思います。
              そしてその人達は実は大きな可能性を秘めているはずです。
            </p>
            <p className="mb-4">
              そんな人たちへ向けて「大丈夫、一歩踏み出してみれば、サハラですら走りきれる。だから、まずは小さな挑戦をしてみよう。」
              それが今回僕がサハラを走ることを通じて伝えたいメッセージです。
            </p>
            <p className="text-right">井上 周</p>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="block mx-auto mt-4 px-6 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >
            {isExpanded ? '閉じる' : 'READ MORE'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project; 
