function validator(cpf: string) {
  const userCPF: string[] = cpf.split("");
  const firstDigitArr: string[] = userCPF.slice(0, 9);
  let finalArr: string[] = firstDigitArr;
  let sum: number = 0;

  for (let i = 0; i < firstDigitArr.length; i++) {
    sum += Number(firstDigitArr[i]) * (10 - i);
  }

  finalArr.push(String(getDigit(sum)));

  sum = 0;

  for (let i = 0; i < finalArr.length; i++) {
    sum += Number(finalArr[i]) * (11 - i);
  }

  finalArr.push(String(getDigit(sum)));

  if (cpf === finalArr.join("")) {
    return true;
  } else false;
}

function getDigit(sum: number) {
  const remainder: number = sum % 11;
  let digit: number = 0;
  if (remainder < 2) {
    digit;
  } else if (remainder >= 2) {
    digit += 11 - remainder;
  }
  return digit;
}

export const cpfValidator = {
  validator,
};
