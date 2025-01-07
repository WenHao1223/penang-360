import React, { useState, useEffect } from "react";
import Masonry from "@mui/lab/Masonry";

const PhotoGallery: React.FC = () => {
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
        <>
            <Masonry
                columns={columns}
                spacing={2}
                defaultHeight={450}
                defaultColumns={3}
                defaultSpacing={1}
            >
                {photos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        alt={`Photo ${index + 1}`}
                        className="w-full h-auto"
                    />
                ))}
            </Masonry>
        </>
    );
};

export default PhotoGallery;
