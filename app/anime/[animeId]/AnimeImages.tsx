"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const AnimeImages = ({ id }: { id: string }) => {
    const [animeImages, setAnimeImages] = useState<any[]>([]);

    useEffect(() => {
        const getAnimeImages = async () => {
            try {
                const res = await axios.get(
                    `https://api.jikan.moe/v4/anime/${id}/pictures`
                );
                setAnimeImages(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        getAnimeImages();
    }, []);

    return (
        <div className="w-full mt-16">
            {animeImages.length > 0 && (
                <h2 className="text-3xl font-semibold text-black-2">
                    Image Gallery
                </h2>
            )}
            {animeImages.length > 0 && (
                <div className="flex flex-row flex-wrap gap-6 mt-8">
                    {animeImages?.map((image, index) => (
                        <Image
                            key={index}
                            alt="Anime Image"
                            src={image.jpg.large_image_url}
                            width={250}
                            height={250}
                            className="object-contain"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AnimeImages;
