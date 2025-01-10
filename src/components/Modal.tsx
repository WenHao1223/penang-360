import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import PhotoGallery from "@components/PhotoGallery";
import AsyncImage from "./AsyncImage";

interface ItemType {
    name: string;
    description: string;
    operationHours: {
        opening?: string;
        closing?: string;
        checkIn?: string;
        checkOut?: string;
    };
    phoneNumber: string;
    address: string;
    city: string;
    websiteLink?: string;
    maps?: string;
    rating: number;
    facilities?: string[];
    avgPricePerNight?: number;
    topRatedComment?: string;
}

interface ModalProps {
    item: ItemType;
    section: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, section, onClose }) => {
    useEffect(() => {
        document.body.classList.add("overflow-hidden");
    }, []);

    const websiteButtonRef = useRef<HTMLAnchorElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    const maxCommentLength = 200;
    let truncatedComment = "";

    if (item.topRatedComment) {
        truncatedComment =
            item.topRatedComment.length > maxCommentLength
                ? item.topRatedComment.substring(0, maxCommentLength) + "..."
                : item.topRatedComment;
    }

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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-[90vw] sm:w-[80vw] max-w-[80vw] md:max-w-[800px] max-h-[90vh] overflow-y-auto">
                <AsyncImage
                    section={section}
                    name={item.name}
                    id="thumbnail"
                    alt={item.name + " Thumbnail"}
                    className="h-56 w-full object-cover rounded-sm"
                />
                <h2 className="text-3xl font-bold mt-4 uppercase text-gray-600 tracking-wide">
                    {item.name}
                </h2>
                <p className="text-gray-600 text-sm mt-2 mb-4">{item.city}</p>
                {item.facilities && (
                    <div className="flex flex-wrap mt-2 gap-1">
                        {item.facilities.map((facility, index) => (
                            <span
                                key={index}
                                className="bg-gray-700 text-gray-200 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                            >
                                {facility}
                            </span>
                        ))}
                    </div>
                )}
                <p className="my-2 text-gray-600">{item.description}</p>
                {item.avgPricePerNight && (
                    <div className="my-4">
                        <p className="text-gray-600 font-bold">
                            Average Price Per Night:
                        </p>
                        <p className="text-red-500 font-bold text-xl lg:text-2xl">
                            RM{item.avgPricePerNight.toFixed(2)}
                        </p>
                    </div>
                )}
                <div className="my-4 sm:grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.operationHours.opening && (
                        <div>
                            <p className="text-gray-600 font-bold">
                                Operation Hours:
                            </p>
                            <p className="text-gray-600">
                                {item.operationHours.opening} -{" "}
                                {item.operationHours.closing}
                            </p>
                        </div>
                    )}
                    {item.operationHours.checkIn && (
                        <div>
                            <p className="text-gray-600 font-bold">
                                Check-in / Check-out:
                            </p>
                            <p className="text-gray-600">
                                {item.operationHours.checkIn} /{" "}
                                {item.operationHours.checkOut}
                            </p>
                        </div>
                    )}
                    <div>
                        <p className="text-gray-600 font-bold">Phone:</p>
                        <p className="text-gray-600">{item.phoneNumber}</p>
                    </div>
                    <div>
                        <p className="text-gray-600 font-bold">Address:</p>
                        <p className="text-gray-600">
                            {item.address}, {item.city}
                        </p>
                    </div>
                    {item.websiteLink && (
                        <div>
                            <p className="text-gray-600 font-bold">Website:</p>
                            <p className="text-gray-600 break-words">
                                <a
                                    href={item.websiteLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500"
                                >
                                    {item.websiteLink}
                                </a>
                            </p>
                        </div>
                    )}
                    {item.maps && (
                        <div>
                            <p className="text-gray-600 font-bold">Maps:</p>
                            <p className="text-gray-600 break-words">
                                <a
                                    href={item.maps}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500"
                                >
                                    {item.maps}
                                </a>
                            </p>
                        </div>
                    )}
                    <div className="col-span-2">
                        <p className="text-gray-600 font-bold">Rating:</p>
                        <p className="text-gray-600">
                            <span className="text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <i
                                        key={i}
                                        className={`fa-solid fa-star ${
                                            i < Math.floor(item.rating)
                                                ? "text-yellow-500"
                                                : i < Math.ceil(item.rating)
                                                ? "text-yellow-500"
                                                : "text-gray-300"
                                        }`}
                                        style={{
                                            clipPath:
                                                i < Math.floor(item.rating)
                                                    ? "none"
                                                    : i < Math.ceil(item.rating)
                                                    ? `inset(0 ${
                                                          100 -
                                                          (item.rating % 1) *
                                                              100
                                                      }% 0 0)`
                                                    : "none",
                                        }}
                                    />
                                ))}
                            </span>{" "}
                            ({item.rating})
                        </p>
                        {item.topRatedComment && (
                            <div className="my-4">
                                <p className="text-gray-600 font-bold">
                                    Top Rated Comment:
                                </p>
                                <p className="text-gray-600 italic">
                                    "{truncatedComment}"
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                {item?.websiteLink && (
                    <div className="sm:flex justify-start sm:space-x-4">
                        <a
                            href={item?.websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            ref={websiteButtonRef}
                            className="btn mt-4 rounded-none border-none bg-black text-white px-8 w-full sm:w-auto"
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
                            <i className="fa-solid fa-browser" /> Visit Website
                        </a>
                        <button
                            onClick={onClose}
                            ref={closeButtonRef}
                            className="btn mt-4 rounded-none outline-2 hover:outline-none px-8 text-black
                                bg-white hover:bg-gradient-to-r from-red-500 to-red-700 hover:text-white
                                w-full sm:w-auto"
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
                )}
                {item?.maps && (
                    <div className="sm:flex justify-start sm:space-x-4">
                        <a
                            href={item?.maps}
                            target="_blank"
                            rel="noopener noreferrer"
                            ref={websiteButtonRef}
                            className="btn mt-4 rounded-none border-none bg-black text-white px-8 w-full sm:w-auto"
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
                            <i className="fa-solid fa-map" /> View on Maps
                        </a>
                        <button
                            onClick={onClose}
                            ref={closeButtonRef}
                            className="btn mt-4 rounded-none outline-2 hover:outline-none px-8 text-black
                                bg-white hover:bg-gradient-to-r from-red-500 to-red-700 hover:text-white
                                w-full sm:w-auto"
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
                )}
                <hr className="my-4" />
                <PhotoGallery section={section} name={item.name} />
            </div>
        </div>
    );
};

export default Modal;
