import React from 'react';
import Profile from '../components/Profile';

const ProfilePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">プロフィール</h1>
      <Profile />
    </div>
  );
};

export default ProfilePage; 
