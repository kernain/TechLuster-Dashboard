import { SiDotnet, SiJavascript, SiPython, SiAngular, SiPhp, SiAndroid, SiGo, SiSwift, SiLaravel, SiReact, SiSpring, SiDjango, SiHtml5, SiCss3  } from 'react-icons/si';
import { FaCogs, FaAws, FaJava, FaNodeJs, FaDatabase   } from 'react-icons/fa';
import { SiGit } from 'react-icons/si'; // Added this import since it's used in skills

export const tabs = [
    { label: 'All', count: 4 },
    { label: 'Designer', count: 0 },
    { label: 'Developer', count: 0 },
    { label: 'Product Designer', count: 0 },
];

export const skills = [
    { label: 'Java', count: 2, icon: <FaJava /> },
    { label: '.Net', count: 1, icon: <SiDotnet /> },
    { label: 'JavaScript', count: 1, icon: <SiJavascript /> },
    { label: 'Python', count: 1, icon: <SiPython /> },
    { label: 'Angular', count: 0, icon: <SiAngular /> },
    { label: 'PHP', count: 0, icon: <SiPhp /> },
    { label: 'Android', count: 0, icon: <SiAndroid /> },
    { label: 'GoLang', count: 1, icon: <SiGo /> },
    { label: 'Swift', count: 0, icon: <SiSwift /> },
    { label: 'Laravel', count: 0, icon: <SiLaravel /> },
    { label: 'React Native', count: 0, icon: <SiReact /> },
    { label: 'Node JS', count: 0, icon: <FaNodeJs /> },
    { label: 'Spring Boot', count: 1, icon: <SiSpring /> },
    { label: 'Django', count: 2, icon: <SiDjango /> },
    { label: 'HTML', count: 0, icon: <SiHtml5 /> },
    { label: 'CSS', count: 0, icon: <SiCss3 /> },
    { label: 'Aptitude', count: 4, icon: <FaCogs /> },
    { label: 'Git', count: 1, icon: <SiGit /> },
    { label: 'RESTful', count: 1, icon: <FaCogs /> },
    { label: 'Spring Framework', count: 0, icon: <SiSpring /> },
    { label: 'AWS', count: 1, icon: <FaAws /> },
    { label: 'Oracle Netsuite', count: 1, icon: <FaDatabase  /> },
];
