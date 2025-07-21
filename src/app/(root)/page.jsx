import React from 'react'
import ReactLenis from "lenis/react";
import Hero from "@/components/hero";
import About from "@/app/(mypages)/aboutme/about";
import Featured from "@/app/(mypages)/featured/featured";
import ArtGallery from "@/app/(mypages)/artgallery/ArtGallery";
import Footer from "@/components/footer";


const Page = () => {
    return (
      <>
        <ReactLenis root />
        <Hero />
        <About />
        <Featured />
        <ArtGallery />
        <Footer />
      </>
    );
}
export default Page
