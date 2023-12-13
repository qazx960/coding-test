function solution(n) {
 return n
    .toString()
    .split("")
    .map((num) => Number(num))
    .reduce((a, c) => a + c, 0);
}