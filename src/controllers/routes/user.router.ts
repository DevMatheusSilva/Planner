import express from "express";
import {userControllerInstance} from "../user.controller";

const router = express.Router();

router.get('/teste', (_, res) => userControllerInstance.getUserObject(res));

export default router;
