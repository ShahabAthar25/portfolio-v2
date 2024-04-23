"use client";

import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaYoutube, FaGoogle } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/Drawer";
import Link from "next/link";

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <Drawer open={open} onOpenChange={setOpen}>
        <div className="px-5 py-7 flex justify-between items-center bg-transparent">
          <div>
            <h1 className="font-oswald font-bold text-[22px] text-text select-none cursor-default drop-shadow-glow shadow-2xl">
              Shahab Athar
            </h1>
          </div>
          <DrawerTrigger className="outline-none">
            <div className="p-1 cursor-pointer hover:bg-gray-700 rounded-lg duration-200 text-white outline-none drop-shadow-glow shadow-2xl">
              <CiMenuBurger className="text-3xl" />
            </div>
          </DrawerTrigger>
        </div>
        <DrawerContent>
          <div className="fixed bottom-0 left-0 w-full h-[60vh] rounded-t-[1.6rem] bg-background flex items-center flex-col z-50 shadow-inner shadow-shade-background">
            <div className="my-5 flex-[0.2]">
              <h1 className="font-oswald font-bold text-[25px] text-primary select-none cursor-default">
                Shahab Athar
              </h1>
              <div className="flex justify-center">
                <hr className="w-[60%]" />
              </div>
            </div>
            <div className="flex-[0.6] flex items-center flex-col space-y-2">
              <Link
                href="#"
                className="no-underline text-text hover:shadow-2xl hover:rounded-full hover:shadow-white text-[20px] hover:text-colorTxt duration-200"
              >
                Projects
              </Link>
              <Link
                href="#"
                className="no-underline text-text hover:shadow-2xl hover:rounded-full hover:shadow-white text-[20px] hover:text-colorTxt duration-200"
              >
                Skills
              </Link>
              <Link
                href="#"
                className="no-underline text-text hover:shadow-2xl hover:rounded-full hover:shadow-white text-[20px] hover:text-colorTxt duration-200"
              >
                About
              </Link>
              <Link
                href="#"
                className="no-underline text-text hover:shadow-2xl hover:rounded-full hover:shadow-white text-[20px] hover:text-colorTxt duration-200"
              >
                Contact
              </Link>
            </div>
            <div className="flex-[0.2] flex space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="h-6">
                    <FaGithub className="text-primary text-4xl cursor-pointer py-2 hover:bg-gray-600 rounded-full duration-200" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-background border-none shadow-2xl shadow-white text-white">
                    <p>Github</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="h-6">
                    <FaLinkedin className="text-primary text-4xl cursor-pointer hover:bg-gray-600 py-2 rounded-full duration-200" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-background border-none shadow-2xl shadow-white text-white">
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="h-6">
                    <FaYoutube className="text-primary text-4xl cursor-pointer hover:bg-gray-600 py-2 rounded-full duration-200" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-background border-none shadow-2xl shadow-white text-white">
                    <p>Youtube</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="h-6">
                    <FaGoogle className="text-primary text-4xl cursor-pointer hover:bg-gray-600 py-2 rounded-full duration-200" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-background border-none shadow-2xl shadow-white text-white">
                    <p>Email (Click to copy)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
