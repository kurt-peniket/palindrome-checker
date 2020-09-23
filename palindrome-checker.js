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

    for (let i = arr.length -1; i >= 0; i--) {
      reversed.push(arr[i]);
    }

    return parseInt(
    reversed
    .join('')
    .toString()
  );
}

console.log(1230); //Returns 321
