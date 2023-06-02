import React from 'react';

const Blog = () => {
    return (
        <div className="max-w-5xl mx-auto grid grid-cols-12 gap-6 p-6">
        <div className="testimonial col-span-6 row-span-1 bg-purple-500 p-6 rounded-lg">
          <div className="profile-info flex items-center text-sm">
            <img
              src="https://6476867bca65513195636a27--gorgeous-dolphin-b58832.netlify.app/images/image-daniel.jpg"
              alt="danial pfp"
              className="w-8 h-8 rounded-full mr-4"
            />
            <div className="profile-text">
              <h2 className="name text-white">Daniel Clifford</h2>
              <p className="text-gray-300">Verified Graduate</p>
            </div>
          </div>
          <div className="testimonial-text">
            <h3 className="text-white text-lg font-semibold mb-4">
              I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.
            </h3>
            <p className="text-gray-300">
              "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup."
            </p>
          </div>
        </div>
  
        {/* Repeat the above structure for other testimonials */}
      </div>
    );
};

export default Blog;