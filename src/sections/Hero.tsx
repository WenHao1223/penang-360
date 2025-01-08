import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import PenangBridge from "@assets/images/hero/penang-bridge.webp";
import Navbar from "@components/Navbar";

const Hero: React.FC = () => {
    const textRef = useRef<HTMLSpanElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const texts = [
            {
                text: "Discover the best places to eat in Penang",
                textColor: "text-blue-600",
                borderColor: "border-blue-600/60",
                backgroundColor: "bg-blue-600/5",
            },
            {
                text: "Find the most comfortable places to stay in Penang",
                textColor: "text-teal-600",
                borderColor: "border-teal-600/60",
                backgroundColor: "bg-teal-600/5",
            },
            {
                text: "Explore the top attractions to visit in Penang",
                textColor: "text-purple-600",
                borderColor: "border-purple-600/60",
                backgroundColor: "bg-purple-600/5",
            },
        ];
        let index = 0;

        const animateText = () => {
            if (textRef.current) {
                gsap.to(textRef.current, {
                    y: -20,
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        textRef.current!.textContent = texts[index].text;
                        textRef.current!.className = `relative inline-block px-4 py-2 border-2 border-solid rounded-lg ${texts[index].backgroundColor} ${texts[index].textColor} ${texts[index].borderColor}`;
                        gsap.fromTo(
                            textRef.current,
                            { y: 20, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.2 }
                        );
                        index = (index + 1) % texts.length;
                    },
                });
            }
        };

        const interval = setInterval(animateText, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (imageRef.current) {
                const scrollPosition = window.scrollY;
                imageRef.current.style.transform = `translateY(${
                    scrollPosition * 0.5
                }px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return ( 
        <div className="bg-white min-h-screen">
            <Navbar />
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
                <div className="absolute inset-x-0 top-0 -z-20 h-screen overflow-hidden mix-blend-overlay min-h-[720px]">
                    <div
                        ref={imageRef}
                        className="relative w-full h-full opacity-30 blur-sm"
                        style={{
                            backgroundImage: `url(${PenangBridge})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                </div>
                <div className="mx-auto max-w-2xl py-28 z-10">
                    <div className="text-center">
                        <h1 className="text-balance text-7xl md:text-8xl lg:9xl text-black tangerine font-bold ">
                            Penang 360°
                        </h1>
                        <p className="mt-8 text-sm md:text-md xl:text-lg font-medium text-gray-500 sm:text-xl/8 tracking-wider">
                            Penang, a vibrant Malaysian state, is known for its
                            rich heritage, stunning landscapes, bustling
                            streets, and serene beaches.
                        </p>
                        <p className="mt-8 text-lg font-medium italic text-gray-500 sm:text-xl/8 bodoni-moda tracking-wider">
                            <span
                                ref={textRef}
                                className="relative inline-block px-4 py-2 border-2 border-solid rounded-lg bg-blue-600/5 text-blue-600 border-blue-600/60"
                            >
                                Discover the best places to eat in Penang
                            </span>{" "}
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </a>
                            <a
                                href="#"
                                className="text-sm/6 font-semibold text-gray-900"
                            >
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
