import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSection = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={() => {}}
      onSlideChange={() => {}}
    >
      <div>
        <SwiperSlide>
          <img
            className="h-96 mx-auto"
            src="https://i.ibb.co/cCJdxpL/microscope-kit.png"
            alt="microscpe"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-96 mx-auto"
            src="https://i.ibb.co/68rYBN8/acid-base.jpg"
            alt="acid_base"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-96 mx-auto"
            src="https://i.ibb.co/zPTMqXT/pendulum.jpg"
            alt="pendulum"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-96 mx-auto"
            src="https://i.ibb.co/QkG6d1T/doctor-playset.jpg"
            alt="doctor_playset"
          />
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default HeroSection;
