import React from "react";
import banner from "../../../assets/hero.png";

const Banner = () => {
  return (
    <div className="fade-in">
      <img src={banner} alt="" className="w-full" />
    </div>
  );
};

export default Banner;







// import React from "react";
// import Slider from "react-slick";

// const Banner = () => {
//   const settings = {
//     dots: true,
//     infinite: true, 
//     speed: 500, 
//     autoplay: true, 
//     autoplaySpeed: 2000, 
//   };

//   return (
//     <div className="fade-in">
//       <Slider {...settings}>
//         <img className="w-full h-[500px]" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="" />
//         <img className="w-full h-[500px]" src="https://images.pexels.com/photos/15286/pexels-photo.jpg?cs=srgb&dl=pexels-luis-del-r%C3%ADo-15286.jpg&fm=jpg" alt="" />
//         <img className="w-full h-[500px]" src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg" alt="" />
//         <img className="w-full h-[500px]" src="https://images.pexels.com/photos/15286/pexels-photo.jpg?cs=srgb&dl=pexels-luis-del-r%C3%ADo-15286.jpg&fm=jpg" alt="" />
//     </Slider>
//     </div>
//   );
// };

// export default Banner;
