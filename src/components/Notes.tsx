import { Link } from 'react-router-dom';
import Note from './Note'
import { useEffect, useState } from 'react';
import api from '../services/api';
import axios from 'axios';

interface NoteType {
    id: number;
    content: string;
}

const Notes: React.FC = () => {

    const [notes, setNotes] = useState<NoteType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean | null>(false);

    const fetchNotes = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get("/notes");



            setNotes(response.data);
            // console.log(response.data);


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
                <Link to="/home" className=' bg-[#f5f4f4] p-3 rounded-full hover:bg-[#f8e77b] transition duration-200'>
                    <p>Create</p>
                </Link>
            </div>
            <div>
                {notes.length > 0 ? (notes.map((note: NoteType) => (
                    <Note key={note.id} noteId={note.id} content={note.content} />
                ))) : (
                    <p>Create a Note</p>
                )}
            </div>
        </div>
    )
}

export default Notes