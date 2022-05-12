/* 
1. Given the array [1,2,3,4,5,6,7,8,10], write a function that will remove all odd numbers.  
*/

// in JS -> 1 == false / 0 == true
// create a new arr -> when num is odd -> 3 % 2 return false
const removeAllOddNum = (arr: Array<number>) =>
  arr.filter((item) => !(item % 2));

