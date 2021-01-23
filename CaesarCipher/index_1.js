function caesarCipher (str, num) {
  num %= 26;
  let lowerCaseString = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString =  '';

  for (let i = 0, max = lowerCaseString.length; i < max; i++) {
    let currentLetter = lowerCaseString[i];
    if(currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if(newIndex > 25) newIndex -= 26;
    if(newIndex < 0) newIndex += 26;
    if(str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }
  return newString;
}

console.log(caesarCipher('Zoo Keeper', 2));
console.log(caesarCipher('Big Car', -16));