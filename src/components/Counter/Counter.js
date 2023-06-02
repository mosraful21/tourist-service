import React, { useEffect, useRef, useState } from "react";
import "./Counter.css";

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
        const duration = 500 / increment;

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
  }, []);

  return (
    <div className="bg-blue-500" data-diff="100">
      <div className="">
        <div
          ref={(el) => (countRefs.current[0] = el)}
          data-value="900"
          className="count-digit"
        >
          0
        </div>
        <div className="count-title">Count Title</div>
      </div>
    </div>
  );
};

export default Counter;
