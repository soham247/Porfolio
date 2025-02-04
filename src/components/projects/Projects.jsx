import React, { useId, useRef } from 'react'
import { projects } from './projectLists'
import Technologies from './Technologies'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ProjectCard from './ProjectCard'

gsap.registerPlugin(useGSAP);

function Projects() {

    const container = useRef();
    const tl = useRef();

    useGSAP(() => {

        tl.current = gsap
        .timeline()
        .fromTo('#heading', {x: -30}, {  x: 0, duration: 1 })
        .fromTo('#line', {scaleX: 0},
            {scaleX: 1,
            transformOrigin: 'left center',
            duration: 0.75,
            ease: 'power2.out',
        }, "<0.5")
        .from('#projects-container', {y:20, opacity: 0, duration: 1,}, "<")

        },
        { scope: container }
    )

    return (
        <div
        className='w-4/5 mx-auto py-10' ref={container}
        >
            <div className='flex items-center gap-10 mt-10 mb-16'>
                <h1 className='text-5xl sm:text-7xl text-white font-bold ml-5 lg:ml-14' id='heading'><span className='text-7xl sm:text-9xl'>P</span>rojects</h1>
                <div className='sm:w-2/5 md:w-2/5 lg:w-3/5 h-[2px] bg-white mt-14' id='line'></div>
            </div>
            <div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10' id='projects-container'
            >
                {
                projects.map((project) => (
                    <ProjectCard key={useId()} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects
