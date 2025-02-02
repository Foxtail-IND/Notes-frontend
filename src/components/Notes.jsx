import { Link } from 'react-router';
import Note from './Note'
import { LuPlus } from "react-icons/lu";

const Notes = () => {

    const notes = [1, 2, 3, 4, 5, 6];

    return (
        <div className='w-8/12 h-[calc(100vh-80px)] mt-19 ml-64 px-8 overflow-y-auto'>
            <div className='flex items-center justify-between pr-2'>
                <h1 className='text-3xl font-bold py-10'>Notes</h1>
                <Link to="/home" className=' bg-[#f5f4f4] p-3 rounded-full'>
                    <p>Create</p>
                </Link>
            </div>
            <div>
                {notes.map((id) => (
                    <Note key={id} noteId={id} />
                ))}
            </div>
        </div>
    )
}

export default Notes