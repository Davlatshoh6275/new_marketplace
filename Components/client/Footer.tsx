import React from "react";
import { Input } from "../ui/input";

export default function Footer() {
  return (
    <div className=" w-full h-full py-12 bg-black">
      <div className="flex justify-between items-start max-w-[1440px] my-0 mx-auto xl:w-[1200px] ">
        <div>
          <h1 className="font-semibold text-2xl text-white mb-5 " >Exclusive</h1>
          <h3 className="font-medium text-white text-xl mb-3" >Subscribe</h3>
          <p className="text-white mb-3">Get 10% off your first order</p>
          <div className="relative">
            <Input type="email" placeholder="Enter your email" className="bg-transparent text-white" />
          </div>
        </div>
        <ul className="leading-10 text-white" >
          <li className="font-semibold" >Support</li>
          <li>
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </li>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </ul>
        <ul className="leading-10 text-white">
          <li className="font-semibold" >Account</li>
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
        <ul className="leading-10 text-white">
          <li className="font-semibold" >Quick Link</li>
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
