function solution(my_string) {
    const removedVowels = my_string
    .split("")
    .filter(
      (letter) =>
        letter !== "a" &&
        letter !== "e" &&
        letter !== "i" &&
        letter !== "o" &&
        letter !== "u"
    );
  return removedVowels.join("");
}