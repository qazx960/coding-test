function solution(n) {
  return n
    .toString()
    .split("")
    .map((num) => Number(num))
    .reduce((acc, curr) => acc + curr, 0);
}