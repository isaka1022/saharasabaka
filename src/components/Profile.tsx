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
              src="/images/profile-photo.jpg"
              alt="井上周"
              className="w-3/4 mx-auto h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">井上 周（いのうえ あまね）</h3>
            <div className="text-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                群馬県出身。ソフトウェアエンジニア。
              </p>
              <p className="mb-4">
                小学生時代からゲームやパソコンに興味を持ち、大学・大学院で情報工学を専攻。その後東京のスタートアップ企業に就職エンジニアとして就職。
              </p>
              <p>
                2023年の夏にスペインのトマト祭りに参加したことをきっかけにサハラマラソンに興味を持ち、翌年3月に参加を決意。
                マラソン未経験から完走を目指し1年かけて準備中。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
