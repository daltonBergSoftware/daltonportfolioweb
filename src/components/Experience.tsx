"use client";

import React from 'react';
import Image from 'next/image';
import gbcsLogo from '../images/GBCS-logo.png';
import globalTechLogo from '../images/GlobalTechEx-logo.png';

const Experience = () => {
    return (
        <section id="experience" className="py-16 bg-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-4xl font-bold text-red-500 mb-12 relative">
                    Experience
                    <span className="block w-20 h-1 bg-red-500 mx-auto mt-2"></span>
                </h2>

                <div className="space-y-8">
                    {/* GBCS Group - Backend Developer Intern */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
                        <div className="flex items-center mb-4">
                            <Image src={gbcsLogo} alt="GBCS Group Logo" width={50} height={50} className="rounded-lg mr-4" />
                            <div>
                                <h3 className="text-xl font-semibold text-red-500">Backend Developer Intern, GBCS Group</h3>
                                <p className="text-gray-400">February 2024 - Present</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium text-white">GBCS GHG Project:</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Collaborated with cross-functional teams on the software development lifecycle.</li>
                                    <li>Implemented Python-based equations into the backend system.</li>
                                    <li>Developed API endpoints with FastAPI for seamless data exchange.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium text-white">GBCS Website Project:</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Led the development of an advanced HR management system using GraphQL APIs.</li>
                                    <li>Integrated Prisma ORM with custom GraphQL resolvers.</li>
                                    <li>Designed a user-centric HR dashboard using React and Next.js.</li>
                                    <li>Collaborated directly with the HR team to meet user needs.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* GBCS Group - Team Lead */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
                        <div className="flex items-center mb-4">
                            <Image src={gbcsLogo} alt="GBCS Group Logo" width={50} height={50} className="rounded-lg mr-4" />
                            <div>
                                <h3 className="text-xl font-semibold text-red-500">Team Lead, Intern Development Team, GBCS Group</h3>
                                <p className="text-gray-400">February 2024 - August 2024</p>
                            </div>
                        </div>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Led a diverse team of 25+ interns, fostering collaboration and productivity.</li>
                            <li>Organized and facilitated task execution, aligning with project deadlines.</li>
                            <li>Presented weekly progress reports to the supervisor and CEO.</li>
                            <li>Onboarded and trained new interns for faster adaptation and contribution.</li>
                            <li>Provided guidance and support to ensure team clarity and effectiveness.</li>
                        </ul>
                    </div>

                    {/* The Global Tech Experience */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2">
                        <div className="flex items-center mb-4">
                            <Image src={globalTechLogo} alt="Global Tech Logo" width={50} height={50} className="rounded-lg mr-4" />
                            <div>
                                <h3 className="text-xl font-semibold text-red-500">Web Development Trainee, The Global Tech Experience</h3>
                                <p className="text-gray-400">August 2023 - December 2023</p>
                            </div>
                        </div>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Developed dynamic web applications using HTML, CSS, Bootstrap, and JavaScript.</li>
                            <li>Collaborated with an international team, enhancing multicultural communication skills.</li>
                            <li>Implemented stakeholder needs into functional designs for user satisfaction.</li>
                            <li>Debugged coding issues, ensuring reliable and functional web applications.</li>
                            <li>Integrated third-party APIs to enrich the user experience.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
