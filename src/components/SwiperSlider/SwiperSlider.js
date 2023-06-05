import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import img1 from "../../assets/blog1.jpg";
import img2 from "../../assets/blog6.jpg";
import img3 from "../../assets/natural1.jpg";
import img4 from "../../assets/blog2.jpg";
import img5 from "../../assets/natural2.jpg";
import img6 from "../../assets/natural3.jpg";
import img7 from "../../assets/natural4.jpg";
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
