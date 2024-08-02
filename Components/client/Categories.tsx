import React from "react";
import { GiSmartphone } from "react-icons/gi";

import { Button } from "../ui/button";

export default function Categories() {
  return (
    <div className="max-w-[1440px] my-0 mx-auto xl:w-[1200px] pt-14 pb-10">
      <div className="w-full h-10  mb-12 ">
        <div className="flex items-center gap-4 mb-4 ">
          <div className="w-5 h-10 rounded-sm bg-[#DD5050]"></div>
          <h1 className="text-[#DD5050] font-semibold ">Categories</h1>
        </div>
        <h1 className="font-semibold text-3xl">Browse By Category</h1>
      </div>
      <div className="flex justify-between items-center py-10">
        <div className="w-44 h-36 shadow-md rounded-md border flex justify-center items-center flex-col gap-3 cursor-pointer">
          <GiSmartphone className="text-6xl" />
          <h1>Phones</h1>
        </div>
        <div className="w-44 h-36 shadow-md rounded-md border flex justify-center items-center flex-col gap-3 cursor-pointer">
          <GiSmartphone className="text-6xl" />
          <h1>Phones</h1>
        </div>
        <div className="w-44 h-36 shadow-md rounded-md border flex justify-center items-center flex-col gap-3 cursor-pointer">
          <GiSmartphone className="text-6xl" />
          <h1>Phones</h1>
        </div>
        <div className="w-44 h-36 shadow-md rounded-md border flex justify-center items-center flex-col gap-3 cursor-pointer">
          <GiSmartphone className="text-6xl" />
          <h1>Phones</h1>
        </div>
        <div className="w-44 h-36 shadow-md rounded-md border flex justify-center items-center flex-col gap-3 cursor-pointer">
          <GiSmartphone className="text-6xl" />
          <h1>Phones</h1>
        </div>
        <div className="w-44 h-36 shadow-md rounded-md border flex justify-center items-center flex-col gap-3 cursor-pointer">
          <GiSmartphone className="text-6xl" />
          <h1>Phones</h1>
        </div>
      </div>
    </div>
  );
}
