import React from "react";
import imgBanner from "@/public/images/banner.png";
import imgElips from "@/public/images/elips.png";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="max-w-[1440px]   my-0 mx-auto xl:w-[1200px]  flex justify-between items-center h-[500px] bg-black mb-16  ">
      <div className="">
        <h1>Categories</h1>
        <h1>Enhance Your Music Experience</h1>
        <div>
          <div>
            <span>05</span>
            <span>Days</span>
          </div>
          <div>
            <span>23</span>
            <span>Hours</span>
          </div>
          <div>
            <span>59</span>
            <span>MInutes</span>
          </div>
          <div>
            <span>23</span>
            <span>Seconds</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[60%] h-full relative rounded-full ">
        <Image
          src={imgElips}
          alt="img"
          width={1}
          height={1}
          className="w-[100%] h-[100%]  absolute"
        />
        <Image
          src={imgBanner}
          alt="img"
          width={100}
          height={100}
          className="object-contain relative w-[90%]"
        />
      </div>
    </div>
  );
}
