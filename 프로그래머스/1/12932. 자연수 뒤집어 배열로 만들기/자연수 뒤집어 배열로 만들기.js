function solution(n) {
     return n
    .toString()
    .split("")
    .reverse()
    .map((num) => Number(num));
}