import Note from '../models/note.model';
//create new note
export const newNote = async (body) => {
  const data = await Note.create(body);
  return data;
};