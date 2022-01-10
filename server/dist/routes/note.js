"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteRouter = void 0;
const express_1 = require("express");
exports.noteRouter = (0, express_1.Router)();
exports.noteRouter.get('/:noteId', (req, res) => {
    const { noteId } = req.params;
    res.send(`**** GET note: ${noteId}`);
});
exports.noteRouter.post('', (req, res) => {
    res.send(`**** CREATE new note`);
});
exports.noteRouter.put('/:noteId', (req, res) => {
    const { noteId } = req.params;
    res.send(`**** UPDATE note: ${noteId}`);
});
exports.noteRouter.delete('/:noteId', (req, res) => {
    const { noteId } = req.params;
    res.send(`**** DELETE note: ${noteId}`);
});
