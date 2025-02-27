"use client";

import React, { useState } from "react";
import Image from "next/image";
import PortfolioPic from "@/images/DaltonsPortfolioPicture.jpg";
import BackgroundPic from "@/images/PortfolioHomeBackgroundImg.jpeg";

const HomeComponent = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);

  return (
    <div
      id="home"
      className="flex items-center justify-center min-h-screen px-4 py-8 bg-gray-900 text-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full space-y-10 md:space-y-0 md:space-x-10 pt-16 md:pt-0">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-500 mb-4">
            Hi, I&apos;m Dalton Berg
          </h1>
          <h2 className="text-2xl sm:text-3xl text-red-400 mb-3">
            Software Engineering Student at ASU
          </h2>
          <p className="text-base sm:text-lg mb-6">
            Determined Learner with experience in Software Development
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-4">
            Interests:
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            {[
              "Software Engineering",
              "Software Development",
              "Backend Development",
              "AI Engineering",
            ].map((interest) => (
              <li
                key={interest}
                className="flex items-center justify-center md:justify-start text-lg"
              >
                <span className="text-red-500 mr-2 sm:mr-3 text-xl sm:text-2xl">
                  ★
                </span>
                {interest}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section with Coin Flip Effect */}
        <div className="flex-1 flex justify-center items-center">
          <div
            className="perspective-1000 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
            >
              {/* Front Face */}
              <div className="absolute inset-0 backface-hidden border-4 border-red-500 rounded-full overflow-hidden">
                <Image
                  src={PortfolioPic}
                  alt="Dalton Berg"
                  width={450}
                  height={450}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 border-4 border-red-500 rounded-full overflow-hidden">
                <Image
                  src={BackgroundPic}
                  alt="Technology Background"
                  width={450}
                  height={450}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
