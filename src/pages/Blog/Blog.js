import React from "react";
import "./Blog.css";
import banner from "../../assets/blog.jpg";
import taj from "../../assets/tajmahal.jpg";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import user4 from "../../assets/user4.jpg";
import user5 from "../../assets/user5.jpg";
import Slider from "react-slick";
import Footer from "../../components/Footer/Footer";

const coustomer = [
  {
    img: user1,
    name: "Tony Stack",
    title: "Customer",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni explicabo molestias recusandae repudiandae, dolor, sapiente placeatab, animi eum minima nulla facere aliquam aut vitae quo pariatur voluptate odit.",
  },
  {
    img: user2,
    name: "Mosraful",
    title: "Customer",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni explicabo molestias recusandae repudiandae, dolor, sapiente placeatab, animi eum minima nulla facere aliquam aut vitae quo pariatur voluptate odit.",
  },
  {
    img: user3,
    name: "Bruce Banner",
    title: "Customer",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni explicabo molestias recusandae repudiandae, dolor, sapiente placeatab, animi eum minima nulla facere aliquam aut vitae quo pariatur voluptate odit.",
  },
  {
    img: user4,
    name: "Peter Parker",
    title: "Customer",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni explicabo molestias recusandae repudiandae, dolor, sapiente placeatab, animi eum minima nulla facere aliquam aut vitae quo pariatur voluptate odit.",
  },
  {
    img: user5,
    name: "Habib",
    title: "Customer",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni explicabo molestias recusandae repudiandae, dolor, sapiente placeatab, animi eum minima nulla facere aliquam aut vitae quo pariatur voluptate odit.",
  },
];

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="fade-in relative">
        <img src={banner} alt="" className="w-full" />
        <div className="absolute banner flex flex-col items-center justify-center text-center w-full lg:h-full h-full bottom-0">
          <h1 className="lg:text-4xl md:text-2xl text-lg font-bold font text-white mb-2">
            Blogs
          </h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 my-20 max-w-7xl mx-auto p-2">
        <div className="">
          <img src={taj} alt="" />
        </div>
        <div className="">
          <h1 className="text-xl font-semibold mb-2">Tajmahal</h1>
          <p>
            The Taj Mahal is located on the right bank of the Yamuna River in a
            vast Mughal garden that encompasses nearly 17 hectares, in the Agra
            District in Uttar Pradesh. It was built by Mughal Emperor Shah Jahan
            in memory of his wife Mumtaz Mahal with construction starting in
            1632 AD and completed in 1648 AD, with the mosque, the guest house
            and the main gateway on the south, the outer courtyard and its
            cloisters were added subsequently and completed in 1653 AD. The
            existence of several historical and Quaranic inscriptions in Arabic
            script have facilitated setting the chronology of Taj Mahal.
          </p>
          <br />
          <p>
            The Taj Mahal is considered to be the greatest architectural
            achievement in the whole range of Indo-Islamic architecture. Its
            recognised architectonic beauty has a rhythmic combination of solids
            and voids, concave and convex and light shadow; such as arches and
            domes further increases the aesthetic aspect. The colour combination
            of lush green scape reddish pathway and blue sky over it show cases
            the monument in ever changing tints and moods.
          </p>
        </div>
      </div>

      <div className="sliderPart">
        <p className="lg:text-4xl text-3xl text-gray-950 text-center lg:mb-10 mb-5">
          <span className="border-b-2 border-gray-500 rounded-lg">
            Tourist <span className="font-bold">Review</span>
          </span>
        </p>
        <div className="my-12">
          <Slider {...settings}>
            {coustomer.map((user, index) => (
              <div className="py-4 px-3" key={index}>
                <p className="">{user.post}</p>

                <div className="mt-3 flex gap-4">
                  <img src={user.img} alt="" className="w-16 h-16 rounded" />

                  <div>
                    <h6 className="mb-0 mt-3 font-semibold">{user.name}</h6>
                    <p className="text-sm">{user.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Blog;
