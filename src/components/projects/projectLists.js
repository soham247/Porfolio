import weatherapp from "../../assets/projectImg/weatherapp.png"
import portfolio from "../../assets/projectImg/portfolio.png"
import muse from "../../assets/projectImg/Muse.png"

export const projects = [
    {
        image: muse,
        name: "Muse",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        description: "A modern blogging platform that allows users to create and share their thoughts, ideas, and experiences with other users.",
        liveLink: "https://muse-lemon.vercel.app/",
        gitHubLink: "https://github.com/soham247/muse"
    },
    {
        image: weatherapp,
        name: "Weather App",
        technologies: ["React.js"],
        description: "A web application that provides real-time weather updates, including temperature, humidity, and wind speed, based on user-inputted city names.",
        liveLink: "https://weather-wiz-vert.vercel.app/",
        gitHubLink: "https://github.com/soham247/Weather-App"
    }, 
    {
        image: portfolio,
        name: "Portfolio website",
        technologies: ["React.js", "Tailwind CSS"],
        description: "A web based portfolio website to showcase my projects and skills.",
        liveLink:"https://sohamsadhukhan.vercel.app/",
        gitHubLink: "https://github.com/soham247/Porfolio"
    },
]

const bestInd = [0, 1, 2]

export const best = projects.filter((_, index) => bestInd.includes(index))