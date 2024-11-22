import weatherapp from "../../assets/projectImg/weatherapp.png"
import ticTacToe from "../../assets/projectImg/tic-tac-toe.png"
import portfolio from "../../assets/projectImg/portfolio.png"

export const projects = [
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
        technologies: ["React.js"],
        description: "A web based portfolio website to showcase my projects and skills.",
        gitHubLink: "https://github.com/soham247/Portfolio-website"
    },
    {
        image: ticTacToe,
        name: "Tic-Tac-Toe",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "A web based tic tac toe two player game",
        gitHubLink: "https://github.com/soham247/Tic-Tac-Toe"
    }
]

const bestInd = [0, 1, 2]

export const best = projects.filter((_, index) => bestInd.includes(index))