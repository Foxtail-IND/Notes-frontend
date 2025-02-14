import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import React, { ReactNode } from 'react';

interface PublicLayoutProps {
    children: ReactNode;
}


const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
    return (
        <div className=' w-full min-h-screen flex'>
            <Sidebar />
            <div className='flex flex-col min-h-screen'>
                <Header />
                {children}
            </div>

        </div>
    )
}

export default PublicLayout