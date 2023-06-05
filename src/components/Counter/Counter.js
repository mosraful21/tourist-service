import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [countLoaded, setCountLoaded] = useState(false);
  const countRefs = useRef([]);

  const isVisible = (element) => {
    const { top, bottom } = element.getBoundingClientRect();
    const viewHeight = window.innerHeight;
    const threshold = viewHeight * 0.8;
    return top - threshold < viewHeight && bottom > 0;
  };

  const animateCount = () => {
    if (countLoaded) return;

    const countElements = countRefs.current;
    if (!countElements || countElements.length === 0) return;

    let allVisible = true;
    countElements.forEach((element) => {
      if (!isVisible(element)) {
        allVisible = false;
        return;
      }

      if (!element.classList.contains("counter-loaded")) {
        const targetValue = parseInt(element.dataset.value, 10);
        let currentCount = 0;
        const increment = Math.ceil(targetValue / 100);
        const duration = 100 / increment;

        const timer = setInterval(() => {
          currentCount += increment;
          if (currentCount >= targetValue) {
            element.innerText = targetValue;
            element.classList.add("counter-loaded");
            clearInterval(timer);
          } else {
            element.innerText = currentCount;
          }
        }, duration);
      }
    });

    if (allVisible) {
      setCountLoaded(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animateCount);
    return () => {
      window.removeEventListener("scroll", animateCount);
    };
  });

  return (
    <div className="my-5">
      <h1 className="lg:text-5xl text-3xl font-semibold text-orange-600 text-center lg:mb-12 mb-3">
        Division Serve
      </h1>
      <div className="container w-max-[1170px] lg:flex justify-center items-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8 px-2">
          <div className="flex flex-col justify-center items-center border-2 border-zinc-600 lg:ml-[70px] w-full lg:w-72 h-52  lg:h-72 border-dashed rounded-full">
            <p
              ref={(el) => (countRefs.current[0] = el)}
              data-value="12"
              className="text-5xl font-bold"
            >
              0
            </p>
            <p className="text-2xl font-semibold">Rangpur</p>
          </div>
          <div className="flex flex-col justify-center items-center border-2 border-zinc-600 lg:ml-[10px]  w-full lg:w-72 h-52  lg:h-72 border-dashed rounded-full">
            <p
              ref={(el) => (countRefs.current[1] = el)}
              data-value="15"
              className="text-5xl font-bold"
            >
              0
            </p>
            <p className="text-2xl font-semibold">Rajshahi</p>
          </div>
          <div className="flex flex-col justify-center items-center border-2 border-zinc-600 lg:ml-[-50px] w-full lg:w-72 h-52  lg:h-72 border-dashed rounded-full">
            <p
              ref={(el) => (countRefs.current[2] = el)}
              data-value="102"
              className="text-5xl font-bold"
            >
              0
            </p>
            <p className="text-2xl font-semibold">Dhaka</p>
          </div>
          <div className="flex flex-col justify-center items-center border-2 border-zinc-600 w-full lg:ml-[-110px] lg:w-72 h-52  lg:h-72 border-dashed rounded-full">
            <p
              ref={(el) => (countRefs.current[3] = el)}
              data-value="20"
              className="text-5xl font-bold"
            >
              0
            </p>
            <p className="text-2xl font-semibold">Barishal</p>
          </div>
          <div className="flex flex-col justify-center items-center border-2 border-zinc-600 lg:ml-[190px] lg:mt-[-100px] w-full lg:w-72 h-52  lg:h-72 border-dashed rounded-full">
            <p
              ref={(el) => (countRefs.current[4] = el)}
              data-value="25"
              className="text-5xl font-bold"
            >
              0
            </p>
            <p className="text-2xl font-semibold">Khulna</p>
          </div>
          <div className="flex flex-col justify-center items-center border-2 border-zinc-600 lg:ml-[130px] lg:mt-[-100px] w-full lg:w-72 h-52  lg:h-72 border-dashed rounded-full">
            <p
              ref={(el) => (countRefs.current[5] = el)}
              data-value="21"
              className="text-5xl font-bold"
            >
              0
            </p>
            <p className="text-2xl font-semibold">Sylhet</p>
          </div>
          <div className="flex flex-col justify-center items-center border-2 border-zinc-600 lg:mt-[-100px] lg:ml-[70px] w-full lg:w-72 h-52  lg:h-72 border-dashed rounded-full">
            <p
              ref={(el) => (countRefs.current[6] = el)}
              data-value="120"
              className="text-5xl font-bold"
            >
              0
            </p>
            <p className="text-2xl font-semibold">Chattogram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
