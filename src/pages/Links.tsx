import React from 'react';

const Links: React.FC = () => {
  const referenceLinks = [
    {
      title: 'Marathon des Sables 公式サイト',
      url: 'https://marathondessables.com/',
      description: 'サハラマラソンの公式サイト。大会情報や参加要件などが確認できます。',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-12">リンク集</h1>

      <section>
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-orange-500">参考サイト</h2>
        <div className="grid grid-cols-1 gap-4">
          {referenceLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
              <p className="text-gray-600">{link.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Links; 
