import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import HikingPic from '@/images/HikingPicWebsite.jpg';
import SedonaPic from '@/images/SedonaWebsite.jpg';
import CamelbackPic from '@/images/CamelbackWebsite.jpg';

const images = [HikingPic, SedonaPic, CamelbackPic];

const AboutMe = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const handleNextImage = useCallback(() => {
        setFade(false);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade(true);
        }, 500);
    }, []);

    const handlePreviousImage = useCallback(() => {
        setFade(false);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setFade(true);
        }, 500);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextImage();
        }, 3000);
        return () => clearInterval(interval);
    }, [handleNextImage]);

    return (
        <div id="about" className="py-20 px-5 bg-gray-900 text-white">
            <h2 className="text-center text-4xl font-bold text-red-500 mb-12 relative">
                About Me
                <div className="hidden md:block h-px bg-red-500 w-1/3 absolute top-1/2 left-0"></div>
                <div className="hidden md:block h-px bg-red-500 w-1/3 absolute top-1/2 right-0"></div>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
                <div className="relative w-80 h-96 overflow-hidden rounded-lg">
                    <Image
                        src={images[currentImageIndex]}
                        alt="About me"
                        className={`w-full h-full object-cover transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <button onClick={handlePreviousImage} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 px-2 py-1 rounded-full">‹</button>
                    <button onClick={handleNextImage} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 px-2 py-1 rounded-full">›</button>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-red-500' : 'bg-gray-400'} cursor-pointer`}
                                onClick={() => setCurrentImageIndex(index)}
                            ></span>
                        ))}
                    </div>
                </div>
                <div className="max-w-md text-lg">
                    <p className="mb-4">
                        I am currently a student at Arizona State University, majoring in Software Engineering. Born and raised in Arizona, 
                        I have interests in a range of areas within the realm of computing, including Software Development, Artificial Intelligence 
                        Engineering, and Data Analytics.
                    </p>
                    <p>
                        I am committed to a journey of continual learning and self-improvement, with the aim to enhance my proficiency in software 
                        engineering. My goal is to acquire new skills and refine existing ones, ensuring that I am well-equipped to adapt and excel 
                        in the ever-evolving technological landscape.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
