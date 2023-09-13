import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
    id: number;
    genreName: string;
}
const GenreCard = ({ id, genreName }: Props) => {
    const [animes, setAnimes] = useState<any[]>([]);

    useEffect(() => {
        const getAnimes = async () => {
            try {
                const res = await axios.get(
                    `https://api.jikan.moe/v4/anime?genres=${id}&order_by=score&sort=desc&limit=4`
                );
                setAnimes(res.data.data);
                console.log(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        setTimeout(() => getAnimes(), 1500);
    }, []);

    return (
        <Link href={`/genre/${id}`}>
            <article className="flex flex-col w-[200px] relative">
                <div className="flex flex-row flex-wrap items-start justify-center w-full  h-[300px] relative  hover:transform hover:scale-105 transition duration-300 overflow-hidden">
                    {animes.length > 0 &&
                        animes.map((anime: any) => (
                            <div
                                className="w-[50%] h-[50%] relative"
                                key={anime.mal_id}
                            >
                                <Image
                                    src={anime.images.jpg.image_url}
                                    alt="genre image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                </div>
                <span className="mt-4 text-center tex-sm font-semibold text-black-2">
                    {genreName}
                </span>
            </article>
        </Link>
    );
};

export default GenreCard;
