

//  Write a JS function reverseArray that takes an array and returns a reverse array.
// Example 1:
// Input: [ 3, 6, 5, 4, 8]
// Output: [ 8, 4, 5, 6, 3 ]
// Constraints:
// The function cannot change the main array.
// Cannot use array methods for reverse.

//  ansd : 

// function reverseArr(input) {
//     var ret = new Array;
//     for(var i = input.length-1; i >= 0; i--) {
//         ret.push(input[i]);
//     }
//     return ret;
// }

// var a = [3,5,7,8]
// var b = reverseArr(a);
// console.log(b);


var a =[ 3, 6, 5, 4, 8]

function reverseArray(input) {
    
    var r = new Array;
for (var i = input.length-1; i >= 0; i--){
      r.push(input[i]);
}
return r
}
 var b=reverseArray(a)
 console.log(b);  //output   [ 8, 4, 5, 6, 3 ]  (ans)


 



