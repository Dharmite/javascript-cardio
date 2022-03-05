// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
function reverseString1(str) {
  let newStr = '';

  for (let index = str.length - 1; index >= 0; index--) {
    newStr += str[index];
  }

  return newStr;
}

function reverseString2(str) {
  return str.split('').reverse().join('');
}

function reverseString3(str) {
  let newStr = '';
  for (let index = 0; index < str.length; index++) {
    newStr = str[index] + newStr;
  }

  return newStr;
}

function reverseString4(str) {
  let revStr = '';
  for (const char of str) {
    revStr = char + revStr;
  }

  return revStr;
}

function reverseString5(str) {
  let revStr = '';
  str.split('').forEach((element) => {
    revStr = element + revStr;
  });

  return revStr;
}

function reverseString6(str) {
  return str.split('').reduce((revStr, char) => char + revStr, '');
}

console.log(reverseString1('hello'));
console.log(reverseString2('hello'));
console.log(reverseString3('hello'));
console.log(reverseString4('hello'));
console.log(reverseString5('hello'));
console.log(reverseString6('hello'));
