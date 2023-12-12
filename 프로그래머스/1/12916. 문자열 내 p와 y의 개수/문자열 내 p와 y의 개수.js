function solution(s){
  let countP = [...s.toLowerCase()].filter((letter) => letter === "p");
  let countY = [...s.toLowerCase()].filter((letter) => letter === "y");
  return countP.length === countY.length ? true : false;
}