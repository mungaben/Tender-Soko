
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
import { Check } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from "@/components/ui/label"




const cardDesc1 = "Subscribe to TendersOnTime to receive daily email alerts on Published Government Tenders worldwide."
const CardDesc2 = " TendersOnTime has different subscription plans to suit all"
const CardDesc3 = " We track eProcurement notices, RFP, RFQ, RFI, government tenders, global etenders and send you daily email alerts for your products and targeted geography"

const procurementData = [
    {
        description: "Daily tracking of 600,000+ purchasers from across the Globe",
    },
    {
        description: "Scanning more than 500 Newspapers especially from Africa & Asia",
    },
    {
        description: "Daily addition of 50,000+ selected and valuable opportunities from all across the Globe",
    },
    {
        description: "Translation of tender notices published in other languages",
    },
    {
        description: "Classification of Business Opportunities based on Common Procurement Vocabulary (CPV)",
    },
    {
        description: "Monthly addition of 100,000+ Contract Awards from across the Globe",
    },
];


const CardSubscriptionDesc = () => {
    return (
        <div className=' w-full'>

            <Card className=' w-full shadow-none  rounded-none border-none'>
                <CardHeader>
                    <CardTitle>
                        <h1 >
                            <Label>
                                Subscription Benefits
                            </Label>

                        </h1>
                    </CardTitle>
                    <CardDescription>
                        <div className=' flex text-start items-start md:items-center flex-col justify-center gap-4'>
                            <h3 className=' text-start'>
                                {cardDesc1}.
                            </h3>
                            <h3 className=' text-start'>
                                {CardDesc2}.
                            </h3>
                            <h3 className=' text-start'>
                                {CardDesc3}.
                            </h3>
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className=' text-xs'>
                        {
                            procurementData.map((item, index) => <div key={index}>
                                <div  className=' flex flex-row items-center justify-center  pl-2 space-x-4'>


                                    <p className='text-xs leading-snug  text-start  text-gray-500/50 '>{index + 1}. {item.description}</p></div>

                            </div>
                            )
                        }
                    </div>
                </CardContent>

            </Card>


        </div>
    )
}

export default CardSubscriptionDesc