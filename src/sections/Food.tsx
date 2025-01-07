import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import PhotoGallery from "../components/PhotoGallery";

const Food: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeline = gsap.timeline({ delay: 2 });
        timeline
            .to(titleRef.current, { y: -50, opacity: 1, duration: 1 })
            .to(descriptionRef.current, { y: -50, opacity: 1, duration: 1 }, "-=0.5")
            .to(boxRef.current, { opacity: 1, duration: 1 });
    }, []);

    return (
        <div className="section relative pt-10 px-16 md:px-32 lg:px-64 min-h-screen flex flex-col items-center justify-center gap-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-50 to-white z-0"></div>
            <div className="z-10 flex flex-col items-center justify-center gap-4">
                <h1 ref={titleRef} className="text-4xl font-bold text-center opacity-0 centa-one text-black">
                    Food & Dining
                </h1>
                <p ref={descriptionRef} className="text-center opacity-0 text-gray-400">
                    Discover the best places to eat in the city.
                </p>
            </div>
            <div
                ref={boxRef}
                className="z-10 px-10 relative -top-5 bg-white shadow-lg rounded-lg opacity-0 w-full h-[70vh] max-w-[1200px] overflow-y-auto"
            >
                <PhotoGallery more={true} />
            </div>
        </div>
    );
};

export default Food;