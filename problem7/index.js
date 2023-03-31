
// 7 Write a JavaScript function that takes an array that contains string and integer elements, and returns a new array with only integer elements.
// Example 1:
// Input: [ 3, 6, “hello”, 4, “3”,  8]
// Output: [ 3, 6,  4,  8]
// Constraints:
// Array length cannot be zero or negative.

// Ans :::


var arr=[3, 6, "hello", 4, "3", 8]

var number=[]

arr.forEach( Element=>{
if(typeof(Element)==="number"){
    number.push(Element)
   }
})
console.log(number); // ans 


