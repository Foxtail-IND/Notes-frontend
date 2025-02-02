import { useParams } from "react-router"
import task from "../assets/task.png"
import { FaRegLightbulb } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";

const Create = () => {

    const { noteId } = useParams()

    console.log(noteId);


    return (
        <div className=' w-full mr-6 mt-19 p-10'>
            {noteId ? (
                <div>
                    <h1 className="text-2xl font-bold">Note Details</h1>
                    <p>Displaying details for note ID: {noteId}</p>
                </div>
            ) : (
                <div>
                    <div className="flex flex-col items-center">
                        <img src={task} alt="" className=" h-auto w-3/6" />

                    </div>
                    <div className=" flex gap-x-4 items-center my-8">
                        <p className="text-4xl font-bold">Write down your ideas</p>
                        <FaRegLightbulb className="text-yellow-200 text-3xl" />
                    </div>
                    <div className="flex gap-x-4">
                        <p className=" text-orange-400">#ideas</p>
                        <p className=" text-orange-400">#to-do's</p>
                        <p className=" text-orange-400">#morning</p>
                    </div>
                    <p className=" text-gray-400 py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolores deserunt quo hic asperiores suscipit odi
                        o aliquid facere odit doloribus totam temporibus alias necess
                        itatibus magnam perspiciatis, repellat esse debitis accusantium!</p>
                    <LuPlus className='text-xl cursor-pointer ml-auto mt-40' />
                </div>
            )}
        </div>
    )
}

export default Create