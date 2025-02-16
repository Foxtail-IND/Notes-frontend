import { useParams } from "react-router"
import task from "../assets/task.png"
import { FaRegLightbulb } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import api from "../services/api";

interface Note {
    id: number;
    content: string;
}

const PlaceholderComponent = () => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <img src={task} alt="Task" className="h-auto w-3/6" />
            </div>
            <div className="flex gap-x-4 items-center my-8">
                <p className="text-4xl font-bold">Write down your ideas</p>
                <FaRegLightbulb className="text-yellow-200 text-3xl" />
            </div>
            <div className="flex gap-x-4">
                <p className="text-orange-400">#ideas</p>
                <p className="text-orange-400">#to-do's</p>
                <p className="text-orange-400">#morning</p>
            </div>
            <LuPlus className="text-xl cursor-pointer ml-auto mt-40" />
        </div>
    )
}

const Create: React.FC = () => {

    const [note, setNote] = useState<Note | null>(null);

    const { noteId } = useParams<{ noteId: string }>();

    const fetchNoteDetails = async () => {
        if (!noteId) return;
        try {
            const response = await api.get(`/notes/${noteId}`)
            // console.log(response);
            setNote(response.data)

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        fetchNoteDetails()
    }, [noteId])


    // Try parsing content safely
    const parsedContent = () => {
        try {
            return JSON.parse(note?.content || "{}").content || note?.content;
        } catch {
            return note?.content;
        }
    };


    return (
        <div className="w-full mr-6 mt-19 p-10">
            {note ? (
                <div>
                    <h1 className="text-2xl font-bold">Note Details</h1>
                    <p>Displaying details for note ID: {note.id}</p>
                    <p className="text-gray-400 py-4">{parsedContent()}</p>
                </div>
            ) : (
                <PlaceholderComponent />
            )}
        </div>
    )
}

export default Create