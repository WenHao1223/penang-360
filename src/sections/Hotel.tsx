import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Hotel = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const slides = useRef<HTMLElement[]>([]);

    useEffect(() => {
        gsap.to(headerRef.current, {
            y: -50,
            opacity: 1,
            duration: 1,
            onComplete: () => {
                gsap.to(carouselRef.current, {
                    opacity: 1,
                    duration: 1,
                });
            },
        });

        slides.current = gsap.utils.toArray<HTMLElement>(".carousel-item");
    }, []);

    const handlePrev = () => {
        const swiper = document.querySelector('.swiper')?.swiper;
        swiper?.slidePrev();
    };

    const handleNext = () => {
        const swiper = document.querySelector('.swiper')?.swiper;
        swiper?.slideNext();
    };

    return (
        <div className="section relative pt-10 px-16 md:px-32 lg:px-64 min-h-screen flex flex-col items-center justify-center gap-0">
            <div className="absolute inset-0 z-0 bg-white"></div>
            <div
                ref={headerRef}
                className="relative z-10 text-center opacity-0"
            >
                <h2 className="text-3xl md:text-5xl md:py-0 py-5 font-bold text-black z-10 centa-one mb-6">
                    Hotel
                </h2>
                <p className="text-gray-600 z-10">
                    Explore our hotel and learn more about our services and how
                    we can help you.
                </p>
            </div>
            <div
                ref={carouselRef}
                className="relative z-10 w-full h-96 overflow-hidden"
            >
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                </Swiper>
                <button onClick={handlePrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 border-2 border-white hover:bg-white hover:text-black p-2 rounded-full shadow-md z-20">
                    <i className="fa fa-chevron-left"></i>
                </button>
                <button onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 border-2 border-white hover:bg-white hover:text-black p-2 rounded-full shadow-md z-20">
                    <i className="fa fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Hotel;
