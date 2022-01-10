import express from 'express';
import { globalRouter } from "./routes/global.js";
import { projectRouter } from "./routes/project.js";
import { noteRouter } from "./routes/note.js";

const PORT = 8000;

const app = express();

// ROUTES
app.use('', globalRouter);
app.use('/project', projectRouter);
app.use('/note', noteRouter);

// START LISTENING TO REQUESTS
app.listen(PORT, () => {
	console.log(`⚡️ ielou app server running on http://localhost:${PORT}`);
});

