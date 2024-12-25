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
            <YouTubeEmbed videoId="1VmMQglcQaQ" title="最新の活動動画" />
          </div>
          <div className="text-center">
            <a
              href="https://www.youtube.com/@saharasabaka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
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
