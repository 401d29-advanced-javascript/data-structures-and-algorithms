'use strict';

const binarySearch = require('../array-binary-search.js');

describe('binarySearch', () => {
  it('should return -1 if the search key is greater than the highest value in the array', () => {
    let arr = [1,3,6,8,12,24];
    let searchKey = 46;
    let result = binarySearch(arr, searchKey);
    expect = -1;
    console.log('RESULT: ', result);
    expect(result).toBe(expected);
  });

  it('should return -1 if the array is empty', () => {
    let arr = [];
    let searchKey = 46;
    let result = binarySearch(arr, searchKey);
    expect = -1;
    console.log('RESULT: ', result);
    expect(result).toBe(expected);
  });

  it('should return the search key if it matches the midpoint value (not the index) in the array', () => {
    let arr = [1,3,6,8,12,24,46];
    let searchKey = 46;
    let result = binarySearch(arr, searchKey);
    expect = 46;
    console.log('RESULT: ', result);
    expect(result).toBe(expected);
  });
});