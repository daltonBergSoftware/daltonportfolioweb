"use client";

import React, { useState, useEffect } from "react";
import {
  FaPython,
  FaJava,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaLinux,
  FaWindows,
  FaApple,
  FaGithub,
  FaGitAlt,
  FaDatabase,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiDjango,
  SiBootstrap,
  SiFastapi,
  SiJavascript,
  SiCplusplus,
  SiMysql,
  SiNextdotjs,
  SiGraphql,
  SiTypescript,
  SiPostgresql,
  SiSupabase,
  SiNeovim,
  SiTailwindcss,
  SiTrpc,
  SiZod,
  SiClerk,
  SiShadcnui,
  SiPrisma,
} from "react-icons/si";

const skills = {
  Languages: [
    { name: "Python", icon: <FaPython className="shrink-0" /> },
    { name: "Java", icon: <FaJava className="shrink-0" /> },
    { name: "C++", icon: <SiCplusplus className="shrink-0" /> },
    { name: "SQL", icon: <FaDatabase className="shrink-0" /> },
    { name: "TypeScript", icon: <SiTypescript className="shrink-0" /> },
    { name: "JavaScript", icon: <SiJavascript className="shrink-0" /> },
    { name: "HTML", icon: <FaHtml5 className="shrink-0" /> },
    { name: "CSS", icon: <FaCss3Alt className="shrink-0" /> },
  ],
  "Frameworks & Libraries": [
    { name: "React.js", icon: <FaReact className="shrink-0" /> },
    { name: "Next.js", icon: <SiNextdotjs className="shrink-0" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="shrink-0" /> },
    { name: "ShadCN", icon: <SiShadcnui className="shrink-0" /> },
    { name: "Node.js", icon: <FaNodeJs className="shrink-0" /> },
    { name: "FastAPI", icon: <SiFastapi className="shrink-0" /> },
    { name: "Django", icon: <SiDjango className="shrink-0" /> },
    { name: "GraphQL", icon: <SiGraphql className="shrink-0" /> },
    { name: "tRPC", icon: <SiTrpc className="shrink-0" /> },
    { name: "Zod", icon: <SiZod className="shrink-0" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="shrink-0" /> }, // Old skill kept at the bottom
  ],
  "Databases and Tools": [
    { name: "PostgreSQL", icon: <SiPostgresql className="shrink-0" /> },
    { name: "MySQL", icon: <SiMysql className="shrink-0" /> },
    { name: "MongoDB", icon: <SiMongodb className="shrink-0" /> },
    { name: "PrismaORM", icon: <SiPrisma className="shrink-0" /> },
    { name: "Supabase", icon: <SiSupabase className="shrink-0" /> },
    { name: "Neon", icon: <SiNeovim className="shrink-0" /> },
  ],
  "Developer Tools": [
    { name: "Git/GitHub", icon: <FaGithub className="shrink-0" /> },
    { name: "Docker", icon: <FaDocker className="shrink-0" /> },
    { name: "AWS", icon: <FaAws className="shrink-0" /> }, // AWS added back
    { name: "RESTful APIs", icon: <FaDatabase className="shrink-0" /> },
    { name: "Clerk", icon: <SiClerk className="shrink-0" /> },
    { name: "GitHub Actions", icon: <FaGithub className="shrink-0" /> },
    { name: "Git Controls", icon: <FaGitAlt className="shrink-0" /> }, // Old skill kept for consistency
  ],
  "Operating Systems": [
    { name: "Linux", icon: <FaLinux className="shrink-0" /> },
    { name: "MacOS", icon: <FaApple className="shrink-0" /> },
    { name: "Windows", icon: <FaWindows className="shrink-0" /> },
  ],
};

const MySkills = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSmallScreen(window.innerWidth <= 767);
    }
  }, []);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skillCategories = Object.keys(skills);

  return (
    <div
      id="skills"
      className="py-16 px-6 bg-gray-900 text-white overflow-hidden"
    >
      <h2 className="text-center text-4xl font-bold text-red-500 mb-10">
        Technical Skills
      </h2>
      {/* Flex container with wrapping and centered items */}
      <div className="flex flex-wrap justify-center gap-7 max-w-6xl mx-auto">
        {skillCategories.map((category) => (
          <div
            key={category}
            onClick={() => isSmallScreen && toggleCategory(category)}
            className={`rounded-lg p-6 shadow-lg bg-gray-800 transition-all duration-300 
                        ${
                          isSmallScreen && expandedCategory === category
                            ? "scale-105"
                            : "hover:scale-105"
                        }
                        w-[300px] sm:w-[360px] md:w-2/5 lg:w-[300px]`}
          >
            <h3 className="text-2xl font-semibold text-red-400 text-center mb-4 cursor-pointer">
              {category}
            </h3>
            <ul
              className={`grid grid-cols-2 gap-4 ${
                isSmallScreen && expandedCategory !== category ? "hidden" : ""
              }`}
            >
              {skills[category as keyof typeof skills].map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center space-x-2 text-lg text-left"
                >
                  <span className="text-red-500 text-2xl w-6 flex-shrink-0 flex justify-center">
                    {skill.icon}
                  </span>
                  <span className="flex-grow">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
