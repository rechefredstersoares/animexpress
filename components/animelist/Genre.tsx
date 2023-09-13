"use client";

import clsx from "clsx";

interface Props {
    id: number;
    name: string;
    size?: number;
}

const Genre = ({ id, name, size }: Props) => {
    enum colors {
        Action = "border-red-600 hover:border-red-400 text-red-600 hover:text-red-400",
        Adventure = "border-green-600 hover:border-green-400 text-green-600 hover:text-green-400",
        AvantGarde = "border-purple-600 hover:border-purple-400 text-purple-600 hover:text-purple-400",
        AwardWinning = "border-yellow-600 hover:border-yellow-400 text-yellow-600 hover:text-yellow-400",
        BoysLove = "border-pink-600 hover:border-pink-400 text-pink-600 hover:text-pink-400",
        Comedy = "border-yellow-600 hover:border-yellow-400 text-yellow-600 hover:text-yellow-400",
        Drama = "border-teal-600 hover:border-teal-400 text-teal-600 hover:text-teal-400",
        Fantasy = "border-blue-600 hover:border-blue-400 text-blue-600 hover:text-blue-400",
        GirlsLove = "border-pink-600 hover:border-pink-400 text-pink-600 hover:text-pink-400",
        Gourmet = "border-orange-600 hover:border-orange-400 text-orange-600 hover:text-orange-400",
        Horror = "border-red-600 hover:border-red-400 text-red-600 hover:text-red-400",
        Mystery = "border-indigo-600 hover:border-indigo-400 text-indigo-600 hover:text-indigo-400",
        Romance = "border-pink-600 hover:border-pink-400 text-pink-600 hover:text-pink-400",
        SciFi = "border-blue-600 hover:border-blue-400 text-blue-600 hover:text-blue-400",
        SliceofLife = "border-peach-600 hover:border-peach-400 text-peach-600 hover:text-peach-400",
        Sports = "border-green-600 hover:border-green-400 text-green-600 hover:text-green-400",
        Supernatural = "border-purple-600 hover:border-purple-400 text-purple-600 hover:text-purple-400",
        Suspense = "border-gray-600 hover:border-gray-400 text-gray-600 hover:text-gray-400",
    }

    return (
        <div
            className={clsx(
                `p-[2px] border-[1px] text-xs font-medium w-fit cursor-pointer`,
                size === 2 && "p-[4px] text-sm font-semibold",
                size === 3 && "p-[6px] text-lg font-bold border-[2px]",
                name === "Action" && colors.Action,
                name === "Adventure" && colors.Adventure,
                name === "Avant Garde" && colors.AvantGarde,
                name === "Award Winning" && colors.AwardWinning,
                name === "Boys Love" && colors.BoysLove,
                name === "Comedy" && colors.Comedy,
                name === "Drama" && colors.Drama,
                name === "Fantasy" && colors.Fantasy,
                name === "Girls Love" && colors.GirlsLove,
                name === "Gourmet" && colors.Gourmet,
                name === "Horror" && colors.Horror,
                name === "Mystery" && colors.Mystery,
                name === "Romance" && colors.Romance,
                name === "Sci-Fi" && colors.SciFi,
                name === "Slice of Life" && colors.SliceofLife,
                name === "Sports" && colors.Sports,
                name === "Supernatural" && colors.Supernatural,
                name === "Suspense" && colors.Suspense
            )}
        >
            {name}
        </div>
    );
};

export default Genre;
