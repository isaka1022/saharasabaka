import React from 'react';

const Profile: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          <span className="inline-block border-b-4 border-orange-500 pb-2">PROFILE</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/images/profile/amane.jpg"
              alt="井上周"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">井上 周（いのうえ あまね）</h3>
            <div className="text-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                群馬県出身。もともとゲームやパソコンが好きなインドアな性格で、あまり外に出るよりも家で一人でいるほうが好きな子供でした。
                そんな私が、なぜサハラ砂漠を走ることを決意したのか。その理由は、人それぞれの「メイソウ」の過程にあります。
              </p>
              <p className="mb-4">
                大学では金沢へ行き電気電子系を専攻。現在は東京のスタートアップ企業に就職し、エンジニアとして働いています。
                一見、論理的な職業に見えるエンジニアですが、実は日々の開発の中でも多くの「メイソウ」があります。
              </p>
              <p>
                2023年の夏にスペインのトマト祭りに参加し、そこでサハラマラソンの参加者と出会ったことが、
                この挑戦のきっかけとなりました。突拍子もない選択に見えるかもしれませんが、
                そこには確かな理由があります。その過程を、100日間かけて共有していきます。
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-6 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <span className="font-bold text-gray-800 mr-2">座右の銘：</span>
                <span className="text-gray-600">迷うことは生きること。立ち止まることは前に進むこと。</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile; 
