"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { FormSchema } from "@/lib/Search/FormTypes";
import { log } from "console";

const Search = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const OnSubmit = async (data: z.infer<typeof FormSchema>) => {
    axios
      .post(
        "/api/SignUp",
        data
      )
      .then((res) => {
        if (res.data.message === "error") {
          console.log(res.data.body.issues[0].message);

          form.setError("search", {
            type: "server",
            message: res.data.body.issues[0].message,
          });
        }
      })
     
      .catch((err) => {
        console.log(err);
        if (err.response) {
          form.setError("search", {
            type: "server",
            message: "server error",
          });
        }
  
      });
      
  };

  return (
    <div className=" flex justify-center items-center   ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(OnSubmit)}
          className=" space-y-6  flex flex-row justify-center items-center  flex-1    w-full"
        >
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormControl className=" w-full  flex flex-1  min-w-full">
                  <Input placeholder=" Search Tenders ..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default Search;
