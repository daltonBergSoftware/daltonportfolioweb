"use client";

import React from "react";
import Image from "next/image";
import gbcsLogo from "../images/GBCS-logo.png";
import globalTechLogo from "../images/GlobalTechEx-logo.png";
import alcoveLogo from "../images/AlcoveRidge-logo.png"; // Placeholder for Alcove Ridge Consulting logo

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
            {/* Alcove Ridge Consulting - Software Engineer */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 snap-center min-h-[300px]">
              <div className="flex items-center mb-4">
                <Image
                  src={alcoveLogo}
                  alt="Alcove Ridge Consulting Logo"
                  width={120}
                  height={50}
                  className="rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-red-500">
                    Software Engineer, Alcove Ridge Consulting
                  </h3>
                  <p className="text-gray-400">August 2024 - Present</p>
                </div>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Developed a scalable web and mobile investment platform using
                  Next.js, TypeScript, and TailwindCSS.
                </li>
                <li>
                  Designed and optimized a Supabase PostgreSQL database using
                  Prisma ORM for schema migrations and data integrity.
                </li>
                <li>
                  Implemented secure authentication and RBAC to enforce user
                  permissions and data access policies.
                </li>
                <li>
                  Built scalable APIs with tRPC for type-safe and efficient
                  frontend-backend communication.
                </li>
                <li>
                  Streamlined CI/CD pipelines with GitHub Actions to automate
                  testing, deployment, and collaboration.
                </li>
                <li>
                  Collaborated in an Agile team, optimizing system performance
                  and contributing to code reviews.
                </li>
              </ul>
            </div>

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
                  <p className="text-gray-400">February 2024 - December 2024</p>
                </div>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Collaborated with cross-functional teams on software
                  development lifecycle, including API design and data
                  processing.
                </li>
                <li>
                  Developed and integrated Python-based equations for GHG
                  calculations and complex data processing.
                </li>
                <li>
                  Built and optimized API endpoints using FastAPI and GraphQL to
                  streamline data exchange.
                </li>
                <li>
                  Architected and delivered an advanced HR management system
                  using GraphQL APIs and Prisma ORM.
                </li>
                <li>
                  Designed an intuitive HR dashboard using React.js and Next.js
                  to enhance efficiency and streamline workflows.
                </li>
                <li>
                  Partnered with the HR team to ensure the system aligned with
                  compliance and data accuracy standards.
                </li>
              </ul>
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
                <li>
                  Led and mentored a diverse team of 25+ interns, fostering a
                  collaborative and results-driven environment.
                </li>
                <li>
                  Organized and coordinated task execution, aligning development
                  strategies with project objectives.
                </li>
                <li>
                  Presented weekly progress reports to supervisors and CEO,
                  integrating feedback into workflow optimizations.
                </li>
                <li>
                  Facilitated onboarding and training of new interns, ensuring a
                  seamless transition and contribution to projects.
                </li>
                <li>
                  Developed technical documentation and instructional resources,
                  enhancing team collaboration and knowledge retention.
                </li>
              </ul>
            </div>

            {/* The Global Tech Experience */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 snap-center min-h-[300px]">
              <div className="flex items-center mb-4">
                <Image
                  src={globalTechLogo}
                  alt="Global Tech Logo"
                  width={80}
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
                <li>
                  Developed dynamic web applications using HTML, CSS, Bootstrap,
                  and JavaScript.
                </li>
                <li>
                  Collaborated with an international team, enhancing
                  multicultural communication skills.
                </li>
                <li>
                  Implemented stakeholder needs into functional designs for user
                  satisfaction.
                </li>
                <li>
                  Debugged coding issues, ensuring reliable and functional web
                  applications.
                </li>
                <li>
                  Integrated third-party APIs to enrich the user experience.
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
