"use client";

import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 bg-opacity-80 rounded-full shadow-lg">
            <ul className="flex space-x-6 px-6 py-3 text-white text-base font-medium">
                <li><Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-red-500">Home</Link></li>
                <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-red-500">About</Link></li>
                <li><Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-red-500">Skills</Link></li>
                <li><Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-red-500">Experience</Link></li>
                <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-red-500">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
