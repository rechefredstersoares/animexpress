"use client";

import VActorCard from "@/components/voices/VActorCard";
import { formatNumber } from "@/libs/utils";
import Image from "next/image";
import { FaClover } from "react-icons/fa6";

interface Props {
    char: any;
}

const CharacterClient = ({ char }: Props) => {
    // console.log(char);
    const characterInfo = char?.about.split("\n");
    return (
        <div className="w-full">
            <div className="w-full flex flex-row gap-8">
                <Image
                    src={char.images.jpg.image_url}
                    alt={char.name}
                    width={250}
                    height={400}
                    className="object-contain"
                />
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-black-1">
                        {char.name}
                    </h1>
                    {char.name_kanji && (
                        <h2 className="text-2xl font-semibold text-black-3 mt-2">
                            {char.name_kanji}
                        </h2>
                    )}
                    {char.nicknames.length > 0 && (
                        <div className="mt-8">
                            <p className="text-base font-semibold text-primary-1">
                                Nicknames:
                            </p>
                            {char.nicknames.map(
                                (name: string, index: number) => (
                                    <p
                                        key={index}
                                        className="text-base text-black-3"
                                    >
                                        {name}
                                    </p>
                                )
                            )}
                        </div>
                    )}

                    <div className="mt-8 flex flex-row items-center gap-2">
                        <FaClover color="#0cbc4d" size={28} />
                        <span className="text-base font-semibold text-black-3">
                            {char.favorites
                                ? formatNumber(char.favorites)
                                : "?"}
                        </span>
                        <span className="text-base font-semibold text-primary-1">
                            favorites
                        </span>
                    </div>
                </div>
            </div>

            <div className="w-full mt-16">
                <h2 className="text-2xl font-semibold text-black-2">About</h2>
                <div className="mt-4">
                    {characterInfo.map((line: string, index: number) => (
                        <p key={index} className="text-base text-grey-900">
                            {line}
                        </p>
                    ))}
                </div>
            </div>

            <div className="w-full mt-16">
                <h2 className="text-2xl font-semibold text-black-2">
                    Voice Actors
                </h2>
                <div className="mt-4 flex flex-row flex-wrap gap-8">
                    {char.voices.map((voice: any, index: number) => (
                        <VActorCard
                            img={voice.person.images.jpg.image_url}
                            name={voice.person.name}
                            lang={voice.language}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CharacterClient;
