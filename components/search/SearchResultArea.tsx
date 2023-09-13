"use client";

import { FC } from "react";
import AnimeCard from "../animelist/AnimeCard";

interface Props {
    animes: any[];
}

const SearchResultArea: FC<Props> = ({ animes }) => {
    return (
        <div className="mt-10 flex flex-col md:flex-row flex-wrap gap-x-8 gap-y-12 justify-center">
            {animes.map((anime) => (
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
    );
};

export default SearchResultArea;
