"use client";
import clsx from "clsx";
import React, { FC } from "react";

interface Props {
    onClick?: () => void;
    size?: number;
    filled?: boolean;
    children?: React.ReactNode;
}

const Button: FC<Props> = ({ onClick, size, filled, children }) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                `rounded-full border-2 border-primary-1`,
                size === 1 && "px-2 py-[2px]",
                size === 2 && "px-4 py-[4px]",
                size === 3 && "px-6 py-[6px]",
                filled ? "bg-primary-1" : "bg-transparent",
                filled ? "hover:bg-primary-2" : "hover:bg-transparent"
            )}
        >
            {children}
        </button>
    );
};

export default Button;
