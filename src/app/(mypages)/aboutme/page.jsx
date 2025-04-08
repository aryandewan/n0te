import React from 'react'
import Aboutme from "@/app/(mypages)/aboutme/aboutme";

const links = [
    {
        name: "LinkedIN",
        href: "https://www.linkedin.com/in/aryan-dewan-079a1b225/"
    },
    {
        name: "GitHub",
        href: "https://github.com/aryandewan"
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/_aryandewan_/"
    },
    {
        name: "X",
        href: "https://x.com/notedownz"
    }
]

const Page = () => {
    return (
        <Aboutme links={links} />
    )
}
export default Page
