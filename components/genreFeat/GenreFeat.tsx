"use client";

import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import GenreCard from "./GenreCard";

const GenreFeat = () => {
    return (
        <div className="w-full mt-5 overflow-x-hidden relative">
            <div className="flex flex-row gap-8">
                <GenreCard id={1} genreName="Action" />
                <GenreCard id={4} genreName="Comedy" />
                <GenreCard id={5} genreName="Avant Garde" />
                <GenreCard id={46} genreName="Award Winning" />
            </div>
            <div className="flex items-center justify-end absolute bg-gradient-to-r from-transparent to-primary-1 top-0 bottom-0 right-0 w-[150px]">
                <Link href={"/genres"}>
                    <div className="transform -rotate-90 rotate text-2xl text-white-1 font-semibold flex gap-1 items-center">
                        View All
                        <IoChevronForward />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default GenreFeat;
