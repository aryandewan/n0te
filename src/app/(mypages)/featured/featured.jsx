"use client";

import React, { useRef } from "react";
import { mono } from "@/app/fonts";
import Image from "next/image";
import { ArrowUpRight, Dot } from "lucide-react";
import { projects } from "@/app/(mypages)/projects/page";
import Link from "next/link";
import { Icons } from "@/app/(mypages)/aboutme/aboutme";
import ImageCarousel from "@/components/ImageCarousel";
import { motion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const kotaeImg = [
  "/images/kotae-mock-1.jpg",
  "/images/kotae-mock-2.jpg",
  "/images/kotae-mock-3.jpg",
  "/images/kotae-mock-4.jpg",
];

const Featured = () => {
  return (
    <section
      className={`min-h-dvh w-full bg-black text-white ${mono.className} p-5 flex items-center justify-center py-20`}
    >
      <div className="w-[95%] xl:w-[70%] flex flex-col items-center justify-center gap-5">
        <h1 className="text-base md:text-2xl lg:text-4xl xl:text-6xl font-bold self-start">
          FEATURED PR0JECTS (4)
        </h1>
        <div
          className="grid md:grid-cols-2 w-full gap-10"
        >
          <motion.div
            className="md:col-span-2 rounded-4xl overflow-hidden relative"
          >
            <ImageCarousel images={kotaeImg} interval={6000} />
            <div className="w-full bg-black p-5 flex flex-col gap-5 xl:gap-0 lg:flex-row justify-between border-1 border-white rounded-b-4xl">
              <div className="space-y-5">
                <h1>PROJECT 01</h1>
                <p className="font-outFit text-xl md:text-3xl">
                  <b>Kotae: Rebuild</b> of <b>Kotae.io</b>, an AI Chatbot for
                  small businesses
                </p>
                <div className="flex flex-wrap">
                  {projects[3].tech.map((tech, i) => (
                    <div key={i} className="flex font-semibold">
                      <Dot />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-row lg:flex-col items-end gap-5">
                <Link
                  href={projects[3].url}
                  target={"_blank"}
                  className="bg-white p-4 text-black rounded-full flex gap-2 group w-fit whitespace-nowrap self-end"
                >
                  Live Site{" "}
                  <ArrowUpRight className="rotate-45 group-hover:transform group-hover:rotate-0 transition-all duration-300 ease-in-out" />
                </Link>
                <Link
                  href={projects[3].github}
                  target={"_blank"}
                  className="self-end text-xs"
                >
                  <Icons.github />
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="rounded-4xl overflow-hidden"
          >
            <Image
              src="/images/grub-mock-1.jpg"
              alt="grub-mock-1"
              width={1500}
              height={1500}
              className="object-cover w-full rounded-t-4xl"
            />
            <div className="w-full bg-black p-5 flex flex-col gap-5 justify-between border-1 border-white rounded-b-4xl">
              <div className="space-y-5">
                <h1>PROJECT 02</h1>
                <p className="font-outFit text-xl md:text-3xl">
                  <b>GRUBIFY: AI Powered</b> recipe generator based on a
                  user-provided list of ingredients
                </p>
                <div className="flex flex-wrap">
                  {projects[0].tech.map((tech, i) => (
                    <div key={i} className="flex font-semibold cursor-pointer">
                      <Dot />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-row items-end gap-5">
                <Link
                  href={projects[0].url}
                  target={"_blank"}
                  className="bg-white p-4 text-black rounded-full flex gap-2 group w-fit whitespace-nowrap"
                >
                  Live Site{" "}
                  <ArrowUpRight className="rotate-45 group-hover:transform group-hover:rotate-0 transition-all duration-300 ease-in-out" />
                </Link>
                <Link
                  href={projects[0].github}
                  target={"_blank"}
                  className="text-xs"
                >
                  <Icons.github />
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="rounded-4xl overflow-hidden"
          >
            <Image
              src="/images/lcc-mock-1.jpg"
              alt="lcc-mock-1"
              width={1500}
              height={1500}
              className="object-cover w-full rounded-t-4xl"
            />
            <div className="w-full bg-black p-5 flex flex-col gap-5 justify-between border-1 border-white rounded-b-4xl">
              <div className="space-y-5">
                <h1>PROJECT 03</h1>
                <p className="font-outFit text-xl md:text-3xl">
                  <b>LiveCodeCollab: Collaborative Space</b> for groups and
                  teams
                </p>
                <div className="flex flex-wrap">
                  {projects[2].tech.map((tech, i) => (
                    <div key={i} className="flex font-semibold cursor-pointer">
                      <Dot />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-row items-end gap-5">
                <Link
                  href={projects[2].url}
                  target={"_blank"}
                  className="bg-white p-4 text-black rounded-full flex gap-2 group w-fit whitespace-nowrap"
                >
                  Live Site{" "}
                  <ArrowUpRight className="rotate-45 group-hover:transform group-hover:rotate-0 transition-all duration-300 ease-in-out" />
                </Link>
                <Link
                  href={projects[2].github}
                  target={"_blank"}
                  className="text-xs"
                >
                  <Icons.github />
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:col-span-2 rounded-4xl overflow-hidden relative"
          >
            <Image
              src="/images/bolt-mock-1.jpg"
              alt="bolt-mock-1"
              width={1500}
              height={1500}
              className="object-cover w-full rounded-t-4xl"
            />
            <div className="w-full bg-black p-5 flex flex-col gap-5 xl:gap-0 lg:flex-row justify-between border-1 border-white rounded-b-4xl">
              <div className="space-y-5">
                <h1>PROJECT 04</h1>
                <p className="font-outFit text-xl md:text-3xl">
                  <b>Bolt: A Typing Speed Tester</b> designed to measure typing
                  speed and accuracy.
                </p>
                <div className="flex flex-wrap">
                  {projects[1].tech.map((tech, i) => (
                    <div key={i} className="flex font-semibold">
                      <Dot />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-row lg:flex-col items-end gap-5">
                <Link
                  href={projects[1].url}
                  target={"_blank"}
                  className="bg-white p-4 text-black rounded-full flex gap-2 group w-fit whitespace-nowrap self-end"
                >
                  Live Site{" "}
                  <ArrowUpRight className="rotate-45 group-hover:transform group-hover:rotate-0 transition-all duration-300 ease-in-out" />
                </Link>
                <Link
                  href={projects[1].github}
                  target={"_blank"}
                  className="self-end text-xs"
                >
                  <Icons.github />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Featured;
