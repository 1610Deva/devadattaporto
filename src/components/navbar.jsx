import { useState, useEffect } from "react";


const Navbar = () => {
    const [active, setActive] = useState(false);
    
    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <div className="navbar py-7 flex items-center justify-between relative z-40">
            <div className="logo">
                <h1 className="text-3xl font-bold bg-white text-blue-950 p-1 ml-5 md:ml-10
                md:bg-transparent md:text-white">Devadatta Portfolio <i className="ri-sparkling-fill text-2xl align-middle"></i></h1>
            </div>
                <ul className={`menu flex items-center mr-7 sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 
                md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl
                md:bg-transparent transition-all md:transition-none z-50 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
                    <li><a href="https://github.com/1610Deva" target="_blank" className="sm:text-lg text-base font-medium"><i className="ri-github-fill text-2xl"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/devadattagiri/" target="_blank" className="sm:text-lg text-base font-medium"><i className="ri-linkedin-box-fill text-2xl"></i></a></li>
                    <li><a href="#home" className="sm:text-lg text-base font-medium">Home</a></li>
                    <li><a href="#about" className="sm:text-lg text-base font-medium">About</a></li>
                    <li><a href="#projects" className="sm:text-lg text-base font-medium">Project</a></li>
                    <li><a href="#contact" className="sm:text-lg text-base font-medium">Contact</a></li>
                </ul>
        </div>
    )
}

export default Navbar
