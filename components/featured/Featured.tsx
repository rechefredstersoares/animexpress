"use client";
import AnimeCard from "../animelist/AnimeCard";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

interface Props {
    link: string;
    animes: any[];
}

const Featured: React.FC<Props> = ({ link, animes = [] }) => {
    return (
        <div className="w-full mt-5 overflow-x-hidden relative">
            <div className="flex flex-row gap-8">
                {animes.length > 0 &&
                    animes.map((anime: any) => (
                        <AnimeCard
                            key={anime.mal_id}
                            id={anime.mal_id}
                            name={anime.titles[0].title}
                            image={anime.images.jpg.large_image_url}
                            genres={anime.genres}
                            score={anime.score}
                            scoredby={anime.scored_by}
                            duration={anime.duration}
                            episodes={anime.episodes}
                        />
                    ))}
            </div>
            <div className="flex items-center justify-end absolute bg-gradient-to-r from-transparent to-primary-1 top-0 bottom-0 right-0 w-[150px]">
                <Link href={link}>
                    <div className="transform -rotate-90 rotate text-2xl text-white-1 font-semibold flex gap-1 items-center">
                        View All
                        <IoChevronForward />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Featured;
