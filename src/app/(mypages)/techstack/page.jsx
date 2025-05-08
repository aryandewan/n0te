import Techstack from "@/app/(mypages)/techstack/techstack";

const techStack = [
    {
        icon: "react",
        name: "ReactJS",
        level: "Intermediate",
        levelClass: "h-full w-1/2 bg-[#ad0013] rounded-full"
    },
    {
        icon: "next",
        name: "NextJS",
        level: "Beginner → Intermediate",
        levelClass: "h-full w-2/5 bg-[#ad0013] rounded-full"
    },
    {
        icon: "tailwindCSS",
        name: "Tailwind CSS",
        level: "Intermediate",
        levelClass: "h-full w-1/2 bg-[#ad0013] rounded-full"
    },
    {
        icon: "HTML",
        name: "HTML",
        level: "Intermediate → Expert",
        levelClass: "h-full w-4/5 bg-[#ad0013] rounded-full"
    },
    {
        icon: "CSS",
        name: "CSS",
        level: "Intermediate → Expert",
        levelClass: "h-full w-4/5 bg-[#ad0013] rounded-full"
    },
    {
        icon: "JS",
        name: "JavaScript",
        level: "Intermediate → Expert",
        levelClass: "h-full w-4/5 bg-[#ad0013] rounded-full"
    },
    {
        icon: "TS",
        name: "TypeScript",
        level: "Beginner → Intermediate",
        levelClass: "h-full w-2/7 bg-[#ad0013] rounded-full"
    },
]

const Page = () => {
    return (
        <Techstack techStack={techStack}/>
    )
}
export default Page
