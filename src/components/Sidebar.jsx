import React from 'react'

import logo from "../assets/logo.png"
import { FaRegStickyNote, FaTasks } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from 'react-router';


const pages = [
    {
        name: "Notes",
        path: "/",
        icon: <FaRegStickyNote />
    },
    {
        name: "Tasks",
        path: "/tasks",
        icon: <FaTasks />
    },
    {
        name: "Profile",
        path: "/profile",
        icon: <BsPerson />
    },
    {
        name: "Logout",
        path: "/logout",
        icon: <IoLogOutOutline />
    },
];


const Sidebar = () => {
    return (
        <div className='min-h-screen md:w-2/12 p-4 fixed'>
            <div className='flex justify-center mb-6'>
                <img src={logo} alt='App logo' className='h-16' />
            </div>
            <h2 className='text-sm text-gray-400 font-semibold mb-4 px-4'>Workspace</h2>
            <nav>
                <ul className='space-y-4 px-2'>
                    {pages.map((page, index) => (
                        <li key={index}>
                            <Link to={page.path} className='flex items-center space-x-3 py-2 px-2 hover:bg-orange-100 hover:text-black rounded-md'>
                                {page.icon}
                                <span>{page.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar