/*

    Write a function using fat arrow syntax, `discountPrices` that takes in an array of prices
    and an array of discounts which correspond to each item price. The function
    should returns a new array containing strings for the new discounted prices
    formatted with a dollar sign and to two decimal places. See examples below:

    Hint: Look up `toFixed()` on MDN

    Examples:
    console.log(discountPrices([10.00, 21.99, 54.49, 60.00], [0.2, 0.15, 0.3, 0.5])) // prints [ '$8.00', '$18.69', '$38.14', '$30.00' ]
    console.log(discountPrices([4.99, 12.29, 59.00], [0.15, 0.3, 0.1])) // prints [ '$4.24', '$8.60', '$53.10' ]

*/

// Your code here 
const discountPrices = (prices, discounts) => {
    let res = [];
    for (let i = 0; i < prices.length; i++) {
        let result = prices[i]* (1-discounts[i])
        res.push(result);
        res[i] = res[i].toFixed(2);
    }

    let res1 = res.map(el => '$'+el.toString());

    return res1;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = discountPrices;
} catch (e) {
    module.exports = null;
}
