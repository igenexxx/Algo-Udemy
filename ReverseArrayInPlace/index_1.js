function reverseArrayInPlace (arr) {
    for (let i = 0, max = arr.length / 2; i < max; i++) {
      let tempVar = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = tempVar;
    }
    return arr;
}

function reverseArrayInPlaceES6 (arr) {
  for (let i = 0, max = arr.length / 2; i < max; i++) {
    [arr[i],arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i],arr[i]];
  }
  return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlaceES6([1, 2, 3, 4, 5]));