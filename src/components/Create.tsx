import { useParams } from "react-router";
import task from "../assets/task.png";
import { FaRegLightbulb } from "react-icons/fa";
import { MdCircle } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { fetchNotes } from "../context/features/notes/notesSlice";

interface Note {
    id: number;
    title: string,
    content: string;
}

const Create: React.FC = () => {
    const [note, setNote] = useState<Note | null>(null);
    const { noteId } = useParams<{ noteId: string }>();

    const dispatch = useDispatch()

    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")

    // ✅ Move modal state here
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (!noteId) return;
        const fetchNoteDetails = async () => {
            try {
                const response = await api.get(`/notes/${noteId}`);
                setNote(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchNoteDetails();
    }, [noteId]);

    // ✅ Safe parsing for content
    const parsedContent = () => {
        try {
            return JSON.parse(note?.content || "{}").content || note?.content;
        } catch {
            return note?.content;
        }
    };


    // saving notes 
    const onSaveNote = async () => {
        try {
            if (title.length == 0 || content.length == 0) {
                toast.error("Please fill all the details")
                return
            }
            setContent("")
            setTitle("")
            handleClose()
            await api.post("/notes", { title: title, content: content })
            dispatch(fetchNotes());
            toast.success("Note created successfully!");


        } catch (error) {
            toast.error(error);

        }
    }

    return (
        <div className="w-full mr-6 mt-19 p-10">
            {!noteId ? (
                // PlaceholderComponent now triggers modal correctly
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
                        <span
                            onClick={handleOpen}
                            className="inline-flex mt-40 ml-auto cursor-pointer items-center justify-center p-2 rounded-full transition duration-200 hover:bg-[#f8e77b] "
                        >
                            <LuPlus className="text-xl text-black" />
                        </span>

                    </div>

                    {/* Trigger modal when clicking plus icon */}





                </div>
            ) : (
                note && (
                    <div>
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold">{note.title}</h1>
                            <div className="flex items-center gap-x-3">
                                <FiEdit2 className=" text-md cursor-pointer" />
                                <AiOutlineDelete className=" text-xl cursor-pointer text-red-600" />
                            </div>
                        </div>
                        <p className="text-gray-400 py-4">{parsedContent()}</p>
                    </div>
                )
            )}

            {/* MODAL */}
            <Modal open={open}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 1,
                        outline: 'none'
                    }}
                >
                    <div className="p-4">
                        {/* Close Button */}
                        <div className="flex justify-between items-center pb-6">
                            <h2 className="text-xl font-bold">Create Note</h2>
                            <MdCircle className="text-lg cursor-pointer text-red-400" onClick={handleClose} />
                        </div>

                        {/* Form */}
                        <div className="space-y-4">


                            {/* Heading Input */}
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter note title..."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />

                            {/* Content Textarea */}
                            <textarea
                                name="content"
                                placeholder="Write your note..."
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none"
                                required
                            ></textarea>

                            {/* Buttons */}
                            <div className="flex justify-end gap-3">
                                <button onClick={handleClose} className=' bg-[#ffffff] px-6 py-2 rounded-full hover:bg-[#d1d1d1] cursor-pointer transition duration-200'>
                                    Cancel
                                </button>
                                <button onClick={onSaveNote} className=' bg-[#f5f4f4] px-6 py-2 rounded-full hover:bg-[#f8e77b] transition duration-200 cursor-pointer'>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default Create;
