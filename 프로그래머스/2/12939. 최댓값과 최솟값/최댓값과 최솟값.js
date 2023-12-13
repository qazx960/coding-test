    function solution(s) {
    let strArr = s
    .split(" ")
    .map((num) => Number(num))
    .sort((a, b) => a - b);
  return strArr[0] + " " + strArr[strArr.length - 1];
    }