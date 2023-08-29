
"use client"
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";

type Props = { options?: EmblaOptionsType } & PropsWithChildren;
import React from 'react'

const TestMonialsSilder = ({ children, options }: Props) => {

    const [emblaRef] = useEmblaCarousel({
        slidesToScroll: 1,
        align: "start",
        ...options,
      });
  return (
    <div>
       <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-10">{children}</div>
    </div>
    </div>
  )
}

export default TestMonialsSilder