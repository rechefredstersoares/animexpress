"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Featured from "./Featured";

const UpcomingFeat = () => {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        const getAnime = async () => {
            try {
                const res = await axios.get(
                    "https://api.jikan.moe/v4/anime?sfw=true&status=upcoming&order_by=popularity&sort=asc&limit=6"
                );
                setAnimes(res.data.data);
            } catch (error) {
                console.error("Error fetching anime data:", error);
            }
        };

        getAnime();
    }, []);

    return <Featured animes={animes} link="/anime/upcoming" />;
};

export default UpcomingFeat;
