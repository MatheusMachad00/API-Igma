import { prisma } from "../config/database";
import { TypeNewUserData } from "../types/userTypes";

async function createUser(user: TypeNewUserData) {
  await prisma.user.create({ data: user });
}

export const userRepository = {
  createUser,
};
