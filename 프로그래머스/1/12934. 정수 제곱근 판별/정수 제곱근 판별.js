function solution(n) {
 let sqrt = Math.sqrt(n);
  return !Number.isInteger(sqrt) ? -1 : Math.pow(sqrt + 1, 2);
}