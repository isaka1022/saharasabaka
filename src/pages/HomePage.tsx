import React from 'react';
import MainVisual from '../components/MainVisual';
import Project from '../components/Project';
import InstagramFeed from '../components/InstagramFeed';
import Profile from '../components/Profile';
import Supporters from '../components/Sponsors';

const HomePage: React.FC = () => {
  return (
    <main>
      <MainVisual />
      <Project />
      <InstagramFeed />
      <Profile />
      <Supporters />
    </main>
  );
};

export default HomePage; 
