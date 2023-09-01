"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const NavUser = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  console.log(user, isLoaded, isSignedIn);
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div>
      {user ? (
        <div>
          <div>
            <SignedIn>
              {/* Mount the UserButton component */}
              <UserButton />
            </SignedIn>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <Button>
              <SignedOut>
                {/* Signed out users get sign in button */}
                <SignInButton afterSignInUrl={pathname} />
              </SignedOut>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavUser;
