import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

router.get("/login", (_, res) => {
    const pathToHTML = path.join(__dirname, "../../../src/views/login.html");
    res.status(200).sendFile(pathToHTML);
});

export default router;
