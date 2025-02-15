import { Link } from 'react-router';
import Note from './Note'
import { useEffect, useState } from 'react';
import api from '../services/api';
import axios from 'axios';

const Notes: React.FC = () => {

    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);


    // const notes = [1, 2, 3, 4, 5, 6];

    const fetchNotes = async () => {
        setLoading(true);
        try {
            // const response = await api.get("/notes");
            const response = await axios.get("http://localhost:8080/api/notes", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
                    // "X-XSRF-TOKEN": localStorage.getItem("CSRF_TOKEN"),
                    "Accept": "*/*",
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });


            // const parsedNotes = response.data.map((note) => ({
            //     ...note,
            //     parsedContent: JSON.parse(note.content).content, // Assuming each note's content is JSON-formatted.
            // }));
            // setNotes(parsedNotes);
            console.log(response);

        } catch (error) {
            setError(error.response.data.message);
            console.error("Error fetching notes", error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        //calling the function here to fetch all notes
        fetchNotes();
    }, []);

    if (error) {
        // return <Errors message={error} />;
        console.log(error);

    }


    return (
        <div className='w-8/12 h-[calc(100vh-80px)] mt-19 ml-64 px-8 overflow-y-auto'>
            <div className='flex items-center justify-between pr-2'>
                <h1 className='text-3xl font-bold py-10'>Notes</h1>
                <Link to="/home" className=' bg-[#f5f4f4] p-3 rounded-full'>
                    <p>Create</p>
                </Link>
            </div>
            <div>
                {notes.length > 0 ? (notes.map((id) => (
                    <Note key={id} noteId={id} />
                ))) : (
                    <p>Create a Note</p>
                )}
            </div>
        </div>
    )
}

export default Notes