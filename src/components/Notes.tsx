import { Link } from 'react-router-dom';
import Note from './Note'
import { useEffect } from 'react';
import api from '../services/api';
import { AppDispatch, RootState } from '../context/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../context/features/notes/notesSlice';
import { format } from "date-fns";

interface NoteType {
    updatedDate: any;
    id: number;
    content: string;
    title: string
}

const Notes: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { notes, loading, error } = useSelector((state: RootState) => state.notes);
    // const [notes, setNotes] = useState<NoteType[]>([]);
    // const [loading, setLoading] = useState<boolean>(false);
    // const [error, setError] = useState<boolean | null>(false);

    // const fetchNotes = async () => {
    //     setLoading(true);
    //     setError(null);
    //     try {
    //         const response = await api.get("/notes");
    //         setNotes(response.data);
    //         // console.log(response.data);


    //     } catch (error) {
    //         setError(error.response.data.message);
    //         console.error("Error fetching notes", error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };


    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

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
                    <Note key={note.id} noteId={note.id} content={note.content} title={note.title} updatedDate={note.updatedDate} />
                ))) : (
                    <p>Create a Note</p>
                )}
            </div>
        </div>
    )
}

export default Notes