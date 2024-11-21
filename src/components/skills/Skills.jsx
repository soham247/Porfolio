import React, {useId, useRef} from 'react'
import { skills } from './skillsList'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP);

function Skills() {

    const container = useRef();
    const tl = useRef();

    useGSAP(() => {
        tl.current = gsap
        .timeline()
        .fromTo('#heading', {x: -50}, {  x: 0, duration: 1 })
        .fromTo('#line', {scaleX: 0},
            {scaleX: 1,
            transformOrigin: 'left center',
            duration: 0.75,
            ease: 'power2.out',
        }, "<0.5")

        gsap.from(".skill", {
            opacity: 0,
            scale: 0.5,
            y: 50,
            stagger: 0.2,
            duration: 2,
            ease: 'power3.out',
        }
        );
        }, { scope: container }
    )

    return (
        <div className='py-5' ref={container}>
            <div className='flex items-center gap-14 my-10'>
                <h2 className='text-5xl sm:text-7xl text-white font-bold ml-5 lg:ml-36' id='heading'><span className='text-7xl sm:text-9xl'>S</span>kills</h2>
                <div className='sm:w-3/5 md:w-3/5 lg:w-7/12 h-[2px] bg-white mt-14' id='line'></div>
            </div>
             
            <div className='w-[90%] mx-auto lg:w-3/4 p-4 flex justify-center flex-wrap gap-3 lg:gap-1 skill'>
            {skills.map((skill) => (
                <div key={useId()} className='w-[25%] md:w-[15%] flex flex-col items-center m-2 p-2 rounded-2xl hover:scale-110 duration-300'>
                    <i className={`${skill.icon} text-5xl lg:text-6xl`}></i>                    
                    <h3 className='text-white text-xl mt-2'>{skill.name}</h3>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Skills
