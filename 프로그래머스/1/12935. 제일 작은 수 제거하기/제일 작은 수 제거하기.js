function solution(arr) {
 const lowestIndex = arr.indexOf(Math.min(...arr));
  arr.splice(lowestIndex, 1);
  return arr.length > 1 ? arr : [-1];
}