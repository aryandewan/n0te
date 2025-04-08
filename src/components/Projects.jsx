import React from 'react'
import Link from "next/link";
import {FiArrowDownLeft } from "react-icons/fi";
import {PiStarFourFill} from "react-icons/pi";

const Projects = ({containerClass}) => {
    return (
        <Link href="/projects" className={`flex items-center justify-center text-[#1a1a1a] overflow-hidden ${containerClass}`}>
            <div className="flex items-center justify-between relative">
                <div className="w-1/2 flex items-center justify-center">
                    <FiArrowDownLeft className="w-full h-full -translate-x-[20%] translate-y-[20%]" />
                </div>
                <img
                    src="/images/projects.png"
                    alt="Page"
                    className="relative w-1/2 animate-spin [animation-duration:15s]"
                />
                <div className="flex items-center justify-center absolute w-1/2 right-0">
                    <PiStarFourFill className="w-10 h-10 text-[#a67d43]" />
                </div>
            </div>
        </Link>
    )
}
export default Projects
