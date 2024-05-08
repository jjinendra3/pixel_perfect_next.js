"use client";
import React,{useState} from "react";
import dummy from "../../public/dummy.png";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosBed } from "react-icons/io";
import { GiRedCarpet } from "react-icons/gi";
import { Button } from "./ui/button";
import { BsWhatsapp } from "react-icons/bs";
import { Badge } from "@/components/ui/badge";
import { MdVerified } from "react-icons/md";
import image1 from "../../public/img1.jpeg";
import logo from "../../public/logo.png";
import { Separator } from "./ui/separator";
import { Slider } from "@/components/ui/slider"
import {Input} from "@/components/ui/input"
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
        <div className=" border-[#E5E7EB] mb-4 mx-4 border-b-[1px]"></div>
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
        <div className="border-b-[1px] w-full border-[#E5E7EB] mb-4"></div>
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

function Right() {
  return (
    <div className="flex p-2 pl-4 ">
      <div className="w-1/3 border-b-[1px] pb-4">
        <img src={image1.src} alt="" className="rounded-lg h-24 w-28" />
      </div>
      <div className=" flex flex-col w-2/3 pt-1 border-b-[1px] pb-4 ">
        <div className="flex text-md font-thin">
          <div className="font-bold">₹ 1,70,534</div> / month
        </div>
        <div className="flex  items-center text-[#4B5563] text-xs mb-3">
          <div>Sector 63 , Golf Course Road</div>
        </div>
        <div className="flex space-x-1  text-xs items-center">
          <div className="bg-[#F3F4F9] h-6 w-6 rounded-full flex justify-center items-center">
            <GiRedCarpet />
          </div>
          <div className="text-[#6B7280]">Carpet area:</div>
          <div className="font-bold">4,772 sqft</div>
        </div>
      </div>
    </div>
  );
}
function Plug() {
  return (
    <div className="flex">
      <div className="flex-col flex w-5/12 border p-6">
        <div className=" text-2xl font-bold mb-2">Please Share your budget    with us.</div>
          <div className="mb-8">We want to respect your time and help you find the perfect property fast.</div>
          <img src={logo.src} alt="" className="h-3 w-3"/>
      </div>

      <div className="flex w-7/12 flex-col border p-6">
        <div className="text-xs text-[#4B5563] mb-2">Select budget</div>
        <div className="flex space-x-1  justify-evenly">
          <div className="flex border ">
            <div className="w-10 rounded-lg"></div>
            <Separator orientation={"vertical"}/>
            <p>L</p>
          </div>
          <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className="text-[#fff]"
        />
        <div className="flex border">
            <div className="w-10 bg-white">{}</div>
            <Separator orientation={"vertical"}/>
            <p>L</p>
          </div>
        </div>
        <div className="flex items-center justify-evenly font-thin mt-8 mb-8 ">
          <Badge className="bg-white border-[1px] border-[#E5E7EB] text-xs">0-1 Lakhs</Badge>
          <Badge className="bg-white border-[1px] border-[#E5E7EB]">3-5 Lakhs</Badge>
          <Badge className="bg-white border-[1px] border-[#E5E7EB]">5-10 Lakhs</Badge>
          <Badge className="bg-white border-[1px] border-[#E5E7EB]">10-25 Lakhs</Badge>
          <Badge className="bg-white border-[1px] border-[#E5E7EB]">25 Lakhs+</Badge>
        </div>
        <Button className="border mx-1" size={"lg"}>Show Results</Button>
      </div>
    </div>
  );
}
function mainpage() {
  const data = [1, 2, 3, 4, 5];
  return (
    <div className="flex mb-8">
      <div className="flex  w-2/3 pl-16 flex-col">
        <div className="text-[#4B5563] flex items-baseline text-xs mb-4">
          <div className="text-2xl align-top font-medium">
            47 Office Space
          </div>
          <div className="align-baseline">, Lower Parel, Mumbai</div>{" "}
        </div>
        <div className="flex flex-col space-y-4 mr-4">
          {data.map((item) => (
            
            <div key={item}>
              {item===3?<Plug/>:<Left />}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1  w-1/3 pr-16 pl-2">
        <div className="flex flex-col space-y-4 mr-4 border rounded-lg w-full ">
          <div className="font-bold p-4 border-b-[1px] text-lg">
            Shortlisted Properties
          </div>
          {data.map((item) => (
            <div key={item}><Right/></div>
          ))}
          <div className="w-full  flex justify-center items-center pb-4">
            <Button
              size={"lg"}
              variant={"destructive"}
              className="bg-[#5359EA] w-full mx-3 py-4"
            >
              <div className="text-white">Schedule a visit</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default mainpage;
