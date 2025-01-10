import React, { useState, useEffect } from "react";
import Masonry from "@mui/lab/Masonry";
import FoodJSON from "@assets/data/food.json";
import Modal from "@components/Modal";

interface FoodType {
    name: string;
    description: string;
    operationHours: {
        opening: string;
        closing: string;
    };
    phoneNumber: string;
    address: string;
    city: string;
    rating: number;
    maps: string;
}

interface MasonryProps {
    more?: boolean;
    section?: string;
    name?: string;
}

const PhotoGallery: React.FC<MasonryProps> = ({
    more = false,
    section,
    name,
}) => {
    const [photos, setPhotos] = useState<string[]>([]);
    const [foodNames, setFoodNames] = useState<string[]>([]);
    const [selectedFood, setSelectedFood] = useState<FoodType | null>(null);

    useEffect(() => {
        const loadImages = async () => {
            const loadedPhotos: string[] = [];
            let index = 1;
            while (true) {
                try {
                    const image = await import(
                        `@assets/images/${section}/${name}/${index}.webp`
                    );
                    loadedPhotos.push(image.default);
                    index++;
                } catch (error) {
                    break;
                }
            }
            setPhotos(loadedPhotos);
        };

        const loadFoodImages = async () => {
            const loadedPhotos: string[] = [];
            const loadedFoodNames: string[] = [];
            for (const food of FoodJSON) {
                try {
                    const image = await import(
                        `@assets/images/food/${food.name}/thumbnail.webp`
                    );
                    loadedPhotos.push(image.default);
                    loadedFoodNames.push(food.name);
                } catch (error) {
                    console.error("Error loading image:", error);
                }
            }
            setPhotos(loadedPhotos);
            setFoodNames(loadedFoodNames);
        };

        if (section && name) {
            loadImages();
        } else {
            loadFoodImages();
        }
    }, [section, name]);

    const getColumns = () => {
        const width = window.innerWidth;
        if (width >= 1024) return 4;
        if (width >= 768) return 3;
        if (width >= 540) return 2;
        return 1;
    };
    const [columns, setColumns] = useState(getColumns());

    useEffect(() => {
        const handleResize = () => {
            setColumns(getColumns());
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const viewFood = (food: FoodType) => {
        setSelectedFood(food);
    };

    const handleCloseModal = () => {
        setSelectedFood(null);
        document.body.classList.remove('overflow-hidden');
    };

    return (
        <>
            <Masonry
                columns={columns}
                spacing={2}
                defaultHeight={450}
                defaultColumns={3}
                defaultSpacing={1}
            >
                {photos.map((photo, index) => (
                    <div key={index} className="relative group">
                        {more && (
                            <div className="absolute bg-black/60 inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-sm sm:text-md md:text-lg font-semibold mb-0 md:mb-2 text-white p-2 text-center">
                                    {foodNames[index]}
                                </h3>
                                <button
                                    className="btn mt-0 md:mt-2 rounded-none bg-white hover:bg-white hover:scale-105 text-black px-8"
                                    onClick={() => viewFood(
                                        FoodJSON.find((food: FoodType) => food.name === foodNames[index]) as FoodType
                                    )}
                                >
                                    View
                                </button>
                            </div>
                        )}
                        <img
                            src={photo}
                            alt={`Photo ${index + 1}`}
                            className="w-full h-auto min-h-40 object-cover"
                        />
                    </div>
                ))}
            </Masonry>
            {selectedFood && (
                <Modal
                    item={selectedFood}
                    section="food"
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
};

export default PhotoGallery;
