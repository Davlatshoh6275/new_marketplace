import Header from "@/Components/client/Header";
import Todays from "@/Components/client/Todays";
import React from "react";

export default function home() {
  return (
    <div className="max-w-[1440px] my-0 mx-auto xl:w-[1200px]">
      <Header />
      <Todays />
    </div>
  );
}
