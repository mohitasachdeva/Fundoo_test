import express from 'express';
import { newNoteValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import { newNote } from '../services/note.service';
const router = express.Router();
//route to create new note
router.post('/note', newNoteValidator, userAuth, newNote.addnote);
//route to crete get all note
router.get('', newNoteValidator, userAuth, newNote.getallnote);
export default router;
