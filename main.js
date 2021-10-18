//1Write a function named addOne that takes an array of numbers, and returns a new array of the numbers, incremented by use forEach to loop over the input array and work with each value. Push the new value into a local array. Return the local array;
const addOne = (arr) => {
  let newarr = [];
  arr.forEach((element) => {
    newarr.push(element + 1);
  });
  return newarr;
};

//2Write a function named addExclamation that takes an array of strings,and returns a new array of the same strings with an "!" added to the end. Use forEach to loop over the input array. Modify each string, and add the updated value into a local array, Return the local array;
const addExclamation = (arr) => {
  let newarr = [];
  arr.forEach((element) => {
    newarr.push(element + "!");
  });
  return newarr;
};

// const addExclamation = (arr) => {
//   let newarr = [];
//   arr.map((element) => {
//     newarr.push(element + "!");
//   });
//   return newarr + "!" ;
// };

//3Write a function named addOneByMap that, given an array of numbers,
// uses map to return a new array with each value simply incremented by 1.
const addOneByMap = (arr) => {
  let newarr = arr.map((element) => {
    return element + 1;
  });
  return newarr;
};

//4Write a function named addQuestion that, given an array of strings,
// uses map to return a new array containing each string followed by a question mark character.
const addQuestion = (arr) => {
  let newarr = arr.map((element) => {
    return element + "?";
  });
  return newarr;
};

//5
const forLoopTwoToThe = (arr) => {
  let newarr = arr.map((element) => {
    return (element = Math.pow(2, element));
  });

  return newarr;
};
forLoopTwoToThe([1, 2, 3]); // => [2,4,8]

//CHALLENGE 6
//Write a function named typeNum that, given an array as input,
// uses filter to return an array containing only the numbers. For example,
// typeNum([1, 'bob' ,3]) returns [1,3].

const typeNum = (arr) => {
  let newarr = arr.filter((element) => {
    return typeof element === "number";
  });
  return newarr;
};

typeNum([1, "bob", 3]); // => [1,3]

//CHALLENGE 7
//Write a function named containsAnd that, given an array of strings as input,
// uses filter to return an array containing only strings that contain 'and' within the string.
// For example, containsAnd(['panda', 'ran', 'and']) returns ['panda', 'and'].

const containsAnd = (arr) => {
  let newarr = arr.filter((element) => {
    return element.includes("and");
  });
  return newarr;
};

//CHALLENGE 8
//Write a function named oddValues that, given an array of integers as input,
// uses filter to return an array containing only the odd integers.
// For example, oddValues([1,2,3]) returns [1,3].
const oddValues = (arr) => {
  let newarr = arr.filter((element) => {
    return element % 2 !== 0;
  });
  return newarr;
};


//CHALLENGE 9 Write a function named addValues that, given an array of numbers as input,
// uses reduce to add the values in the array.

const addValues = (arr) => {
    let newarr = arr.reduce((previousValue, currentValue) => {
        return previousValue +  currentValue ;
      } , 0  );
      return newarr;  
};


//CHALLENGE 10
//Write a function named countNumberOfElements that given an array as input,
// uses reduce to count the number of elements in the array.
// Note: You may not use the array's built-in length property.
let sum = 0 ; 
const countNumberOfElements = (arr) => {
    let newarr = arr.reduce((total, currentValue) => {
        return total +1  ; 
          ;} , 0  );
      return newarr;  
      
};


//local  convrece 