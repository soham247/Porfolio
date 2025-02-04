import React, { useId } from 'react'

function Technologies({ technologies }) {
    return (
        <div className='flex flex-wrap justify-center gap-2'>
            {technologies.map((technology) => (
                <p 
                key={useId()}
                className='bg-blue-950 text-white rounded-full px-2 py-1 text-xs'
                >
                    {technology}
                </p>
            ))}
        </div>
    )
}

export default Technologies
