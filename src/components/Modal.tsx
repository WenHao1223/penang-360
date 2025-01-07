import React, { useRef } from "react";
import { gsap } from "gsap";
import PhotoGallery from "@components/PhotoGallery";
import AsyncImage from "./AsyncImage";

interface ItemType {
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

interface ModalProps {
    item: ItemType;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
    item,
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
                <AsyncImage
                    section="items"
                    name={item.name}
                    id="thumbnail"
                    alt={item.name + " Thumbnail"}
                    className="h-56 w-full object-cover rounded-sm"
                />
                <h2 className="text-3xl font-bold mt-4 uppercase text-gray-600 tracking-wide">
                    {item.name}
                </h2>
                <p className="text-gray-600 text-sm mt-2 mb-4">
                    {item.city}
                </p>
                <p className="text-gray-600">{item.description}</p>
                <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-gray-600 font-bold">
                            Operation Hours:
                        </p>
                        <p className="text-gray-600">
                            {item.operationHours.opening} -{" "}
                            {item.operationHours.closing}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600 font-bold">Phone:</p>
                        <p className="text-gray-600">
                            {item.phoneNumber}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600 font-bold">Address:</p>
                        <p className="text-gray-600">
                            {item.address}, {item.city}
                        </p>
                    </div>
                    <div>
                        <p className="text-gray-600 font-bold">Website:</p>
                        <p className="text-gray-600">
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
                                                : i <
                                                  Math.ceil(item.rating)
                                                ? "text-yellow-500"
                                                : "text-gray-300"
                                        }`}
                                        style={{
                                            clipPath:
                                                i <
                                                Math.floor(item.rating)
                                                    ? "none"
                                                    : i <
                                                      Math.ceil(
                                                          item.rating
                                                      )
                                                    ? `inset(0 ${
                                                          100 -
                                                          (item.rating %
                                                              1) *
                                                              100
                                                      }% 0 0)`
                                                    : "none",
                                        }}
                                    />
                                ))}
                            </span>{" "}
                            ({item.rating})
                        </p>
                    </div>
                </div>
                <div className="flex justify-start space-x-4">
                    <a
                        href={item?.websiteLink}
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
                        <i className="fa-solid fa-browser" /> Visit Website
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
                <hr className="my-4" />
                <PhotoGallery section="items" name={item.name} />
            </div>
        </div>
    );
};

export default Modal;
