import React from 'react'
import Link from "next/link";

const Road = ( {containerClass, sectionName} ) => {
    return (
        <Link href="/roadmap" className={`max-lg:rounded-[70px] p-5 text-[#1a1a1a] flex items-center justify-center ${containerClass}`}>
            <div className="w-full h-[350px] md:h-[600px] lg:h-[800px] xl:h-full grid grid-cols-3 grid-rows-3 xl:[&>*]:h-37.5 text-[#1a1a1a]">
                <div className="rounded-[70px] border-2 border-[#121312] col-span-2 flex items-center justify-center">
                    <h1 className="text-2xl md:text-7xl lg:text-7xl xl:text-5xl font-orbitron text-center">
                        {sectionName}
                    </h1>
                </div>
                <div className="border-2 border-[#121312] rounded-[70px]"></div>
                <div className="flex items-center justify-center col-span-3">
                    <img
                        src="/arrow.svg"
                        alt="arrow"
                        className="h-60 w-60 md:h-150 md:w-150 lg:w-200 lg:h-200"
                    />
                </div>
                <div className="border-2 border-[#121312] rounded-[70px] row-start-3"></div>
                <div className="border-2 border-[#121312] rounded-[70px] col-span-2 row-start-3 overflow-hidden flex items-center justify-center">
                    <img
                        src="/images/kura.jpg"
                        alt="Kura"
                        className="object-contain mix-blend-luminosity"/>
                </div>
            </div>
        </Link>
    )
}
export default Road
