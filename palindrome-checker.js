//For strings

function palindrome(str) {
  const regex = /[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g;
  let lower = str.toLowerCase().replace(regex, '');
  let reverse = [];

  for (let i = lower.length -1; i >= 0; i--) {
    reverse.push(lower[i]);
  } 
    if (reverse.join('') == lower) {
      return true;
    } return false;
} 

console.log(palindrome('race car')) //Returns true;

//Reverse integer function

function reverseInt(num) {
  const arr = num.toString().split('');
  const reversed = [];

  if (num <0) {
      const neg = arr.shift();

      for (let i = arr.length -1; i >= 0; i--) {
        reversed.push(arr[i]);
      }
      return neg + reversed.join('');

      } else {
        for (let i = arr.length -1; i >= 0; i--) {
          reversed.push(arr[i]);
        }
        return reversed.join('');
      }
  }

  console.log(reverseInt(-123)); //OUTPUT: -321
  console.log(reverseInt(123)); //OUTPUT: 321
