import React from "react";
import AsyncImage from "./AsyncImage";

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

const HotelCard: React.FC<{ hotel: Hotel }> = ({ hotel }) => {
    const maxFacilitiesToShow = 3;
    const extraFacilitiesCount = hotel.facilities.length - maxFacilitiesToShow;
    const maxCommentLength = 200;
    const truncatedComment =
        hotel.topRatedComment.length > maxCommentLength
            ? hotel.topRatedComment.substring(0, maxCommentLength) + "..."
            : hotel.topRatedComment;

    return (
        <div className="relative group w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <AsyncImage
                section="hotels"
                name={hotel.name}
                id="1"
                alt={hotel.name}
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 hover:bg-black group-hover:bg-black group-hover:bg-opacity-75 transition duration-300"></div>
            <div className="absolute bottom-1 left-0 w-full p-6 hover:bg-gradient-to-t hover:from-black hover:to-transparent text-white">
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
                <div className="flex flex-wrap mt-2">
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
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="mt-2">
                    Avg. Price per Night: RM {hotel.avgPricePerNight}
                </p>
                <p className="mt-2">"{truncatedComment}"</p>
                <p className="mt-2">{hotel.description}</p>
            </div>
        </div>
    );
};

export default HotelCard;
