"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import "swiper/css";
import "swiper/css/pagination";

import "../../app/globals.css";
import { Pagination } from "swiper/modules";

import img from "@/public/images/team.png";
import Image from "next/image";

import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Team() {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="h-[550px] w-full ">
          <div className="w-full">
            <div className="border w-64 bg-[#F5F5F5]  border-transparent ">
              <Image src={img} alt="img" width={100} height={100} />
            </div>
            <h1 className="text-left text-4xl">Tom Cruise</h1>
            <p>Founder & Chairman</p>
            <div className="flex">
              <CiTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
