import React from 'react'
import PublicLayout from '../layouts/PublicLayout'
import Notes from '../components/Notes'
import Create from '../components/Create'

const Home = () => {
    return (
        <PublicLayout>
            <div className='flex w-screen'>
                <Notes />
                <Create />
            </div>

        </PublicLayout>
    )
}

export default Home