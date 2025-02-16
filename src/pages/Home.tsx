import PublicLayout from '../layouts/PublicLayout'
import Notes from '../components/Notes'
import Create from '../components/Create'
import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from "../context/store";

const Home: React.FC = () => {

    // const token = useSelector((state: RootState) => state.user.token)

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