import React from "react";
import insta from "../../assets/icon/instagram.png";
import twi from "../../assets/icon/twitter.png";
import git from "../../assets/icon/github.png";
import fb from "../../assets/icon/facebook.png";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <section className="mt-28 lg:w-full w-11/12 mx-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="col-span-1">
            <h6 className="font-bold text-xl mb-4">Get In Touch</h6>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="focus:outline-none bg-transparent flex items-center border-2 border-gray-300 rounded-md mb-2 py-2 px-4 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="focus:outline-none bg-transparent flex items-center border-2 border-gray-300 rounded-md mb-2 py-2 px-4 w-full"
              />
              <textarea
                className="focus:outline-none bg-transparent flex items-center border-2 border-gray-300 rounded-md mb-2 py-2 px-4 w-full"
                rows="4"
                required
                placeholder="Message"
              ></textarea>

              <button className="custom-btn btn-1 px-5 text-white font-bold rounded py-[9px]">
                Send Message
              </button>
            </form>
          </div>

          <div className="col-span-1">
            <div className="contact__info">
              <h6 className="font-bold text-xl mb-3">Contact Information</h6>
              <p className="section__description mb-0">
                1216 Mirpur-2, Dhaka, Bangladesh
              </p>
              <div className="flex items-center gap-2">
                <h6 className="text-sm mb-0">Phone:</h6>
                <p className="section__description mb-0">+088 01700 000021</p>
              </div>
              <div className="flex items-center gap-2">
                <h6 className="text-sm mb-0">Email:</h6>
                <p className="section__description mb-0">
                  touristportal21@gmail.com
                </p>
              </div>
              <h6 className="font-bold mt-4 mb-2">Follow Us</h6>
              <div className="flex gap-4">
                <img src={insta} alt="" className="w-6 h-6 cursor-pointer" />
                <img src={twi} alt="" className="w-6 h-6 cursor-pointer" />
                <img src={git} alt="" className="w-6 h-6 cursor-pointer" />
                <img src={fb} alt="" className="w-6 h-6 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
