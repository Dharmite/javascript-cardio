// CHALLENGE: Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  return parseInt(String(int).split('').reverse().join(''));
}

console.log(reverseInt(521));
