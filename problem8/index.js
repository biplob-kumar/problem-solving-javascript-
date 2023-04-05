// problem 8
// Write a function findIndex that takes an array of strings and a string as arguments. and return the index number of this string.
// If cannot find the string return -1.

// Example 1:
// Input: [ “hello”, “blue”, ”green” ] , “blue”
// Output: 1
// Example 2:
// Input: [ “hello”, “blue”, ”green” ] , “red”
// Output: -1

// ans : 

function findIndex(x, y) {
   for (let i = 0; i < x.length; i++) {
     if (x[i] === y  ) {
       return i
     } 
   }
   return -1
 };
// EXAMPLE 1
console.log(findIndex([ "hello", "blue", "green"]  , "blue"));

// EXAPLE2
console.log(findIndex([ "hello", "blue", "green"]  , "red"));

function finIndex(array,string){

for (let  i = 0;  i< array.length; i++) {
  if(array[i]){

  }
}
}
console.log(finIndex(["a","b","c"],"c"))







