"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRouter = void 0;
const express_1 = require("express");
exports.projectRouter = (0, express_1.Router)();
exports.projectRouter.get('/:projectId', (req, res) => {
    const { projectId } = req.params;
    res.send(`====> GET project: ${projectId}`);
});
exports.projectRouter.post('', (req, res) => {
    res.send(`====> CREATE new project`);
});
exports.projectRouter.put('/:projectId', (req, res) => {
    const { projectId } = req.params;
    res.send(`====> UPDATE project: ${projectId}`);
});
exports.projectRouter.delete('/:projectId', (req, res) => {
    const { projectId } = req.params;
    res.send(`====> DELETE project: ${projectId}`);
});
