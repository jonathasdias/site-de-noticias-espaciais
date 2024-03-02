import { useState, useEffect } from "react";
import { FaAnglesUp } from "react-icons/fa6";

export default function ButtonScrollToTop() {

    const [showButton, setShowButton] = useState(false);

    useEffect(()=> {
        const handleScroll = () => {
        setShowButton(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);

        return ()=> window.removeEventListener('scroll', handleScroll);
    }, [])

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return(
        <>
            {showButton && 
                <button onClick={scrollToTop} className="p-8 md:p-12 text-base md:text-2xl bg-slate-600 hover:bg-slate-700 text-white fixed bottom-6 right-5 rounded-full"><FaAnglesUp className=" animate-bounce" /></button>
            }
        </>
    )
}