import React from 'react';

const MotivationSection: React.FC = () => {
  return (
    <section id="motivation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-bold mb-8 text-center">
          サハラマラソンへの挑戦
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-sand-light p-8 rounded-lg">
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
          </div>

          <div className="bg-sand-light p-8 rounded-lg">
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
};

export default MotivationSection; 
