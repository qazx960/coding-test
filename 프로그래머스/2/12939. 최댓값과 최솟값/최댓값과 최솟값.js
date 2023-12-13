    function solution(s) {
   let strArr = s.split(" ").map((num) => Number(num));
  return Math.min(...strArr) + " " + Math.max(...strArr);
    }