import { Router } from "express";

export const projectRouter = Router();

projectRouter.get('/:projectId', (req, res) => {
	const { projectId } = req.params;
	res.send(`====> GET project: ${projectId}`)
});

projectRouter.post('', (req, res) => {
	res.send(`====> CREATE new project`)
});

projectRouter.put('/:projectId', (req, res) => {
	const { projectId } = req.params;
	res.send(`====> UPDATE project: ${projectId}`)
});

projectRouter.delete('/:projectId', (req, res) => {
	const { projectId } = req.params;
	res.send(`====> DELETE project: ${projectId}`)
});
