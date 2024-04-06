/* Bonus: Currying

    Write a `myCurry(func, numArgs)` method that returns a function that
    collects arguments until the number of arguments collected is equal
    to the original `numArgs` value and then invokes the curried function.

    The returned function collects arguments and returns the same function,
    until the number of arguments is equal to the original numArgs value.
    
    See examples below:
    const sumFunc = (...nums) => nums.reduce((acc, el) => acc + el);
    const curriedFunc = myCurry(sumFunc, 4);

    curriedFunc(1); // returns a function
    curriedFunc(2); // returns a function
    curriedFunc(3); // returns a function
    curriedFunc(4); // doesn't return a sum until the nth function call ==> 10

*/

// Your code here 
const myCurry = (func, numArgs) => {
  let count = 0;
  let list = [];
  return func1 = (n) => {
    count += 1;
    list.push(n);
    let res = func(...list);
    if (count < numArgs) {return func1}
    if (count === numArgs) {return res;}
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = myCurry;
} catch (e) {
  module.exports = null;
}
