"use client"

import React, { useLayoutEffect, useRef, useState } from "react"
import Link from "next/link"
import { FiArrowUpLeft } from "react-icons/fi"
import gsap from "gsap"
import { FaGithub } from "react-icons/fa"
import SplitType from "split-type";

const MyProjects = ({ projects }) => {
    const [hoveredProject, setHoveredProject] = useState(null)
    const previewRefs = useRef({})

    useLayoutEffect(() => {
        const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024
        if (!hoveredProject || !isDesktop) return

        const previewEl = previewRefs.current[hoveredProject.name]
        if (previewEl) {
            gsap.fromTo(
                previewEl,
                {
                    opacity: 0,
                    scale: 0.8,
                    y: 10,
                    x: 90,
                    rotateX: 60,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    x: 0,
                    rotateX: 0,
                    duration: 1.5,
                    ease: "elastic.out(1, 0.4)",
                }
            )
        }
    }, [hoveredProject])

    useLayoutEffect(() => {
        const splitLink = new SplitType('.link', {
            types: 'lines, words, chars',
        });

        const splitTech = new SplitType('.tech', {
            types: 'lines, words, chars',
        });

        const splitGit = new SplitType('.git', {
            types: 'lines, words, chars',
        });

        gsap.from(splitLink.words, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            stagger: 0.15,
        });

        gsap.from(splitTech.words, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            stagger: 0.15,
        });

        gsap.from(splitGit.lines, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            stagger: 0.15,
        });

        return () => {
            splitLink.revert()
            splitTech.revert()
            splitGit.revert()
        }
    }, []);

    return (
        <section className="w-full min-h-dvh bg-[#121312] overflow-hidden cursor-default">
            <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-25 grid-rows-1 relative z-10 mb-10">
                <Link href="/">
                    <div className="w-full h-full flex items-center justify-center rounded-b-full rounded-tr-full bg-[#121312] border-2 border-[#ad0013] xl:rotate-z-180 hover:rotate-z-360 transition-all duration-300 ease-in-out">
                        <FiArrowUpLeft className="w-full h-full -translate-x-[20%] -translate-y-[20%] text-[#a67d43]" />
                    </div>
                </Link>
            </div>

            <div className="flex flex-col gap-20 mb-10 items-center">
                {projects.map((project) => {
                    const isActive = hoveredProject?.name === project.name

                    return (
                        <div
                            key={project.name}
                            className="relative group w-[85%]"
                            onMouseEnter={() => setHoveredProject(project)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <Link
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="link text-4xl md:text-7xl xl:text-9xl font-rubik text-[#a67d43] xl:font-light"
                            >
                                {project.name}
                            </Link>

                            <div className="flex flex-col xl:flex-row gap-2 xl:gap-5 mt-5">
                                {project.tech.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="tech relative font-rubik text-[#a67d43] text-base lg:text-xl after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#a67d43] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                                    >
                                        {tech}
                                    </span>
                                ))}

                                {project.links?.map(({ github }, index) => (
                                    <Link
                                        key={index}
                                        href={github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="git relative after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#a67d43] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                                    >
                                        <FaGithub className="text-[#a67d43] text-xl xl:w-full xl:h-full" />
                                    </Link>
                                ))}
                            </div>

                            <hr className="text-[#ad0013] mt-5" />

                            {(isActive || typeof window !== "undefined" && window.innerWidth < 1024) && (
                                <div
                                    ref={(el) => (previewRefs.current[project.name] = el)}
                                    className="absolute right-0 top-10 xl:-top-20 ml-3 w-1/2 xl:w-1/3 overflow-hidden -skew-x-3 shadow-lg"
                                >
                                    <img
                                        src={project.preview}
                                        alt={`Preview of ${project.name}`}
                                        className="object-contain w-full h-auto"
                                    />
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default MyProjects
