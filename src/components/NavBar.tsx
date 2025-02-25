"use client";

import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 bg-opacity-80 rounded-full shadow-lg 
                        w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-4xl">
            <ul className="flex justify-evenly items-center px-4 sm:px-6 py-3 text-white font-medium w-full">
                <li><Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-red-500 text-xs sm:text-sm md:text-base">Home</Link></li>
                <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-red-500 text-xs sm:text-sm md:text-base">About</Link></li>
                <li><Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-red-500 text-xs sm:text-sm md:text-base">Skills</Link></li>
                <li><Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-red-500 text-xs sm:text-sm md:text-base">Experience</Link></li>
                <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-red-500 text-xs sm:text-sm md:text-base">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
