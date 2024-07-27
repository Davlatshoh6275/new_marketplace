import Image from 'next/image'
import React from 'react'
import img from "../../public/images/login.png";
import { Input } from "../ui/input";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function LogIn() {
  return (
    <div><div className="flex justify-between h-full items-center xl:pr-[8%] ">
    <div>
      <Image
        src={img}
        alt=""
        width={100}
        height={100}
        className="w-[600px] object-contain"
      />
    </div>
    <div className="w-2/6">
      <div className="flex flex-col gap-5 ">
        <h1 className="text-3xl font-bold">Log in to Exclusive</h1>
        <p>Enter your details below</p>
        <form action="">
          <Input type="email" placeholder="Email" className="mb-3" />
          <Input type="password" placeholder="Password" className="mb-3" />

          <div className="flex justify-between gap-3">
            <button type="submit" className="w-1/3 border h-10 rounded-sm bg-[#DB4444] text-white " >Log In</button>
            <button className='text-[#DB4444]' >Forget Password?</button>
          </div>
        </form>
      </div>
    </div>
  </div></div>
  )
}
