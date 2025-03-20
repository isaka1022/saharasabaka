import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  const timeUnits = [
    { value: timeLeft.days, label: 'DAYS' },
    { value: timeLeft.hours, label: 'HOURS' },
    { value: timeLeft.minutes, label: 'MINUTES' },
    { value: timeLeft.seconds, label: 'SECONDS' }
  ];

  return (
    <div className="flex gap-4 justify-center text-white">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="text-center">
          <div className="bg-black bg-opacity-50 px-4 py-3 rounded-lg backdrop-blur-sm text-2xl md:text-3xl font-bold min-w-[70px]">
            {unit.value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm mt-2 font-medium">{unit.label}</div>
        </div>
      ))}
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
      {/* 動画が読み込まれる前のプレースホルダー */}
      <div 
        className={`absolute inset-0 bg-sand-300 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        style={{ backgroundImage: 'url(/images/placeholder.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <source src="./videos/main-visual.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 flex flex-col items-center justify-center px-4">
        <div className="text-center text-white mb-8 sm:mb-10 animate-fade-in max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4 font-display text-shadow-lg">
            サハラサバカ
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 text-white/95 tracking-wider">
            - エンジニア、サハラを走る -
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light bg-black/30 inline-block px-4 sm:px-6 py-2 rounded-full backdrop-blur-sm">
            サハラマラソン2025への挑戦 | 2025.04.04 〜 2025.04.14
          </p>
        </div>
        
        <div className="mt-6 sm:mt-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-white text-base sm:text-lg mb-3 sm:mb-4 text-center font-medium uppercase tracking-widest">開始日まで</p>
          <Countdown targetDate={targetDate} />
        </div>
        
        <div className="mt-8 sm:mt-14 animate-fade-in flex flex-col sm:flex-row gap-4 items-center" style={{ animationDelay: '0.6s' }}>
          <Link 
            to="/project" 
            className="btn-primary shadow-glow text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transform transition-transform hover:scale-105 w-full sm:w-auto text-center"
          >
            プロジェクトについて
          </Link>
          <Link 
            to="/support" 
            className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transform transition-transform hover:scale-105 w-full sm:w-auto text-center"
          >
            応援する
          </Link>
        </div>
      </div>
      
      {/* スクロールダウン指示 */}
      <div className="absolute bottom-6 sm:bottom-8 w-full flex flex-col items-center justify-center text-white text-center animate-bounce">
        <p className="text-xs sm:text-sm mb-2 opacity-90 font-medium tracking-wider">スクロール</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}

export default MainVisual; 
