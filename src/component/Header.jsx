import React, { useState } from 'react';
import { FaBars, FaHeart, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import element from '../assets/element-4.png';
import logo from '../assets/Logo.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='w-full'>

            
            <div className='bg-black text-red-400 py-2 flex items-center justify-center text-sm'>

               
                <span className='flex items-center gap-2 md:hidden'>
                    <img src={element} alt="header element" className='h-4 w-4' />
                    <div>Lorem ipsum dolor</div>
                </span>

                
                <div className="hidden md:flex w-full justify-around px-10">
                    {[...Array(3)].map((_, index) => (
                        <span key={index} className='flex items-center gap-2'>
                            <img src={element} alt="header element" className='h-4 w-4' />
                            <div>Lorem ipsum dolor</div>
                        </span>
                    ))}
                </div>
            </div>

           
            <div className='border-b border-gray-300 py-4 px-5 md:px-10 flex items-center justify-between'>

                <div className="flex items-center">
                    <button className='md:hidden text-2xl mr-3' onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    <img src={logo} alt="Logo" className='h-8' />
                </div>

            
                <h1 className='font-bold text-4xl md:text-4xl flex-1 text-center'>LOGO</h1>

               
                <div className='hidden md:flex items-center space-x-5 text-xl'>
                    <FaSearch className="cursor-pointer hover:text-red-500"/>
                    <FaHeart className="cursor-pointer hover:text-red-500"/>
                    <FaShoppingBag className="cursor-pointer hover:text-red-500"/>
                    <FaUser className="cursor-pointer hover:text-red-500"/>
                    
                
                    <div className="flex items-center cursor-pointer text-xl font-semibold">
                        ENG <span className="ml-1">▼</span>
                    </div>
                </div>

            
                <div className='flex items-center space-x-5 text-xl md:hidden'>
                    <FaSearch className="cursor-pointer hover:text-red-500"/>
                    <FaHeart className="cursor-pointer hover:text-red-500"/>
                    <FaShoppingBag className="cursor-pointer hover:text-red-500"/>
                </div>
            </div>

           
            <nav className='hidden md:flex space-x-8 text-lg font-bold items-center justify-center py-6'>
                {["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT"].map((item, index) => (
                    <a key={index} href={`/${item.toLowerCase()}`} className="hover:text-red-500">{item}</a>
                ))}
            </nav>
            <nav className='flex text-lg gap-2 py-6 ml-5 md:hidden'>
            <span className="text-gray-400">HOME</span>
            <span className="text-gray-300">|</span>
            <span className="text-black">SHOP</span>
            </nav>

            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex flex-col items-center justify-center text-white">
                    
                    
                    <button className="absolute top-5 right-5 text-3xl" onClick={() => setMenuOpen(false)}>
                        <FaTimes />
                    </button>

                    
                    <nav className="flex flex-col space-y-6 text-2xl font-bold">
                        {["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT"].map((item, index) => (
                            <a key={index} href={`/${item.toLowerCase()}`} className="hover:text-red-500" onClick={() => setMenuOpen(false)}>
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;
