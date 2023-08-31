"use client";

import React, { useState } from "react";
import Search from "./Search";
import LogoImage from "./LogoImage";
import TrialMenuBar from "./TrialMenuBar";
import TenderDrop from "./TenderDrop";
import SubscribeNav from "./SubscribeNav";
import NavUser from "./NavUser";
import { DragHandleHorizontalIcon } from "@radix-ui/react-icons";
import { Toggle } from "../ui/toggle";
import { motion } from "framer-motion";
const MainNavBar = () => {
  
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    console.log("toggle");
    setToggle((prev)=>!prev)
  };
  return (
    <div className=" w-full fixed top-0 mb-5 z-50 ">
      <div className=" flex md:flex-row  flex-col md:justify-between lg:justify-around justify-start  md:mx-4  ">
        {/* logo */}
        <div className="flex justify-around items-center   md:flex-row flex-row mx-5 ">
          {/* <LogoImage /> */}
          <div className=" flex justify-center items-center  capitalize font-bold underline  mt-4">
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
        {
       toggle &&

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
          className={`flex md:flex-row flex-col justify-between md:space-x-2 ${toggle ? "flex" : "hidden"}}`}
        >
     
            <div
              className={`flex md:flex-row flex-col justify-between md:space-x-2 space-y-5 ml-5 md:ml-0  `}
            >
              <div className=" flex justify-center items-start   mt-4 ">
                <Search />
              </div>
              <div className=" flex justify-center items-center">
                <TenderDrop />
              </div>
              <div className=" flex  justify-center items-center">
                <SubscribeNav />
              </div>

              <div className=" hidden  md:flex  md:justify-center items-center mx-4 ">
                <NavUser />
              </div>
            </div>
         
        </motion.div>
         }
      </div>
    </div>
  );
};

export default MainNavBar;
