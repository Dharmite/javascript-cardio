/* CHALLENGE: 
Return a string with the first letter of every word capitalized
ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
 */

function capitalizeLetters1(str) {
  let res = '';

  str.split(' ').forEach((word) => {
    if (word.length == 1) {
      res = res + word[0].toUpperCase() + ' ';
    } else {
      res = res + word[0].toUpperCase() + word.slice(1) + ' ';
    }
  });

  return res.trim();
}

function capitalizeLetters2(str) {
  let strArr = str.split(' ');
  for (let index = 0; index < strArr.length; index++) {
    strArr[index] =
      strArr[index].substring(0, 1).toUpperCase() + strArr[index].substring(1);
  }
  return strArr.join(' ');
}

function capitalizeLetters3(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

console.log(capitalizeLetters1('i love javascript'));
console.log(capitalizeLetters2('i love javascript'));
console.log(capitalizeLetters3('i love javascript'));
