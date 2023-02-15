import { TypeNewUserData } from "../types/userTypes";
import { userRepository } from "../repositories/userRepository";

async function create(data: TypeNewUserData) {
  const { cpf } = data;
  let regex = /\d/g;
  let cpfClean: any = cpf.match(regex);
  let newCpf: string = cpfClean.join("");

  await userRepository.createUser({ ...data, cpf: newCpf });
}

async function getByCPF(cpf: string) {
  let regex = /\d/g;
  let cpfClean: any = cpf.match(regex);
  let newCpf: string = cpfClean.join("");

  const result = await userRepository.getByCPF(newCpf);
  return result;
}

export const userService = {
  create,
  getByCPF,
};
