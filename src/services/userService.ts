import { TypeNewUserData } from "../types/userTypes";
import { userRepository } from "../repositories/userRepository";
import { cpfValidator } from "../utils/cpfValidator";

async function create(data: TypeNewUserData) {
  const { cpf } = data;
  const newCPF: string = clearCPF(cpf);

  if (cpfValidator.validator(newCPF)) {
    await userRepository.createUser({ ...data, cpf: newCPF });
    return true;
  } else return false;
}

async function getByCPF(cpf: string) {
  const newCPF: string = clearCPF(cpf);
  const result = await userRepository.getByCPF(newCPF);
  return result;
}

async function getAll(actualPage: number) {
  const result = await userRepository.getAll();

  return pagination(result, actualPage);
}

function clearCPF(cpf: string) {
  let regex = /\d/g;
  let cpfClean: any = cpf.match(regex);
  let newCpf: string = cpfClean.join("");
  return newCpf;
}

function pagination(items: object[], actualPage: number) {
  let result: object[] = [];
  let totalPage: number = Math.ceil(items.length / 5);
  let count: number = actualPage * 5 - 5;
  let delimiter: number = count + 5;

  if (actualPage <= totalPage) {
    for (let i = count; i < delimiter; i++) {
      result.push(items[i]);
      count++;
    }
  }

  return result;
}

export const userService = {
  create,
  getByCPF,
  getAll,
};
