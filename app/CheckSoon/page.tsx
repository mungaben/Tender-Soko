"use client";
import React from "react";

import Countdown from "react-countdown";
import EmojiPicker from "emoji-picker-react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className=" w-full h-full flex justify-center items-center flex-col">
      <div className=" flex justify-center items-center w-full h-screen flex-col ">
        <div className=" h-full  flex justify-center items-center     ">
          <h1>coming soon</h1>
        </div>

        <div>
          {/* countdown */}
          <div className="flex justify-center items-center gap-8">
            {/* <Countdown date={Date.now() + 15*60*60} /> */}
            <Button variant="ghost">
              <p> &#128059;</p>
            </Button>
            <Button variant="secondary">
              <p> &#128058;</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
