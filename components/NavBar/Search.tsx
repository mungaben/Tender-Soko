


"use client"


import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

const Search = () => {




    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {

        console.log(data);
        
       
    }

    return (
        <div className=' flex justify-center items-center   '>




            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6  flex flex-row justify-center items-center  flex-1    w-full">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                            
                                <FormControl className=' w-full  flex flex-1  min-w-full'  >
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                              
                             
                            </FormItem>
                        )}
                    />
                   
                </form>
            </Form>

        </div>
    )
}

export default Search
