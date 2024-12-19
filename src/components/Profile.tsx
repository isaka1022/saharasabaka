import React from 'react';

const Profile: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">Profile</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/images/profile/amane.jpg"
              alt="井上周"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">井上 周（いのうえ あまね）</h3>
            
            <div className="text-base leading-relaxed">
              <p className="mb-4">
                群馬県出身。もともとゲームやパソコンが好きなインドアな性格で、あまり外に出るよりも家で一人でいるほうが好きな子供でした。
              </p>
              <p className="mb-4">
                大学では金沢へ行き電気電子系を専攻。現在は東京のスタートアップ企業に就職し、エンジニアとして働いています。
              </p>
              <p>
                「人との出会いを大切にする」ことを心がけ、小さな挑戦を積み重ねることで可能性を広げています。
                2023年の夏にスペインのトマト祭りに参加したことをきっかけに、サハラマラソンへの挑戦を決意。
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center">
                <span className="font-bold mr-2">座右の銘：</span>
                <span>一度きりの人生、頑張ってだめなこともある。それならば、いろいろな経験をしながら日々楽しく生きていこう</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile; 
