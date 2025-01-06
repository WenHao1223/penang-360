import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import LogoTrimmed from "@assets/logo/logo-trimmed.png";
import PenangBridge from "@assets/hero/penang-bridge.jpg";

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

    const toggleMenu = () => {
        const sideBar = document.querySelector(".sideBar");
        sideBar?.classList.toggle("hidden");
    };

    return (
        <div>
            <div className="bg-white h-screen">
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav
                        className="flex items-center justify-between p-6 lg:px-8"
                        aria-label="Global"
                    >
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src={LogoTrimmed}
                                    alt="penang360-logo"
                                />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={toggleMenu}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="size-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            <a
                                href="#places-of-interest"
                                className="text-sm/6 font-semibold text-gray-900"
                            >
                                Attractions
                            </a>
                            <a
                                href="#dining"
                                className="text-sm/6 font-semibold text-gray-900"
                            >
                                Dining
                            </a>
                            <a
                                href="#hotel"
                                className="text-sm/6 font-semibold text-gray-900"
                            >
                                Hotel
                            </a>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a
                                href="#"
                                className="text-sm/6 font-semibold text-gray-900"
                            >
                                Log in <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </nav>
                    {/* Mobile menu, show/hide based on menu open state. */}
                    <div className="lg:hidden" role="dialog" aria-modal="true">
                        {/* Background backdrop, show/hide based on slide-over state. */}
                        <div className="sideBar fixed inset-y-0 right-0 z-30 w-full h-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">
                                        Your Company
                                    </span>
                                    <img
                                        className="h-8 w-auto object-contain"
                                        src={LogoTrimmed}
                                        alt="penang360-logo"
                                    />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={toggleMenu}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <svg
                                        className="size-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        data-slot="icon"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18 18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <a
                                            href="#places-of-interest"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Attractions
                                        </a>
                                        <a
                                            href="#dining"
                                            className="-mx-3 block rounded-lg px-3 p y-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Dining
                                        </a>
                                        <a
                                            href="#hotel"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Hotel
                                        </a>
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
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
                    <div className="absolute inset-x-0 top-0 -z-20 w-screen h-screen overflow-hidden mix-blend-overlay">
                        <div
                            ref={imageRef}
                            className="relative w-full h-full opacity-30"
                            style={{
                                backgroundImage: `url(${PenangBridge})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                    </div>
                    <div className="mx-auto max-w-2xl py-44 sm:py-40 xl:py-36 2xl:py-48 z-10">
                        <div className="text-center">
                            <h1 className="text-balance text-8xl text-black sm:text-9xl tangerine-bold ">
                                Penang 360°
                            </h1>
                            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8 ">
                                Penang, a vibrant Malaysian state, is known for
                                its rich heritage, stunning landscapes, bustling
                                streets, and serene beaches.
                            </p>
                            <p className="mt-8 text-lg font-medium italic text-gray-500 sm:text-xl/8 bodoni-moda-medium">
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
        </div>
    );
};

export default Hero;
