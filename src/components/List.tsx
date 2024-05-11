"use client";
import { useContext } from "react";
import { GiRedCarpet } from "react-icons/gi";
import { BsWhatsapp } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { IoIosBed } from "react-icons/io";
import Context from "@/app/ContextAPI";
import { Badge } from "./ui/badge";
import img from "next/image";
import { Button } from "./ui/button";

function Left(item: any) {
  const context = useContext(Context);
  return (
    <Context.Provider value={context}>
      <div className="border flex md:flex-row flex-col rounded-lg ">
        <div className="relative md:w-4/12">
          {item.item.verified === true && (
            <div className="absolute top-5 left-5">
              <Badge
                variant="default"
                className="flex space-x-1 items-center text-[#1F6094] py-2"
              >
                <MdVerified />
                <div>Verified</div>
              </Badge>
            </div>
          )}
          <div className="absolute top-5 right-5  ">
            <Badge
              variant="default"
              className="bg-white text-black py-2 border-[##E5E7EB]"
            >
              ~{item.item.space} Seats
            </Badge>
          </div>
          <img
            src={item.item.image}
            alt=""
            className="rounded-l-lg object-none h-full w-full "
          />
        </div>
        <div className="flex flex-col md:w-8/12 pt-4 ">
          <div className="flex text-lg px-4 ">
            <div className="font-bold">₹ {item.item.rent}</div> / per month
          </div>
          <div className="flex  items-center text-[#4B5563] text-sm mb-3 px-4">
            <IoLocationSharp />
            <div>{item.item.location}</div>
          </div>
          <div className="flex space-x-4 items-center mb-4 px-4">
            <div className="flex space-x-2 font-bold text-xs items-center">
              <IoIosBed />
              <div>
                {item.item.furnishing === 2
                  ? "Fully Furnished"
                  : item.item.furnishing === 1
                    ? "Semi - Furnished"
                    : item.item.furnishing === 0
                      ? "Unfurnished"
                      : ""}
              </div>
            </div>
            <div className="flex space-x-2 text-xs items-center">
              <GiRedCarpet />
              <div className="text-[#6B7280]">Carpet area:</div>
              <div className="font-bold">{item.item.carpet} sqft</div>
            </div>
          </div>
          <div className=" border-[#E5E7EB] mb-4 mx-4 border-b-[1px] md:block hidden"></div>
          <div className="text-[#6B7280] text-sm font-bold px-4 md:block hidden">
            Office for rent in Bandra Kurla Complex, Mumbai
          </div>
          <div className="flex md:text-sm text-xs md:mt-2 font-thin text-[#9CA3AF] mb-4 px-4">
            {" "}
            Welcome to our modern and spacious office...{" "}
            <a href="" className="text-blue-400 font-normal md:text-sm text-xs">
              Read More
            </a>
          </div>
          <div className="border-b-[1px] w-full border-[#E5E7EB] mb-4"></div>
          <div className="flex justify-between items-center mb-4 px-4 ">
            <div className="text-[#6250FF] font-semibold text-sm md:block hidden">
              <a href="">Show All imgs</a>
            </div>
            <div className="flex space-x-2  md:w-auto w-full ">
              <Button
                variant={"default"}
                className="bg-[#5359EA] text-white px-8 w-full"
                onClick={() => {
                  context.shortlisting(item.item);
                }}
                disabled={context.shortlist.some(
                  (elem: any) =>
                    JSON.stringify(elem) === JSON.stringify(item.item),
                )}
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
    </Context.Provider>
  );
}

export default Left;
