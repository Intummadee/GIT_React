import React, { useState, useEffect } from 'react';

import arrorw_up from "/arrorw_up.png";


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // ตรวจสอบการเลื่อนหน้า
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // เลื่อนขึ้นไปด้านบนสุด
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {/* {isVisible &&  */}
        <button onClick={scrollToTop} className="scroll-button flex flex-col justify-center">
          <img src={arrorw_up} alt="scrollToTop" className='h-[3rem] p-2'  />
          <h5 className="text-secondary text-center -translate-y-2 w-full text-[15px] cursor-pointer">Top</h5>
        </button>
        {/* } */}
    </div>
  );
};

export default ScrollToTop;
