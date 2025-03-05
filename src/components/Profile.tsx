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
                ソフトウェアエンジニア
              </p>
              <p className="mb-4">
                2023年の夏、友人に誘われてスペインのトマト祭り（ラ・トマティーナ）への参加がきっかけでサハラマラソンを知る。その後、どうしても大会のことを忘れることができず参加を決意。
              </p>
              <p>
                「やるからに徹底的に完走したい！」という思いで本番に向けて準備中。クラウドファンディングも実施し、たくさんの応援の気持ちを背負い走ります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
