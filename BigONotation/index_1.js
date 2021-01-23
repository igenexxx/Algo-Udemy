//Constant runtime
//Big O Notation: "O (1)"

function log (array) {
  console.log(array[0]);
  console.log(array[1]);
}

log([1,2,3,4,5]);
log([1,2,3,4,5,6,7,8,9,0]);

//Linear runtime
//Big O Notation: "O (n)"

function logAll (array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

logAll([1,2,3,4,5]);
logAll([1,2,3,4,5,6]);
logAll([1,2,3,4,5,6,7]);

//Exponential runtime
//Big O Notation: "O(n^2)"
function addAndLog (array) {
  for(let i = 0, max = array.length; i < max; i++) {
    for(let j = 0; j < max; j++) {
      console.log(array[i] + array[j]);
    }
  }
}

addAndLog(['A', 'B', 'C']); //9 pair
addAndLog(['A', 'B', 'C', 'D']); //16 pair
addAndLog(['A', 'B', 'C', 'D', 'E']); //25 pair

//Logarithmic runtime
//Big O Notation: "O (log n)"
function binarySearch(array, key) {
  let low = 0,
    high = array.length - 1,
    mid,
    element;

  while (low <= high) {
    mid = Math.floor( (low + hight) / 2, 10);
    element = array[mid];
    if(element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}