import React from 'react';
import Members from '../components/Members';

const MembersPage: React.FC = () => {
  return (
    <main className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Members</h2>
        <div className="mb-12">
          <p className="text-center text-gray-700 max-w-2xl mx-auto">
            「面白そう！まずは走ってみよう！」という気持ちで一緒に2025年のサハラマラソンに挑戦する人たちです。
          </p>
        </div>
        <Members />
      </div>
    </main>
  );
};

export default MembersPage; 
