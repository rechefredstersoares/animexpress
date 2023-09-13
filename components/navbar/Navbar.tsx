"use client";
import Link from "next/link";
import React from "react";
import Logo from "../Logo";
import ProfileAvatar from "./ProfileAvatar";
import clsx from "clsx";
import { navLinkList } from "@/constants";
import Headroom from "react-headroom";

const Navbar = () => {
    return (
        <Headroom>
            <header className="bg-white-1 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4 shadow-xl">
                <Logo />
                <nav>
                    <ul className="hidden md:flex flex-row gap-8 lg:gap-10">
                        {navLinkList.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className={clsx(
                                        "text-sm font-medium text-black-3"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* TODO: mobile navigation */}
                <ProfileAvatar />
            </header>
        </Headroom>
    );
};

export default Navbar;
