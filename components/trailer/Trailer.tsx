"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";

interface Props {
    url?: string;
    thumbnail?: string;
}

const Trailer: FC<Props> = ({ url, thumbnail }) => {
    const [showVideo, setShowVideo] = useState(false);

    const handlePlayClick = () => {
        setShowVideo(true);
    };

    return (
        <div className="relative w-[680px] h-[400px]">
            {showVideo ? (
                <iframe
                    title="Trailer Video"
                    src={url}
                    allow="autoplay"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                ></iframe>
            ) : (
                <div className="relative w-full h-full">
                    {thumbnail ? (
                        <Image
                            src={thumbnail}
                            alt="Trailer Thumbnail"
                            onClick={handlePlayClick}
                            fill
                            className="cursor-pointer w-full h-full"
                        />
                    ) : (
                        <div className="cursor-pointer w-full h-full bg-gray-500"></div>
                    )}
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        onClick={handlePlayClick}
                    >
                        <div className="rounded-full w-12 h-12 bg-primary-1 hover:bg-primary-2 flex items-center justify-center">
                            <BsFillPlayFill size={40} color="#fff" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Trailer;
