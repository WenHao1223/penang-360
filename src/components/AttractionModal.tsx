import React, { useRef } from "react";
import { gsap } from "gsap";

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

interface AttractionModalProps {
    attraction: AttractionType;
    onClose: () => void;
}

const AttractionModal: React.FC<AttractionModalProps> = ({
    attraction,
    onClose,
}) => {
    const websiteButtonRef = useRef<HTMLAnchorElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (
        e: React.MouseEvent<HTMLElement>,
        buttonRef: React.RefObject<HTMLElement>,
        gradientColors: string[]
    ) => {
        const rect = buttonRef.current?.getBoundingClientRect();
        if (rect) {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            console.log(x, y);
            gsap.to(buttonRef.current, {
                background: `radial-gradient(circle at ${x}px ${y}px, ${gradientColors[0]}, ${gradientColors[1]})`,
                border: "none",
                duration: 0.5,
            });
        }
    };

    const handleMouseLeave = (
        buttonRef: React.RefObject<HTMLElement>,
        defaultBackground: string
    ) => {
        gsap.to(buttonRef.current, {
            background: defaultBackground,
            outline: "2px solid black",
            duration: 0.5,
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-[80vw] max-w-[800px] max-h-[90vh] overflow-y-auto">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt={attraction.name}
                    className="h-72 w-full object-cover rounded-sm"
                />
                <h2 className="text-3xl font-bold mt-4 uppercase text-gray-600 tracking-wide">
                    {attraction.name}
                </h2>
                <p className="text-gray-600 text-sm mt-2 mb-4">
                    {attraction.city}
                </p>
                <p className="text-gray-600">
                    {attraction.description}
                </p>
                <div className="my-4">
                    <p className="text-gray-600">
                        Operation Hours:{" "}
                        {attraction.operationHours.opening} -{" "}
                        {attraction.operationHours.closing}
                    </p>
                    <p className="text-gray-600">
                        Phone: {attraction.phoneNumber}
                    </p>
                    <p className="text-gray-600">
                        Address: {attraction.address},{" "}
                        {attraction.city}
                    </p>
                    <p className="text-gray-600">
                        Website:{" "}
                        <a
                            href={attraction.websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            {attraction.websiteLink}
                        </a>
                    </p>
                    <p className="text-gray-600">
                        Rating: {attraction.rating}
                    </p>
                </div>
                <div className="flex justify-start space-x-4">
                    <a
                        href={attraction?.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        ref={websiteButtonRef}
                        className="btn mt-4 rounded-none border-none bg-black text-white px-8"
                        onMouseMove={(e) =>
                            handleMouseMove(e, websiteButtonRef, [
                                "#ff7e5f",
                                "#feb47b",
                            ])
                        }
                        onMouseLeave={() =>
                            handleMouseLeave(websiteButtonRef, "black")
                        }
                    >
                        <i className="fa-solid fa-browser" /> Visit
                        Website
                    </a>
                    <button
                        onClick={onClose}
                        ref={closeButtonRef}
                        className="btn mt-4 rounded-none outline-2 hover:outline-none px-8 text-black bg-white hover:bg-gradient-to-r from-red-500 to-red-700 hover:text-white"
                        onMouseMove={(e) =>
                            handleMouseMove(e, closeButtonRef, [
                                "#ff0000",
                                "#ff000033",
                            ])
                        }
                        onMouseLeave={() =>
                            handleMouseLeave(closeButtonRef, "white")
                        }
                    >
                        <i className="fa-solid fa-xmark" /> Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AttractionModal;