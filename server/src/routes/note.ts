import { Router } from "express";

export const noteRouter = Router();

noteRouter.get('/:noteId', (req, res) => {
	const { noteId } = req.params;
	res.send(`**** GET note: ${noteId}`)
});

noteRouter.post('', (req, res) => {
	res.send(`**** CREATE new note`)
});

noteRouter.put('/:noteId', (req, res) => {
	const { noteId } = req.params;
	res.send(`**** UPDATE note: ${noteId}`)
});

noteRouter.delete('/:noteId', (req, res) => {
	const { noteId } = req.params;
	res.send(`**** DELETE note: ${noteId}`)
});
