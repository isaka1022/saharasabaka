import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const MainVisual: React.FC = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        loop
        className="w-full"
      >
        <SwiperSlide>
          <div className="relative h-[600px]">
            <img
              src="/images/top/sahara_main.jpg"
              alt="サハラマラソン"
              className="w-full h-full object-cover"
            />
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[600px]">
            <img
              src="/images/top/tomato_festival.jpg"
              alt="トマト祭り"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <p className="text-2xl md:text-3xl">
                  人との出会いを大切に、次へ繋げる
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainVisual; 
