"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalRouter = void 0;
const express_1 = require("express");
exports.globalRouter = (0, express_1.Router)();
exports.globalRouter.get('/', (req, res) => {
    res.send(':::: Hello world!!!');
});
