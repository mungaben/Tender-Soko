
"use client"
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";

type Props = { options?: EmblaOptionsType } & PropsWithChildren;
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TestMonialsSilder = ({ children, options }: Props) => {

  const [emblaRef] = useEmblaCarousel({ loop: false })
  return (
    <div>
      <Swiper
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={3}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-10">{children}</div>
        </div>
      </Swiper>
    </div>
  )
}

export default TestMonialsSilder