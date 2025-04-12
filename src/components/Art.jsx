import React from 'react'
import Link from "next/link";
import {FiArrowUpLeft } from "react-icons/fi";
import {PiStarFourFill} from "react-icons/pi";
import Image from "next/image";

const Art = ({containerClass}) => {
    return (
        <Link
            href="/artgallery"
            aria-label="Navigate to Art Gallery"
            className={`flex items-center justify-center text-[#1a1a1a] overflow-hidden ${containerClass}`}
        >
            <div className="flex items-center justify-between relative w-full max-w-[600px]">
                <div className="w-1/2 flex items-center justify-center">
                    <FiArrowUpLeft className="w-full h-full -translate-x-[20%] -translate-y-[20%]" />
                </div>
                <div className="relative w-1/2 aspect-square animate-spin-slow">
                    <Image
                        src="/images/art.png"
                        alt="Art Gallery"
                        fill
                        className="object-contain"
                        loading="lazy"
                    />
                </div>
                <div className="flex items-center justify-center absolute w-1/2 right-0">
                    <PiStarFourFill className="w-10 h-10" />
                </div>
            </div>
        </Link>
    )
}
export default Art
