import React, { useId } from 'react'
import Technologies from './Technologies'

function ProjectCard({ project }) {
    return (
        <div>
            <div key={useId()}
                className='flex flex-col items-center gap-4 p-6 rounded-xl shadow-2xl w-full md:w-3/4 lg:w-[90%] mx-auto hover:border border-purple-400 hover:scale-105 hover:shadow-purple-400 hover:shadow-md duration-500 ease-in-out bg-[rgba( 242, 242, 242, 0.2 )]  backdrop-blur-[2.5px]  border border-white/20'
                >
                    <img src={project.image}
                    className='rounded-3xl'
                    />
                    <h3
                    className='text-2xl text-white text-center font-bold'
                    >{project.name}</h3>
                    <Technologies technologies={project.technologies} />
                    <p className='text-center text-slate-50 text-sm'>{project.description}</p>
                    <div className='w-full flex justify-evenly'>
                        { project.liveLink && <a href={project.liveLink} target='_blank' className='text-white p-2 rounded-md bg-green-500 hover:bg-green-600'>Visit Site</a>}
                        <a href={project.gitHubLink} target='_blank' className='text-white p-2 rounded-md bg-blue-500 hover:bg-blue-600'>Github</a>
                    </div>
                </div>
        </div>
    )
}

export default ProjectCard
