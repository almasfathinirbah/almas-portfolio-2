import React, { useCallback, useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

import AnimatedText from "./AnimatedText";
import Image from "next/image";

// sample data from various category
const slides = [
  {
    img: "/assets/testimonial/img-1.png",
    name: "Emma Johnson",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid, eaque, esse expedita impedit voluptas adipisci consequuntur ipsam similique consequatur officiis hic pariatur fugit vero temporibus incidunt magni facilis dicta?",
  },
  {
    img: "/assets/testimonial/img-2.png",
    name: "Sophia Martinez",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid, eaque, esse expedita impedit voluptas adipisci consequuntur ipsam similique consequatur officiis hic pariatur fugit vero temporibus incidunt magni facilis dicta?",
  },
  {
    img: "/assets/testimonial/img-3.png",
    name: "James Smith",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid, eaque, esse expedita impedit voluptas adipisci consequuntur ipsam similique consequatur officiis hic pariatur fugit vero temporibus incidunt magni facilis dicta?",
  },
  {
    img: "/assets/testimonial/img-4.png",
    name: "Olivia Williams",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid, eaque, esse expedita impedit voluptas adipisci consequuntur ipsam similique consequatur officiis hic pariatur fugit vero temporibus incidunt magni facilis dicta?",
  },
  {
    img: "/assets/testimonial/img-5.png",
    name: "Isabella Brown",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid, eaque, esse expedita impedit voluptas adipisci consequuntur ipsam similique consequatur officiis hic pariatur fugit vero temporibus incidunt magni facilis dicta?",
  },
  {
    img: "/assets/testimonial/img-6.png",
    name: "Liam Davis",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid, eaque, esse expedita impedit voluptas adipisci consequuntur ipsam similique consequatur officiis hic pariatur fugit vero temporibus incidunt magni facilis dicta?",
  },
];

const Testimonial = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  // state to store the active slide index
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className="py-24 overflow-hidden">
      <div className="container mx-auto">
        <AnimatedText
          text="What Clients Say"
          textStyles="h2 mb-[30px] xl:mb-[60px] text-center"
        />
        <div className="flex flex-col lg:flex-row gap-12">
          {/* slider info */}
          <div className="w-max xl:w-[600px] flex flex-col justify-center items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0">
            <ImQuotesLeft className="text-9xl text-accent/20 leading-none mb-4" />
            <h3 className="h3 mb-2">{slides[activeSlide].name}</h3>
            <p className="mb-8 max-w-[360px]">{slides[activeSlide].message}</p>
            {/* slider btns */}
            <div className="flex gap-3">
              <button
                onClick={handlePrevious}
                className="text-2xl bg-accent w-[48px] h-[48px] text-white rounded-full flex items-center justify-center hover:bg-accent-hover transition-all duration-300"
              >
                <FiArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="text-2xl bg-accent w-[48px] h-[48px] text-white rounded-full flex items-center justify-center hover:bg-accent-hover transition-all duration-300"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          {/* slider */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            onSwiper={setSwiperRef}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)} // update the active slide index
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full h-[400px] xl:h-[500px]"
          >
            {slides.map((slide, index) => {
              return (
                <SwiperSlide key={index} className="h-full select-none">
                  <div className="w-full h-full flex items-end">
                    <div
                      className={`${
                        activeSlide === index ? "h-full" : "h-[240px]"
                      } flex items-end rounded-2xl overflow-hidden transition-all duration-500 relative w-full`}
                    >
                      <Image
                        src={slide.img}
                        className="object-cover object-center"
                        quality={100}
                        fill
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;