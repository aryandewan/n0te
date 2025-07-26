import Image from "next/image";
import { mono } from "@/app/fonts";
import { Marquee } from "@/components/magicui/marquee";

const images = [
    "/art/1.jpg",
    "/art/2.jpg",
    "/art/3.jpg",
    "/art/4.jpg",
    "/art/5.jpg",
    "/art/6.jpg",
    "/art/7.jpg",
    "/art/8.jpg",
    "/art/9.jpg",
    "/art/10.jpg",
    "/art/11.jpg",
    "/art/12.jpg",
    "/art/13.jpg",
    "/art/14.jpg",
    "/art/15.jpg",
]

const ArtGallery = () => {
    return (
            <section className={`relative w-full bg-black text-white overflow-hidden cursor-default ${mono.className} flex flex-col items-center justify-center py-20 gap-10`}>
            <h1 className="text-xl md:text-3xl lg:text-6xl font-bold"><span className="text-red-500">*</span>ART GALLERY<span className="text-red-500"  >*</span></h1>
            <Marquee className="[--duration:40s] p-0 m-0">
                {images.map((image, i) => (
                    <Image
                        key={i}
                        src={image}
                        alt={`Artwork ${i}`}
                        width={300}
                        height={300}
                        quality={100}
                        className="object-cover h-full rounded-xl p-1"
                    />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
        </section>
    );
};

export default ArtGallery;