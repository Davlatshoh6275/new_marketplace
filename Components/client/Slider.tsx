"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "../../app/globals.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper border w-full h-96 "
      >
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1515940175183-6798529cb860?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGdhZGdldHN8ZW58MHx8MHx8fDA%3D"
            alt="img"
            width={100}
            height={100}
            objectFit="contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1515940175183-6798529cb860?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGdhZGdldHN8ZW58MHx8MHx8fDA%3D"
            alt="img"
            width={100}
            height={100}
            objectFit="contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1515940175183-6798529cb860?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGdhZGdldHN8ZW58MHx8MHx8fDA%3D"
            alt="img"
            width={100}
            height={100}
            objectFit="contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1515940175183-6798529cb860?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGdhZGdldHN8ZW58MHx8MHx8fDA%3D"
            alt="img"
            width={100}
            height={100}
            objectFit="contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1515940175183-6798529cb860?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGdhZGdldHN8ZW58MHx8MHx8fDA%3D"
            alt="img"
            width={100}
            height={100}
            objectFit="contain"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
