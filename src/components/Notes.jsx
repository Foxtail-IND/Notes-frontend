import React from 'react'
import Note from './Note'

const Notes = () => {
    return (
        <div className='w-8/12 h-[calc(100vh-80px)] mt-19 ml-64 px-8 overflow-y-auto'>
            <h1 className='text-3xl font-bold py-10'>Notes</h1>
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