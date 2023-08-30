


"use client"

import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CardDemo } from './CardDemo'
import { motion, useScroll } from 'framer-motion'


const PackageCard = () => {
  const notifications = [
    {
      title: "Unlimited Website Access",
      description: "Access to the website 24/7",
    },
    {
      title: "Unlimited Tenders Download",
      description: "Download as many tenders as you need",
    },
    {
      title: "Unlimited Keyword Search",
      description: "Search for tenders using keywords without limits",
    },
    {
      title: "Access to Archive Tenders",
      description: "Access to historical tender information",
    },
    {
      title: "Number of Accounts-1",
      description: "One user account included",
    },
    {
      title: "Email Id For Tender Alerts-1",
      description: "Receive tender alerts via email",
    },
    {
      title: "Dashboard",
      description: "A personalized dashboard for tracking tenders",
    },
    {
      title: "24*7 Customer Support",
      description: "Round-the-clock customer assistance",
    },
    {
      title: "Dedicated Key Account Manager",
      description: "A dedicated manager for your account",
    },
    {
      title: "Contract Awards",
      description: "Information about contract awards",
    },
    {
      title: "Projects",
      description: "Details on projects related to tenders",
    },
    {
      title: "Bid Consultancy Services",
      description: "Additional consultancy services for bids",
    },

  ]
  const { scrollYProgress } = useScroll();
  return (
    <div className=' h-[80vh]  overflow-x-auto  ' >





      <div className='  overflow-scroll mx-auto grid gap-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-center items-center 2xl:grid-cols-4 first:ml-4 place-content-center justify-items-center  pt-10'>


        {/* <div className=' bg-red-400  mt-0 fixed w-full  mx-auto top-0' >
          <motion.div
            className=" w-full h-2 bg-red-800"
            style={{ scaleX: scrollYProgress }}
          />

        </div> */}


        <CardDemo notifications={notifications} className=' flex flex-col items-center justify-center w-[60dvw] md:w-[35dvw] lg:w-[20vw] xl:-w-[15dvw] ' />
        <CardDemo notifications={notifications} className=' flex flex-col items-center justify-center  w-[60dvw] md:w-[35dvw] lg:w-[20vw] xl:-w-[15dvw]   ' />
        <CardDemo notifications={notifications} className=' flex flex-col items-center justify-center w-[60dvw] md:w-[35dvw] lg:w-[20vw] xl:-w-[15dvw]   ' />
        <CardDemo notifications={notifications} className=' flex flex-col items-center justify-center w-[60dvw] md:w-[35dvw] lg:w-[20vw] xl:-w-[15dvw]  ' />



      </div>

    </div>

  )
}

export default PackageCard