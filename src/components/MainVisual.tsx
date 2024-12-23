import React, { useEffect, useRef, useState } from 'react';

const MainVisual: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        setIsVideoLoaded(true);
        video.play().catch(error => {
          console.error('Video playback failed:', error);
        });
      };

      const handleError = (e: Event) => {
        console.error('Video loading error:', e);
        setIsVideoLoaded(false);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {!isVideoLoaded && (
        <div className="absolute inset-0">
          <img
            src="/saharasabaka/images/top/sahara_main.jpg"
            alt="サハラマラソン"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src="/saharasabaka/videos/main-visual.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            小さな挑戦が、大きな挑戦につながる。
          </h1>
          <p className="text-xl md:text-2xl">
            だから、まずは一歩踏み出してみる。
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainVisual; 
