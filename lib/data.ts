import dummy from '@/public/assets/dummy_project.jpg'
import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa6';
import { IoIosGitNetwork, IoMdMusicalNotes } from 'react-icons/io';

export const about = "My name is Susan Lady Rumokoy, and I am a freshgraduate majoring in Computer Science. Currently I am working full-time as a Laboratory Assistant and Operations and System Development Staff.";
{/* During my initial semester, I applied for a part-time position as a computer laboratory assistant. Despite initial setbacks, I persevered and secured the position during a subsequent hiring period. Serving as a part-time assistant, I gained invaluable experience and was eventually promoted to a full-time role. In my capacity as a full-time assistant, I have been exposed to a diverse range of coding technologies and have contributed to various projects including game development, desktop applications, web development, mobile applications, and network projects. Concurrently, I continued to instruct and mentor students in various subjects. Presently, I am completing an internship at BINUS University as an application developer. Additionally, I have been entrusted with the responsibility of an Operation and Systems Development Staff, wherein I oversee the management of software and hardware utilized for laboratory practicum classes. */}

export const menus = [
    {
        id: "#about",
        name: "About",
    },
    {
        id: "#projects",
        name: "Projects",
    },
    {
        id: "#experience",
        name: "Experience",
    },
    {
        id: "#skills",
        name: "Skills",
    },
    {
        id: "#education",
        name: "Education",
    },
    {
        id: "#contact",
        name: "Contact",
    },
]

export const projects = [
    // sesuain dengan semester, masih ada yang harus ditambahin jga tapi bisa nyusul kok
    { 
        id: "1", 
        title: 'Enrichment Dashboard', 
        brief: "Enrichment dashboard is a web application designed to show the enrichment activities and the students involved in real time.", 
        description: 'Enrichment dashboard is a web application designed to show the enrichment activities and the students involved in real time. This application basically shows graphical charts of the enrichment activities and the list of students taking the activities. Currently, I have been developing the frontend of the application. The technology that I used to build this web application is nextJS.', 
        tags: ["NextJS", "Tailwind", "Prisma", "SQLite"], 
        image: dummy 
    },
    { 
        id: "2", 
        title: 'Pricing Calculator', 
        brief: "Pricing calculator is a web application designed to help universities to calculate and estimate the price for academic subjects/ courses.", 
        description: 'Pricing calculator is a web application designed to help universities to calculate and estimate the price for academic subjects/ courses. This application allows user to calculate the prices step-by-step (as provided in the application), and at the end the user will be given the result of the calculation. If the user is not yet satisfied with the result, the user can set the desired price and let the application re-estimate the price using goal-seek method. This application has beed hosted is developed with laravel and python.', 
        tags: ["Laravel", "Python", "Tailwind", "MySQL", "XAMPP"], 
        image: dummy
    },
    { 
        id: "3", 
        title: 'FitMe', 
        brief: "", 
        description: 'Describe', 
        tags: ["Laravel", "Bootstrap", "MySQL", "XAMPP"], 
        image: dummy
    },
    { 
        id: "4", 
        title: 'Nirbana', 
        brief: "", 
        description: 'Describe', 
        tags: ["NextJS", "Tailwind"], 
        image: dummy 
    },
    { 
        id: "5", 
        title: 'Movie List', 
        brief: "Movie List is a web application project that I did for the final project of Web Application Development practicum course.", 
        description: 'Movie List is a web application project that I did for the final project of Web Application Development practicum course. This web is basically an imitation of Netflix. The application shows the movie list, user profiles, also the movie recommendation based on the genres of the movies the users saved in their profile. This project is developed with laravel.', 
        tags: ["Laravel", "Bootstrap", "MySQL", "XAMPP"], 
        image: dummy},
    {
        id: "6", 
        title: 'FiveBR', 
        brief: "FiveBR is a web application project that I did for the final project of Web Application Development theory course.", 
        description: 'FiveBR is a web application project that I did for the final project of Web Application Development theory course. This web is basically an imitation of Fiverr. The application shows the gig list, user profiles, liked gigs, etc. In this application user can search for a gig, buy a gig, or create a gig themselves. This project is developed with laravel.', 
        tags: ["Laravel", "Bootstrap", "MySQL", "XAMPP"], 
        image: dummy 
    },
    { 
        id: "7", 
        title: 'Youtube',
        brief: "", 
        description: 'Describe',
        tags: ["HTML", "CSS"], 
        image: dummy 
    },
    { 
        id: "8", 
        title: 'Coffee Shop',
        brief: "Coffee Shop is a fronted-only web application that I did for the final project of Human and Computer Interaction practicum course.", 
        description: 'Coffee Shop is a fronted-only web application that I did for the final project of Human and Computer Interaction practicum course. This web is basically an online coffee shop where user can see the coffee menu, add food/ beverages into the cart, and purchasing the items. This web application is developed using HTML, CSS, and JavaScript.',
        tags: ["HTML", "CSS", "JS"], 
        image: dummy 
    },
    { 
        id: "9", 
        title: 'NLP Big Data Final Project',
        brief: "", 
        description: 'Describe',
        tags: ["Python"],
        image: dummy,
    },
    { 
        id: "10", 
        title: 'Mission Timpossible',
        brief: "Mission Timpossible is a game that I made using Unity as one of the required projects for an assistant (Test Progressive Assistant).", 
        description: 'Mission Timpossible is a game that I made using Unity as one of the required projects for an assistant (Test Progressive Assistant). The game uses third person perspective and the main idea is to finish missions and kill the enemies. The game required the enemies to search for the player using A-star algorithm, so then I build the game using the NavMesh feature in Unity. Then, the requirements also asked to build a maze using Breadth First Search (BFS) in which I did not get to finish',
        tags: ["Unity, C#"],
        image: dummy,
    },
    { 
        id: "11", 
        title: 'CHello',
        brief: "CHello is a desktop application that I made using Electron, ReactJS, and Firebase as one of the required projects for an assistant (Test Progressive Assistant).", 
        description: 'CHello is a desktop application that I made using Electron, ReactJS, and Firebase as one of the required projects for an assistant (Test Progressive Assistant). The application is an imitation of Trello. In this application user can do discussions, or set up plans (like a kanban board). Other than developing it, the task also requires to design the system using use case diagram, use ase description, activity diagram, sequence diagram, and class diagram. Unfortunately, the application is not yet fully developed because some of the kanban-board-like features are not yet completed.',
        tags: ["Electron", "ReactJS", "Firebase"],
        image: dummy,
    },
    { 
        id: "12", 
        title: 'LinkHEdIN',
        brief: "LinkHEdIN is a web application that I made using ReactJS, Golang, and PostgreSQL as one of the required projects for an assistant (Test Progressive Assistant).", 
        description: 'LinkHEdIN is a web application that I made using ReactJS, Golang, and PostgreSQL as one of the required projects for an assistant (Test Progressive Assistant). The application is an imitation of LinkedIn. In this application user can post their education/ experience/ achievements, connect with other people, create a job, and also finding a job.',
        tags: ["ReactJS", "Golang", "PostgreSQL", "Golang"],
        image: dummy,
    },    
    { 
        id: "13", 
        title: 'jiSakU',
        brief: "jiSaku is a mobile application that I made using Java and Firebase as one of the required projects for an assistant (Test Progressive Assistant).", 
        description: 'jiSaku is a mobile application that I made using Java and Firebase as one of the required projects for an assistant (Test Progressive Assistant). The application is basically a social media for DIY videos where user can post their own ideas in a form of video. Users can also follow each other and give their reaction to the videos. As the name of the app, jiSakU which means self-made in Japanese and the capital SU represents my initial as an assistant.',
        tags: ["Java", "Firebase"],
        image: dummy,
    },
    { 
        id: "14", 
        title: 'Network',
        brief: "", 
        description: 'Describe',
        tags: ["Cisco", "Ubuntu"],
        image: dummy,    
    },
] as const;

