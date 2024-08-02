import React from "react";
import { Button } from "../ui/button";

export default function Month() {
  return (
    <div className="max-w-[1440px] my-0 mx-auto xl:w-[1200px] pt-14 pb-10">
      <div className="w-full h-10  mb-12 ">
        <div className="flex items-center gap-4 mb-4 ">
          <div className="w-5 h-10 rounded-sm bg-[#DD5050]"></div>
          <h1 className="text-[#DD5050] font-semibold ">This Month</h1>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-3xl">Best Selling Products</h1>
          <Button
            variant="outline"
            className="w-44 h-12 text-white text-lg bg-[#DD5050] "
          >
            View All
          </Button>
        </div>
      </div>
    </div>
  );
}
