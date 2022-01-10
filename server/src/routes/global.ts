import { Router } from "express";

export const globalRouter = Router();

globalRouter.get('/', (req, res) => {
	res.send(':::: Hello world!!!');
});
