import React from 'react'
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import {PiStarFourFill} from "react-icons/pi";
import Image from "next/image";

const Tech = ({containerClass}) => {
    return (
        <Link
            href="/techstack"
            aria-label="Go to Tech Stack page"
            className={`flex items-center justify-center text-[#1a1a1a] overflow-hidden ${containerClass}`}
        >
            <div className="flex items-center justify-between relative w-full max-w-[600px]">
                <div className="relative w-1/2 aspect-square animate-spin [animation-duration:15s]">
                    <Image
                        src="/images/tech.png"
                        alt="Tech Stack"
                        fill
                        className="object-contain"
                        loading="lazy"
                    />
                </div>
                <div className="flex items-center justify-center absolute w-1/2">
                    <PiStarFourFill className="w-10 h-10 text-[#a67d43]" />
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <FiArrowUpRight className="w-full h-full translate-x-[20%] -translate-y-[20%]" />
                </div>
            </div>
        </Link>
    )
}
export default Tech
