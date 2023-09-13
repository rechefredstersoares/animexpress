"use client";
import Image from "next/image";
import Link from "next/link";

const ProfileAvatar = () => {
    return (
        <Link href="#">
            <div className="flex items-center gap-4">
                <p className="text-sm font-light text-gray-500">
                    Hello,
                    <span className="font-medium text-gray-600 ml-1">
                        Reche Soares
                    </span>
                </p>
                <div className="w-10 h-10 rounded-full relative overflow-hidden">
                    <Image
                        src="/assets/profilepic.jpg"
                        alt="Profile Picture"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </Link>
    );
};

export default ProfileAvatar;
