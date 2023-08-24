"use client";

import { Button } from "@/components/ui/button";
import { useAuth, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const LoginBtn = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  // if  user is signed in send to commingsoon page
  if (isSignedIn) {
    return (
      <div className=" w-full justify-center items-center flex mt-10 mb-10">
        <Button asChild>
          <Link href="/CheckSoon">check it</Link>
        </Button>
      </div>
    );
  }


  return (
    <div className=" w-full justify-center items-center flex mt-10 mb-10">
      <Button asChild>
        <Link href="/sign-up">Join</Link>
      </Button>
    </div>
  );
};

export default LoginBtn;
