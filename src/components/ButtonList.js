import Button from "./Button";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const ButtonList = () => {
  const list = [
    "All",
    "Live",
    "Gaming",
    "cricket",
    "news",
    "election 2024",
    "Ram mandir",
    "Narendra Modi",
    "T20 world cup 2024",
    "Live",
    "news",
    "election 2024",
    "Ram mandir",
    "Narendra Modi",
    "T20 world cup 2024",
    "Live",
    "All",
    "Live",
    "Gaming",
    "cricket",
    "news",
  ];

  // return (
  // <div className="flex m-3">
  //   {list.map((item,index)=>(
  //           <Button key={item+index} name={item} />
  //       ))}
  //   </div>
  // );

  return(
    <div className="flex">
     {/* <div className="absolute left-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-r from-white backdrop-blur-md"></div> */}
     <Swiper
        cssMode={true}
        // navigation={true}
        // pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        slidesPerView={'auto'}
        spaceBetween={2}
        className="mySwiper"
      >
        {list.map((item, index) => (
          <SwiperSlide key={index}>
            <Button key={item+index} name={item} />
          </SwiperSlide>
        ))}

{/* <div className="absolute right-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-white backdrop-blur-md"></div> */}
      </Swiper>
      </div>
  )
};

export default ButtonList;