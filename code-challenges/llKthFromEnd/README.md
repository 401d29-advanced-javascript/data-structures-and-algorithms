##Lab-05-Linked-Lists

##Links
github -- https://github.com/401d29-advanced-javascript/Lab-05-Linked-List

travis -- https://travis-ci.com/organizations/401d29-advanced-javascript/repositories

##Documentation
jsdocs --

##Modules
-- printNode(value) -> number of nodes as a string
-- prepend(value) -> new head value in linked list
-- includes(value) -> any value in a node that matches the value
-- print() -> list of all values as a string

##Setup
~$ npm init
~$ npm install -D jest eslint

##Running App
~$ node linkedList/linked-list.js

##Running Tests
~$ jest

#UML
??

///////////////////////////
Linked-List Insert Code Challenge
#inser linked list challenge
--Required to write a method off of LinkedList in order to find a node with a value matching any given input and return that node which is Nth places away from the end
--EX: input = 4
linked list --> 5  6  7  8  9  10  14  26  37  48
output = 10

#Approach & Efficiency
--white boarded with Dan, Ian, and ______ to figure out functions for traversing the linked list with two traversers, c1 and c2. The FIRST traverser (c1)  would start traversing the linked list, THEN, when c1 is Nth places ahead of c2, THEN c2 will start traversing also
--Both c1 and c2 will traverse the the linked list until c2.next becomes equal to null, then counter will be compared to N to see it is less than N - 1  to avoid including the null c2.next
--If the counter is less than N, then return the value that c2 was on and that solves the code challenge

#Solution
--Image for find-nth-value.js
![alt text](https://github.com/401d29-advanced-javascript/data-structures-and-algorithms/code-challenges/assets/find-nth-value-n-from-the-end.jpg "find-nth-value-n-from-the-end image")

