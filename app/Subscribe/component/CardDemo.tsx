
"use client"


import { BellRing, Check, Mail } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { useRef, useState } from "react"
import { set } from "sanity"
import Buy from "./BuySubscription/Buy"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"


interface Notification {
    title: string;
    description: string;
}

interface CardDemoProps {
    className?: string;
    notifications: Notification[];
}

type CardProps = React.ComponentProps<typeof Card>

export function CardDemo({ className, notifications, ...props }: CardDemoProps) {
    const refs=useRef(null)

    const { ref,inView}=useInView({
        threshold:0.5
    })
    const [emailme, setemailme] = useState(false)


    const  handleEmails = () => {
        console.log("handleEmails")
        setemailme((prev)=>!prev)
      console.log(emailme);
      
    }


    const handleSubscribe = () => {
        console.log("handleSubscribe")
    
    }
    
    return (
        <motion.div ref={ref} 
        animate={{scale:1}}
        transition={{duration:1,delay:0.5}}
        className={` w-full flex justify-center`}
        >
        <Card className={cn("", className)} {...props}>
            <CardHeader>
                <CardTitle className=" uppercase">Standard</CardTitle>
                <CardDescription>
               
                    <h1>
                    Receive 4 benefits.

                    </h1>
                    
                    </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center  md:space-x-4 rounded-md border p-2">
                    <Mail />
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none  flex flex-wrap justify-center items-center">
                            Receive Updates
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Send notifications to email
                        </p>
                    </div>
                    <Switch onClick={handleEmails} />
                </div>
                <div className=" md:h-[300px] h-[200px] overflow-y-scroll">
                    {notifications.map((notification, index) => (
                        <div
                            key={index}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <Checkbox className="flex    " checked />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {notification.title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {notification.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full ml-4"  onClick={handleSubscribe}>
                    <Check className="mr-2 h-4 w-4" />  <Buy subscription="standnd" price="900"/>  </Button>
            </CardFooter>
        </Card>
       </motion.div>
    )
}
