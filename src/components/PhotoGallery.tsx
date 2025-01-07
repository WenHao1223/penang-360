import React, { useEffect } from "react";
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

    return (
        <>
            <Masonry
                columns={4}
                spacing={2}
                defaultHeight={450}
                defaultColumns={4}
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
