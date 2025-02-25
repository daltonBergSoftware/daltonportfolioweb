"use client";

import React from "react";
import Image from "next/image";
import gbcsLogo from "../images/GBCS-logo.png";
import globalTechLogo from "../images/GlobalTechEx-logo.png";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 bg-gray-900 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-center text-5xl font-bold text-red-500 mb-12">
          Experience
        </h2>

        {/* Scrollable Container */}
        <div className="relative h-[600px] overflow-y-auto snap-y snap-mandatory scrollbar-hide rounded-lg">
          <div className="space-y-8">
            {/* GBCS Group - Backend Developer Intern */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 snap-center min-h-[300px]">
              <div className="flex items-center mb-4">
                <Image
                  src={gbcsLogo}
                  alt="GBCS Group Logo"
                  width={50}
                  height={50}
                  className="rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-red-500">
                    Backend Developer Intern, GBCS Group
                  </h3>
                  <p className="text-gray-400">February 2024 - Present</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white">GBCS GHG Project:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    {" "}
                    {/* Bullet points aligned */}
                    <li>
                      <span className="inline-block align-top">
                        Collaborated with cross-functional teams on the software
                        development lifecycle.
                      </span>
                    </li>
                    <li>
                      <span className="inline-block align-top">
                        Implemented Python-based equations into the backend
                        system.
                      </span>
                    </li>
                    <li>
                      <span className="inline-block align-top">
                        Developed API endpoints with FastAPI for seamless data
                        exchange.
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-white">
                    GBCS Website Project:
                  </h4>
                  <ul className="list-disc pl-6 space-y-2">
                    {" "}
                    {/* Bullet points aligned */}
                    <li>
                      <span className="inline-block align-top">
                        Led the development of an advanced HR management system
                        using GraphQL APIs.
                      </span>
                    </li>
                    <li>
                      <span className="inline-block align-top">
                        Integrated Prisma ORM with custom GraphQL resolvers.
                      </span>
                    </li>
                    <li>
                      <span className="inline-block align-top">
                        Designed a user-centric HR dashboard using React and
                        Next.js.
                      </span>
                    </li>
                    <li>
                      <span className="inline-block align-top">
                        Collaborated directly with the HR team to meet user
                        needs.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* GBCS Group - Team Lead */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 snap-center min-h-[300px]">
              <div className="flex items-center mb-4">
                <Image
                  src={gbcsLogo}
                  alt="GBCS Group Logo"
                  width={50}
                  height={50}
                  className="rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-red-500">
                    Team Lead, Intern Development Team, GBCS Group
                  </h3>
                  <p className="text-gray-400">February 2024 - August 2024</p>
                </div>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                {" "}
                {/* Bullet points aligned */}
                <li>
                  <span className="inline-block align-top">
                    Led a diverse team of 25+ interns, fostering collaboration
                    and productivity.
                  </span>
                </li>
                <li>
                  <span className="inline-block align-top">
                    Organized and facilitated task execution, aligning with
                    project deadlines.
                  </span>
                </li>
                <li>
                  <span className="inline-block align-top">
                    Presented weekly progress reports to the supervisor and CEO.
                  </span>
                </li>
                <li>
                  <span className="inline-block align-top">
                    Onboarded and trained new interns for faster adaptation and
                    contribution.
                  </span>
                </li>
                <li>
                  <span className="inline-block align-top">
                    Provided guidance and support to ensure team clarity and
                    effectiveness.
                  </span>
                </li>
              </ul>
            </div>

            {/* The Global Tech Experience */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 snap-center min-h-[300px]">
              <div className="flex items-center mb-4">
                <Image
                  src={globalTechLogo}
                  alt="Global Tech Logo"
                  width={50}
                  height={50}
                  className="rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-red-500">
                    Web Development Trainee, The Global Tech Experience
                  </h3>
                  <p className="text-gray-400">August 2023 - December 2023</p>
                </div>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                {" "}
                {/* Bullet points aligned */}
                <li>
                  <span className="inline-block align-top">
                    Developed dynamic web applications using HTML, CSS,
                    Bootstrap, and JavaScript.
                  </span>
                </li>
                <li>
                  <span className="inline-block align-top">
                    Collaborated with an international team, enhancing
                    multicultural communication skills.
                  </span>
                </li>
                <li>
                  <span className="inline-block align-top">
                    Implemented stakeholder needs into functional designs for
                    user satisfaction.
                  </span>
                </li>
                <li>
                  <span className="inline-block align-top">
                    Debugged coding issues, ensuring reliable and functional web
                    applications.
                  </span>
                </li>
                <li>
                  <span className="inline-block align-top">
                    Integrated third-party APIs to enrich the user experience.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
