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
        const currentIndex = slides.current.findIndex(
            (slide) => gsap.getProperty(slide, "xPercent") === 0
        );
        const prevIndex =
            (currentIndex - 1 + slides.current.length) % slides.current.length;
        animateSlides(prevIndex);
    };

    const handleNext = () => {
        const currentIndex = slides.current.findIndex(
            (slide) => gsap.getProperty(slide, "xPercent") === 0
        );
        const nextIndex = (currentIndex + 1) % slides.current.length;
        animateSlides(nextIndex);
    };

    const animateSlides = (index: number) => {
        const currentIndex = slides.current.findIndex(
            (slide) => gsap.getProperty(slide, "xPercent") === 0
        );
        gsap.timeline()
            .to(slides.current[currentIndex], {
                xPercent: -100,
                duration: 1,
                ease: "power2.inOut",
            })
            .set(slides.current[currentIndex], { xPercent: 100 })
            .to(slides.current[index], {
                xPercent: 0,
                duration: 1,
                ease: "power2.inOut",
            });
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
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
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
            </div>
        </div>
    );
};

export default Hotel;
