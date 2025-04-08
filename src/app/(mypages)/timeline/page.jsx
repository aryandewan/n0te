import React from 'react'
import Roadmap from "@/app/(mypages)/roadmap/roadmap";

const timeLine = [
    {
        year: "2003",
        title: "→ The Saga Begins",
        desc: "Born. Tiny human. Big potential. No idea what HTML was… yet."
    },
    {
        year: "2009",
        title: "→ First Day at School",
        desc: "Jumped into the education system. Learned ABCs, 123s, and how to fake a stomachache to skip sports day."
    },
    {
        year: "2021",
        title: "→ School: Completed!",
        desc: "Wrapped up school life. Board exams survived. Graduated with dreams and probably a fried brain."
    },
    {
        year: "2021",
        title: "→ Entered the Engineering Zone",
        desc: "Joined university with curiosity, confusion, and a why-did-I-choose-this vibe. But hey, it all worked out in its own way."
    },
    {
        year: "2022",
        title: "→ NFT Dreams Unlocked",
        desc: "Launched my first NFT project. Designed, strategized, and actually made something of it before…"
    },
    {
        year: "2022",
        title: "→ Crypto Crash",
        desc: "The market crashed. I cashed out with rewards and gracefully exited the NFT world like a character disappearing into the mist."
    },
    {
        year: "2022",
        title: "→ First University Project",
        desc: "Started actually building stuff. Projects turned from “Google + panic” to “Google + StackOverflow + caffeine.”"
    },
    {
        year: "2022",
        title: "→ First Job: Graphic Designer",
        desc: "Got my first taste of the creative workforce. Learned design, deadlines, and how chaotic client feedback can be."
    },
    {
        year: "2023",
        title: "→ Layoff No. 1",
        desc: "Got laid off. It hurt—but also unlocked the next phase of my evolution. Every L is a lesson, right?"
    },
    {
        year: "2023",
        title: "→ 2nd Project in Uni",
        desc: "Better. Cleaner. More thought-out. Confidence was rising, and Git commits stopped looking like “final_final_v3”."
    },
    {
        year: "2024",
        title: "→ Code Mode: ON",
        desc: "This is when I got serious. No more tutorial hell. Started building like I meant it."
    },
    {
        year: "2025",
        title: "→ First Freelance Web Dev Gig",
        desc: "Got paid to do what I love. Validation hit different. The first brick laid on my tech journey."
    },
    {
        year: "2026",
        title: "→ The Japan Arc Begins",
        desc: "A new country, a new chapter. Teaching by day, coding by night. Anime cafes on weekends. This one’s personal."
    },
    {
        year: "...",
        title: "",
        desc: ""
    },
]

const Page = () => {
    return (
        <Roadmap timeLine={timeLine}/>
    )
}
export default Page
