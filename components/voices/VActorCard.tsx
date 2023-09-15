"use client";

import Image from "next/image";

interface Props {
    img: string;
    name: string;
    lang: string;
}

const VActorCard = ({ img, name, lang }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Image
                src={img}
                alt={name}
                width={150}
                height={200}
                className="object-contain"
            />
            <h3 className="text-base font-semibold text-black-2 mt-2 text-center">
                {name}
            </h3>
            <p className="mt-1 text-sm font-normal text-gray-800">{lang}</p>
        </div>
    );
};

export default VActorCard;
