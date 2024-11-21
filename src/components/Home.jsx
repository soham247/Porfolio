import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { best } from './projects/projectLists';
import ProjectCard from './projects/ProjectCard';

gsap.registerPlugin(useGSAP);

function Home() {

    const container = useRef();
    const tl = useRef();

    useGSAP(
        () => {
            tl.current = gsap
            .timeline()
            .fromTo('#title', {y : -10, x: -50}, { y: 20, x:0, duration: 0.75 })
            .fromTo('#first-name', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
            .fromTo('#last-name', { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "<")
            .fromTo('.popup', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.75 }, "1");

            gsap.to('.breathe', {y: 10, duration: 1.5, repeat: -1, yoyo: true, ease: 'sine'});
        },
        { scope: container }
    )

    return (
        <div ref={ container } className='text-white mx-10'>
            <div className='md:flex'>
                <div className='w-[100%] md:w-[50%] flex justify-center items-center'>
                    <div className="breathe w-[150px] md:w-[250px] h-[150px] md:h-[250px] bg-blue-500 rounded-full md:mt-16"></div>
                </div>
                <div className='mt-16 md:mt-36'>
                    <h3 id='title' className='text-3xl font-bold ml-3 mb-5'><span className='text-5xl'>Hi! I&apos;</span>m</h3>
                    <h1 id='first-name' className='text-7xl md:text-8xl font-bold'>SOHAM</h1>
                    <h2 id='last-name' className='text-5xl md:text-6xl font-bold mb-6'>SADHUKHAN</h2>
                    <p className='popup'>A passionate MERN stack developer</p>

                    <div className='flex popup mt-6 gap-10 items-center'>
                        <div className='flex gap-5 py-2 px-4  rounded-full shadow-sm shadow-slate-300'>
                            <a href="https://github.com/soham247"  target='_blank'><i className={`devicon-github-original colored text-3xl`}></i></a>
                            <a href="https://www.linkedin.com/in/sohamsadhukhan" target='_blank'><i className={`devicon-linkedin-plain colored text-3xl`}></i></a>
                            <a href="https://x.com/geekSoham" target='_blank'><i className={`devicon-twitter-original colored text-3xl`}></i></a>
                        </div>
                        <a href="" className='bg-green-700 text-white py-2 px-4 rounded-full hover:bg-green-500 shadow-sm shadow-slate-300'>Resume ↗</a>
                    </div>
                </div>
            </div>

            <div>
                <h2 className='text-5xl font-bold mt-10 text-center'>Top Projects</h2>
                <div className='w-[90%] lg:w-4/5 mx-auto mt-10 md:flex'>
                {
                    best.map((project, index) =>(
                        <ProjectCard key={index} project={project} />
                    ))
                }
                </div>
            </div>


        </div>
    )
}

export default Home
