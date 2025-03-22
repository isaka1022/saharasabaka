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
                ソフトウェアエンジニア
              </p>
              <p className="mb-4">
               長距離走未経験から、2025年サハラマラソン完了に向けて挑戦中
              </p>
            </div>
          </div>
        </div>

        {showFullStory && (
          <div className="bg-sand-light rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">なぜサハラを走るのか</h3>
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              <p className="mb-6">
                大学時代、ある人から<span className="font-bold">「人生には2つの生き方がある」</span>と教わりました。
                <br />
                目標に向かって突き進む人生と、出会いの中で自分の道を見つけていく「夢にも思わなかった」人生。
                <br />
                私は後者の道が面白そうだと思い、それから人との出会いを大切にしてきました。
              </p>
              <p className="mb-6">
                そんな中、2023年の夏。友人から「スペインのトマト祭りに行かない？」というお誘いを「行きます！」と回答。
                <br />
                そこで出会ったのが、<span className="font-bold">サハラマラソンの経験者たち</span>でした。
                <br />
                砂漠の過酷さ、満天の星空、仲間との絆...。
                <br />
                初めて耳にするサハラマラソンの体験談、私は少し心惹かれました。
              </p>
        
                <>
                  <p className="mb-6">
                    「3年後くらいに挑戦しよう」と考えていた私に、ある過去参加者が言いました。
                    <br />
                    <span className="font-bold">「今できることを後回しにしたらだめだ。人生に『いつか』という保証はない」</span>と。
                    <br />
                    その瞬間、これは人生の分岐点だと直感しました。サハラを走る人生と、走らない人生。
                    <br />
                    そして、これこそが「夢にも思わない人生」なのではないか、と。
                    <br />
                    <span className="font-bold">僕は、サハラを走る人生を選びました。</span>
                  </p>
                  <p className="mb-6">
                    はじめは無謀であり「バカ」とも思われたこの挑戦。
                    <br />
                    しかし、いろいろな人のご支援のおかげもあり、形になりつつあります。
                    <br />
                    そして今、この挑戦には新たな意味が加わりました。
                    <br />
                    <span className="font-bold">何者でもない私でも、一歩を踏み出すことが大きな結果につながることがある。</span>
                    <br />
                    この挑戦が、誰かの「一歩を踏み出す勇気」になれば。
                    <br />
                    それが、私がサハラを走るもう一つの理由です。
                  </p>
                </>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
