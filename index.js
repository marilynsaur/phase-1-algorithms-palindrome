 function isPalindrome(str) {

  
  const splitStr = str.split('');

  const reverseArray = splitStr.reverse();

  const backwardsString = reverseArray.join('');

  if(str === backwardsString) {
      return true;
  }
  else {
      return false;
  }
}
console.log("hi i am here2")

module.exports = isPalindrome