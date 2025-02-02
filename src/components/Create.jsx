import { useParams } from "react-router"


const Create = () => {

    const { noteId } = useParams()

    console.log(noteId);


    return (
        <div className=' bg-amber-400 w-full mt-19 '>
            {noteId ? (
                <div>
                    <h1 className="text-2xl font-bold">Note Details</h1>
                    <p>Displaying details for note ID: {noteId}</p>
                </div>
            ) : (
                <h1 className="text-2xl font-bold">Create a New Note</h1>
            )}
        </div>
    )
}

export default Create