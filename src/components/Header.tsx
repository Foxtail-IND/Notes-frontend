import { CiSearch } from "react-icons/ci";
import dummy from "../assets/profile.jpg";
import { IoIosNotificationsOutline } from "react-icons/io";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);
    const notifications = true;

    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
    };

    return (
        <header className='w-10/12 fixed flex ml-64 justify-between p-5'>
            <div className="flex items-center gap-x-4 rounded-full p-1 px-4 border border-[#B0B0B0]">
                <CiSearch />
                <input placeholder="Search" className="p-1 outline-0" />
            </div>

            <div className='flex gap-x-8 items-center'>
                {/* Notification Bell Icon */}
                <div className="relative">
                    <IoIosNotificationsOutline
                        className="text-2xl text-[#B0B0B0] cursor-pointer"
                        onClick={toggleMenu}
                    />
                    {notifications && (
                        <div className="h-1.5 w-1.5 bg-red-500 rounded-full absolute right-1.5 top-0.5"></div>
                    )}

                    {/* Animated Notification Menu */}
                    <AnimatePresence>
                        {showMenu && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-3 z-50"
                            >
                                <p className="text-sm text-gray-700">No new notifications</p>
                                {/* Add more notification items here */}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <p className='text-[#B0B0B0] text-sm cursor-pointer'>Share</p>
                <img src={dummy} alt="" className="h-10 w-10 rounded-full" />
            </div>
        </header>
    );
};

export default Header;
