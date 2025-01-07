import React, { useState, useEffect } from "react";
import Masonry from "@mui/lab/Masonry";

interface MasonryProps {
    more: boolean;
    section?: string;
    name?: string;
}

const PhotoGallery: React.FC<MasonryProps> = ({
    more = false,
    section,
    name,
}) => {
    const [photos, setPhotos] = useState<string[]>([]);

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

        if (section && name) {
            loadImages();
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
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-xl font-semibold mb-2">
                                Delicious Food Name
                            </h3>
                            <button className="btn mt-4 rounded-none text-white px-8">
                                View
                            </button>
                        </div>
                        <img
                            src={photo}
                            alt={`Photo ${index + 1}`}
                            className="w-full h-auto"
                        />
                    </div>
                ))}
            </Masonry>
        </>
    );
};

export default PhotoGallery;
