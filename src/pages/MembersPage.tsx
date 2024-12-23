import React from 'react';
import Members from '../components/Members';

const MembersPage: React.FC = () => {
  return (
    <main className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Members</h2>
        <div className="mb-12">
          <p className="text-center text-gray-700 max-w-2xl mx-auto">
            サハラマラソンへの挑戦をサポートするメンバーたち。
            それぞれが異なる経験と専門性を持ち、このプロジェクトに関わっています。
          </p>
        </div>
        <Members />
      </div>
    </main>
  );
};

export default MembersPage; 
