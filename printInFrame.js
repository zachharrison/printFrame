const printInFrame = function(list) {
  list = list.split(' ');
  const longest = longestStr(list).length;
  const border = repeat('*', longest + 4);
  console.log(border);
  for (let word of list) {
    // console.log(`* ${word}${repeat(' ', longest - word.length + 1)}*`);
    let test = `* ${word}${repeat(' ', longest - word.length + 1)}*`;
    console.log(test)
  }
  console.log(border);
};

const repeat = function(str, times) {
  let result = str;

  for (let i = 0; i < times - 1; i++) {
    result += str;
  }

  return result;
};



const longestStr = function(list) {
  let longest = list[0];

  for (let str of list) {
    if(str.length > longest.length){
      longest = str;
    }
  }

  return longest;
};

// console.log(longestStr(['May', 'the', 'force', 'be', 'with', 'you']))

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
