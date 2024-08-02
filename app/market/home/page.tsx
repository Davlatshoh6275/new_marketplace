import Categories from "@/Components/client/Categories";
import Header from "@/Components/client/Header";
import Month from "@/Components/client/Month";
import Todays from "@/Components/client/Todays";
import { Separator } from "@/Components/ui/separator";
import React from "react";

export default function home() {
  return (
    <div className="max-w-[1440px] my-0 mx-auto xl:w-[1200px]">
      <Header />
      {/* <Todays /> */}
      <Categories />
      <Separator className="mb-5" />
      <Month/>
    </div>
  );
}
