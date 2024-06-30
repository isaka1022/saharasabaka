import React from 'react';
import { ArrowRight, Sun, Moon, Wind, Bug, Footprints, Heart, DollarSign, Mail, Video, User, Building } from 'lucide-react';

// Navigation Component
const Navigation: React.FC = () => {
  const navItems = [
    { href: "#introduction", label: "自己紹介" },
    { href: "#about-sahara-marathon", label: "サハラマラソンとは" },
    { href: "#motivation", label: "挑戦理由" },
    { href: "#funding-and-returns", label: "資金とリターン" },
    { href: "#support", label: "応援方法" },
  ];

  return (
    <nav className="bg-desert-orange text-white py-4">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-oasis-blue transition-colors duration-200">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// Hero Section
const Hero: React.FC = () => (
  <section className="bg-oasis-blue text-white py-20">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">サハラの砂漠を走る夢</h1>
      <p className="text-xl md:text-2xl mb-8">世界最過酷なマラソンへの挑戦</p>
      <img src="/api/placeholder/800/400" alt="サハラ砂漠の風景" className="rounded-lg shadow-md mx-auto mb-8" />
      <a href="#support" className="bg-desert-orange hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition-colors duration-200">
        応援する
        <ArrowRight className="ml-2" />
      </a>
    </div>
  </section>
);

// Introduction Section
const Introduction: React.FC = () => (
  <section id="introduction" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-display font-bold mb-8 text-center">自己紹介</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <img src="/api/placeholder/300/300" alt="井上周の写真" className="rounded-full w-64 h-64 object-cover" />
        <div>
          <p className="text-lg mb-4">
            こんにちは！井上周と申します。高校生活までを群馬県で育ち、大学では金沢へ行き電気電子系を専攻しました。
            現在は都内のスタートアップでエンジニアとして働いています。
          </p>
          <p className="text-lg mb-4">
            もともとゲームやパソコンが好きなインドア派でしたが、大学不合格という挫折をきっかけに
            「一度死んだ気になってなんでもやる！」と決意し、人生が大きく変わりました。
          </p>
          <p className="text-lg">
            高校時代にラグビー部に所属していましたが、これまで砂漠に行ったこともフルマラソンですら走ったことがありません。
            今回のサハラマラソンへの挑戦は新しいことづくしで、不安もありますがワクワクしています。
          </p>
        </div>
      </div>
    </div>
  </section>
);

// About Sahara Marathon Section
const AboutSaharaMarathon: React.FC = () => (
  <section id="about-sahara-marathon" className="py-20 bg-sahara-sand">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-display font-bold mb-8 text-center">サハラマラソンとは</h2>
      <p className="text-lg mb-6">
        『Marathon Des Sables（通称: サハラマラソン）』は、毎年4月頃にモロッコのサハラ砂漠で開催される
        250kmを7日間で走る過酷なマラソンです。ランナーは全ての衣食住を背負って走るため、
        【世の中で最も過酷なレース】と言われています。
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Sun className="text-desert-orange mr-2" />
            <Moon className="text-oasis-blue mr-2" />
            <h3 className="text-xl font-bold">過酷な環境</h3>
          </div>
          <p>サハラ砂漠の厳しい気候条件での7日間のレース</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Footprints className="text-desert-orange mr-2" />
            <h3 className="text-xl font-bold">長距離走破</h3>
          </div>
          <p>250kmという長距離を7日間で走破</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Bug className="text-desert-orange mr-2" />
            <h3 className="text-xl font-bold">自給自足</h3>
          </div>
          <p>全ての衣食住を自身で背負いながらの走行</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Wind className="text-desert-orange mr-2" />
            <h3 className="text-xl font-bold">自然との闘い</h3>
          </div>
          <p>砂漠特有の自然環境との戦い</p>
        </div>
      </div>
    </div>
  </section>
);

// Motivation Section
const Motivation: React.FC = () => (
  <section id="motivation" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-display font-bold mb-8 text-center">サハラマラソンへの挑戦</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">サハラマラソンに出るきっかけ</h3>
          <p className="text-lg mb-4">
            2023年の夏、トマト祭りで出会った人がサハラマラソンの参加者でした。
            当初は「そんな過酷な土地を走るなんてよっぽどの変態しかできない」と思っていましたが、
            様々な人からサハラマラソンの話を聞くうちに考えが変わりました。
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>一度きりの人生で、サハラを走った人生の方が面白いのではないか</li>
            <li>「いつか」と思っていても、そのいつかは来ないかもしれない</li>
            <li>少しでも興味があるなら、すぐに行動しないと後悔する</li>
          </ul>
          <p className="text-lg mt-4">
            そして、2025年のエントリーが開始されたタイミングで参加を決意しました。
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">なぜサハラマラソンに出るのか</h3>
          <p className="text-lg mb-4">
            サハラマラソンへの参加を通じて、以下の2つのメッセージを伝えたいと考えています：
          </p>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            <li>「夢にも思わなかった人生がある」</li>
            <li>「挑戦の先に何が待っているか」</li>
          </ol>
          <p className="text-lg mt-4">
            特別な能力やバックグラウンドがなくても、挑戦する姿勢と人とのつながりによって
            思いもよらない機会や経験が得られることを、自身の経験を通じて伝えたいと思います。
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Funding and Returns Section
const FundingAndReturns: React.FC = () => {
  const individualPlans = [
    { icon: <Mail className="inline mr-2" />, title: "お礼のメール", price: 3000 },
    { icon: <Video className="inline mr-2" />, title: "お礼の動画メッセージ", price: 5000 },
    { icon: <User className="inline mr-2" />, title: "個人スポンサーBASIC", price: 10000 },
    { icon: <Heart className="inline mr-2" />, title: "個人スポンサーPLUS", price: 20000 },
  ];

  const corporatePlans = [
    { icon: <Building className="inline mr-2" />, title: "法人スポンサーBASIC", price: 50000 },
    { icon: <DollarSign className="inline mr-2" />, title: "法人スポンサーPLUS", price: 150000 },
  ];

  return (
    <section id="funding-and-returns" className="py-20 bg-sahara-sand">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-bold mb-8 text-center">資金の使い道とリターン</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">資金の使い道</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>マラソンエントリー費用：約60万円（3,740ユーロ）</li>
              <li>往復飛行機チケット（日本⇄モロッコ）：約30万円</li>
              <li>レース中の食料や装備：約20万円</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">リターン</h3>
            <h4 className="text-xl font-semibold mb-2">個人スポンサー</h4>
            <ul className="space-y-2 text-lg">
              {individualPlans.map((plan, index) => (
                <li key={index} className="flex items-center">
                  {plan.icon}
                  <span>{plan.title}：{plan.price.toLocaleString()}円</span>
                </li>
              ))}
            </ul>
            <h4 className="text-xl font-semibold mt-4 mb-2">法人スポンサー</h4>
            <ul className="space-y-2 text-lg">
              {corporatePlans.map((plan, index) => (
                <li key={index} className="flex items-center">
                  {plan.icon}
                  <span>{plan.title}：{plan.price.toLocaleString()}円</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Support Methods Section
const SupportMethods: React.FC = () => (
  <section id="support" className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-display font-bold mb-8">応援方法</h2>
      <p className="text-lg mb-6">
        皆様のご支援が、この壮大な挑戦を可能にします。
        以下の方法で応援していただけます：
      </p>
      <div className="flex justify-center space-x-4">
        <button className="bg-desert-orange hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
          資金援助
        </button>
        <button className="bg-oasis-blue hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
          応援メッセージ
        </button>
      </div>
    </div>
  </section>
);

// Footer Component
const Footer: React.FC = () => (
  <footer className="bg-desert-orange text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <p>&copy; 2024 井上周のサハラマラソン挑戦プロジェクト. All rights reserved.</p>
    </div>
  </footer>
);

// Main LandingPage Component
const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navigation />
      <Hero />
      <Introduction />
      <AboutSaharaMarathon />
      <Motivation />
      <FundingAndReturns />
      <SupportMethods />
      <Footer />
    </div>
  );
};

export default LandingPage;
