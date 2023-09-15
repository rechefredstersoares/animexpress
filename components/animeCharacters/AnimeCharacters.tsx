"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AnimeCharacters = ({ id }: { id: string }) => {
    const initialCharacterLimit = 10;
    const [characterLimit, setCharacterLimit] = useState(initialCharacterLimit);
    const stepSize = 20;

    const [characters, setCharacters] = useState<any[]>([]);

    const showMore = () => {
        if (characterLimit + stepSize < characters.length) {
            setCharacterLimit(characterLimit + stepSize);
        } else {
            setCharacterLimit(characters.length);
        }
    };

    const showLess = () => {
        setCharacterLimit(initialCharacterLimit);
    };

    useEffect(() => {
        const getCharacters = async () => {
            try {
                const res = await axios.get(
                    `https://api.jikan.moe/v4/anime/${id}/characters`
                );
                setCharacters(res.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        getCharacters();
    }, []);

    return (
        <div className="w-full mt-16">
            <h2 className="text-3xl font-semibold text-black-2">Characters</h2>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 w-full items-center justify-start">
                {characters.slice(0, characterLimit).map((char) => (
                    // Render character component here
                    <div
                        className="flex flex-col items-center justify-center gap-1 "
                        key={char.character.mal_id}
                    >
                        <Link href={`/character/${char.character.mal_id}`}>
                            <div className="relative w-[150px] h-[220px] shadow-lg transform hover:scale-105 scale-100 transition duration-300">
                                <Image
                                    src={char.character.images.jpg.image_url}
                                    alt={char.character.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Link>
                        <Link href={`/character/${char.character.mal_id}`}>
                            <span className="mt-4 text-center tex-sm font-semibold text-black-2">
                                {char.character.name}
                            </span>
                        </Link>
                    </div>
                ))}

                {characterLimit < characters.length ? (
                    <button
                        onClick={showMore}
                        className="text-primary-1 hover:text-primary-2 text-base font-normal underline"
                    >
                        Show More
                    </button>
                ) : (
                    <button
                        onClick={showLess}
                        className="text-primary-1 hover:text-primary-2 text-base font-normal underline"
                    >
                        Show Less
                    </button>
                )}
            </div>
        </div>
    );
};

export default AnimeCharacters;
