"use client";

import CircularScore from "@/components/CircularScore";
import Genre from "@/components/animelist/Genre";
import { formatDate, formatDuration, formatNumber } from "@/libs/utils";
import { Anime } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaHashtag } from "react-icons/fa";
import { BsFire } from "react-icons/bs";
import { FaGripLinesVertical } from "react-icons/fa";
import Trailer from "@/components/trailer/Trailer";

interface Props {
    id: number;
    name: string;
    anime: any;
}

const SingleAnime: FC<Props> = ({ id, name, anime }) => {
    return (
        <div className="w-full">
            {/* TOP INFO */}
            <div className="flex flex-row items-start justify-center gap-8 ">
                <div className="relative w-[300px] h-[450px]">
                    <Image
                        src={anime.images.jpg.large_image_url}
                        alt={name}
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="pt-8 max-w-lg">
                    {/* TITLE */}
                    <h1 className="text-3xl text-black-2 font-bold">{name}</h1>

                    {/* TYPE AND RATING */}
                    <div className="flex flex-roe items-center gap-4 mt-8">
                        <div className="text-base font-semibold text-white-1 px-2 py-[2px] bg-primary-1 cursor-pointer">
                            {anime.type}
                        </div>
                        <div className="text-base font-semibold text-primary-1 px-2 py-[2px] border-primary-1 border-[1px]">
                            {anime.rating}
                        </div>
                    </div>

                    {/* GENRES */}
                    <div className="mt-4 flex flex-row flex-wrap gap-2">
                        {anime?.genres?.map((genre: any) => (
                            <Genre
                                key={genre.mal_id}
                                name={genre.name}
                                id={genre.mal_id}
                                size={3}
                            />
                        ))}
                    </div>

                    {/* STATUS */}
                    <div className="mt-4">
                        <p className="text-base font-semibold text-primary-1">
                            Status:{" "}
                            <span className="font-bold text-black-1">
                                {anime?.status}
                            </span>
                        </p>
                        <div className="mt-1 text-base">
                            {anime?.aired?.from
                                ? formatDate(anime?.aired?.from)
                                : "?"}
                            {anime?.airing
                                ? " - Present"
                                : anime?.aired?.to
                                ? " - " + formatDate(anime?.aired?.to)
                                : ""}
                        </div>
                    </div>

                    {/* EPISODES AND TIME */}
                    <div className="flex flex-row gap-8 mt-4">
                        <div className="text-black-3 font-semibold text-lg">
                            <span className="text-black-1">
                                {anime?.episodes ? anime.episodes : "?"}
                            </span>{" "}
                            EP
                        </div>
                        <div className="text-black-3 font-semibold text-lg">
                            <span className="text-black-1">
                                {anime?.duration
                                    ? formatDuration(anime.duration)
                                    : "?"}
                            </span>
                        </div>
                    </div>

                    {/* SCOREBOARD */}
                    <div className="flex flex-row gap-4 mt-8">
                        {/* SCORE */}
                        <div className="flex flex-row items-center justify-center">
                            <CircularScore score={anime?.score} />
                            <p className="text-sm font-semibold text-black-3 ml-2">
                                Scored by {formatNumber(anime?.scored_by)}
                            </p>
                        </div>

                        <div className="flex flex-row items-center justify-center">
                            <FaHashtag color="#0cbc4d" size={28} />
                            <span className="text-lg font-bold text-black-1 ml-1">
                                {anime?.rank}
                            </span>
                        </div>

                        <div className="flex flex-row items-center justify-center">
                            <BsFire color="#0cbc4d" size={28} />
                            <span className="text-lg font-bold text-black-1 ml-1">
                                {anime?.popularity}
                            </span>
                        </div>
                    </div>

                    {/* STUDIOS*/}
                    <div className="mt-6 flex flex-row items-center gap-8">
                        <div className="text-sm text-sky-900">
                            {anime?.studios?.map((studio: any) => (
                                <Link href={studio.url} key={studio?.mal_id}>
                                    {studio?.name},
                                </Link>
                            ))}
                        </div>

                        {/* YEAR */}
                        <div className="text-base font-semibold text-black-3">
                            {anime.year}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-3xl text-black-2 font-semibold">
                    Synopsis
                </h2>
                <p className="text-base text-black-3 mt-2">{anime.synopsis}</p>
            </div>

            {anime?.trailer?.embed_url && (
                <div className="mt-16">
                    <h2 className="text-3xl text-black-2 font-semibold mb-5">
                        Trailer
                    </h2>
                    <Trailer
                        url={anime.trailer.embed_url}
                        thumbnail={anime?.trailer.images.large_image_url}
                    />
                </div>
            )}
        </div>
    );
};

export default SingleAnime;
