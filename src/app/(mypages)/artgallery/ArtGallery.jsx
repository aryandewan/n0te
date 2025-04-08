"use client"

import React from 'react'
import Link from "next/link";
import {FiArrowUpLeft} from "react-icons/fi";

const ArtGallery = ({images}) => {
    if (!images || !Array.isArray(images)) return <p>No images found.</p>;

    return (
        <section className="w-full min-h-dvh bg-[#121312] overflow-hidden cursor-default">
            <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-25 grid-rows-1 relative z-10">
                <Link href="/">
                    <div className="w-full h-full flex items-center justify-center rounded-b-full rounded-tr-full bg-[#ad0013] xl:rotate-z-180 hover:rotate-z-360 transition-all duration-300 ease-in-out">
                        <FiArrowUpLeft className="w-full h-full -translate-x-[20%] -translate-y-[20%] text-[#121312]" />
                    </div>
                </Link>
            </div>
            <div className="p-4 w-full flex items-center justify-center">
                <div className="columns-1 md:columns-4 lg:columns-6 gap-4 space-y-4 w-[85%]">
                    {images.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Art ${i + 1}`}
                            className="w-full break-inside-avoid"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default ArtGallery
