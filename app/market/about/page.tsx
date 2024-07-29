import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import Image from "next/image";
import React from "react";
import img from "@/public/images/about.png";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import Team from "@/Components/client/Team";

export default function page() {
  return (
    <div className="max-w-[1440px] my-0 mx-auto xl:w-[1200px] py-12">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/market/home">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>About</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="w-full flex  justify-between items-center py-10 gap-10 mb-6">
        <div className="w-2/4">
          <h1 className="text-5xl font-semibold mb-5 ">Our Story</h1>
          <p className="text-base mb-5 ">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div>
          <Image
            src={img}
            alt=""
            width={100}
            height={100}
            className="w-full object-contain"
          />
        </div>
      </div>
      <div className="flex justify-between py-7 ">
        <div className="border w-[23%] h-full flex flex-col justify-center items-center gap-5 py-10 rounded-md border-[#B3B3B3] cursor-pointer ">
          <div className="w-20 h-20 border rounded-full flex justify-center items-center bg-[#C1C0C1]">
            <div className="w-14 h-14 border border-black rounded-full flex justify-center items-center bg-black  ">
              <SiHomeassistantcommunitystore className="text-3xl text-white  " />
            </div>
          </div>
          <h1 className="text-5xl font-semibold ">10.5k</h1>
          <p>Sallers active our site</p>
        </div>
        <div className="border w-[23%] h-full flex flex-col justify-center items-center gap-5 py-10 rounded-md border-[#B3B3B3] cursor-pointer">
          <div className="w-20 h-20 border rounded-full flex justify-center items-center bg-[#C1C0C1]">
            <div className="w-14 h-14 border border-black rounded-full flex justify-center items-center bg-black  ">
              <SiHomeassistantcommunitystore className="text-3xl text-white  " />
            </div>
          </div>
          <h1 className="text-5xl font-semibold ">10.5k</h1>
          <p>Sallers active our site</p>
        </div>
        <div className="border w-[23%] h-full flex flex-col justify-center items-center gap-5 py-10 rounded-md border-[#B3B3B3] cursor-pointer">
          <div className="w-20 h-20 border rounded-full flex justify-center items-center bg-[#C1C0C1]">
            <div className="w-14 h-14 border border-black rounded-full flex justify-center items-center bg-black  ">
              <SiHomeassistantcommunitystore className="text-3xl text-white  " />
            </div>
          </div>
          <h1 className="text-5xl font-semibold ">10.5k</h1>
          <p>Sallers active our site</p>
        </div>
        <div className="border w-[23%] h-full flex flex-col justify-center items-center gap-5 py-10 rounded-md border-[#B3B3B3] cursor-pointer">
          <div className="w-20 h-20 border rounded-full flex justify-center items-center bg-[#C1C0C1]">
            <div className="w-14 h-14 border border-black rounded-full flex justify-center items-center bg-black  ">
              <SiHomeassistantcommunitystore className="text-3xl text-white  " />
            </div>
          </div>
          <h1 className="text-5xl font-semibold ">10.5k</h1>
          <p>Sallers active our site</p>
        </div>
      </div>
      {/* <Team /> */}
    </div>
  );
}
