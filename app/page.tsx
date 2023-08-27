

"use client"
import Image from "next/image";
import LoginBtn from "./components/LoginBtn";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <motion.div className="z-10 max-w-5xl w-full  items-center justify-between font-mono text-sm lg:flex flex-col gap-10 "
        initial={{
          opacity: 0,
          x: -100,

        }}
        transition={{
          duration: 1,
          delay: 0.5,

        }}


        animate={{
          opacity: 1,
          x: 0,
        }}
      >
        <div className=" justify-center items-center flex w-full flex-col gap-10">
          <div className="  underline  md:text-9xl text-4xl text-center transition-all duration-500 delay-700 ">
            <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-primary/10 via-rose-600/100 to-destructive/50">
              Tender Legit
            </h1>

          </div>
          <div className=" leading-10 text-6xl">
            <h2 className=" text-center">coming soon</h2>
          </div>
        </div>

        <div className=" mt-20 flex flex-col justify-center items-center group   ">
          <div className="">
            <h1>join the wait list</h1>
          </div>

          <div className="flex justify-center items-center w-full group-hover:scale-110">
            {/* clerk sign in redirect  */}

            <LoginBtn />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
