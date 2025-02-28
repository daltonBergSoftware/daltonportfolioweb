"use client";

import React from "react";

const WorkingOn = () => {
  return (
    <section id="working-on" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-5xl font-bold text-red-500 mb-12">
          What I&apos;m Working On
        </h2>

        {/* Card Container */}
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch justify-center">
          {/* JourniX */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 w-full lg:w-1/2">
            <h3 className="text-3xl font-bold text-red-400 mb-1">
              JourniX{" "}
              <span className="text-lg font-medium text-gray-400">
                | Cofounder & Lead Developer
              </span>
            </h3>
            <p className="text-lg mb-4 text-red-300 font-semibold">
              AI-Powered Travel Companion
            </p>

            <p className="text-gray-300 mb-4">
              JourniX is an AI-driven travel Startup currently competing in
              ASU&apos;s Venture Devils competition. Designed to revolutionize
              trip planning, it seamlessly integrates flights, road trips,
              hotels, and car rentals into one platform. Powered by a chat-based
              AI assistant, JourniX enables real-time group collaboration and
              social connectivity for a smarter, more interactive travel
              experience.
            </p>

            <h4 className="text-xl font-semibold text-white mb-2">
              Key Features:
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                AI-powered chat assistant for intelligent and personalized trip
                planning.
              </li>
              <li>
                Seamless integration for booking flights, hotels, road trips,
                and car rentals.
              </li>
              <li>
                Real-time group collaboration for effortless shared planning.
              </li>
              <li>
                Interactive social feed for exploring destinations and sharing
                experiences.
              </li>
            </ul>

            <h4 className="text-xl font-semibold text-white mt-4 mb-2">
              Tech Stack:
            </h4>
            <p className="text-gray-300">
              <span className="font-semibold">Frontend:</span> Next.js, React,
              TailwindCSS, ShadCN/UI
              <br />
              <span className="font-semibold">Backend:</span> Node.js,
              Express.js, Prisma, PostgreSQL
              <br />
              <span className="font-semibold">AI & Chat:</span> OpenAI API,
              Socket.io
              <br />
              <span className="font-semibold">APIs & Services:</span> Google
              Maps API
            </p>
          </div>

          {/* AfterCare */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 w-full lg:w-1/2">
            <h3 className="text-3xl font-bold text-red-400 mb-1">
              AfterCare{" "}
              <span className="text-lg font-medium text-gray-400">
                | Founder
              </span>
            </h3>
            <p className="text-lg mb-4 text-red-300 font-semibold">
              Revolutionizing Post-Surgical Care
            </p>

            <p className="text-gray-300 mb-4">
              AfterCare is a digital platform revolutionizing post-surgical care
              by ensuring seamless doctor-patient communication and AI-driven
              recovery support. Patients gain real-time access to personalized
              aftercare plans, proactive notifications, and intelligent
              treatment insights, all designed to enhance recovery and reduce
              complications.
            </p>

            <h4 className="text-xl font-semibold text-white mb-2">
              Key Features:
            </h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>
                Customizable aftercare plans with medication schedules,
                restrictions, and follow-ups.
              </li>
              <li>
                Real-time notifications to ensure patients never miss a critical
                recovery step.
              </li>
              <li>
                Secure messaging system for direct doctor-patient communication.
              </li>
              <li>Personalized tools for reminders and schedule tracking.</li>
            </ul>

            <h4 className="text-xl font-semibold text-white mt-4 mb-2">
              Tech Stack:
            </h4>
            <p className="text-gray-300">
              <span className="font-semibold">Frontend:</span> React,
              TypeScript, TailwindCSS, React Router DOM
              <br />
              <span className="font-semibold">Backend:</span> Node.js, Express,
              PostgreSQL, PrismaORM, AWS Lambda
              <br />
              <span className="font-semibold">AI:</span> OpenAI API for
              intelligent aftercare insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingOn;
