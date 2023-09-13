"use client";

import Button from "./Button";

const HeroBanner = () => {
    return (
        <div className="relative w-full h-[500px] bg-hero-bg bg-center flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-white-1 z-50">
                Your <span className="text-primary-2">Anime</span> Companion
            </h1>
            <p className="text-xl font-medium text-white-3 mt-4 mb-8">
                Connect with Your Favorite Shows and Characters
            </p>
            <Button size={2} onClick={() => {}}>
                <span className="font-semibold text-primary-1">
                    Explore Now
                </span>
            </Button>
        </div>
    );
};

export default HeroBanner;
