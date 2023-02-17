import { NextFunction, Request, Response } from "express";

export default function errorHandlerMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.type === "Conflict") {
    return res.status(409).send("CPF já cadastrado.");
  } else if (err.type === "Bad_request") {
    return res.status(422).send("CPF inválido.");
  } else return res.status(500).send("Internal server error.");
}
