import React from "react";
import img from "../../assets/blogban.jpg";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="relative">
      <img src={img} alt="" className="w-full" />
      <div className="absolute banner  w-full lg:h-full h-full bottom-0">
        <div class="grid grid-cols-6 gap-4 w-11/12 mx-auto mt-12">
          <div class="col-start-2 col-span-4 bg-slate-200 text-center">
            <p>author image</p>
            <p>author name</p>
            <p>details</p>
          </div>

          <div class="col-start-1 col-end-3 bg-slate-200 text-center">
            <p>author image</p>
            <p>author name</p>
            <p>details</p>
          </div>

          <div className="col-start-3 col-end-5 bg-slate-200 text-center">
            <p>Images Slider</p>
          </div>

          <div class="col-end-7 col-span-2 bg-slate-200 text-center">
            <p>author image</p>
            <p>author name</p>
            <p>details</p>
          </div>

          <div class="col-start-2 col-end-4 bg-slate-200 text-center">
            <p>author image</p>
            <p>author name</p>
            <p>details</p>
          </div>
          <div class="col-start-4 col-end-6 bg-slate-200 text-center">
            <p>author image</p>
            <p>author name</p>
            <p>details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
