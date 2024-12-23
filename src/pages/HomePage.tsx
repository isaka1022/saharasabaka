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
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">YouTube</h2>
          <div className="mb-8">
            <YouTubeEmbed videoId="your-latest-video-id" title="最新の活動動画" />
          </div>
          <div className="text-center">
            <a
              href="https://www.youtube.com/@saharasabaka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
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
