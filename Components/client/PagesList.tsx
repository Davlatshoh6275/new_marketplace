"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Input } from "../ui/input";

export default function PagesList() {
  return (
    <div className="flex max-w-[1440px] my-0 mx-auto xl:w-[1200px]  justify-between items-center h-16" >
      <div>
        <h1 className="text-2xl font-bold cursor-pointer " >Exclusive</h1>
      </div>
      <div>
        <ul className="flex gap-8" >
          <Li title="Home" url="/market/home" />
          <Li title="Contact" url="/market/contact" />
          <Li title="About" url="/market/about" />
          <Li title="Sign Up" url="/market/signup" />
        </ul>
      </div>
      <div className="flex items-center gap-3 " >
        <div className="relative" >
          <Input type="text" placeholder="What are you looking for?" className="w-[400px]" />
          <CiSearch className="absolute top-2 right-3 text-2xl"  />
        </div>
        <div>
          <Link href={"/market/liked"} >
          <CiHeart className="text-3xl cursor-pointer" />
          </Link>
        </div>
        <div>
          <IoCartOutline className="text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

function Li({ title, url }: { title: string; url: string }) {
  let pathname: string | undefined = usePathname();
  let isActive = pathname?.includes(title.toLowerCase());

  return (
    <li
      className={`flex items-center gap-2 text-xl  ${
        isActive ? "opacity-100 text-[#000] font-semibold" : "text-[#1a1919]"
      }`}
    >
      <Link href={url}>{title}</Link>
    </li>
  );
}
