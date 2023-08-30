

"use client"
import Image from "next/image";
import LoginBtn from "./components/LoginBtn";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  relative ">
      <div className=" absolute  w-full flex flex-col h-full z-20  gap-4">
        <div className=" shadow-lg  w-full h-1/2 rounded-b-full  "> 

        </div>
        <div className="  shadow-2xl -mt-10   w-full h-1/2 rounded-t-full bg-[url('/Shulemax2.png')] mb-5">
          {/* <Image
          src="/Shulemax2.png"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          className="rounded-t-full bg-[url('/Shulemax2.png')]"
          /> */}
 

        </div>

      </div>
      <motion.div className="max-w-5xl w-full   items-center justify-between font-mono text-sm lg:flex flex-col gap-10 z-30 mt-10 "
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
