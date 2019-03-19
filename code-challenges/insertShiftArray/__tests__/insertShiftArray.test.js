'use strict';

let insertShiftArray = require('../insertShiftArray.js');

describe('insertShiftArray.js', () => {
  it('should return null if either the array or element is null', () => {
    let array = null;
    let element = 5;
    let result = insertShiftArray(array, element);
    expect(result).toBe(expected);
  });

  it('should return null if either the array or element is null', () => {
    let array = [1, 2, 3, 4, 5, 6];
    let element = null;
    let result = insertShiftArray(array, element);
    expect(result).toBe(expected);
  });

  it('should return NaN if either the array or element is NaN', () => {
    let array = [1, 2, 3, 4, 5, 6];
    let element = NaN;
    let result = insertShiftArray(array, element);
    expect(result).toBe(expected);
  });

  it('should return NaN if either the array or element is NaN', () => {
    let array = NaN;
    let element = 5;
    let result = insertShiftArray(array, element);
    expect(result).toBe(expected);
  });

  it('should insert element into array if element is a string', () => {
    let array = [1, 2, 3, 4, 5, 6];
    let element = 'yo';
    let result = insertShiftArray(array, element);
    expect(result).toBe(expected);
  });

  it('should insert element into array if the array is empty', () => {
    let array = [];
    let element = 5;
    let result = insertShiftArray(array, element);
    expect(result).toBe(expected);
  });

});