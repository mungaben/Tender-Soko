import { client } from "@/sanity/lib/client";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SewingPinFilledIcon, SketchLogoIcon } from "@radix-ui/react-icons";
import { Tender } from "../lib/utils/tendersSumTypes";
import { LuBaggageClaim } from "react-icons/lu"
import { MdDateRange } from "react-icons/md"
import { TbCategory2 } from "react-icons/tb"

const Tendersum = async () => {
    const tenders = await client.fetch(
        `
        *[_type == "tender"]|order(closingDate desc ){
            _id,
            sponsored,
            title,
            referenceNumber,
            closingDate,
            category,
            sector,
            company
            

        }
        `
    );
    console.log("tenders", tenders);

    return (
        <div className=" flex flex-col gap-5 overflow-y-scroll mx-5 max-h-[80dvh] justify-center items-center">
            {tenders.map((data: Tender, index: any) => (
                <Card className="  ">
                    <div >
                        {data.sponsored ? (
                            <div className=" flex items-center justify-start md:ml-4 md:p-3 mx-8  ">
                        
                                <SketchLogoIcon className=" mx-2"/> <span className=" "> sponsored</span>
                            </div>
                        ) : (
                            <div>

                                <SewingPinFilledIcon /> <span></span>
                            </div>
                        )}
                    </div>
                    <CardHeader className=" flex justify-center mx-5">
                        <CardTitle>
                        <div className="  hover:underline hover:text-sky-600 gap-4">
                            {data.title}
                        </div>

                        </CardTitle>
                    </CardHeader>
                    <CardContent className=" ">
                        
                        <div className=" flex md:flex-row flex-col md:justify-between">
                        <div className=" flex flex-row md:justify-between">
                                <span className=" flex justify-center flex-row items-center mx-2" >
                                    <LuBaggageClaim  className="mx-2" />
                                    Company:
                                </span>
                                {data._id}
                            </div>
                            <div className=" flex flex-row md:justify-between">
                                <span className=" flex justify-center flex-row items-center mx-2" >

                                    <MdDateRange className=" mx-2" />
                                    Closing Date
                                </span>
                                {data.closingDate}
                            </div>

                        </div>
                        <div className=" flex flex-col md:flex-row md:justify-between space-x-4 gap-10 ">
                            <div className=" flex flex-row md:justify-between">
                                <span className=" flex justify-center flex-row items-center mx-2" >
                                    <TbCategory2 className=" mx-2" />Category :</span>
                                {data.category}
                            </div>
                            <div className=" flex flex-row md:justify-between">
                                <span className=" flex justify-center flex-row items-center mx-2" >
                                    sector :
                                </span>
                                {data.sector}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Tendersum;
