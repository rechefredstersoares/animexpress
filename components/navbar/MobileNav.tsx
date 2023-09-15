"use client";

import { navLinkList } from "@/constants";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const MobileNav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
        } else {
            setMobileMenuOpen(true);
        }
    };
    return (
        <div className="md:hidden z-50">
            <div
                className="text-black-1 text-3xl cursor-pointer"
                onClick={toggleMenu}
            >
                {mobileMenuOpen ? <IoClose /> : <IoMenu />}
            </div>
            {mobileMenuOpen && (
                <div className="w-full absolute botttom-0 right-0 bg-white-1 shadow-lg px-8 py-10 transition">
                    <ul className="flex flex-col items-start gap-6">
                        {navLinkList.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className={clsx(
                                        "text-lg font-medium text-black-3"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
