import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import api from "../../../services/api";

interface NoteType {
    id: number;
    content: string;
    title: string;
}

interface NotesState {
    notes: NoteType[];
    loading: boolean;
    error: string | null;
}

// Initial state
const initialState: NotesState = {
    notes: [],
    loading: false,
    error: null,
};

// Async thunk to fetch notes
export const fetchNotes = createAsyncThunk("notes/fetchNotes", async (_, { rejectWithValue }) => {
    try {
        const response = await api.get("/notes");
        return response.data;
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || "Failed to fetch notes");
    }
});

// Slice
const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<NoteType>) => {
            state.notes.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNotes.fulfilled, (state, action: PayloadAction<NoteType[]>) => {
                state.notes = action.payload;
                state.loading = false;
            })
            .addCase(fetchNotes.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            });
    },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
