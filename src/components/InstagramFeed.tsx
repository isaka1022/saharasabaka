import React from 'react';

const InstagramFeed: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">Instagram</h2>
        
        <div className="relative overflow-hidden pb-[100%] md:pb-[50%]">
          <iframe
            src="https://snapwidget.com/embed/1134183"
            className="snapwidget-widget absolute top-0 left-0 w-full h-full"
            allowTransparency={true}
            frameBorder="0"
            scrolling="no"
            style={{ border: 'none', overflow: 'hidden' }}
            title="Instagram Feed"
          ></iframe>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/saharasabaka/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="/images/common/r_instagram.png"
              alt="Instagram"
              className="w-12 h-12 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed; 
