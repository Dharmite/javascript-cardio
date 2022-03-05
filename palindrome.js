// CHALLENGE: Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const reverseString = (str) => str.split('').reverse().join('');
  return str === reverseString(str);
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));
