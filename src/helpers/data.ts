import nestImg from "assets/project/nestjs.png";
import fyloImg from "assets/project/fylo.png";
import bestTargetImg from "assets/project/best-target.png";
import reactUltimateImg from "assets/project/react-ultimate.png";
import pigGameImg from "assets/project/pig-game.png";
import petroMapImg from "assets/project/petro-map.png";

export const APP_DATA = {
  LINKEDIN_URL: "https://www.linkedin.com/in/phi-ho-1615012bb/",
  GITHUB_URL: "https://github.com/fi-x64?tab=repositories/",
  FACEBOOK_URL: "http://facebook.com/phi.hohoang.3705/",
};

export const EXPERIENCES = [
  {
    id: 1,
    title: {
      vi: "Sinh viên",
      en: "Student",
    },
    company: {
      vi: "Trường Đại Học Cần Thơ",
      en: "Can Tho University",
    },
    duration: {
      vi: "Tháng 9 2019 - Tháng 5 2023",
      en: "May 2019 - May 2023",
    },
  },
  {
    id: 2,
    title: {
      vi: "Lập Trình Viên",
      en: "Fullstack Developer",
    },

    company: {
      vi: "Công ty TMA Solutions",
      en: "TMA Solutions",
    },
    duration: {
      vi: "Tháng 5/2023 - Hiện tại",
      en: "May 2023 - Present",
    },
  },
  {
    id: 3,
    title: {
      vi: "Dự án tự làm",
      en: "Self Employed",
    },
    company: {
      vi: "Học kiến thức mới mỗi ngày",
      en: "Code and build something new everyday.",
    },
    duration: {
      vi: "Tháng 1/2020 - Hiện tại",
      en: "Jan 2020 - Present",
    },
  },
];

export const PROJECTS = [
  {
    id: 1,
    imgPath: bestTargetImg,
    title: "Best Target",
    description: `Online used electronics sale news management system support user to post electronics sale news
on website, users of this system includes not registered, admin and registered user. The website
enables user to view news content, post electronics sale news, find and filter news,...`,
    description_full: `Online used electronics sale news management system support user to post electronics sale news
on website, users of this system includes not registered, admin and registered user. The website
enables user to view news content, post electronics sale news, find and filter news, add favourite
news. Besides, the website allows user to update personal account information, contact other
user by sending messages and by navigating user location on google map. This system also
support to manage user accounts, news, discount policies, statistical reports, invoices and news
categories, chatbox. The website is designed and programmed by HTML5, Tailwind CSS with
MERN: MongoDB, Express, ReactJS và NodeJS.`,
    githubLink: "https://github.com/fi-x64/BestTarget_client.git",
    demoLink: "",
  },
  {
    id: 2,
    imgPath: petroMapImg,
    title: "Petro Map",
    description:
      "Petro Map is an interactive web application that allows users to view, search, and save the locations of gas stations on a map. The app is built using ReactJS for a modern and responsive user interface, MongoDB to store gas station information (such as name, address, coordinates, and update time), and Leaflet to render an...",
    description_full:
      "Petro Map is an interactive web application that allows users to view, search, and save the locations of gas stations on a map. The app is built using ReactJS for a modern and responsive user interface, MongoDB to store gas station information (such as name, address, coordinates, and update time), and Leaflet to render an interactive map with clickable location markers. Key features include displaying gas stations on the map, adding/editing/deleting locations (with permissions), searching for nearby stations, and storing data in real-time with MongoDB.",
    githubLink: "https://github.com/fi-x64/PetroClient.git",
    demoLink: "",
  },
  {
    id: 3,
    imgPath: pigGameImg,
    title: "Pig Game",
    description:
      "Pig Game is a simple two-player dice game built using vanilla JavaScript, HTML, and CSS. The game simulates rolling a dice randomly in each player's turn. A player can roll the dice multiple times per turn. If the result is not 1, the number is added to their temporary score. However, if the player...",
    description_full:
      "Pig Game is a simple two-player dice game built using vanilla JavaScript, HTML, and CSS. The game simulates rolling a dice randomly in each player's turn. A player can roll the dice multiple times per turn. If the result is not 1, the number is added to their temporary score. However, if the player rolls a 1, they lose all temporary points for that turn and the turn passes to the next player. Players can also choose to 'Hold' to save their current temporary score to the total score. The first player to reach 100 points wins the game.",
    githubLink: "https://github.com/fi-x64/pig-game.git",
    demoLink: "https://pig-game-topaz-three.vercel.app/",
  },
  {
    id: 4,
    imgPath: fyloImg,
    title: "Flyo",
    description:
      "Fylo Landing Page is a responsive web interface project using Tailwind CSS. The layout features a clean, supports Dark Mode, modern design and is fully optimized for all screen sizes including desktop, tablet, and mobile.",
    githubLink: "https://github.com/fi-x64/fylo-tailwindcss.git",
    demoLink: "https://vermillion-pothos-2897ac.netlify.app/",
  },
  {
    id: 5,
    imgPath: fyloImg,
    title: "Comming Soon",
    description: "I'm working on some new projects. Stay tuned!",
    githubLink: "https://github.com/fi-x64/fylo-tailwindcss.git",
    demoLink: "https://vermillion-pothos-2897ac.netlify.app/",
  },
];

export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Next JS",
  "Nest JS",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Git",
  "AWS",
  "Bootstrap",
  "Docker",
  "Figma",
  "MaterialUI",
  "Nginx",
];

// Choose your skills from below. Make sure it's in the same format and spelled correctly.
// Couldn't find the required skills? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new

// AVAILABLE SKILLS

/* 
    HTML
    CSS
    JS 
    React
    Next JS
    Nuxt JS
    Node JS
    Vue
    Angular
    Docker
    Photoshop
    Illustrator
    Svelte
    GCP
    Azure
    Fastify
    Haxe
    Ionic
    Markdown
    Microsoft Office
    Picsart
    Sketch
    Unity
    WolframAlpha
    Adobe XD
    After Effects
    Bootstrap
    Bulma
    CapacitorJs
    Coffeescript
    MemSQL
    C
    C++
    C#
    Python
    Java
    Julia
    Matlab
    Swift
    Ruby
    Kotlin
    Go
    PHP
    Flutter
    Dart
    Typescript
    Swift
    Git
    Figma
    Canva
    Ubuntu
    Bootstrap
    MongoDB
    Tailwind
    ViteJS
    VuetifyJS
    MySQL
    PostgreSQL
    AWS
    Firebase
    Blender
    Premiere Pro
    Adobe Audition
    Deno
    Django
    Gimp
    Graphql
    Lightroom
    MaterialUI
    Nginx
    Numpy
    OpenCV
    Pytorch
    Selenium
    Strapi
    Tensorflow
    Webex
    Wordpress
  */