export const skills = ["C/C++", "HTML", "CSS", "SCSS", "JavaScript", "ReactJS", "NextJS", "Python", "PHP", "Java", "OOP", "Flutter", "Firebase", "PostgreSQL", "Laravel", "Tailwind", "Bootstrap"];

export const experiences = [
    {
        title: "Operations and System Development Officer",
        company: "BINUS University",
        position: "Full-time",
        date: "Jan 2023 - Present",
        description: [
            'Calibrated the laboratory hardware assets (monitors, pcs, mice) daily to make sure all hardware is working properly, leading to a well conducted lecture classes/ laboratory practicum.',
            'Maintained both frontend and backend of laboratory websites, keeping laboratory transactions and assets borrowings structured and reported.',
            'Taught university students in the laboratory practicum classes and new part time assistant candidate in the training selection process.',
            'Corrected university students’ assignments.'
        ],
        icon: React.createElement(IoIosGitNetwork),
    },
    {
        title: "Application Developer",
        company: "BINUS University",
        position: "Internship",
        date: "Feb 2023 - Feb 2024",
        description: [
            "Maintained websites related to the Enrichment Program in Binus University, keeping the data of the students taking the programs updated.",
            "Developed a face-recognition attendance system and enrichment dashboard, sustaining the workflow of the enrichment program."
        ],
        icon: React.createElement(CgWebsite),
    },
    {
        title: "Junior Laboratory Assistant",
        company: "BINUS University",
        position: "Full-time",
        date: "Feb 2022 - Jan 2023",
        description: [
            "Worked on a project each month to test the progress as an assistant (includes game, desktop, web, mobile apps, and network architecture).",
            "Taught university students in the laboratory practicum classes and new part time assistant candidate in the training selection process.",
            "Corrected university students’ assignments and composed quizzes/ exams for the university students to take.",
            "Participated in training to be prepared for each semester’s teaching."
        ],
        icon: React.createElement(FaChalkboardTeacher),
    },
    {
        title: "Part Time Laboratory Assistant",
        company: "BINUS University",
        position: "Part-time",
        date: "Aug 2021 - Feb 2022",
        description: [
            "Taught university students in the laboratory practicum classes and new part time assistant candidate in the training selection process.",
            "Corrected university students’ assignments and composed quizzes/ exams for the university students to take.",
            "Participated in training to be prepared for each semester’s teaching."
        ],
        icon: React.createElement(FaChalkboardTeacher),
    },
];

export const educations = [
    {
        title: "Secondary School",
        logo: React.createElement(FaGraduationCap),
        school: "BINUS School Serpong",
        year: "2014 - 2017",
        major: "IT and Sociology"
    },
    {
        title: "High School",
        logo: React.createElement(FaGraduationCap),
        school: "EFATA School",
        year: "2017 - 2020",
        major: "Science"
    },
    {
        title: "University",
        logo: React.createElement(FaGraduationCap),
        school: "BINUS University (Bachelor of Computer Science)",
        gpa: 3.85,
        year: "2020 - 2024",
        major: "Computer Science"
    },
];