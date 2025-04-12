import React from 'react';
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Tech from "@/components/Tech";
import Art from "@/components/Art";
import Interests from "@/components/Interests";
import Time from "@/components/Timeline";
import EntryAnim from "@/components/EntryAnim";

const Main = () => (
    <EntryAnim>
        <div id="container" className="grid grid-cols-1 xl:grid-cols-4 xl:grid-rows-4 w-full min-h-dvh gap-3 bg-[#1a1a1a] overflow-hidden">
            <Hero containerClass="bg-[#ad0013] xl:row-start-1 xl:row-span-4 xl:col-span-2 rounded-[70px] hero opacity-0 -translate-x-[100%]" sectionName="Hero" />
            <AboutMe containerClass="bg-[#a67d43] rounded-t-full rounded-bl-full me opacity-0 -translate-y-[100%]" sectionName="About Me" />
            <Projects containerClass="bg-[#121312] border-2 border-[#ad0013] !text-[#a67d43] xl:row-span-1 rounded-br-full rounded-t-full proj opacity-0 -translate-y-[100%]" sectionName="Projects" />
            <Tech containerClass="bg-[#121312] border-2 border-[#ad0013] !text-[#a67d43] xl:row-span-1 rounded-b-full rounded-tl-full ts opacity-0 -translate-x-[100%]" sectionName="TechStack" />
            <Art containerClass="bg-[#ad0013] xl:row-start-2 xl:col-start-4 xl:row-span-1 rounded-b-full rounded-tr-full artgallery opacity-0 translate-x-[100%]" sectionName="Art Gallery" />
            <Interests containerClass="bg-[#121312] border-2 border-[#ad0013] !text-[#a67d43] row-start-7 xl:row-start-3 xl:row-span-2 xl:col-start-4 rounded-[70px] int opacity-0 translate-y-[100%]" sectionName="TBD" />
            <Time containerClass="bg-[#A67D43] xl:col-start-3 xl:row-span-2 rounded-[70px] tline opacity-0 translate-y-[100%]" sectionName="Timeline" />
        </div>
    </EntryAnim>
);

export default Main;
