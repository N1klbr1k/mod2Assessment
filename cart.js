///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE


 const summedPrice = cart.reduce((acc, curr) => acc + curr.price,0)

//console.log(summedPrice);
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => (cartTotal*(1 + tax)) - couponValue;

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
   The customer object will need the following properties:
   A customer Id to keep track of customers which should be a string,
   an array of strings for waht the costumer ordered, 
   An order total which should be a number so you can do math on it, 
   and a date value to track when the customer visited, which will probably also be an object, so it can be easily parsed by a computer.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    'customerID': 'customer:3454',
    'foodOrdered': [ 'Hamburger', 'Fries', 'Drink'],
    'orderTotal': 11.79,
    'orderDate': {
                'minute': 37,
                'hour': 4,
                'am/pm': 'pm',
                'day': 6,
                'month': 5,
                'year': 2022,
 }
}