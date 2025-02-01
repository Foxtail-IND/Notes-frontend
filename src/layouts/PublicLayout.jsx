import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const PublicLayout = ({ children }) => {
    return (
        <div className=' w-full min-h-screen flex'>
            <Sidebar />
            <div className='flex flex-col w-screen'>
                <Header />
                {children}
            </div>

        </div>
    )
}

export default PublicLayout