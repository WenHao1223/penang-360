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
        const vidFrame = document.getElementById("vid-frame") as HTMLIFrameElement;
        if (vidFrame) {
            vidFrame.width = (document.getElementById("video")?.clientWidth! * 0.6)?.toString() || "560";
            vidFrame.height = (document.getElementById("video")?.clientHeight! * 0.6)?.toString() || "315";
        }
    };

    useEffect(() => {
        updateVideoDimensions();
        window.addEventListener("resize", updateVideoDimensions);
        return () => window.removeEventListener("resize", updateVideoDimensions);
    }, []);

    return (
        <section
            className="section bg-gray-700 pt-10 px-16 md:px-32 lg:px-64 text-gray-800 min-h-screen h-screen flex flex-col items-center justify-center"
            id="video"
        >
            <h2
                ref={headerRef}
                className="text-4xl font-bold text-white opacity-0"
            >
                Watch Our Video
            </h2>
            <div ref={videoRef} className="mt-10 w-full max-w-3xl opacity-0">
                <div className="relative pb-56.25%">
                    <iframe
                        id="vid-frame"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/s9pQnK75h6E"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Video;
