function solution(phone_number) {
  let censorNumber = "*".repeat(phone_number.length - 4);
  return censorNumber + phone_number.slice(-4);}