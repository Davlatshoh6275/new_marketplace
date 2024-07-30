import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Card, CardContent } from "../ui/card";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <div className="max-w-[1440px] my-0 mx-auto xl:w-[1200px] py-12">
      <Breadcrumb className="mb-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/market/home">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Contact</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex gap-5">
        <Card className="w-1/3 py-10 px-2 shadow-md">
          <CardContent>
            <div>
              <div className="flex justify-start items-center gap-5">
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-[#DB4444] text-white mb-3">
                  <FiPhone className="text-2xl" />
                </div>
                <h1 className="font-semibold text-2xl">Call To Us</h1>
              </div>
              <p className="font-medium text-lg mb-3">
                We are available 24/7, 7 days a week.
              </p>
              <p className="mb-10 font-medium text-lg ">
                Phone: +8801611112222
              </p>
              <Separator className="bg-[#909090] mb-10 " />
              <div className="flex justify-start items-center gap-5">
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-[#DB4444] text-white mb-3">
                  <GoMail className="text-2xl" />
                </div>
                <h1 className="font-semibold text-2xl">Write To US</h1>
              </div>
              <p className="font-medium text-lg mb-3">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="font-medium text-lg mb-3">
                Emails: customer@exclusive.com
              </p>
              <p className="font-medium text-lg">
                Emails: support@exclusive.com
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="w-2/3 pt-10 shadow-md ">
          <CardContent>
            <form action="">
              <div className="flex gap-5 mb-10">
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input type="number" placeholder="Your Phone" />
              </div>
              <div>
                <Textarea
                  placeholder="Type your message here."
                  className="h-64 mb-5"
                />
              </div>
              <div className="flex justify-end" >
                <Button variant={"outline"} className="w-56 h-14 bg-[#DB4444] text-white ">
                  Send Massage
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
