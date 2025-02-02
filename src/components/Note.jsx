import { useNavigate } from 'react-router'

const Note = ({ noteId }) => {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/home/${noteId}`)} className=' p-5 rounded-xl my-2 bg-[#f8e77b] cursor-pointer'>
            <div >
                <h1 className='text-md'>Heading</h1>
                <p className=' text-sm text-[#B0B0B0] py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quisquam
                    nobis distinctio similique
                </p>
                <div className='flex justify-between'>
                    <p className='text-sm'>2days</p>
                    <p className='text-sm'>collborators</p>
                </div>
            </div>
        </div>
    )
}

export default Note