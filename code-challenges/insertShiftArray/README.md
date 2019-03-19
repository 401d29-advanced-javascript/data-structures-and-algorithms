# Insert Shift Array Code Challenge
--npm Init
--install dependencies (npm install -D eslint jest) in terminal
--in terminal, npm test (runs tests on functions in arithmetic.js, array.js, and greet.js)

--Required to write a function that will take any array and a separate element and insert the element into the middle of the array.

#Challenge
--The element must be in the middle of the Array.

#Approach & Efficiency
--I started with creating the function insertShiftArray() that accepts an array and an element.
--I then worked on the for loop to traverse the input array and find the middle index.
--when the middle index is found, create two separate arrays with the index of the input array is the separation point and each new output array is stored in a variable.
--Add the element with spread operator to the end of the first output array.
--Combine array and store new output array into separate variable and return that array.

#Solution
--![alt text](https://github.com/401d29-advanced-javascript/data-structures-and-algorithms/tree/master/code-challenges/assets/insert_shift_array.jpg "insert_shift_array image")