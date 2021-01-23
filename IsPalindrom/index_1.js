function isPalindrom(string) {
  string = string.toLowerCase();
  let charactersArray = string.split('');
  let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');


  let lettersArr = [];
  charactersArray.forEach(char => {
    "use strict";
    if(!~validCharacters.indexOf(char)) lettersArr.push(char);
  });

  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

console.log(isPalindrom("Madam I'm Adam"));


//Второй вариант
function isPalindromRegExp(string) {
  string = string.toLowerCase();
  let charactersArray = string.split('');
  let validCharacters = /[a-z]/;


  let lettersArr = [];
  charactersArray.filter(char => {
    "use strict";
    if(validCharacters.test(char)) lettersArr.push(char);
  });

  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

console.log(isPalindromRegExp("Madam I'm Adam"));