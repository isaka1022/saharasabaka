import React from 'react';
import Supporters from '../components/Sponsors';

const SupportPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">サポートのお願い</h1>
      <Supporters />
    </div>
  );
};

export default SupportPage; 
