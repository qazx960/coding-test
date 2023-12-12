function solution(n) {
     let result = n
    .toString()
    .split("")
    .map((num) => Number(num))
    .sort((a, b) => b - a)
    .join("");
  return Number(result);
}