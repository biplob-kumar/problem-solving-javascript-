

//   2 .Write a JavaScript function countWords  that takes a string and returns the number of words contained in this string. ??????

// ans :

var sentence = "Lorem ipsum dolor sit amet consectetur"
function countWords(str) {
    const word = str.split(' ');
  
    return word.filter(word => word !== '').length;
  }
  console.log(countWords(sentence));   //out put is 6 (ans )


