function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let middleIndex = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, middleIndex);
  let secondHalf = arr.slice(middleIndex);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2) {
  let result = [];

  while (arr1.length && arr2.length) {
    let minElem;
    if (arr1[0] < arr2[0]) minElem = arr1.shift();
    else minElem = arr2.shift();
    result.push(minElem);
  }

  if (arr1.length) result = result.concat(arr1);
  else result = result.concat(arr2);
  return result;
}

//ES6
{
  let b = [5, 7, 9, 11, 13];
  let c = [6, 8, 10, 12];
  const newArray = [1, 2, ...b, ...c];

  const merge = (xs, ys) => {
    if (xs.length === 0) return ys;
    if (ys.length === 0) return xs;
    const x = xs[0];
    const y = ys[0];

    return (x < y)
      ? [x, ...merge(xs.slice(1), ys)]
      : [y, ...merge(xs, ys.slice(1))];
  };

  const mergeSort = (xs) => {
    const pivot = Math.floor(xs.length / 2);
    if (pivot === 0) {
      return xs;
    }
    const left = xs.slice(0, pivot);
    const right = xs.slice(pivot);

    return merge(mergeSort(left), mergeSort(right));
  };

  /*
  console.log(...b.slice(1));
  console.log([b[0], ...merge(b.slice(1), c)]);*/
// console.log(merge(b,c));

  console.log(mergeSort([1, 6, 3, 5, 2, 54, 23, 11, 65, 76, 51]));

}