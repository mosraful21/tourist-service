import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import img1 from "../../assets/Destination1.png";
import img2 from "../../assets/Destination2.png";
import img3 from "../../assets/Destination3.png";
import img4 from "../../assets/Destination4.png";
import img5 from "../../assets/Destination5.png";
import img6 from "../../assets/Destination6.png";
import img7 from "../../assets/blog2.jpg";
import img8 from "../../assets/blog3.jpg";

const SwiperSlider = () => {
  return (
    <Swiper
      effect={"cards"}
      modules={[EffectCards]}
      className="mySwiper w-3/5 lg:h-96"
    >
      <SwiperSlide>
        <img src={img1} alt="" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt="" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img6} alt="" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img7} alt="" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img8} alt="" className="w-full" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperSlider;
