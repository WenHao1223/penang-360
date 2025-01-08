import React from "react";

import Komtar from "@assets/images/intro/komtar.webp";
import PenangStreet from "@assets/images/intro/penang-street.webp";

const Intro: React.FC = () => {
    return (
        <section
            className="section bg-white pt-24 px-4 sm:px-16 md:px-32 lg:px-64 text-gray-800 min-h-screen pb-16"
            id="intro"
        >
            <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                <div className="w-full md:w-1/2 order-3 md:order-1">
                    {/* <div className="flex"> */}
                    <div className="relative h-40 sm:h-96 md:h-80 xl:h-[60vh] overflow-hidden mb-6 mix-blend-multiply">
                        <div className="absolute inset-0 w-full h-full bg-white opacity-10 z-10 mix-blend-luminosity"></div>
                        <img
                            src={PenangStreet}
                            alt="Penang Street"
                            className="absolute inset-0 w-full h-full object-cover contrast-[0.95]"
                        />
                    </div>
                    <p className="text-gray-500 text-sm mt-2">
                        Many attractions are conveniently located within walking
                        distance of one another, making the streets of George
                        Town a delightful visual and cultural experience to
                        explore on foot. Alternatively, hop onto one of the
                        cheerfully decorated trishaws found at nearly every
                        corner and enjoy a charming tour of this unique city.
                    </p>
                    {/* </div> */}
                    <button className="btn mt-4 rounded-none text-white px-8 hover:text-black hover:bg-white">
                        Read More
                    </button>
                </div>
                <hr className="border-t-1 border-gray-300 order-2 opacity-100 md:opacity-0" />
                <div className="w-full md:w-1/2 order-1 md:order-3">
                    <h2 className="text-4xl font-bold centa-one">
                        George Town: Weaving Heritage and History
                    </h2>
                    <p className="text-gray-500 text-sm mt-4">
                        Penang's vibrant capital city, George Town, was
                        designated a UNESCO World Heritage Site in 2008.
                        Brimming with character, this captivating city is home
                        to an array of heritage buildings, historical landmarks,
                        and a lively blend of diverse cultures.
                    </p>
                    <div className="mt-6 relative h-40 sm:h-96 md:h-80 xl:h-[60vh] overflow-hidden">
                        <div className="absolute inset-0 w-full h-full bg-white opacity-10 z-10 mix-blend-luminosity"></div>
                        <img
                            src={Komtar}
                            alt="KOMTAR"
                            className="absolute inset-0 w-full h-full object-cover contrast-[0.95]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
