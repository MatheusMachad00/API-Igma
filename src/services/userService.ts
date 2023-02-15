import { TypeNewUserData } from "../types/userTypes";
import { userRepository } from "../repositories/userRepository";

async function create(data: TypeNewUserData) {
  await userRepository.createUser(data);
}

export const userService = {
  create,
};
