import Link from "next/link";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const Hero = ({ containerClass, sectionName }) => {
    return (
        <Link
            href="/"
            aria-label={`Navigate to ${sectionName || "home"}`}
            className={`relative text-[#1a1a1a] overflow-hidden rounded-[70px] max-lg:rounded-[70px] ${containerClass}`}
        >

            <div className="absolute inset-0 z-0 opacity-20">
                <Image
                    src="/images/one.png"
                    alt="Background pattern"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                />
            </div>


            <div className="absolute inset-0 z-0 mix-blend-multiply opacity-35">
                <Image
                    src="/images/me.png"
                    alt="Aryan Dewan"
                    fill
                    className="object-cover object-top"
                    priority
                />
            </div>


            <div className="relative z-10 p-5 flex flex-col justify-between h-[400px] md:h-full">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-4xl xl:text-7xl font-semibold font-orbitron">
                        ARYAN DEWAN
                        <span className="font-light text-sm md:text-xl xl:text-3xl font-rubik">
              {" "}
                            (n0te)
            </span>
                    </h1>
                    <p className="text-lg xl:text-2xl font-rubik">
                        FRONT-END DEVELOPER
                    </p>
                </div>

                <div className="self-end text-justify md:w-1/3 lg:w-1/2 xl:w-1/4 xl:h-1/2">
                    <p className="text-lg lg:text-2xl font-rubik">
                        <sup className="text-2xl md:text-4xl lg:text-6xl">
                            <FaQuoteLeft />
                        </sup>
                        Front-end dev obsessed with sleek UIs, creative builds, and all
                        things Japan. Always leveling up, always planning the next big move.
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Hero;
