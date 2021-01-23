function meanMedianMode (array) {
    return {
      mean: getMean(array),
      median: getMedian(array),
      mode: getMode(array)
    };
}

function getMean (array) {
    let sum = 0;

    array.forEach(num => {
      "use strict";
      sum += num;
    });

    let mean = sum / array.length;
    return mean;
}

function getMedian (array) {
    array.sort((a, b) => {
      "use strict";
      return a - b;
    });

    var median;

    if(!(array.length % 2)) {
      median = array[Math.floor(array.length / 2)];
    } else {
      let mid_one = array[(array.length / 2) - 1],
          mid_two = array[array.length / 2];
      median = (mid_one + mid_two) / 2;
    }
  return median;
}

function getMode (array) {
  let modeObj = Object.create(null);

  array.forEach(num => {
    "use strict";
    //modeObj[num] = !modeObj[num] ? 1 : modeObj[num]++;
    if(!modeObj[num]) {
      modeObj[num] = 0;
    }
    modeObj[num]++;
  });

  let maxFrequency = 0,
      modes = [];

  for(let num in modeObj) {
    if(modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) {
      modes.push(num);
    }
  }

  if(modes.length === Object.keys(modeObj).length) {
    modes = [];
  }

  return modes;
}

console.log(meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]));

