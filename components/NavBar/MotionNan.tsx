"use client";

import { motion } from "framer-motion";
import React from "react";
// receive children props
type MotionNanProps = {
  children: React.ReactNode;
  toggle: boolean;
};

const MotionNan = ({ children,toggle }: MotionNanProps) => {
  return  <motion.div
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
       
       {children}
       
             </motion.div>;
};

export default MotionNan;
