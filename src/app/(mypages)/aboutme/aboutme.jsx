"use client";

import React, {useRef} from 'react';
import { useWindowSize } from 'react-use';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {OrbitingCircles} from "@/components/magicui/orbiting-circles";
import {mono} from "@/app/fonts";
import {Particles} from "@/components/magicui/particles";
import Link from "next/link";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export const Icons = {
    react: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width='3.5em' height='3.5em'><g fill="none"><rect width="256" height="256" fill="#F4F2ED" rx="60"/><path fill="#00D8FF" d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"/><path stroke="#00D8FF" strokeWidth="8.911" d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z" clipRule="evenodd"/><path stroke="#00D8FF" strokeWidth="8.911" d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z" clipRule="evenodd"/><path stroke="#00D8FF" strokeWidth="8.911" d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z" clipRule="evenodd"/></g></svg>
    ),
    next: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width='3.5em' height='3.5em'><circle cx="64" cy="64" r="64"/><path fill="url(#deviconNextjs0)" d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209"/><path fill="url(#deviconNextjs1)" d="M81.778 38.4h8.533v51.2h-8.533z"/><defs><linearGradient id="deviconNextjs0" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient><linearGradient id="deviconNextjs1" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient></defs></svg>
    ),
    tailwind: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width='3.5em' height='3.5em'><g fill="none"><rect width="256" height="256" fill="#F4F2ED" rx="60"/><path fill="url(#skillIconsTailwindcssLight0)" fillRule="evenodd" d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5" clipRule="evenodd"/><defs><linearGradient id="skillIconsTailwindcssLight0" x1="86.5" x2="163.5" y1="74" y2="185.5" gradientUnits="userSpaceOnUse"><stop stopColor="#32B1C1"/><stop offset="1" stopColor="#14C6B7"/></linearGradient></defs></g></svg>
    ),
    typescript: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width='3.5em' height='3.5em'><g fill="none"><rect width="256" height="256" fill="#007ACC" rx="60"/><path fill="#fff" d="m56.611 128.849l-.081 10.484h33.32v94.679h23.569v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565c-.122-.162-20.399-.244-44.983-.203l-44.739.122zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.081.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.519c-3.291-4.795-6.745-6.868-12.028-7.233c-7.761-.529-12.759 3.535-12.718 10.321c0 1.991.284 3.169 1.097 4.795c1.706 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.141 17.879-28.323 20.277c-4.388.772-14.791.65-19.504-.203c-10.281-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.121-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.259c2.357-2.154 3.332-4.389 3.332-7.68c0-2.967-.366-4.267-1.91-6.502c-1.991-2.844-6.054-5.242-17.595-10.24c-13.206-5.689-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.219-12.678-.447-16.335c2.722-12.759 12.353-21.658 26.25-24.3c4.511-.853 14.994-.528 19.424.569"/></g></svg>
    ),
    japan: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width='3.5em' height='3.5em'><path fill="#EEE" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"/><circle fill="#ED1B2F" cx="18" cy="18" r="7"/></svg>
    ),
    sushi: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width='3.5em' height='3.5em'><g fill="none"><path fill="#F4F4F4" d="M10.33 19.18h15.32c1.53 0 2.76-1.23 2.76-2.76v-3.4H7.57v3.4a2.76 2.76 0 0 0 2.76 2.76M6.32 29.97h15.32a2.76 2.76 0 0 0 2.76-2.76v-3.32H3.56v3.32a2.76 2.76 0 0 0 2.76 2.76"/><path fill="#FF6723" d="M24.83 6H11.15c-2.84 0-5.14 2.3-5.14 5.14v.36c0 .85.69 1.54 1.54 1.54h20.88c.85 0 1.54-.69 1.54-1.54v-.36C29.98 8.3 27.67 6 24.83 6"/><path fill="#FF822D" d="M12.38 9.6c-.4 0-.72-.32-.72-.72V6h1.44v2.88c0 .4-.32.72-.72.72m5.61 0c-.4 0-.72-.32-.72-.72V6h1.44v2.88c0 .4-.32.72-.72.72m4.9-.72c0 .4.32.72.72.72c.39 0 .71-.32.72-.72V6h-1.44z"/><path fill="#F8312F" d="M20.82 17H7.14C4.3 17 2 19.3 2 22.14v.24c0 .85.69 1.54 1.54 1.54h20.88c.85 0 1.54-.69 1.54-1.54v-.24c.01-2.84-2.3-5.14-5.14-5.14"/><path fill="#FF8687" d="M8.37 20.6c-.4 0-.72-.32-.72-.72V17h1.44v2.88c0 .4-.32.72-.72.72m5.61 0c-.4 0-.72-.32-.72-.72V17h1.44v2.88c0 .4-.32.72-.72.72m4.9-.72c0 .4.32.72.72.72c.39 0 .71-.32.72-.72V17h-1.44z" opacity=".6"/></g></svg>
    ),
    fuji: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="3.5em" height="3.5em">
            <defs>
                <clipPath id="roundedCorners">
                    <rect x="0" y="0" width="64" height="64" rx="8" ry="8" />
                </clipPath>
            </defs>
            <g clipPath="url(#roundedCorners)">
                <path fill="#42ade2" d="M0 0h64v64H0z"/>
                <path fill="#464d51" d="M58 41.5L37.5 33l-25.6 4.4L0 44v20h64V44z"/>
                <path fill="#fff" d="M37.2 34.3S34.4 22.1 33.8 22c-.2 0-.7.1-1.2.3c-1 .4-1.1.1-2.1-.1c-.8-.2-1.4.3-1.8.6c-1.9 1.2-4.7 4.8-6.3 6.3c-2.4 2.3-10.5 8.3-10.5 8.3s-1.6 1.5-3.3 4.6c0 0 3.3-2.2 4.7-2.3c.8 0 .2 2.3.2 2.3l4.9-3.3l-3 3.3s3.6-1.4 6-2.8c1.4-.8 3.6-3.8 3.9-3.2c.5 1-1.9 3.8-1.9 3.8l1.2-.4l-1.2 2.3l3.4-3.1l-2 3.4s2.5-3.1 3.1-3.5c4.1-2.9-1.9 4.2-1.9 4.2s6.8-3.6 9.2-3.9c3.1-.5 6.5 2.7 6.5 2.7z"/>
                <path fill="#c5ccd6" d="M59 43.6c-.9-1.1-1-2.1-1-2.1s-10.9-6.9-14.1-9.7c-2.3-2-6.4-6.6-8.5-8.8c-.4-.4-1.3-1.2-1.8-1.1c-1.3.4-2 3.8-3.1 4.5c0 0 .7.8.3 2.5c0 0 1.3-1.5 1.3-.3c0 2.3 1.7 2.1 2 3.2c1.3 4.2 3.3 7.1 4.3 7.5c1.9.8 3.4 2.2 3.4 2.2l-.8-2.1c2.5-.1 3.9 1.3 3.9 1.3s.1-2 1-1.7c2.4.7 6 3.9 6 3.9s-.1-1.3.8-1.4c2.1-.3 6.3 2.1 6.3 2.1m-40.5-7.1l3.8-5.7l-1.2 3.4zm5.1-2.6v-2.2l3.8-3.5z"/>
                <path fill="#fff" d="M60.4 14.4v-.5c0-1.1-1.1-2-2.6-2.1c-.9-1.2-2.7-2.1-4.7-2.1c-2.6 0-4.7 1.3-5.2 3h-.5c-1.4 0-2.6.7-2.9 1.7h-.1c-1.1 0-2 .6-2 1.4s.9 1.4 2 1.4c.4 0 .8-.1 1.1-.3c.4.3.9.5 1.5.5c.2 0 .4 0 .6-.1c.3.5 1 .8 1.8.8c.3 0 .6-.1.9-.2c.9.5 2 .7 3.1.7s2.1-.2 3-.7c.3.1.5.1.8.1c1.1 0 2-.4 2.6-1.1c.2.1.5.1.7.1c1.1 0 2-.6 2-1.4c-.1-.6-1-1.2-2.1-1.2M6.9 26s.1 0 0 0v-.3c0-.6.6-1 1.3-1.1c.5-.6 1.4-1 2.4-1c1.3 0 2.4.7 2.7 1.5h.2c.7 0 1.3.4 1.5.9c.6 0 1 .3 1 .7s-.4.7-1 .7c-.2 0-.4 0-.6-.1c-.2.1-.4.2-.7.2h-.3c-.2.2-.5.4-.9.4c-.2 0-.3 0-.4-.1c-.4.2-1 .4-1.6.4q-.9 0-1.5-.3h-.4c-.6 0-1-.2-1.3-.5c-.1 0-.2.1-.4.1c-.6 0-1-.3-1-.7c0-.5.5-.8 1-.8M38.4 9.8v-.3c0-.6.6-1 1.3-1.1c.5-.6 1.4-1 2.4-1c1.3 0 2.4.7 2.7 1.5h.2c.7 0 1.3.4 1.5.9c.6 0 1 .3 1 .7s-.4.7-1 .7c-.2 0-.4 0-.6-.1c-.2.1-.4.2-.7.2h-.3c-.2.2-.5.4-.9.4c-.2 0-.3 0-.4-.1c-.4.2-1 .4-1.6.4q-.9 0-1.5-.3h-.4c-.6 0-1-.2-1.3-.5c-.1 0-.2.1-.4.1c-.5 0-1-.3-1-.7c0-.5.4-.8 1-.8m-28.2 9H10c-.3-.7-1-1.2-1.8-1.5c.1-.2.2-.5.2-.7c0-1.2-1.2-2.3-2.9-2.6c-1.1-1.4-3.1-2.4-5.4-2.6v11.4c1.4 0 2.8-.4 3.9-.9q1.05.6 2.4.6c.8 0 1.6-.2 2.2-.5c.5.3 1.1.5 1.7.5c1.4 0 2.6-.8 2.6-1.8c-.1-1.1-1.3-1.9-2.7-1.9"/>
            </g>
        </svg>
    ),
    linkedin: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width='3.5em' height='3.5em'><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#0A66C2" rx="60"/><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"/></g></svg>
    ),
    github: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width='3.5em' height='3.5em'><path fill="currentColor" d="M8 .198a8 8 0 0 0-2.529 15.591c.4.074.547-.174.547-.385c0-.191-.008-.821-.011-1.489c-2.226.484-2.695-.944-2.695-.944c-.364-.925-.888-1.171-.888-1.171c-.726-.497.055-.486.055-.486c.803.056 1.226.824 1.226.824c.714 1.223 1.872.869 2.328.665c.072-.517.279-.87.508-1.07c-1.777-.202-3.645-.888-3.645-3.954c0-.873.313-1.587.824-2.147c-.083-.202-.357-1.015.077-2.117c0 0 .672-.215 2.201.82A7.7 7.7 0 0 1 8 4.066c.68.003 1.365.092 2.004.269c1.527-1.035 2.198-.82 2.198-.82c.435 1.102.162 1.916.079 2.117c.513.56.823 1.274.823 2.147c0 3.073-1.872 3.749-3.653 3.947c.287.248.543.735.543 1.481c0 1.07-.009 1.932-.009 2.195c0 .213.144.462.55.384A8 8 0 0 0 8.001.196z"/></svg>
    ),
    x: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width='2.3em' height='2.3em'><path fill="#ffffff" d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"/></svg>
    )
}

