import { useNavigate, useLocation } from 'react-router'
import { motion } from 'framer-motion'

const Note = ({ noteId }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const isSelected = location.pathname === `/home/${noteId}`;

    return (
        <motion.div
            onClick={() => navigate(`/home/${noteId}`)}
            className={`p-5 rounded-xl my-2 cursor-pointer ${isSelected ? "bg-[#f8e77b]" : "bg-[#f5f5f5]"}`}
            whileTap={{ scale: 0.98 }} // Slight shrink effect when clicked
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }} // Slight zoom on hover
            animate={{ opacity: isSelected ? 1 : 0.9 }} // Slight opacity change
        >
            <div>
                <h1 className='text-md font-semibold'>Heading {noteId}</h1>
                <p className='text-sm text-[#B0B0B0] py-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className='flex justify-between'>
                    <p className='text-sm'>2 days</p>
                    <p className='text-sm'>Collaborators</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Note