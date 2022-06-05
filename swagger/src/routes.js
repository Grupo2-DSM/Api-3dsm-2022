"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
const products = [];
router.get("/p", (request, response) => {
    return console.log("Hello, wrong route!");
});
