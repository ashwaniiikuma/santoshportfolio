// "use client"
// import Header from"../components/Header";
// import Navbar from "../components/Navbar";
// import Experience from "@/components/Experience";
// import About from "../components/About";
// import Contact from "../components/Contact";
// import Skills from "../components/Skills";
// import Footer from "../components/Footer"
// export default function Home(){


//     return(
//         <>
//         <Navbar />
//         <Header  />
//         <About  />
//         <Experience/>
//         <Skills  />
//         <Contact  />
//         <Footer  />
//         </>
//     );
// }


"use client"
import Header from"../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Home(){

    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.
    matchMedia('(prefer-color-scheme: dark)').matches)){
        setIsDarkMode(true)
    }else{
        setIsDarkMode(false)
    }
    
    },[])

    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.theme = '';

        }
    },[isDarkMode])

    return(
        <>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <Header isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
        </>
    );
}