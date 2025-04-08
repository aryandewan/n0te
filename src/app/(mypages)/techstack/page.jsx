import React from 'react'
import Techstack from "@/app/(mypages)/techstack/techstack";

const techStack = [
    {
        name: "ReactJS",
        level: "Intermediate",
        levelClass: "h-full w-1/2 bg-[#ad0013] rounded-full"
    },
    {
        name: "NextJS",
        level: "Beginner → Intermediate",
        levelClass: "h-full w-2/5 bg-[#ad0013] rounded-full"
    },
    {
        name: "Tailwind CSS",
        level: "Intermediate",
        levelClass: "h-full w-1/2 bg-[#ad0013] rounded-full"
    },
    {
        name: "HTML",
        level: "Intermediate → Expert",
        levelClass: "h-full w-4/5 bg-[#ad0013] rounded-full"
    },
    {
        name: "CSS",
        level: "Intermediate → Expert",
        levelClass: "h-full w-4/5 bg-[#ad0013] rounded-full"
    },
    {
        name: "JavaScript",
        level: "Intermediate → Expert",
        levelClass: "h-full w-4/5 bg-[#ad0013] rounded-full"
    },
]

const Page = () => {
    return (
        <Techstack techStack={techStack}/>
    )
}
export default Page
