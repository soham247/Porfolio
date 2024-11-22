import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { best } from "./projects/projectLists";
import ProjectCard from "./projects/ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TypeAnimation } from "react-type-animation";
import Snowfall from "react-snowfall";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


function Home() {
  const container = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .fromTo("#title", { y: -10, x: -50 }, { y: 20, x: 0, duration: 0.75 })
        .fromTo(
          "#first-name",
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 }
        )
        .fromTo(
          "#last-name",
          { x: 80, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          "<"
        )
        .fromTo(
          ".popup",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.75 },
          "1"
        );

      gsap.to(".breathe", {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine",
      });

      gsap.fromTo(
        "#top-projects",
        { opacity: 0, y: 50 }, // Initial state
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: "#top-projects",
            start: "top 80%", // When the top of #top-projects reaches 80% of viewport
            end: "bottom 0%", // When the bottom of #top-projects reaches 20% of viewport
            toggleActions: "play reverse play reverse", // Animation actions
          },
        }
      );
    },
    { scope: container }
  );

  var settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "150px",
    slidesToShow: 1,
    speed: 500,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "10px",
        }
      },
    ]
  };

  return (
    <div ref={container} className="text-white mt-20 md:mt-0 mx-10">
      <Snowfall wind={[0.5,2]} />
      <div className="md:flex">
        <div className="w-[100%] md:w-[50%] flex justify-center items-center mt-10 md:mt-0">
          <div className="breathe w-[150px] md:w-[250px] h-[150px] md:h-[250px] bg-blue-500 rounded-full shadow-yellow-glow"></div>
        </div>
        <div className="mt-16 md:mt-36">
          <h3 id="title" className="text-3xl font-bold ml-3 mb-5">
            <span className="text-5xl">Hi! I&apos;</span>m
          </h3>
          <h1 id="first-name" className="text-7xl md:text-8xl font-bold">
            SOHAM
          </h1>
          <h2 id="last-name" className="text-5xl md:text-6xl font-bold mb-6">
            SADHUKHAN
          </h2>
          <p className="popup text-xl">A passionate <span className="text-orange-500 font-comic font-bold">
          <TypeAnimation
      sequence={[
        'Full Stack Web Developer',
        1000,
        'Open Source Contributor',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
            </span></p>

          <div className="flex popup mt-6 gap-5 items-center">
            <a href="https://github.com/soham247" target="_blank">
              <i className={`devicon-github-original colored text-3xl`}></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sohamsadhukhan"
              target="_blank"
            >
              <img
                className="w-8"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
              />
            </a>
            <a href="https://x.com/geekSoham" target="_blank">
              <i className={`devicon-twitter-original colored text-2xl`}></i>
            </a>
            <a
              href=""
              className=" text-white py-2 px-4 rounded-full border border-white hover:bg-white hover:text-black duration-500 ease-in-out"
              target="_blank"
            >
              Resume ↗
            </a>
          </div>
        </div>
      </div>

      <div id="top-projects">
        <h2 className="text-5xl font-bold mt-16 text-center">Top Projects</h2>
        <div className="w-[95%] md:w-3/5 mx-auto my-10">
          
          <Slider {...settings}>
          {best.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          </Slider>
          
        </div>
      </div>

      {/* <div>
        <h1>Achievements</h1>
      </div> */}
    </div>
  );
}

export default Home;
