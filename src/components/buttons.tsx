import React from "react";
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
  { icon: <IoMdPhotos />, name: "With Images", sideicon: null },
  { icon: <FaEyeSlash />, name: "Hide Shortlisted", sideicon: null },
  { icon: <IoLocationSharp />, name: "Localities", sideicon: <FaAngleDown /> },
  { icon: <FaChair />, name: "Amenities", sideicon: <FaAngleDown /> },
];

function Buttons() {
  return (
    <div className="bg-[#F8F9FB] py-4 pl-16 mb-4">
      <div className=" flex space-x-4">
        {buttons.map((button) => (
          <div className="bg-white rounded-2xl space-x-1">
            <Button
              variant={"default"}
              key={button.name}
              className="bg-white border rounded-2xl  "
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
