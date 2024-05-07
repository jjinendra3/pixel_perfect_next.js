import React from "react";
import dummy from "../../public/dummy.png";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";
import { GiRedCarpet } from "react-icons/gi";
import { Button } from "./ui/button";
import { BsWhatsapp } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";
import { MdVerified } from "react-icons/md";

function Left() {
  return (
    <div className="border flex rounded-lg ">
      <div className="relative w-4/12">
        <div className="absolute top-5 left-5">
          <Badge
            variant="default"
            className="flex space-x-1 items-center text-[#1F6094] py-2"
          >
            <MdVerified />
            <div>Verified</div>
          </Badge>
        </div>
        <div className="absolute top-5 right-5  ">
          <Badge
            variant="default"
            className="bg-white text-black py-2 border-[##E5E7EB]"
          >
            ~25-30 Seats
          </Badge>
        </div>
        <img
          src={dummy.src}
          alt=""
          className="rounded-l-lg object-none h-full w-full"
        />
      </div>

      <div className="flex flex-col w-8/12 pt-4 ">
        <div className="flex text-lg px-4 ">
          <div className="font-bold">₹ 1,70,534</div> / per month
        </div>
        <div className="flex  items-center text-[#4B5563] text-sm mb-3 px-4">
          <IoLocationSharp />
          <div>Sector 62 , Golf Course Road</div>
        </div>
        <div className="flex space-x-4 items-center mb-4 px-4">
          <div className="flex space-x-2 font-bold text-xs items-center">
            <IoIosBed />
            <div>Fully Furnished</div>
          </div>
          <div className="flex space-x-2  text-xs items-center">
            <GiRedCarpet />
            <div className="text-[#6B7280]">Carpet area:</div>
            <div className="font-bold">4,772 sqft</div>
          </div>
        </div>
        <div className="border border-[#E5E7EB] mb-4 mx-4"></div>
        <div className="text-[#6B7280] text-sm font-bold px-4">
          Office for rent in Bandra Kurla Complex, Mumbai
        </div>
        <div className="flex text-sm mt-2 font-thin text-[#9CA3AF] mb-4 px-4">
          {" "}
          Welcome to our modern and spacious office...{" "}
          <a href="" className="text-blue-400 font-normal">
            Read More
          </a>
        </div>
        <div className="border w-full border-[#E5E7EB] mb-4"></div>
        <div className="flex justify-between items-center mb-4 px-4">
          <div className="text-[#6250FF] font-semibold text-sm">
            <a href="">Show All Images</a>
          </div>
          <div className="flex space-x-2">
            <Button
              variant={"default"}
              className="bg-[#5359EA] text-white px-8"
            >
              <div className="text-white">Shortlist</div>
            </Button>
            <Button className=" bg-[#7ADA66] text-2xl rounded-xl p-2">
              <BsWhatsapp className="text-white font-bold" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
function mainpage() {
  const data = [1, 2, 4];
  return (
    <div className="flex">
      <div className="flex  w-2/3 pl-16 flex-col">
        <div className="text-[#4B5563] flex items-baseline text-xs mb-4">
          <div className="text-2xl align-top font-semibold">
            47 Office Space
          </div>
          <div className="align-baseline">, Lower Parel, Mumbai</div>{" "}
        </div>
        <div className="flex flex-col space-y-4 mr-4">
          {data.map((item) => (
            <div key={item}>
              <Left />
            </div>
          ))}
        </div>
      </div>
      <div className="flex border w-1/3 pr-16">Bye</div>
    </div>
  );
}

export default mainpage;
