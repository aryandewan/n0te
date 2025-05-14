import Link from "next/link";
import Image from "next/image";

const Time = ({ containerClass, sectionName }) => {
    return (
        <Link
            href="/timeline"
            aria-label="Go to Timeline"
            className={`max-lg:rounded-[70px] p-5 text-[#1a1a1a] flex items-center justify-center ${containerClass}`}
        >
            <div className="w-full h-[350px] md:h-[600px] lg:h-[800px] xl:h-full grid grid-cols-3 grid-rows-3 xl:[&>*]:h-37.5">
                {/* Title Section */}
                <div className="rounded-[70px] border-2 border-[#121312] col-span-2 flex items-center justify-center">
                    <h1 className="text-2xl md:text-7xl lg:text-7xl xl:text-5xl font-outFit text-center">
                        {sectionName}
                    </h1>
                </div>

                {/* Empty Border Section */}
                <div className="border-2 border-[#121312] rounded-[70px]"></div>

                {/* Border Section */}
                <div className="border-2 border-[#121312] rounded-[70px] row-start-3"></div>

                {/* Kura Image */}
                <div className="border-2 border-[#121312] rounded-[70px] col-span-2 row-start-3 overflow-hidden flex items-center justify-center">
                    <Image
                        src="/images/kura.jpg"
                        alt="Kura"
                        width={300}
                        height={300}
                        className="object-contain mix-blend-luminosity"
                        loading="lazy"
                    />
                </div>
            </div>
        </Link>
    );
};

export default Time;
