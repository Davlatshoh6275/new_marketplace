import React from "react";
import { Separator } from "../ui/separator";
import Slider from "./Slider";

export default function Header() {
  return (
    <header className="flex justify-between h-[470px]">
      <div className="w-[15%]">
        <ul className="mt-10 flex flex-col gap-4 ">
          <li className="text-xl cursor-pointer ">categories</li>
          <li className="text-xl cursor-pointer ">categories</li>
          <li className="text-xl cursor-pointer ">categories</li>
          <li className="text-xl cursor-pointer ">categories</li>
          <li className="text-xl cursor-pointer ">categories</li>
          <li className="text-xl cursor-pointer ">categories</li>
        </ul>
      </div>
      <Separator orientation="vertical" />
      <div className="w-[75%] relative mt-10 ">
        <Slider />
      </div>
    </header>
  );
}
