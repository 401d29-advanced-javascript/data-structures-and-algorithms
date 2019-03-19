'use strict';

const reverseArray = (arr) => {
  const newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return (newArray);
  console.log(newArray);
};

reverseArray([1,2,3,4]);