const Aboutme = () => {
    const meRef = useRef(null);
    const devRef = useRef(null);
    const japanRef = useRef(null);
    const aboutRef = useRef(null);
    const width = useWindowSize();
    const radius = width < 640 ? 50 : width < 1024 ? 95 : 115

    useGSAP(() => {
        const meSplit = SplitText.create(meRef.current, {
            type: "words, lines",
            mask: "lines",
            wordsClass: "word++"
        });

        gsap.set(meSplit.lines, {
            yPercent: 100,
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
                pinSpacing: true,
            }
        })

        tl.to(meSplit.lines, {
            yPercent: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.inOut"
        })

        gsap.delayedCall(0, () => {
            const targetWord = meSplit.words[3];
            const dev = devRef.current;

            const updatePosition = () => {
                const rect = targetWord.getBoundingClientRect();

                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                dev.style.position = "absolute";
                dev.style.left = `${centerX}px`;
                dev.style.top = `${centerY}px`;
                dev.style.transform = "translate(-50%, -50%)";
            };

            updatePosition();

            window.addEventListener("resize", updatePosition);
            window.addEventListener("scroll", updatePosition);

            targetWord.addEventListener("mouseenter", () => {
                console.log("Hovered on 'developer'");
                updatePosition();
                gsap.to(dev, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power3.inOut",
                });

                meSplit.words.forEach((word, index) => {
                    gsap.to(word, {
                        opacity: index === 3 ? 1 : 0.5,
                        duration: 0.3,
                        ease: "power3.inOut"
                    });
                });
            });

            targetWord.addEventListener("mouseleave", () => {
                gsap.to(dev, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power3.inOut"
                });

                gsap.to(meSplit.words, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power3.inOut",
                })
            });

            return () => {
                window.removeEventListener("resize", updatePosition);
                window.removeEventListener("scroll", updatePosition);
            };
        });
        gsap.delayedCall(0, () => {
            const targetWord = meSplit.words[24];
            const japan = japanRef.current;

            const updatePosition = () => {
                const rect = targetWord.getBoundingClientRect();

                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                japan.style.position = "absolute";
                japan.style.left = `${centerX}px`;
                japan.style.top = `${centerY}px`;
                japan.style.transform = "translate(-50%, -50%)";
            };

            updatePosition();

            window.addEventListener("resize", updatePosition);
            window.addEventListener("scroll", updatePosition);

            targetWord.addEventListener("mouseenter", () => {
                updatePosition();
                gsap.to(japan, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power3.inOut",
                });

                meSplit.words.forEach((word, index) => {
                    gsap.to(word, {
                        opacity: index === 24 ? 1 : 0.5,
                        duration: 0.3,
                        ease: "power3.inOut"
                    });
                });
            });

            targetWord.addEventListener("mouseleave", () => {
                gsap.to(japan, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power3.inOut"
                });

                gsap.to(meSplit.words, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power3.inOut",
                })
            });

            return () => {
                window.removeEventListener("resize", updatePosition);
                window.removeEventListener("scroll", updatePosition);
            };
        });
    }, []);

    return (
        <section ref={aboutRef} className={`relative w-full h-dvh bg-black text-white overflow-hidden flex justify-center items-center ${mono.className} p-5`}>
            <div className="relative w-full h-full flex items-center justify-center">
                <p ref={meRef} className="font-bold md:w-1/2 xl:w-1/2 text-sm md:text-xl xl:text-3xl text-justify z-1">A Front-end web &lt;developer&gt; passionate about crafting sleek, interactive UIs that merge clean code with creative intent. Inspired by the aesthetics and innovation of Japan, I build modern digital experiences that feel as good as they look — smooth, responsive, and thoughtfully designed.</p>
                <Particles className="absolute top-0 left-0 w-full h-full" color={"#ffffff"} refresh/>
            </div>
            <div ref={devRef} className="absolute w-[500px] h-[500px] flex items-center justify-center pointer-events-none opacity-0 z-2">
                    <OrbitingCircles radius={radius} iconSize={150} path={true} speed={3}>
                        <Icons.typescript/>
                        <Icons.next/>
                        <Icons.tailwind/>
                    </OrbitingCircles>
            </div>
            <div ref={japanRef} className="absolute w-[500px] h-[500px] flex items-center justify-center pointer-events-none opacity-0 z-2">
                <OrbitingCircles radius={115} iconSize={150} path={true} speed={3}>
                    <Icons.japan/>
                    <Icons.sushi/>
                    <Icons.fuji/>
                </OrbitingCircles>
            </div>
            <Link href="https://x.com/n0tee_" className="absolute top-5 left-5 bg-black p-2 rounded-xl">
                <Icons.x/>
            </Link>
            <Link href="https://github.com/aryandewan" className="absolute top-5 right-5">
                <Icons.github/>
            </Link>
            <a href="/Resume.pdf" download="Resume.pdf" className="absolute bottom-5 right-5 p-5 bg-black text-white rounded-full animate-bounce">
                CURRICULUM VITAE ↓
            </a>
            <Link href="https://www.linkedin.com/in/aryan-dewan-079a1b225" className="absolute bottom-5 left-5">
                <Icons.linkedin/>
            </Link>
        </section>
    );
};

export default Aboutme;
