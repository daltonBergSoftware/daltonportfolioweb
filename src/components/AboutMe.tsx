"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import HikingPic from "@/images/HikingPicWebsite.jpg";
import SedonaPic from "@/images/SedonaWebsite.jpg";
import CamelbackPic from "@/images/CamelbackWebsite.jpg";

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
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
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
    <div id="about" className="py-16 px-5 bg-gray-900 text-white mt-[-40px]">
      <h2 className="text-center text-5xl font-bold text-red-500 mb-12">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row-reverse items-center md:items-stretch justify-center gap-6 md:gap-10 max-w-7xl mx-auto">
        {/* Text Section - Vertically Centered */}
        <div className="order-1 md:order-2 w-full md:w-[50%] text-lg leading-relaxed md:text-base lg:text-xl xl:text-2xl text-center flex flex-col justify-center">
          <div className="flex items-center justify-center h-full">
            <div>
              <p className="mb-6">
                I am currently a student at Arizona State University, majoring
                in Software Engineering. Born and raised in Arizona, I have a
                passion for various areas of computing, including Software
                Development, Artificial Intelligence Engineering, and Data
                Analytics.
              </p>
              <p>
                I am committed to continuous learning and self-improvement,
                striving to enhance my proficiency in software engineering. My
                goal is to acquire new skills, refine existing ones, and stay
                adaptable in the ever-evolving world of technology.
              </p>
            </div>
          </div>
        </div>

        {/* Image Slideshow - Responsive Sizing */}
        <div className="order-2 md:order-1 relative w-full md:w-[50%] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden rounded-lg">
          <Image
            src={images[currentImageIndex]}
            alt="About me"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
          <button
            onClick={handlePreviousImage}
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 px-3 py-2 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={handleNextImage}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 px-3 py-2 rounded-full"
          >
            ›
          </button>
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-4 h-4 rounded-full ${
                  currentImageIndex === index ? "bg-red-500" : "bg-gray-400"
                } cursor-pointer`}
                onClick={() => setCurrentImageIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
