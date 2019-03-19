#Reverse an Array whiteboard challenge
--Required to write a function that will take any array on elements and reverse all elements within said array.

#Challenge
--Each element at its index much be swapped with the with whatever element is at its alternate end.

#Approach & Efficiency
--I started with separating the initial input array and the output array into two variables.
--I then worked on the for loop to traverse the input array's indexes at i.
--As the for loop changes the index of i, as long as i not equal to or greater than ZERO, then the for loop keeps running from the the back of the input array to the front while simultaneously pushing each element value at index[i] into the new output array from front to back.
--When i >= 0, the for loop ceases and the new output array is returned.

#Solution
--