import React from 'react'

const Note = () => {
    return (
        <div className=' p-5 rounded-xl my-2 bg-gray-100 cursor-pointer'>
            <h1 className='text-md'>Heading</h1>
            <p className=' text-sm py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam
                nobis distinctio similique
            </p>
            <div className='flex justify-between'>
                <p className='text-sm'>2days</p>
                <p className='text-sm'>collborators</p>
            </div>
        </div>
    )
}

export default Note