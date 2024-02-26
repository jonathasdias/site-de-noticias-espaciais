import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CgMenuGridR } from "react-icons/cg";
import { FaX } from "react-icons/fa6";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    useEffect(()=> {
        if(isOpen) {
            setIsHidden(false);
            return;
        }
        const timeoutId = setTimeout(()=> {
            setIsHidden(true);
        },500)
        return () => clearTimeout(timeoutId);
    },[isOpen]);

    function openMenu() {
        setIsOpen(true);
    }
    
    function clearMenu() {
        setIsOpen(false);
    }

    return(
        <header className='flex justify-between items-center px-4 py-2 bg-gray-300'>

            <Link to='/' className='block font-black text-4xl md:text-7xl'>Space News</Link>

            <button onClick={openMenu} className='text-5xl block lg:hidden' aria-label='Menu' aria-pressed={isOpen}><CgMenuGridR aria-hidden='true'/></button>

            <section aria-label='Menu' tabIndex='0' className={`fixed top-0 ${isOpen ? 'right-0' : 'right-[-15rem]'} ${isHidden ? 'hidden' : 'block'} z-10 lg:hidden bg-gray-300 w-60 h-full transition-all ease-out duration-500`}>
                <div className='flex justify-between p-6 bg-black text-white text-xl'>
                    <span>Menu</span>
                    <button onClick={clearMenu} className='size-7 rounded-full grid place-items-center'><FaX /></button>
                </div>

                <nav className='mt-12'>
                    <NavLink to="/" className='block text-center px-6 py-2 hover:bg-gray-200 aria-[current=page]:bg-gray-500 rounded-md text-2xl'>Home</NavLink>
                    <NavLink to="/articles" className='block text-center px-6 py-2 hover:bg-gray-200 aria-[current=page]:bg-gray-500 rounded-md text-2xl'>Articles</NavLink>
                    <NavLink to="/blogs" className='block text-center px-6 py-2 hover:bg-gray-200 aria-[current=page]:bg-gray-500 rounded-md text-2xl'>Blogs</NavLink>
                    <NavLink to="/reports" className='block text-center px-6 py-2 hover:bg-gray-200 aria-[current=page]:bg-gray-500 rounded-md text-2xl'>Reports</NavLink>
                </nav>
            </section>


            <nav aria-label='Menu' className='lg:flex hidden'>
                <NavLink to="/" className='block px-6 py-2 hover:bg-gray-200 aria-[current=page]:bg-gray-500 rounded-md text-xl'>Home</NavLink>
                <NavLink to="/articles" className='block px-6 py-2 hover:bg-gray-200 aria-[current=page]:bg-gray-500 rounded-md text-xl'>Articles</NavLink>
                <NavLink to="/blogs" className='block px-6 py-2 hover:bg-gray-200 aria-[current=page]:bg-gray-500 rounded-md text-xl'>Blogs</NavLink>
                <NavLink to="/reports" className='block px-6 py-2 hover:bg-gray-200 aria-[current=page]:bg-gray-500 rounded-md text-xl'>Reports</NavLink>
            </nav>
        </header>
    )
}