

"use client"



import React from 'react'


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"



type BuyProps = {
    subscription: string
    price: string

}

const Buy:React.FC<BuyProps> = ( { subscription,price}) => {
    return (
        <div>
            <Sheet>
                <SheetTrigger className=' italic'>Buy</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Subscribe</SheetTitle>
                        <SheetDescription>
                        
                        <p>

                            subscribe to {subscription} for {price}
                        </p>


                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default Buy