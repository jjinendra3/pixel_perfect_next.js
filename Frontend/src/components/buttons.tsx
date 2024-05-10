"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { GiRedCarpet } from "react-icons/gi";
import { FaChair } from "react-icons/fa";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { Badge } from "@/components/ui/badge";
interface ButtonItem {
  icon: JSX.Element | null;
  name: string;
  sideicon: JSX.Element | null;
}

const buttons: ButtonItem[] = [
  { icon: <FaDollarSign />, name: "Any Price", sideicon: <FaAngleDown /> },
  { icon: <GiRedCarpet />, name: "Carpet Area", sideicon: <FaAngleDown /> },
  { icon: <FaChair />, name: "Furnishing Status", sideicon: <FaAngleDown /> },
  { icon: <FaSortAmountDownAlt />, name: "Sort By", sideicon: null },
  {
    icon: <MdVerified className="text-blue-700" />,
    name: "Verified",
    sideicon: null,
  },
  { icon: <IoMdPhotos />, name: "With imgs", sideicon: null },
  { icon: <FaEyeSlash />, name: "Hide Shortlisted", sideicon: null },
  { icon: <IoLocationSharp />, name: "Localities", sideicon: <FaAngleDown /> },
  { icon: <FaChair />, name: "Amenities", sideicon: <FaAngleDown /> },
];

function Buttons() {
  const [verified, setverified] = useState<boolean>(false);
  const [images, setimages] = useState<boolean>(false);
  return (
    <div className="bg-[#F8F9FB] md:py-4 md:pl-16 mb-4 flex md:shadow-none shadow-lg">
      <div className="border-r-[1px] shadow-md py-2 px-4 md:hidden flex justify-between items-center mr-2 relative">
        <Badge className="absolute top-1 right-1 rounded-full p-1 h-5 w-5 flex justify-center items-center text-thin text-white bg-[#6250FF] border-0">
          2
        </Badge>
        <Button
          variant={"destructive"}
          className="py-2 px-3 border border-[#878CF2] bg-[#EFEFFF] text-[#5359EA] font-bold"
        >
          <VscSettings />
        </Button>
      </div>
      <div className=" flex space-x-3 overflow-y-auto py-4 md:py-0">
        {buttons.map((button) => (
          <div className="bg-white rounded-3xl space-x-1" key={button.name}>
            <Button
              variant={"default"}
              className="bg-white border rounded-3xl py-1"
              disabled={
                (button.name === "With imgs" && images === true) ||
                (verified === true && button.name === "Verified")
              }
            >
              <div className="flex items-center space-x-1 text-[#4B5563] text-sm">
                {button.icon !== null && button.icon}
                <div>{button.name}</div>
                {button.sideicon !== null && button.sideicon}
              </div>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buttons;
