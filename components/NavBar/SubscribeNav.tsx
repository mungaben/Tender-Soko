import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const SubscribeNav = () => {
  return (
    <div>
      <Button>
        <Link href="/Subscribe">Subscribe</Link>
      </Button>
    </div>
  );
};

export default SubscribeNav;
