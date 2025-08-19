import { insertDB, getDB, saveDB } from "./db";

export const newNote = async (note, tags) => {
    const newNote = { 
        content: note,
        id: Date.now(),
        tags: tags
    }

    await insertDB(newNote)
    return newNote
}

export const getAllNotes = async () => {
    const { notes } = await getDB();
    return notes;
}

export const findNotes = async (filter) => {
    const { notes } = await getDB();
    return notes.filter(note => note.content.toLowerCase().includes(filter));
}

export const removeNote = async (id) => {
    const { notes } = await getDB();
    const match = notes.filter(note => note.id === id);

    if(match) {
        const newNotes = notes.filter(note => note.id !== id);
        await saveDB({ notes: newNotes });
        return id;
    }
}

export const removeAllNotes = () => {
    return saveDB({ notes: [] });
}