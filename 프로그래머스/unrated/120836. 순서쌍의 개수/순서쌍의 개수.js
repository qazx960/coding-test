function solution(n) {
 return Array.from(Array(n).keys(), (x) => x + 1).filter(
    (num) => n % num === 0
  ).length;
}