
// Write a JavaScript Function that takes a word and returns the new word without including the first two characters.
// If string length less than 2 return -1,
// If the string length is 2 returns 1
// If the string length is equal to 2 then follow the below examples.
// Example 1:
// Input: array
// Output: ray 
// Example 2:
// Input: object
// Output: ject
// Constraints:
// Word length cannot be negative.

// ans ::


function newWord(string) {

if(string.length <= 0){
return console.log(" negative number ");
} 

else if(string.length<2){
return -2
}

else {
return string.slice(2)
}
}



console.log(newWord("arrray"));  
console.log(newWord("ray"));
console.log(newWord("object"));
console.log(newWord("ject"));






