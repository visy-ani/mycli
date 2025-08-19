import { insertDB, getDB, saveDB } from "./db.js";

export const newNote = async (note, tags) => {
  const newNote = {
    content: note,
    id: Date.now(),
    tags: tags,
  };

  await insertDB(newNote);
  return newNote;
};

export const getAllNotes = async () => {
  const { notes } = await getDB();
  return notes;
};

export const findNotes = async (filter) => {
  const { notes } = await getDB();
  return notes.filter((note) => note.content.toLowerCase().includes(filter));
};

export const removeNote = async (id) => {
  const { notes } = await getDB();

  const index = notes.findIndex((note) => note.id === id);

  if (index === -1) return;

  const newNotes = notes.filter((note) => note.id !== id);
  await saveDB({ notes: newNotes });
};

export const removeAllNotes = () => {
  return saveDB({ notes: [] });
};
