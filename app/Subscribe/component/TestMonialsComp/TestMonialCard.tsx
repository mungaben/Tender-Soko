

"use client"


import React from 'react'


import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from 'swiper/react';

type Props = {
  title: string;
  imgSrc: string;
  content: string;
  author: string;
};


const TestMonialCard =(props: Props) => {
  return (
    <SwiperSlide className="py-4 px-8 bg-white shadow-lg rounded-lg my-20">
       {({ isActive }) => (
        <div>
          {isActive ? 'active' : 'not active'}

        
      <div className="flex justify-center md:justify-end -mt-16">
        <Image
          alt={props.author}
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          height={80}
          width={80}
          src={props.imgSrc}
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{props.title}</h2>
        <p className="mt-2 text-gray-600">{props.content}</p>
      </div>
      <div className="flex justify-end mt-4">
        <Link href="#" className="text-xl font-medium text-indigo-500">
          {props.author}
        </Link>
      </div>
      </div>
        )}
    </SwiperSlide>
  )
}

export default TestMonialCard