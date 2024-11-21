import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP);

function Aboutme() {

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
        .from('#text-container', {y:20, opacity: 0, duration: 1,}, "<")

        },
        { scope: container }
    )


    return (
        <div className='py-20' ref={container}>
            <div className='flex items-center gap-10'>
                <h2 className='text-5xl sm:text-7xl text-white font-bold ml-5 lg:ml-14' id='heading'><span className='text-7xl sm:text-9xl'>A</span>bout Me</h2>
                <div className='sm:w-2/5 md:w-2/5 lg:w-3/5 h-[2px] bg-white mt-14' id='line'></div>
            </div>
            <div className='w-[90%] lg:w-4/5 mx-auto shadow-2xl p-10 rounded-3xl my-20 border border-purple-500' id='text-container'>
                <div className='text-white'>
                    <p>
                        Hey there! 👋 I&apos;m Soham Sadhukhan, a second-year B.Tech student at Jalpaiguri Government Engineering College, diving deep into the world of Information Technology (and occasionally wondering if JavaScript dreams of electric sheep).
                    </p>
                    <br />
                    <p>
                        When I&apos;m not busy debugging my way through life, I&apos;m flexing my skills as a MERN stack developer, building sleek apps and chasing the next big idea. 💻✨ My projects are a mix of code, creativity, and caffeine — the perfect recipe for innovation!
                    </p>
                    <br />
                    <p>
                        But wait, there&apos;s more! When I step away from the keyboard, you&apos;ll find me capturing the world through my lens 📸 or binge-watching sitcoms because, hey, even developers need some Ctrl+Alt+Del time!
                    </p>
                    <br />
                    <p>
                        Life&apos;s all about writing the best lines of code — and maybe the occasional cheesy bio. 😄
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
