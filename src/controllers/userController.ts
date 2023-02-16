import { Request, Response } from "express";
import { userService } from "../services/userService";
import { TypeNewUserData } from "../types/userTypes";

async function createUser(req: Request, res: Response) {
  const newUserData: TypeNewUserData = req.body;
  const result = await userService.create(newUserData);

  if (result) {
    res.sendStatus(201);
  } else res.status(422).send("CPF inválido.");
}

async function getByCPF(req: Request, res: Response) {
  const { cpf } = req.body;
  const result = await userService.getByCPF(cpf);

  if (result !== null) {
    res.status(200).send(result);
  } else res.status(404).send("CPF não encontrado.");
}

async function getUsers(req: Request, res: Response) {
  const { page } = req.params;
  const result = await userService.getAll(Number(page));
  res.status(200).send(result);
}

export const userController = {
  createUser,
  getByCPF,
  getUsers,
};
