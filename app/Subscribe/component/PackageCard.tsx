




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
  return (
    <div className=' h-[80vh] overflow-scroll ' >



      <div className='  mx-auto grid gap-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center items-center 2xl:grid-cols-3 first:ml-4 place-content-center justify-items-center '>




        <CardDemo notifications={notifications} className=' flex flex-col items-center justify-center w-[75vw] md:w-[40vw] lg:w-[25vw] xl:-w-[20vw] ' />
        <CardDemo notifications={notifications} className=' flex flex-col items-center justify-center  w-[75vw] md:w-[40vw] lg:w-[25vw] xl:-w-[20vw]   ' />
        <CardDemo notifications={notifications} className=' flex flex-col items-center justify-center w-[75vw] md:w-[40vw] lg:w-[25vw] xl:-w-[20vw]   ' />
        <CardDemo notifications={notifications} className=' flex flex-col items-center justify-center w-[75vw] md:w-[40vw] lg:w-[25vw] xl:-w-[20vw]  ' />



      </div>

    </div>

  )
}

export default PackageCard