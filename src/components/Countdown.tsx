import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const { t } = useTranslation();
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

export default Countdown; 
