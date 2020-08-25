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

console.log(palindrome('race car'));
