import React, { useState, useEffect } from "react";

interface AsyncImageProps {
    section: string;
    name: string;
    id: string;
    alt: string;
    className?: string;
}

const AsyncImage: React.FC<AsyncImageProps> = ({
    section,
    name,
    id,
    alt,
    className,
}) => {
    const [src, setSrc] = useState<string | null>(null);

    useEffect(() => {
        const loadImage = async () => {
            try {
                const image = await import(
                    `../assets/images/${section}/${name}/${id}.webp`
                );
                setSrc(image.default);
            } catch (error) {
                console.error("Error loading image:", error);
            }
        };

        loadImage();
    }, [section, name, id]);

    if (!src) {
        return <div className={className}>Loading...</div>;
    }

    return <img src={src} alt={alt} className={className} />;
};

export default AsyncImage;
