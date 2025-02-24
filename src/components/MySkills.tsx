import React, { useState, useEffect } from 'react';
import {
    FaPython, FaJava, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaAws, FaLinux, FaWindows, FaApple, FaGithub, FaGitAlt, FaDatabase, FaDocker
} from 'react-icons/fa';
import { SiMongodb, SiDjango, SiBootstrap, SiFastapi, SiJavascript, SiCplusplus, SiMysql, SiNextdotjs, SiGraphql, SiTypescript } from 'react-icons/si';

const skills = {
    "Programming Languages": [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'SQL', icon: <FaDatabase /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
    ],
    "Frameworks/Libraries": [
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'FastAPI', icon: <SiFastapi /> },
        { name: 'Django', icon: <SiDjango /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
        { name: 'GraphQL', icon: <SiGraphql /> },
    ],
    "Databases": [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PrismaORM', icon: <FaDatabase /> },
    ],
    "Operating Systems": [
        { name: 'Linux', icon: <FaLinux /> },
        { name: 'MacOS', icon: <FaApple /> },
        { name: 'Windows', icon: <FaWindows /> },
    ],
    "Tools/Platforms": [
        { name: 'GitHub Actions', icon: <FaGithub /> },
        { name: 'Git Controls', icon: <FaGitAlt /> },
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'RESTful API', icon: <FaDatabase /> },
    ]
};

const MySkills = () => {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

    const toggleCategory = (category: string) => {
        setExpandedCategory(expandedCategory === category ? null : category);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="skills" className="py-16 px-6 bg-gray-900 text-white overflow-hidden">
            <h2 className="text-center text-4xl font-bold text-red-500 mb-10">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {Object.keys(skills).map((category) => (
                    <div 
                        key={category} 
                        className={`rounded-lg p-6 shadow-lg bg-gray-800 transition-all duration-300 ${
                            isSmallScreen && expandedCategory === category ? 'scale-105' : 'hover:scale-105'
                        }`}
                        onClick={() => isSmallScreen && toggleCategory(category)}
                    >
                        <h3 className="text-2xl font-semibold text-red-400 text-center mb-4 cursor-pointer">{category}</h3>
                        <ul className={`grid grid-cols-2 gap-4 ${isSmallScreen && expandedCategory !== category ? 'hidden' : ''}`}>
                            {skills[category as keyof typeof skills].map((skill) => (
                                <li key={skill.name} className="flex items-center space-x-3 text-lg text-center justify-center">
                                    <span className="text-red-500 text-2xl">{skill.icon}</span>
                                    <span>{skill.name}</span>
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
