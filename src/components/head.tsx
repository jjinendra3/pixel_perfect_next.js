"use client";
import { useState } from "react";
import { IoCallSharp } from "react-icons/io5";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../public/logo.png";
function Head() {
  const [search, setsearch] = useState<string>("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearch(e.target.value);
  };
  const [arr, setarr] = useState<any>([]);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setarr([...arr, search]);
    setsearch("");
  };
  return (
    <div className="md:px-16 px-3 flex md:justify-between items-center mt-4 h-16 mb-4 w-full">
      <div className="flex md:space-x-8 space-x-3 items-center">
        <img src={logo.src} alt="Logo" className="h-8 mb-1 md:block hidden" />
        <button className="md:hidden block text-2xl">
          <GiHamburgerMenu />
        </button>
        <div>
          <div
            role="presentation"
            className="shadow-lg px-4 md:py-1 py-3 border border-neutral-100 rounded-full flex items-center text-neutral-900 md:w-96 w-full"
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
                  strokeWidth="1.6"
                  strokeLinecap="round"
                ></path>
              </svg>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search for locations"
                className="outline-none w-full flex-1 text-neutral-900 placeholder:text-neutral-400 text-sm"
                onChange={handleSearch}
                value={search}
              ></input>
            </form>

            <div
              className="flex items-center cursor-pointer mr-2"
              role="presentation"
            ></div>
          </div>
          <div className="flex pt-2">
            {arr.length !== 0 &&
              arr.map((item: any) => {
                return (
                  <div
                    className="border  rounded-2xl p-1 text-xs font-thin "
                    key={item}
                  >
                    {item}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="space-x-8 flex justify-center items-center ">
        <div className="md:flex hidden items-center space-x-2 font-bold">
          <IoCallSharp className="text-[#6250FF] text-lg" />
          <div>+91 8369003785</div>
        </div>
        <Avatar className="md:h-14 md:w-14 ">
          <AvatarFallback className="bg-white md:font-normal font-bold">
            M
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default Head;
