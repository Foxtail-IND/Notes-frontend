import React from 'react'
import Note from './Note'

const Notes = () => {
    return (
        <div className='  w-1/2 min-h-screen mt-12  ml-64 px-8'>
            <h1 className=' text-3xl font-bold py-10'>Notes</h1>
            {/* all notes here  */}
            <div>
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </div>
        </div>
    )
}

export default Notes