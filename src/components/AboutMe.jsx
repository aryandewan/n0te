import Link from "next/link";
import Image from "next/image";
import { FiArrowDownRight } from "react-icons/fi";
import { PiStarFourFill } from "react-icons/pi";

const AboutMe = ({ containerClass }) => {
    return (
        <Link
            href="/aboutme"
            aria-label="Go to About Me page"
            className={`flex items-center justify-center text-[#1a1a1a] overflow-hidden ${containerClass}`}
        >
            <div className="flex items-center justify-between relative w-full max-w-[600px]">
                {/* Spinning Image */}
                <div className="relative w-1/2 aspect-square animate-spin [animation-duration:15s]">
                    <Image
                        src="/images/about me.png"
                        alt="About Me"
                        fill
                        className="object-contain"
                        loading="lazy"
                    />
                </div>


                <div className="flex items-center justify-center absolute w-1/2">
                    <PiStarFourFill className="w-10 h-10" />
                </div>


                <div className="w-1/2 flex items-center justify-center">
                    <FiArrowDownRight className="w-full h-full translate-x-[20%] translate-y-[20%]" />
                </div>
            </div>
        </Link>
    );
};

export default AboutMe;
