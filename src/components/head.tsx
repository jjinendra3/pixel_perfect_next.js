"use client";
import { useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from "../../public/logo.png";
import avatar from "../../public/avatar.png";

function Head() {
  const [search, setsearch] = useState<string>("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearch(e.target.value);
  };
  return (
    <div className="head px-16 flex justify-between items-center mt-4 h-16 mb-4">
      <div className="flex space-x-8">
        <img src={logo.src} alt="Logo" className="h-12 mb-1" />
        <div
          role="presentation"
          className="shadow-lg px-4 py-2 border border-neutral-100 rounded-full flex items-center text-neutral-900 w-96"
        >
          <div className="mr-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9845 15.9829L19.7998 19.7982M10.5362 18.2397C6.28076 18.2397 2.83105 14.79 2.83105 10.5346C2.83105 6.27917 6.28076 2.82947 10.5362 2.82947C14.7916 2.82947 18.2413 6.27917 18.2413 10.5346C18.2413 14.79 14.7916 18.2397 10.5362 18.2397Z"
                stroke="#4B5563"
                stroke-width="1.6"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for locations"
            className="outline-none w-full flex-1 text-neutral-900 placeholder:text-neutral-400 text-sm"
            onChange={handleSearch}
          ></input>
          <div
            className="flex items-center cursor-pointer mr-2"
            role="presentation"
          ></div>
        </div>
      </div>
      <div className="space-x-8 flex align-middle justify-center items-center ">
        <div className="flex items-center space-x-2 font-bold">
          <IoCallSharp className="text-[#6250FF]" />
          <div>+91 8369003785</div>
        </div>
        <Avatar className="h-14 w-14">
          <AvatarFallback className="bg-white">M</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default Head;
