import React, { useState, useEffect } from "react";
import Masonry from "@mui/lab/Masonry";

interface MasonryProps {
    more: boolean;
    section?: string;
    name?: string;
}

const PhotoGallery: React.FC<MasonryProps> = ({ more = false }) => {
    const photos = [
        "https://themewagon.github.io/photogallery/img/gallery/1.jpg",
        "https://themewagon.github.io/photogallery/img/gallery/2.jpg",
        "https://themewagon.github.io/photogallery/img/gallery/3.jpg",
        "https://themewagon.github.io/photogallery/img/gallery/4.jpg",
        "https://themewagon.github.io/photogallery/img/gallery/5.jpg",
        "https://themewagon.github.io/photogallery/img/gallery/6.jpg",
    ];

    const getColumns = () => {
        const width = window.innerWidth;
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
        <Masonry
            columns={columns}
            spacing={2}
            defaultHeight={450}
            defaultColumns={3}
            defaultSpacing={1}
        >
            {photos.map((photo, index) => (
                <div key={index} className="relative group">
                    <img
                        src={photo}
                        alt={`Photo ${index + 1}`}
                        className={`w-full h-auto transition-transform duration-300 ${
                            more ? "group-hover:opacity-50" : ""
                        }`}
                    />
                    {more && (
                        <div className="bg-black/60 mix-blend-hard-light absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-xl font-semibold mb-2 text-white">
                                Delicious Food Name
                            </h3>
                            <p className="text-gray-600 mt-2">
                                <span className="text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <i
                                            key={i}
                                            className={`fa-solid fa-star ${
                                                i <
                                                Math.floor(3.8)
                                                    ? "text-yellow-500"
                                                    : i <
                                                      Math.ceil(
                                                          3.8
                                                      )
                                                    ? "text-yellow-500"
                                                    : "text-gray-300"
                                            }`}
                                            style={{
                                                clipPath:
                                                    i <
                                                    Math.floor(
                                                        3.8
                                                    )
                                                        ? "none"
                                                        : i <
                                                          Math.ceil(
                                                              3.8
                                                          )
                                                        ? `inset(0 ${
                                                              100 -
                                                              (3.8 %
                                                                  1) *
                                                                  100
                                                          }% 0 0)`
                                                        : "none",
                                            }}
                                        />
                                    ))}
                                </span>{" "}
                                ({3.8})
                            </p>
                            <button className="btn mt-4 rounded-none text-black bg-white px-8 hover:bg-white hover:scale-105">
                                View
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </Masonry>
    );
};

export default PhotoGallery;
