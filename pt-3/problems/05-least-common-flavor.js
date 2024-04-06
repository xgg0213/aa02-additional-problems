/*
Least common flavor:
    Write a function that accepts an object that represents a bag of candy with various flavors
    The keys of the object are flavors, and the values are the count of how many pieces of that flavor
    are in the bag. The function should return the name of the flavor that is the least common.
    If passed an empty object, the function should return null.

    const bag1 = { cherry: 4, grape: 5, lemon: 3, orange: 2, berry: 4 };
    console.log(leastCommonFlavor(bag1)); // prints 'orange'

    const bag2 = { cherry: 5, grape: 4, lemon: 2, orange: 3, chocolate: 6 }
    console.log(leastCommonFlavor(bag2)); // prints 'lemon'

    console.log(leastCommonFlavor({})); // prints null
*/

function leastCommonFlavor(candyBag) {
  // Your code here 
  if (Object.keys(candyBag).length === 0) {return null}
  let min = Infinity;
  let minName = '';
  for (let el of Object.keys(candyBag)) {
    if (candyBag[el] < min) {
        min = candyBag[el];
        minName = el;
    }
  }
  return minName;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = leastCommonFlavor;
} catch (e) {
    module.exports = null;
}
