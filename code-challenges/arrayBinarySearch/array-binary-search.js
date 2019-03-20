'use strict';

//Write a function called BinarySearch which takes
//in 2 parameters: a SORTED ARRAY and the SEARCH KEY.
//Without utilizing any of the built-in methods available
//to your language. RETURN the INDEX of the array's ELEMENT
//that is equal to the search key, or -1, if the element
//does not exist.
//
//EX: input: [4,8,15,16,23,42], 15
//EX: output: 2

//EX: input: [4,8,15,16,23,42], 90
//EX: output: -1

const binarySearch = (arr, searchKey) => {
  let start = 0;
  let end = arr.length - 1;
  let midpoint = start - (end + start / 2);
  if(searchKey < arr[0] || searchKey > arr.length - 1) {
    return -1;
  }
  if(searchKey === midpoint) {
    return midpoint;
  }
  if(searchKey < midpoint) {
    arr.length = midpoint;
    start = 0;
    end = arr.length - 1;
    return binarySearch();
  }
  if(searchKey > midpoint) {
    arr.length = midpoint;
    start = 0;
    end = arr.length - 1;
    return binarySearch();
  }
  //check for matches in the resized array
  //return the index of the matched array element value if it matches the search key
};

module.exports = (binarySearch);