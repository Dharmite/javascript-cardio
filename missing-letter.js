/* 
Challenge:
Find the missing letter in the input sequence
 */

function findMissingLetter(sequence) {
  let letter;
  let compared_letter;

  for (let index = 0; index < sequence.length - 1; index++) {
    letter = sequence[index];
    compared_letter = sequence[index + 1];

    if (compared_letter.charCodeAt(0) !== letter.charCodeAt(0) + 1) {
      const missing_letter_code = letter.charCodeAt(0) + 1;
      return `Missing letter is ${String.fromCharCode(missing_letter_code)}`;
    }
  }

  return 'There is no missing letter in the provided sequence';
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'e', 'f']));
