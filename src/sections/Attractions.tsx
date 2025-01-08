import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import attractionsData from "@assets/data/attractions.json"; // Import the JSON data
import Modal from "@components/Modal"; // Import the Modal component
import AsyncImage from "../components/AsyncImage";

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
        <div className="section relative pt-24 xl:pt-16 px-8 sm:px-16 md:px-32 lg:px-64 min-h-screen flex flex-col items-center justify-center gap-0">
            <div className="absolute inset-0 z-0 bg-white"></div>
            <div
                ref={headerRef}
                className="relative z-10 text-center opacity-0"
            >
                <h2 className="text-3xl md:text-5xl py-0 font-bold text-black z-10 centa-one mb-6">
                    Places of Attraction
                </h2>
                <p className="text-gray-600 z-10">
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
                                className="card z-20 w-72 sm:w-96 shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                                onClick={() => handleCardClick(attraction)}
                            >
                                <figure>
                                    <AsyncImage
                                        section="attractions"
                                        name={attraction.name}
                                        id="thumbnail"
                                        alt={attraction.name + " Thumbnail"}
                                        className="w-full h-40 xs:h-48 object-cover"
                                    />
                                </figure>
                                <div className="card-body h-auto">
                                    <h3 className="text-xl font-bold mb-2 text-gray-700">
                                        {attraction.name}
                                    </h3>
                                    <p className="text-gray-400">
                                        {attraction.description}
                                    </p>
                                    <p className="text-gray-600 mt-4">
                                        <span className="text-yellow-500">
                                            {[...Array(5)].map((_, i) => (
                                                <i
                                                    key={i}
                                                    className={`fa-solid fa-star ${
                                                        i <
                                                        Math.floor(
                                                            attraction.rating
                                                        )
                                                            ? "text-yellow-500"
                                                            : i <
                                                              Math.ceil(
                                                                  attraction.rating
                                                              )
                                                            ? "text-yellow-500"
                                                            : "text-gray-300"
                                                    }`}
                                                    style={{
                                                        clipPath:
                                                            i <
                                                            Math.floor(
                                                                attraction.rating
                                                            )
                                                                ? "none"
                                                                : i <
                                                                  Math.ceil(
                                                                      attraction.rating
                                                                  )
                                                                ? `inset(0 ${
                                                                      100 -
                                                                      (attraction.rating %
                                                                          1) *
                                                                          100
                                                                  }% 0 0)`
                                                                : "none",
                                                    }}
                                                />
                                            ))}
                                        </span>{" "}
                                        ({attraction.rating})
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="absolute inset-0 top-0 right-0 w-full h-full">
                        <div className="flex w-full h-full items-center justify-between">
                            <button
                                onClick={handlePrev}
                                className="btn mt-4 ms-2 w-8 z-50  rounded-md border-none bg-black text-white hover:bg-red-500 p-2 flex items-center justify-center"
                            >
                                <i className="fa-solid fa-chevron-left"></i>
                            </button>
                            <button
                                onClick={handleNext}
                                className="btn mt-4 me-2 w-8 z-50 rounded-md border-none bg-black text-white hover:bg-red-500 p-2 flex items-center justify-center"
                            >
                                <i className="fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {selectedAttraction && (
                <Modal
                    item={selectedAttraction}
                    section="attractions"
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default Attractions;
