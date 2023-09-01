"use client";

import { DragHandleHorizontalIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { Toggle } from "../ui/toggle";
import NavUser from "./NavUser";
import Search from "./Search";
import SubscribeNav from "./SubscribeNav";
import TenderDrop from "./TenderDrop";
import { usePathname } from "next/navigation";
const MainNavBar = () => {
  const [toggle, setToggle] = useState(true);

  const path=usePathname()
  console.log(path);

  const handleToggle = () => {
    console.log("toggle");
    setToggle((prev) => !prev);
  };
  return (
    <div className={`w-full fixed top-0 mb-5 z-50 ${path === "/SanityStudio" ? "hidden" : ""}`}>
      <div className=" flex md:flex-row  flex-col md:justify-between lg:justify- justify-start  md:mx-4  ">
        {/* logo */}
        <div className="flex  md:items-start  justify-between    md:flex-row flex-row mx-5 ">
          {/* <LogoImage /> */}
          <div className=" flex justify-start items-start  capitalize font-bold underline  mt-4">
            <h1 className=" ">TradersLegit</h1>
          </div>

          {
            <div
              className=" md:hidden flex md:justify-center items-center ml-5 mt-4"
              onClick={handleToggle}
            >
              <Toggle variant="outline" aria-label="Toggle italic">
                <DragHandleHorizontalIcon />
              </Toggle>
            </div>
          }
        </div>
        {toggle && (
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className={`flex md:flex-row lg:flex-1 flex-col justify-center lg:justify-evenly md:space-x-2  ${
              toggle ? "flex" : "hidden"
            }}`}
          >
            <div
              className={`flex md:flex-row flex-col justify-between lg:justify-around lg:flex-1 md:space-x-2 space-y-5 ml-5 md:ml-0  `}
            >
              <div className=" flex justify-center items-start     mt-4 ">
                <Search />
              </div>
              <div className=" md:flex-row flex-col flex justify-around items-center lg:gap-20   ">
                <div className=" md:hidden  lg:flex justify-center md:w-full  items-center">
                  <TenderDrop />
                </div>
                <div className=" flex  md:w-full mt- justify-center items-center">
                  <SubscribeNav />
                </div>

                <div className=" hidden  md:flex md:w-full   md:justify-center items-center mx-4 ">
                  <NavUser />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MainNavBar;
