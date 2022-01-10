"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const global_js_1 = require("./routes/global.js");
const project_js_1 = require("./routes/project.js");
const note_js_1 = require("./routes/note.js");
const PORT = 8000;
const app = (0, express_1.default)();
// ROUTES
app.use('', global_js_1.globalRouter);
app.use('/project', project_js_1.projectRouter);
app.use('/note', note_js_1.noteRouter);
// START LISTENING TO REQUESTS
app.listen(PORT, () => {
    console.log(`⚡️ ielou app server running on http://localhost:${PORT}`);
});
