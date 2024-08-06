import React from "react";
import imgBanner from "@/public/images/banner.png";
import imgElips from "@/public/images/elips.png";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Banner() {
  return (
    <div className="max-w-[1440px]   my-0 mx-auto xl:w-[1200px]  flex justify-between  h-[500px] bg-black mb-16  ">
      <div className="px-12 py-16 w-[50%] ">
        <h1 className="text-xl text-[#00FF66] font-semibold mb-10 ">
          Categories
        </h1>
        <h1 className="text-[50px] leading-tight text-white font-semibold mb-10 ">
          Enhance Your <br /> Music Experience
        </h1>
        <div className="flex gap-4 mb-10">
          <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center flex-col ">
            <span className="text-xs font-bold">05</span>
            <span className="text-[10px] font-medium">Days</span>
          </div>
          <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center flex-col ">
            <span className="text-xs font-bold">23</span>
            <span className="text-[10px] font-medium">Hours</span>
          </div>
          <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center flex-col ">
            <span className="text-xs font-bold">59</span>
            <span className="text-[10px] font-medium">MInutes</span>
          </div>
          <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center flex-col ">
            <span className="text-xs font-bold">23</span>
            <span className="text-[10px] font-medium">Seconds</span>
          </div>
        </div>
        <Button className="w-36 h-12 bg-[#00FF66] rounded-sm " >Buy Now!</Button>
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
