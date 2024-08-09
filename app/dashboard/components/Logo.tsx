import React from 'react'
import Image from "next/image";

type LogoProps = {
    width?: number;
    height?: number;
    logo?: string;
    styleClasses?: string;
}

const Logo = ({ width = 150, height = 40, logo = 'logo', styleClasses = '' }: LogoProps) => {
    return (
        <Image
            src={`/logo/${logo}.png`}
            alt="logo"
            width={width}
            height={height}
            priority
            className={styleClasses}
        />
    )
}

export default Logo