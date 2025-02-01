import { CiSearch } from "react-icons/ci";
import dummy from "../assets/profile.jpg"

const Header = () => {
    return (
        <header className=' w-10/12 fixed flex ml-64 justify-between p-5'>
            <div className=" flex items-center gap-x-4 rounded-full p-1 px-4 border border-[#B0B0B0]">
                <CiSearch />
                <input placeholder="Search" className="p-1 outline-0" />
            </div>

            <div className=' flex gap-x-4 items-center'>
                <p className=' text-[#B0B0B0] text-sm'>Updates</p>
                <p className=' text-[#B0B0B0] text-sm'>Share</p>
                <img src={dummy} alt="" className="h-10 w-10 rounded-full" />
            </div>
        </header>
    )
}

export default Header