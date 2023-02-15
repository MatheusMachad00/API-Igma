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

async function getAll(actualPage: number) {
  const result = await userRepository.getAll();

  return pagination(result, actualPage);
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
