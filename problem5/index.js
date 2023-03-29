

// Write a function that takes an array and returns a new array containing all the odd indexed elements from this array.
// If the new  array length is less than 3. Then add a new element “DEVZEROONE” at the last position of this new array.
// If the new  array length is greater than 3. Then add a new element “DEVZEROONE” at the first position of this new array.
// In this problem. We will consider 0 as an odd number.
// Example 1:
// Input: [ 3, 6, 5, 4, 8, 10 ]
// Output: [ “DEVZEROONE”, 3, 6, 4, 10 ]
// Example 2:
// Input: [ 0, 2, 4, 7, 9 ]
// Output: [ 0, 2, 7 ]
// Constraints:
// Array length cannot be negative.

//  ans:::
function EvenNumber() {
    var array=[3, 6, 5, 4, 8, 10 ]
    
    for (let i= 0; i<array.length; i++) {
        let arr=[]
        if(array[i]%2===0){
         console.log(array[i]);
       }
    }
    return array  
}
EvenNumber()

//  EXample 1
function ADD(array) {  
if (array>3) {
    console.log("DEVZEROONE");
}
else{
    console.log("DEVZEROONE");
}
}
ADD()   //EXAMPLE1 output 




//  Example 2

function EvenNumber2() {
    var array2=[0, 2, 4, 7, 9 ]
    
    for (let i= 0; i<array2.length; i++) {
        let arr=[]
        if(array2[i]%2===0){
         console.log(array2[i]);
         }
    }
    return array2
     
}

EvenNumber2()  //EXAMPLE 2 output 





    




