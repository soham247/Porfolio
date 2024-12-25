import React from 'react'
import { BeatLoader } from 'react-spinners'

function Loading() {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <BeatLoader
            color="#ffffff"
            />
        </div>
    )
}

export default Loading
