import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import img from "../../public/images/tv.png";

export default function Foryou() {
  return (
    <div className="w-full h-full py-10 max-w-[1440px] my-0 mx-auto xl:w-[1200px]">
      <div className="w-full h-10 flex justify-between items-center mb-5 ">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 rounded-sm bg-[#DD5050]"></div>
          <h1>Just For You</h1>
        </div>
        <Button variant="outline" className="w-32 border-black " >See all</Button>
      </div>

      <div className="flex justify-between items-center">
        <div className="w-72 h-full">
          <div className="w-full h-56 flex justify-center items-center bg-[#F5F5F5] rounded-lg mb-3 relative ">
            <Image
              src={img}
              alt="img"
              width={100}
              height={100}
              className="object-contain w-[65%] "
            />
            <div className="border absolute top-3 right-3 w-9 h-9 flex justify-center items-center bg-white rounded-full cursor-pointer">
              <RiDeleteBinLine className=" text-xl" />
            </div>
          </div>
          <div>
            <h2 className="text-black mb-2 font-semibold">
              GP11 Shooter USB Gamepad
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#DD5050] font-semibold text-xl">$550</p>
            <div className="w-10 h-10 rounded-full border flex justify-center items-center cursor-pointer ">
              <TiShoppingCart className="text-xl" />
            </div>
          </div>
        </div>
        <div className="w-72 h-full">
          <div className="w-full h-56 flex justify-center items-center bg-[#F5F5F5] rounded-lg mb-3 relative ">
            <Image
              src={img}
              alt="img"
              width={100}
              height={100}
              className="object-contain w-[65%] "
            />
            <div className="border absolute top-3 right-3 w-9 h-9 flex justify-center items-center bg-white rounded-full cursor-pointer">
              <RiDeleteBinLine className=" text-xl" />
            </div>
          </div>
          <div>
            <h2 className="text-black mb-2 font-semibold">
              GP11 Shooter USB Gamepad
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#DD5050] font-semibold text-xl">$550</p>
            <div className="w-10 h-10 rounded-full border flex justify-center items-center cursor-pointer ">
              <TiShoppingCart className="text-xl" />
            </div>
          </div>
        </div>
        <div className="w-72 h-full">
          <div className="w-full h-56 flex justify-center items-center bg-[#F5F5F5] rounded-lg mb-3 relative ">
            <Image
              src={img}
              alt="img"
              width={100}
              height={100}
              className="object-contain w-[65%] "
            />
            <div className="border absolute top-3 right-3 w-9 h-9 flex justify-center items-center bg-white rounded-full cursor-pointer">
              <RiDeleteBinLine className=" text-xl" />
            </div>
          </div>
          <div>
            <h2 className="text-black mb-2 font-semibold">
              GP11 Shooter USB Gamepad
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#DD5050] font-semibold text-xl">$550</p>
            <div className="w-10 h-10 rounded-full border flex justify-center items-center cursor-pointer ">
              <TiShoppingCart className="text-xl" />
            </div>
          </div>
        </div>
        <div className="w-72 h-full">
          <div className="w-full h-56 flex justify-center items-center bg-[#F5F5F5] rounded-lg mb-3 relative ">
            <Image
              src={img}
              alt="img"
              width={100}
              height={100}
              className="object-contain w-[65%] "
            />
            <div className="border absolute top-3 right-3 w-9 h-9 flex justify-center items-center bg-white rounded-full cursor-pointer">
              <RiDeleteBinLine className=" text-xl" />
            </div>
          </div>
          <div>
            <h2 className="text-black mb-2 font-semibold">
              GP11 Shooter USB Gamepad
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#DD5050] font-semibold text-xl">$550</p>
            <div className="w-10 h-10 rounded-full border flex justify-center items-center cursor-pointer ">
              <TiShoppingCart className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
