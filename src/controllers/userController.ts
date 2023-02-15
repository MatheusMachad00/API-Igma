import { Request, Response } from "express";
import { userService } from "../services/userService";
import { TypeNewUserData } from "../types/userTypes";

async function createUser(req: Request, res: Response) {
  const newUserData: TypeNewUserData = req.body;
  await userService.create(newUserData);
  res.sendStatus(201);
}

export const userController = {
  createUser,
}