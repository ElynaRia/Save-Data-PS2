import express from "express";
import { ChatGlobal, ReadCount, Root, SendCounter } from "./controller.js";
import bodyParser from "body-parser";
const router = express.Router();
router.use(bodyParser.json());


router.get('/', Root);

router.post('/send-count', SendCounter);
router.post('/read-count', ReadCount);
export { router };