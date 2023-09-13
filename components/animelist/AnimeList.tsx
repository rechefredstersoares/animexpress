"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

const AnimeList = () => {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        const getAnime = async () => {
            try {
                const res = await axios.get(
                    "https://api.jikan.moe/v4/anime?order_by=score&sort=desc"
                );
                setAnimes(res.data.data);
            } catch (error) {
                console.error("Error fetching anime data:", error);
            }
        };

        getAnime();
    }, []);

    return (
        <section className="bg-white mt-12">
            <h2 className="text-2xl font-semibold text-gray-900">Top Anime</h2>
            <div className="">
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
                            year={anime.year}
                        />
                    ))}
            </div>
        </section>
    );
};

export default AnimeList;
