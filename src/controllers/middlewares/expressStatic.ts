import express from "express";
import path from "path";

const expressStaticSetUp = express.static(path.join(__dirname, "../../../src/views/"));

export default expressStaticSetUp;
