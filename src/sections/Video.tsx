import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Video: React.FC = () => {
    const headerRef = useRef<HTMLHeadingElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);

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
                                    y: -50,
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
            const minWidth = 300;
            const minHeight = 168.75;
            const width =
                document.getElementById("video")?.clientWidth! * 0.6 ||
                minWidth;
            const height =
                document.getElementById("video")?.clientHeight! * 0.6 ||
                minHeight;

            vidFrame.width = Math.max(width, minWidth).toString();
            vidFrame.height = Math.max(height, minHeight).toString();
        }
    };

    useEffect(() => {
        updateVideoDimensions();
        window.addEventListener("resize", updateVideoDimensions);
        return () =>
            window.removeEventListener("resize", updateVideoDimensions);
    }, []);

    return (
        <section
            className="section relative pt-24 xl:pt-16 px-4 sm:px-8 md:px-32 lg:px-64 min-h-screen h-screen flex flex-col items-center justify-center gap-0"
            id="video"
        >
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white z-0" />
            </div>
            <div className="relative text-center">
                <div ref={headerRef}>
                    <h2 className="text-4xl sm:text-3xl md:text-5xl py-0 font-bold text-black centa-one mb-2 sm:mb-6">
                        Watch Our Video
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                        Watch our video to learn more about our services and how
                        we can help you.
                    </p>
                </div>
            </div>
            <div
                ref={videoRef}
                className="relative w-full max-w-3xl opacity-0 flex items-center justify-center"
            >
                <div className="relative mx-auto">
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
