import React from 'react'
import Link from "next/link";
import {FiArrowUpLeft} from "react-icons/fi";

const Roadmap = ({timeLine}) => {
    return (
        <section className="relative w-full min-h-dvh bg-[#a67d43] overflow-hidden cursor-default">
            <div className="absolute w-full h-full z-1 bg-[url('/images/one.png')] bg-cover bg-center opacity-20"></div>
            <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-25 grid-rows-1 relative z-10 mb-10">
                <Link href="/">
                    <div className="w-full h-full flex items-center justify-center rounded-b-full rounded-tr-full bg-[#121312] xl:rotate-z-180 hover:rotate-z-360 transition-all duration-300 ease-in-out">
                        <FiArrowUpLeft className="w-full h-full -translate-x-[20%] -translate-y-[20%] text-[#a67d43]" />
                    </div>
                </Link>
            </div>
            <div className="flex w-full mb-10 items-center justify-center relative">
                <div className="w-[85%] font-rubik flex flex-col gap-5 lg:gap-20 xl:gap-5 items-center justify-center">
                    {timeLine.map((item, index) => (
                        <div key={index} className="w-full flex flex-col lg:flex-row justify-between relative">
                            <h1 className="font-rubik max-lg:text-center text-[7rem] md:text-[17rem] xl:text-[35rem] leading-none font-extralight text-[#121312] opacity-10">
                                {item.year}
                            </h1>
                            <div className="lg:absolute lg:right-0 flex lg:flex-col gap-5 items-start justify-center lg:w-1/2 z-10">
                                <h1 className="font-rubik text-base md:text-2xl xl:text-5xl text-[#ad0013] w-1/2 lg:w-full">
                                    {item.title}
                                </h1>
                                <p className="font-rubik text-sm md:text-xl xl:text-4xl font-light text-[#121312] w-1/2 lg:self-end lg:text-justify">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Roadmap
