import React, { useRef, useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center text-white text-2xl md:text-3xl font-bold">
      <div className="text-center">
        <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">{timeLeft.days}</div>
        <div className="text-sm mt-1">DAYS</div>
      </div>
      <div className="text-center">
        <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">{timeLeft.hours}</div>
        <div className="text-sm mt-1">HOURS</div>
      </div>
      <div className="text-center">
        <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">{timeLeft.minutes}</div>
        <div className="text-sm mt-1">MINUTES</div>
      </div>
      <div className="text-center">
        <div className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">{timeLeft.seconds}</div>
        <div className="text-sm mt-1">SECONDS</div>
      </div>
    </div>
  );
};

const MainVisual: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const targetDate = new Date('2025-04-04T00:00:00+09:00');

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
            src="/images/top/sahara_main.jpg"
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
        <source src="./videos/main-visual.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
        <div className="text-center text-white px-4 mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            走る理由は、走れば見つかる
          </h1>
          <p className="text-xl md:text-2xl">
            エンジニアはなぜ、サハラ砂漠を走るのか
          </p>
        </div>
        <div className="mt-8">
          <p className="text-white text-lg mb-4">サハラマラソン 2025まで</p>
          <Countdown targetDate={targetDate} />
        </div>
      </div>
    </div>
  );
}

export default MainVisual; 
