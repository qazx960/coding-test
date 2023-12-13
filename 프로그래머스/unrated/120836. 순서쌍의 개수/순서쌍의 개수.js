function solution(n) {
   return Array.from(Array(n).keys()).filter((num) => n % num === 0).length + 1;
}
