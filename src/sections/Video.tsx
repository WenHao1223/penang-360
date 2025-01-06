import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Video: React.FC = () => {
    const headerRef = useRef<HTMLHeadingElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.to(headerRef.current, {
                            y: -50,
                            opacity: 1,
                            duration: 1,
                            onComplete: () => {
                                gsap.to(videoRef.current, {
                                    opacity: 1,
                                    duration: 1,
                                });
                            },
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, []);

    const updateVideoDimensions = () => {
        const vidFrame = document.getElementById(
            "vid-frame"
        ) as HTMLIFrameElement;
        if (vidFrame) {
            vidFrame.width =
                (
                    document.getElementById("video")?.clientWidth! * 0.6
                )?.toString() || "560";
            vidFrame.height =
                (
                    document.getElementById("video")?.clientHeight! * 0.6
                )?.toString() || "315";
        }
    };

    useEffect(() => {
        updateVideoDimensions();
        window.addEventListener("resize", updateVideoDimensions);
        return () =>
            window.removeEventListener("resize", updateVideoDimensions);
    }, []);

    useEffect(() => {
        gsap.fromTo(
            overlayRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );
    }, []);

    return (
        <section
            className="section relative bg-gray-900 pt-10 px-16 md:px-32 lg:px-64 text-gray-800 min-h-screen h-screen flex flex-col items-center justify-center gap-2"
            id="video"
        >
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-900 to-black opacity-70"
            ></div>
            <h2
                ref={headerRef}
                className="relative text-5xl font-bold text-white opacity-0 z-10"
            >
                Watch Our Video
            </h2>
            <div
                ref={videoRef}
                className="relative w-full max-w-3xl opacity-0 z-10 flex items-center justify-center"
            >
                <div className="relative p-8 mx-auto">
                    <div className="absolute inset-0 border-t-8 border-l-8 border-indigo-600 transform -translate-x-4 -translate-y-4"></div>
                    <div className="absolute inset-0 border-b-8 border-r-8 border-indigo-600 transform translate-x-4 translate-y-4"></div>
                    <iframe
                        id="vid-frame"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/TDeP0fOfmHQ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="relative rounded-lg"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Video;
