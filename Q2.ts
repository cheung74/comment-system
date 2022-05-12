/*
. Given the array [1,2,3,4,5,6,7,8,10], write a function that will calculate the  sum of all odd numbers. 
*/

const sumAllOddNum = (arr: Array<number>) =>
  arr
    .filter((item) => item % 2)
    .reduce((acc, currentValue) => acc + currentValue, 0);
