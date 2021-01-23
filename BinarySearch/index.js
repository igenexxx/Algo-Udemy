function binarySearch (numArray, key) {
  let middleInx = Math.floor(numArray.length / 2);
  let middleElem = numArray[middleInx];

  if (middleElem === key) return true;
  else if (middleElem < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleInx, numArray.length), key);
  }
  else if (middleElem > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleInx), key);
  }
  else {
    return false;
  }


}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));