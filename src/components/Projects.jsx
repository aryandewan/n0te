import React from 'react'
import Link from "next/link";
import {FiArrowDownLeft } from "react-icons/fi";
import {PiStarFourFill} from "react-icons/pi";
import Image from "next/image";

const Projects = ({containerClass}) => {
    return (
        <Link
            href="/projects"
            aria-label="Go to Projects page"
            className={`flex items-center justify-center text-[#1a1a1a] overflow-hidden ${containerClass}`}
        >
            <div className="flex items-center justify-between relative w-full max-w-[600px]">
                <div className="w-1/2 flex items-center justify-center">
                    <FiArrowDownLeft className="w-full h-full -translate-x-[20%] translate-y-[20%]" />
                </div>
                <div className="relative w-1/2 aspect-square animate-spin [animation-duration:15s]">
                    <Image
                        src="/images/projects.png"
                        alt="Projects"
                        fill
                        className="object-contain"
                        loading="lazy"
                    />
                </div>
                <div className="flex items-center justify-center absolute w-1/2 right-0">
                    <PiStarFourFill className="w-10 h-10 text-[#a67d43]" />
                </div>
            </div>
        </Link>
    )
}
export default Projects
