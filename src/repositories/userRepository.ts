import { prisma } from "../config/database";
import { TypeNewUserData } from "../types/userTypes";

async function createUser(user: TypeNewUserData) {
  await prisma.user.create({ data: user });
}

async function getByCPF(cpf: string) {
  const result = await prisma.user.findUnique({ where: { cpf } });
  return result;
}

export const userRepository = {
  createUser,
  getByCPF,
};
