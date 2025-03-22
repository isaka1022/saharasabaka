import React from 'react';

interface ProfileProps {
  showFullStory?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ showFullStory = false }) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          <span className="inline-block border-b-4 border-orange-500 pb-2">PROFILE</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <img
              src="/images/profile-photo.jpg"
              alt="井上周"
              className="w-3/4 mx-auto h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">井上 周（いのうえ あまね）</h3>
            <div className="text-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                1996年生まれのソフトウェアエンジニア。
              </p>
              <p className="mb-4">
               2024年にランニング未経験から、2025年のサハラマラソン完走に向けて挑戦中。
              </p>
            </div>
          </div>
        </div>

        {showFullStory && (
          <div className="bg-sand-light rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">なぜサハラを走るのか</h3>
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              <p className="mb-6">
                大学時代に<span className="font-bold">「人生には2つの生き方がある」</span>と教わりました。
                <br />
                目標に向かって突き進む人生と、出会いの中で自分の道を見つけていく「夢にも思わなかった」人生。
                <br />
                「夢にも思わなかった人生」を生きるためには、人のご縁を紡いでいく必要がある。
                <br />
                その話を聞いてから、人との出会い、一期一会を大切にしてきました。
              </p>
              <p className="mb-6">
                そして2023年の夏。友人からの「スペインのトマト祭りに行かない？」というお声がけに「行きます！」と回答したのが今回のプロジェクトのはじまりです。
                <br />
                スペインのトマト祭りで出会ったのが、<span className="font-bold">サハラマラソンの経験者たち</span>でした。
                <br />
                砂漠の過酷さ、満天の星空、仲間との絆...。
                <br />
                初めて耳にするサハラマラソンの体験談、私は少し心惹かれました。
              </p>
              <p className="mb-6">
                「でも、お金の準備や体力づくりが心配」「3年後くらいに挑戦しよう」と考えていた私に、経験者は言いました。
                <br />
                <span className="font-bold">「今できることを後回しにしたらだめだ。人生に『いつか』という保証はない」</span>と。
                <br />
                その言葉を聞いて、「やってみたいことは後回しにしてはいない。そして、今は人生の分岐点にいるのかもしれない」と思いました。
              </p>
              <p className="mb-6">
                サハラを走る人生と、走らない人生。
              </p>
              <p className="mb-6">
                これこそが「夢にも思わない人生」なのではないか、と。
                <br />
                <span className="font-bold">僕は、サハラを走る人生を選びました。</span>
              </p>
              <p className="mb-6">
                ランニングの大会等を未経験にしてのいきなりのサハラ砂漠への挑戦。はじめは無謀であり「バカ」とも思われましたが、いろいろな人のご支援のおかげでいま、形になりつつあります。
                <br />
              </p>
              <p className="mb-6">
                そして挑戦を続ける中で、新たな意味が加わりました。
                <br />
                <span className="font-bold">何者でもない私でも、一歩を踏み出すことで確実に積み上がるものがあり、その結果として大きな結果につながる。</span>
                <br />
                それが言えれば、この挑戦が誰かの「一歩を踏み出す勇気」になるかもしれない。
                <br />
                過去参加者が私の背中を教えてくれたように、私も誰かの背中を押すことができるようになれたなら...。
                <br />
                それが、私がサハラを走るもう一つの理由です。
              </p>
            </div>
            <div className="mt-8 text-center">
                <a 
                  href="https://camp-fire.jp/projects/776874/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-200"
                >
                  全文を読む（クラウドファンディングページに飛びます）
                </a>
              </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
