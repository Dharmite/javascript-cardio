// CHALLENGE: Return the character that is most common in a string
// ex. maxCharacter('javascript') === 'a'

function maxCharacter(str) {
    let letters = {};
    let maxNum = 0;
    let maxChar = '';
  
    str.split('').forEach((letter) => {
      if (letter in letters) {
        letters[letter] += 1;
      } else {
        letters[letter] = 1;
      }
    });
  
    Object.entries(letters).forEach((element) => {
      if (element[1] > maxNum) {
        maxNum = element[1];
        maxChar = element[0];
      }
    });
  
    return { letters, maxNum, maxChar };
  }
  
  console.log(maxCharacter('javascript'));
  