import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import attractionsData from "@assets/data/attractions.json"; // Import the JSON data
import AttractionModal from "@components/AttractionModal"; // Import the AttractionModal component

interface AttractionType {
    name: string;
    description: string;
    operationHours: {
        opening: string;
        closing: string;
    };
    phoneNumber: string;
    address: string;
    city: string;
    websiteLink: string;
    rating: number;
}

const Attractions: React.FC = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [selectedAttraction, setSelectedAttraction] =
        useState<AttractionType | null>(null);

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
    }, []);

    const handlePrev = () => {
        const carousel = document.querySelector(".carousel");
        carousel?.scrollBy({ left: -300, behavior: "smooth" });
    };

    const handleNext = () => {
        const carousel = document.querySelector(".carousel");
        carousel?.scrollBy({ left: 300, behavior: "smooth" });
    };

    const handleCardClick = (attraction: AttractionType) => {
        setSelectedAttraction(attraction);
    };

    const handleCloseModal = () => {
        setSelectedAttraction(null);
    };

    return (
        <div className="section relative pt-10 px-16 md:px-32 lg:px-64 min-h-screen flex flex-col items-center justify-center gap-0">
            <div className="absolute inset-0 z-0 bg-white"></div>
            <div
                ref={headerRef}
                className="relative z-10 text-center opacity-0"
            >
                <h2 className="text-3xl md:text-5xl md:py-0 py-5 font-bold text-black z-10 centa-one mb-6">
                    Places of Attraction
                </h2>
                <p className="text-gray-600 text-sm centa-one z-10">
                    Explore our attractions and learn more about our services
                    and how we can help you.
                </p>
            </div>
            <div
                ref={carouselRef}
                className="relative z-10 opacity-0 max-w-full xl:max-w-5xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl xs:max-w-sm min-w-[300px]"
            >
                <div className="carousel carousel-center w-full rounded-box space-x-4 pb-4">
                    {attractionsData.map((attraction: AttractionType) => (
                        <div key={attraction.name} className="carousel-item">
                            <div
                                className="card w-96 shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                                onClick={() => handleCardClick(attraction)}
                            >
                                <figure>
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt={attraction.name}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h3 className="text-xl font-bold mb-2 text-gray-700">
                                        {attraction.name}
                                    </h3>
                                    <p className="text-gray-400">
                                        {attraction.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={handlePrev}
                        className="btn mt-4 w-16 rounded-full border-2 border-black bg-white text-black hover:text-white p-4 flex items-center justify-center"
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button
                        onClick={handleNext}
                        className="btn mt-4 w-16 rounded-full border-2 border-black bg-white text-black hover:text-white p-4 flex items-center justify-center"
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            {selectedAttraction && (
                <AttractionModal
                    attraction={selectedAttraction}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default Attractions;
