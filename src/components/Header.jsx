import { CiSearch } from "react-icons/ci";
import dummy from "../assets/profile.jpg"
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
    const notifications = true
    return (
        <header className=' w-10/12 fixed flex ml-64 justify-between p-5'>
            <div className=" flex items-center gap-x-4 rounded-full p-1 px-4 border border-[#B0B0B0]">
                <CiSearch />
                <input placeholder="Search" className="p-1 outline-0" />
            </div>

            <div className=' flex gap-x-8 items-center'>

                <div className="relative">
                    <IoIosNotificationsOutline className="text-2xl text-[#B0B0B0] cursor-pointer" />
                    {notifications && <div className=" h-1.5 w-1.5 bg-red-500 rounded-full absolute right-1 top-0.5"></div>}
                </div>
                <p className=' text-[#B0B0B0] text-sm cursor-pointer'>Share</p>
                <img src={dummy} alt="" className="h-10 w-10 rounded-full" />
            </div>
        </header>
    )
}

export default Header