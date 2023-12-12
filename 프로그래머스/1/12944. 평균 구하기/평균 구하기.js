function solution(arr) {
  let total = arr.reduce((acc, curr) => acc + curr, 0);
  return total / arr.length;
}