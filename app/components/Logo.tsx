import Image from "next/image";
import React from "react";

type LogoProps = {
    filter: string,
    size: number,
};

export default function Logo({filter, size}: LogoProps) {
    return (
        <Image
            src="/logo.png"
            width={size}
            height={size}
            alt="Mountain Mixology logo"
            className={filter === "light" ? "invert" : ""}
        />
    );
}
