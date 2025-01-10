import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import hotelsData from "@assets/data/hotels.json";
import HotelCard from "@components/HotelCard";
import Modal from "@components/Modal";

interface Hotel {
    name: string;
    description: string;
    operationHours: {
        checkIn: string;
        checkOut: string;
    };
    phoneNumber: string;
    address: string;
    city: string;
    rating: number;
    maps: string;
    facilities: string[];
    avgPricePerNight: number;
    topRatedComment: string;
}

const Hotel = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

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

        setHotels(hotelsData);
    }, []);

    const handlePrev = () => {
        const swiper = (document.querySelector(".swiper") as any)?.swiper;
        swiper?.slidePrev();
    };

    const handleNext = () => {
        const swiper = (document.querySelector(".swiper") as any)?.swiper;
        swiper?.slideNext();
    };

    const handleOpenModal = (hotel: Hotel) => {
        setSelectedHotel(hotel);
        document.body.classList.add("overflow-hidden");
    };

    const handleCloseModal = () => {
        setSelectedHotel(null);
        document.body.classList.remove("overflow-hidden");
    };

    return (
        <div
            id="hotel"
            className="section relative pt-24 xl:pt-16 px-4 sm:px-16 md:px-32 lg:px-64 min-h-screen flex flex-col items-center justify-center gap-0"
        >
            <div className="absolute inset-0 z-0 bg-white"></div>
            <div ref={headerRef} className="relative text-center opacity-0">
                <h2 className="text-2xl sm:text-3xl md:text-5xl py-0 font-bold text-black centa-one mb-2 sm:mb-6">
                    Hotel
                </h2>
                <p className="text-sm md:text-md text-gray-600">
                    Explore a selection of hotels, each offering unique comfort
                    and services to enhance your stay.
                </p>
                <p className="text-gray-600 mt-4 text-sm">
                    Click or hover on a card to view more details.
                </p>
            </div>
            <div
                ref={carouselRef}
                className="relative w-full h-[28rem] overflow-hidden"
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
                    pagination={{
                        clickable: true,
                        el: ".swiper-pagination",
                    }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {hotels.map((hotel, index) => (
                        <SwiperSlide
                            key={index}
                            className="justify-center align-middle flex"
                        >
                            <HotelCard
                                hotel={hotel}
                                handleOpenModal={handleOpenModal}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    onClick={handlePrev}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 border-2 text-white border-white hover:bg-white hover:text-black p-2 sm:p-3 rounded-full shadow-md z-20"
                >
                    <i className="fa fa-chevron-left"></i>
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 border-2 text-white border-white hover:bg-white hover:text-black p-2 sm:p-3 rounded-full shadow-md z-20"
                >
                    <i className="fa fa-chevron-right"></i>
                </button>
                <div className="swiper-pagination absolute bottom-4 w-full text-center"></div>
                {selectedHotel && (
                    <Modal
                        item={selectedHotel}
                        section="hotels"
                        onClose={handleCloseModal}
                    />
                )}
            </div>
        </div>
    );
};

export default Hotel;
