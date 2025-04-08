import React from 'react'
import MyProjects from "@/app/(mypages)/projects/MyProjects";

const projects = [
    {
        name: "LiveCodeCollab",
        url: "https://aryandewan.github.io/LIVECODECOLLAB/",
        preview: "/images/LCC.png",
        tech: [
            "ReactJS",
            "Tailwind CSS",
            "GSAP",
            "API",
            "Firebase",
            "Responsive Design"
        ],
        links: [
            {
                github: "https://github.com/aryandewan/LIVECODECOLLAB",
            }
        ]
    },
    {
        name: "AniX",
        url: "https://aryandewan.github.io/ANIMELIST/",
        preview: "/images/anix.png",
        tech: [
            "ReactJS",
            "Tailwind CSS",
            "API",
            "Responsive Design"
        ],
        links: [
            {
                github: "https://github.com/aryandewan/ANIMELIST",
            }
        ]
    },
    {
        name: "Trading Studio",
        url: "https://tradingstudio.vercel.app/",
        preview: "/images/tradingstudio.png",
        tech: [
            "NextJS",
            "Tailwind CSS",
            "TypeScript",
            "ShadCN",
            "Rule Logic"
        ],
        links: [
            {
                github: "https://github.com/aryandewan/tradingstudio",
            }
        ]
    },
    {
        name: "GreatBox",
        url: "https://aryandewan.github.io/HOM/",
        preview: "/images/HOM.png",
        tech: [
            "ReactJS",
            "Tailwind CSS",
            "GSAP",
            "Responsive Design"
        ],
        links: [
            {
                github: "https://github.com/aryandewan/HOM",
            }
        ]
    },
    {
        name: "Job-Tracker",
        url: "https://aryandewan.github.io/JOB-TRACKER/",
        preview: "/images/JT.png",
        tech: [
            "ReactJS",
            "Tailwind CSS",
            "Responsive Design"
        ],
        links: [
            {
                github: "https://github.com/aryandewan/JOB-TRACKER",
            }
        ]
    },
];

const Page = () => {
    return <MyProjects projects={projects} />;
}
export default Page
