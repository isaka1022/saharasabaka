import React from 'react';
import MainVisual from '../components/MainVisual';
import Project from '../components/Project';
import InstagramFeed from '../components/InstagramFeed';
import Profile from '../components/Profile';
import Supporters from '../components/Sponsors';
import YouTubeEmbed from '../components/YouTubeEmbed';

const HomePage: React.FC = () => {
  return (
    <main>
      <MainVisual />
      <Project />
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            <span className="inline-block border-b-4 border-red-500 pb-2">YOUTUBE</span>
          </h2>
          <div className="mb-8">
            <YouTubeEmbed videoId="your-latest-video-id" title="最新の活動動画" />
          </div>
          <div className="text-center">
            <a
              href="https://www.youtube.com/@saharasabaka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
            >
              <img
                src="/images/common/r_youtube.png"
                alt="YouTube"
                className="w-6 h-6"
              />
              <span>チャンネルを見る</span>
            </a>
          </div>
        </div>
      </section>
      <InstagramFeed />
      <Profile />
      <Supporters />
    </main>
  );
};

export default HomePage; 
