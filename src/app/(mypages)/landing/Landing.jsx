import React from 'react'
import Hero from "@/components/hero";
import About from "@/app/(mypages)/aboutme/about";
import ReactLenis from "lenis/react";
import Featured from "@/app/(mypages)/featured/featured";
import ArtGallery from "@/app/(mypages)/artgallery/ArtGallery";
import Footer from "@/components/footer";


const Landing = ({topRef, topTagRef, scrollRef, hrRef, completed, yearRef}) => {
    return (
        <>
            {completed ? <ReactLenis root/> : null}
            <Hero topRef={topRef} topTagRef={topTagRef} scrollRef={scrollRef} hrRef={hrRef} yearRef={yearRef}/>
            <About/>
            <Featured/>
            <ArtGallery/>
            <Footer/>
        </>
    )
}
export default Landing
