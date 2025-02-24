// Contact.tsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gray-900 text-white text-center">
            <h2 className="text-4xl font-bold text-red-500 mb-8">Contact Me</h2>
            <div className="flex flex-wrap justify-center gap-6">
                <a href="mailto:djberg3@asu.edu" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-red-600 text-white transition-transform duration-300 hover:scale-110">
                    <FaEnvelope className="text-2xl" /> Mail
                </a>
                <a href="https://www.linkedin.com/in/dalton-berg-9b0a33255" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-blue-700 text-white transition-transform duration-300 hover:scale-110">
                    <FaLinkedin className="text-2xl" /> LinkedIn
                </a>
                <a href="https://github.com/daltonBergSoftware" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-gray-700 text-white transition-transform duration-300 hover:scale-110">
                    <FaGithub className="text-2xl" /> GitHub
                </a>
                <a href="https://docs.google.com/document/d/1p5CRLHfcztSfQtB-C1KuaIOtNYUpFZef/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-red-500 text-white transition-transform duration-300 hover:scale-110">
                    <FaFilePdf className="text-2xl" /> Resume
                </a>
            </div>
        </section>
    );
};

export default Contact;
