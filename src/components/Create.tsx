import { useParams } from "react-router";
import task from "../assets/task.png";
import { FaRegLightbulb } from "react-icons/fa";
import { MdCircle } from "react-icons/md";
import { LuPlus } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import api from "../services/api";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

interface Note {
    id: number;
    content: string;
}

const Create: React.FC = () => {
    const [note, setNote] = useState<Note | null>(null);
    const { noteId } = useParams<{ noteId: string }>();

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
                        <h1 className="text-2xl font-bold">Notes</h1>
                        <p>Displaying details for note ID: {note.id}</p>
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
                        <form className="space-y-4">


                            {/* Heading Input */}
                            <input
                                type="text"
                                name="heading"
                                placeholder="Enter heading..."
                                // value={formData.heading}
                                // onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />

                            {/* Content Textarea */}
                            <textarea
                                name="content"
                                placeholder="Write your note..."
                                // value={ }
                                // onChange={ }
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none"
                                required
                            ></textarea>

                            {/* Buttons */}
                            <div className="flex justify-end gap-3">
                                <button type="button" onClick={handleClose} className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300">
                                    Cancel
                                </button>
                                <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                                    Save Note
                                </button>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default Create;
