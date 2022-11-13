// You can include JavaScript expressions in template literals, as well as simple variables, and the results will be included in the result.

const song = "Fight the Youth";
const score = 9.5;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`;

console.log(output);