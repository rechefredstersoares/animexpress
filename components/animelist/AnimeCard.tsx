"use client";

import Image from "next/image";
import { FC } from "react";
import Genre from "./Genre";
import { formatDuration, formatNumber } from "@/libs/utils";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

interface Props {
    id: number;
    name: string;
    image: string;
    score: number;
    scoredby: number;
    genres: string[];
    duration: string;
    episodes: number;
}

const AnimeCard: FC<Props> = ({
    id,
    name,
    image,
    score,
    scoredby,
    genres,
    duration,
    episodes,
}) => {
    return (
        <Link href={`/anime/${id}`}>
            <article className="flex flex-col w-[200px] relative">
                <div className="group w-full  h-[300px] relative  hover:transform hover:scale-105 transition duration-300 overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />

                    <div
                        className="flex flex-col absolute bottom-0 left-0 w-[100%] h-[70%] bg-black-1 bg-opacity-90 p-4 
                        transform translate-y-full group-hover:translate-y-0 transition-all opacity-0 group-hover:opacity-100 duration-300"
                    >
                        {/* reviews */}
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex flex-row items-center text-white-1 hover:text-primary-1">
                                <AiFillStar size={24} />
                                <span className="text-base font-semibold">
                                    {" "}
                                    {score ? score : "NA"}{" "}
                                </span>
                            </div>

                            {scoredby && (
                                <div className="text-sm font-normal text-white-3">
                                    ({formatNumber(scoredby)})
                                </div>
                            )}
                        </div>

                        {/* genres */}
                        <div className="flex flex-row flex-wrap gap-2 mt-4">
                            {genres.map((genre: any) => (
                                <Genre
                                    key={genre.mal_id}
                                    id={genre.mal_id}
                                    name={genre.name}
                                />
                            ))}
                        </div>

                        {/* Episodes */}
                        <div className="flex flex-row items-end justify-between justify-self-end flex-1">
                            <div className="text-white-2 font-semibold text-sm">
                                {episodes ? episodes : "?"} EP
                            </div>
                            <div className="text-white-2 font-semibold text-sm">
                                {formatDuration(duration)}
                            </div>
                        </div>
                    </div>
                </div>

                <span className="mt-4 text-center tex-sm font-semibold text-black-2">
                    {name}
                </span>
            </article>
        </Link>
    );
};

export default AnimeCard;
