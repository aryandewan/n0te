import React from 'react'
import Link from "next/link";

const Interests = ({containerClass, sectionName}) => {
    return (
        <Link href="/" className={`h-full xl:h-full max-lg:rounded-[70px] text-[#1a1a1a] flex items-center justify-center ${containerClass} overflow-hidden`}>
            <div className="w-full h-full flex items-center justify-center">
                <div className="flex items-center justify-center p-5">
                    <h1 className="text-[2.5rem] md:text-[7rem] lg:text-[9rem] xl:text-[4rem] font-orbitron font-black">
                        {sectionName}
                    </h1>
                </div>
            </div>
        </Link>
    )
}
export default Interests
