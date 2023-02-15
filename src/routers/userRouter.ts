import express from "express";
import { userController } from "../controllers/userController";

const router = express.Router();

router.post("/cadastro", userController.createUser);

export default router;
