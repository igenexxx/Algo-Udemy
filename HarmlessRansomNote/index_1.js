//linear time complexity O(n)
//Linear time Complexity O(n+m)
//Два цикла дают O(n) выполнения

function harmlessRansonNote (noteText, magazineText) {
  let noteArr = noteText.split(" "),
    magazineArr = magazineText.split(" "),
    magazineObj = {}; //hash-table

  magazineArr.forEach(word => {
    "use strict";
    magazineObj[word] = !magazineObj[word] ? 1 : magazineObj[word]++;
    /*if(!magazineObj[word]) {
      magazineObj[word] = 0;
    }
    magazineObj[word]++
    */
  });

  let noteIsPossible = true;
  noteArr.forEach(word => {
    "use strict";
    if (magazineObj[word]) {
      magazineObj[word]--;
      if(magazineObj[word] < 0) noteIsPossible = false;
    } else {
      noteIsPossible = false;
    }
  });

  console.log(noteIsPossible);
  return noteIsPossible;
}

harmlessRansonNote('this in the good', 'this is all the magazine text in the magazine that really good for this');