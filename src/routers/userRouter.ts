import express from "express";
import { userController } from "../controllers/userController";

const router = express.Router();

router.post("/cadastro", userController.createUser);

router.post("/usuario-por-cpf", userController.getByCPF);

router.get("/pegar-todos-usuarios/:page", userController.getUsers);

export default router;
