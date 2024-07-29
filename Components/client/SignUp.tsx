import Image from "next/image";
import React from "react";
import img from "../../public/images/login.png";
import { Input } from "../ui/input";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex justify-between h-full max-w-[1440px] my-0 mx-auto xl:w-[1200px] items-center xl:pr-[8%]">
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
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p>Enter your details below</p>
          <form action="">
            <Input type="text" placeholder="Name" className=" mb-3" />
            <Input type="email" placeholder="Email" className="mb-3" />
            <Input type="password" placeholder="Password" className="mb-3" />

            <div className="flex flex-col gap-3">
              <button
                type="submit"
                className="w-full border h-10 rounded-sm bg-[#DB4444] text-white "
              >
                Create Account
              </button>
              <button
                type="submit"
                className="flex justify-center items-center w-full h-10 border gap-3"
              >
                <FcGoogle className="text-2xl" /> Sign up with Google
              </button>
            </div>
          </form>
          <p className="text-center  ">
            Already have account?{" "}
            <Link
              href={"/market/logIn"}
              className="
        border-b-2 border-[#CFCFCF] pb-[2px] text-[#868686] "
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
