import React, { useEffect } from "react";
import gsap from "gsap";
import AsyncImage from "./AsyncImage";
import Modal from "@components/Modal";

interface Hotel {
    name: string;
    description: string;
    operationHours: {
        checkIn: string;
        checkOut: string;
    };
    phoneNumber: string;
    address: string;
    city: string;
    rating: number;
    maps: string;
    facilities: string[];
    avgPricePerNight: number;
    topRatedComment: string;
}

const HotelCard: React.FC<{
    hotel: Hotel;
    handleOpenModal: (hotel: Hotel) => void;
}> = ({ hotel, handleOpenModal }) => {
    const maxFacilitiesToShow = 3;
    const extraFacilitiesCount = hotel.facilities.length - maxFacilitiesToShow;
    const maxCommentLength = 200;
    const truncatedComment =
        hotel.topRatedComment.length > maxCommentLength
            ? hotel.topRatedComment.substring(0, maxCommentLength) + "..."
            : hotel.topRatedComment;
    const [showDes, setShowDes] = React.useState(true);
    const viewMoreButtonRef = React.useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (
            window.innerWidth < 768 ||
            window.matchMedia("(pointer: coarse)").matches
        ) {
            setShowDes(false);
        } else {
            setShowDes(true);
        }
    }, []);

    window.addEventListener("resize", () => {
        if (
            window.innerWidth < 768 ||
            window.matchMedia("(pointer: coarse)").matches
        ) {
            setShowDes(false);
        } else {
            setShowDes(true);
        }
    });

    const handleMouseMove = (
        e: React.MouseEvent<HTMLElement>,
        buttonRef: React.RefObject<HTMLElement>,
        gradientColors: string[]
    ) => {
        const rect = buttonRef.current?.getBoundingClientRect();
        if (rect) {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
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
        <div className="relative group w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <AsyncImage
                section="hotels"
                name={hotel.name}
                id="thumbnail"
                alt={hotel.name}
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 hover:bg-black group-hover:bg-black group-hover:bg-opacity-75 transition duration-300"></div>
            <div
                className="absolute bottom-1 left-0 w-full py-6 px-8 sm:px-12 md:px-20 hover:bg-gradient-to-t hover:transparent text-white
                    transition-all duration-300 group-hover:translate-y-[-5%]"
            >
                <h3 className="text-xl font-bold">{hotel.name}</h3>
                <p className="text-gray-300">
                    <span className="text-sm">{hotel.city}</span>
                    <span className="mx-2 text-sm">|</span>
                    <span className="text-sm">
                        <span className="text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                                <i
                                    key={i}
                                    className={`fa-solid fa-star ${
                                        i < Math.floor(hotel.rating)
                                            ? "text-yellow-500"
                                            : i < Math.ceil(hotel.rating)
                                            ? "text-yellow-500"
                                            : "text-gray-300"
                                    }`}
                                    style={{
                                        clipPath:
                                            i < Math.floor(hotel.rating)
                                                ? "none"
                                                : i < Math.ceil(hotel.rating)
                                                ? `inset(0 ${
                                                      100 -
                                                      (hotel.rating % 1) * 100
                                                  }% 0 0)`
                                                : "none",
                                    }}
                                />
                            ))}
                        </span>{" "}
                        ({hotel.rating})
                    </span>
                </p>
                <div className="flex flex-wrap mt-2 gap-1">
                    {hotel.facilities
                        .slice(0, maxFacilitiesToShow)
                        .map((facility, index) => (
                            <span
                                key={index}
                                className="bg-gray-700 text-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                            >
                                {facility}
                            </span>
                        ))}
                    {extraFacilitiesCount > 0 && (
                        <span
                            className="bg-gray-700 text-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded z-30 tooltip"
                            data-tip={hotel.facilities
                                .slice(maxFacilitiesToShow)
                                .join(", ")}
                        >
                            +{extraFacilitiesCount}
                        </span>
                    )}
                </div>
                {showDes ? (
                    <div className="hidden group-hover:block mt-2">
                        <div className="mt-4">
                            <p className="mt-2 text-sm">{hotel.description}</p>
                            <div className="flex flex-wrap my-4 text-xs">
                                <div className="w-full md:w-1/2 pr-2">
                                    <p className="mt-1">
                                        <span className="font-semibold">
                                            Operation Hours:{" "}
                                        </span>
                                        <span>
                                            Check-in{" "}
                                            {hotel.operationHours.checkIn} |
                                            Check-out{" "}
                                            {hotel.operationHours.checkOut}
                                        </span>
                                    </p>
                                    <p className="mt-1">
                                        <span className="font-semibold">
                                            Phone:{" "}
                                        </span>
                                        <span className="">
                                            {hotel.phoneNumber}
                                        </span>
                                    </p>
                                </div>
                                <div className="w-full md:w-1/2 pl-2">
                                    <p className="mt-1">
                                        <span className="font-semibold">
                                            Address:{" "}
                                        </span>
                                        <span>{hotel.address}</span>
                                    </p>
                                    <p className="mt-1">
                                        <span className="font-semibold">
                                            Facilities:{" "}
                                        </span>
                                        <span>
                                            {hotel.facilities.join(", ")}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <p className="mt-4 italic text-xs">
                                "{truncatedComment}"
                            </p>
                            <p className="mt-2">
                                <span className="text-sm font-semibold">
                                    Avg. Price Per Night:{" "}
                                </span>
                                <span className="text-lg text-rose-500 font-bold">
                                    RM{hotel.avgPricePerNight.toFixed(2)}
                                </span>
                            </p>
                        </div>
                    </div>
                ) : (
                    <button
                        className="hidden group-hover:block btn mt-8 rounded-none bg-white hover:bg-white hover:scale-105 text-black px-8"
                        onClick={() => handleOpenModal(hotel)}
                        ref={viewMoreButtonRef}
                        onMouseMove={(e) =>
                            handleMouseMove(e, viewMoreButtonRef, [
                                "#ff7e5f",
                                "#feb47b",
                            ])
                        }
                        onMouseLeave={() =>
                            handleMouseLeave(viewMoreButtonRef, "white")
                        }
                    >
                        Show More
                    </button>
                )}
            </div>
        </div>
    );
};

export default HotelCard;
