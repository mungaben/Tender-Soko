





// post request

import { FormSchema } from "@/lib/Search/FormTypes";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    const body =await request.json()

    console.log("body",body);

    const result=FormSchema.safeParse(body)
    if(!result.success){
        console.log("error",result.error);
        
        return NextResponse.json({
            message:"error",
            body:result.error,
            statusbar:400
        })
    }



    return NextResponse.json({
        message:"success",
        body,
        statusbar:200
    })
    


}