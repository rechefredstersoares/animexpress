"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Featured from "./Featured";

const TopFeat = () => {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        const getAnime = async () => {
            try {
                const res = await axios.get(
                    "https://api.jikan.moe/v4/anime?sfw=true&order_by=score&sort=desc&limit=6"
                );
                setAnimes(res.data.data);
            } catch (error) {
                console.error("Error fetching anime data:", error);
            }
        };

        getAnime();
    }, []);

    return <Featured animes={animes} link="/anime/top" />;
};

export default TopFeat;
