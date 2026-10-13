"use client"
import Header from"../components/Header";
import Navbar from "../components/Navbar";
import Experience from "@/components/Experience";
import About from "../components/About";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Footer from "../components/Footer"
export default function Home(){


    return(
        <>
        <Navbar />
        <Header  />
        <About  />
        <Experience/>
        <Skills  />
        <Contact  />
        <Footer  />
        </>
    );
}