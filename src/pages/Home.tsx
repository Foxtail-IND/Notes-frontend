import PublicLayout from '../layouts/PublicLayout'
import Notes from '../components/Notes'
import Create from '../components/Create'
import React from 'react'

const Home: React.FC = () => {
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