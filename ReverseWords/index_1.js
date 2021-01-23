//my variant
//Only words must be reversed
//Do not use array.reverse()

function reverseWords (string) {
  let sentenseArr = string.split(" ");

  let newSentenseArr = [];
    sentenseArr.forEach(word => {
    "use strict";
    let wordArr = word.split("");
    let newWord = [];
    for(let i = wordArr.length; i >= 0;  i--) {
      newWord.push(wordArr[i]);
    }
    newWord = newWord.join("");
    newSentenseArr.push(newWord);
  });

  return newSentenseArr.join(" ");

}

console.log(reverseWords('this is a string of words'));

function reverseWordsOriginal (string) {
    let wordsArr = string.split(" "),
        reversedWordArr = [];

    wordsArr.forEach(word => {
      "use strict";
      let reversedWord = '';
      for(let i = word.length - 1; i > 0; i--) {
        reversedWord += word[i];
      }
      reversedWordArr.push(reversedWord);
    });
    return reversedWordArr.join(" ");
}

console.log(reverseWordsOriginal('this is a string of words'));