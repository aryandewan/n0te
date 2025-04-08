import React from 'react'
import Link from "next/link";
import {FiArrowUpLeft} from "react-icons/fi";

const techStack = [
    {
        name: "ReactJS",
        level: "Intermediate",
        levelClass: "h-full w-2/3 bg-[#ad0013] rounded-full"
    },
    {
        name: "NextJS",
        level: "Beginner → Intermediate",
        levelClass: "h-full w-1/3 bg-[#ad0013] rounded-full"
    },
    {
        name: "Tailwind CSS",
        level: "Intermediate",
        levelClass: "h-full w-2/3 bg-[#ad0013] rounded-full"
    },
    {
        name: "HTML",
        level: "Intermediate → Expert",
        levelClass: "h-full w-3/4 bg-[#ad0013] rounded-full"
    },
    {
        name: "CSS",
        level: "Intermediate → Expert",
        levelClass: "h-full w-3/4 bg-[#ad0013] rounded-full"
    },
    {
        name: "JavaScript",
        level: "Intermediate → Expert",
        levelClass: "h-full w-3/4 bg-[#ad0013] rounded-full"
    },
]

const Page = () => {
    return (
        <section className="w-full min-h-dvh bg-[#121312] overflow-hidden cursor-default">
            <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-25 grid-rows-1 relative z-10 mb-10">
                <Link href="/">
                    <div className="w-full h-full flex items-center justify-center rounded-b-full rounded-tr-full bg-[#121312] border-2 border-[#ad0013] xl:rotate-z-180 hover:rotate-z-360 transition-all duration-300 ease-in-out">
                        <FiArrowUpLeft className="w-full h-full -translate-x-[20%] -translate-y-[20%] text-[#a67d43]" />
                    </div>
                </Link>
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="w-[85%] font-rubik flex flex-col items-center justify-center gap-10">
                    {techStack.map((tech, index) => (
                        <div className="w-full" key={index}>
                            <div className="flex justify-between text-lg md:text-2xl lg:text-3xl text-[#a67d43] mb-1">
                                <span>{tech.name}</span><span>{tech.level}</span>
                            </div>
                            <div className="h-1.5 rounded-full">
                                <div className={`${tech.levelClass}`}></div>
                            </div>
                        </div>
                    ))}
                    <div className="w-full">
                        <div className="flex justify-between text-lg md:text-2xl lg:text-3xl text-[#a67d43] mb-1">
                            <span>TypeScript</span><span>...In Progress</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Page
