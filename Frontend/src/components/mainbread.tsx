"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FaEdit } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

function mainer() {
  return (
    <div className="px-16 mb-4 md:block hidden">
      <div className="text-xs">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-xs">
                <div className="flex flex-row items-center space-x-2">
                  <IoHomeOutline />
                  <div>Home</div>
                </div>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-xs">
                {" "}
                <div className="flex flex-row items-center space-x-2">
                  <IoMdDocument />
                  <div>Projects</div>
                </div>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-xs">
                <div className="flex flex-row items-center space-x-2">
                  <FaEdit />
                  <div>Task 1</div>
                </div>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-xs">
                <div className="flex flex-row items-center space-x-2 text-green-700">
                  <FaEdit />
                  <div>Task 2</div>
                </div>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}

export default mainer;
