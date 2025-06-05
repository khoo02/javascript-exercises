const add = function(a,b) {
    return a+b;
};

const subtract = function(a,b) {
    return a-b;
};

const sum = function(array) {
    let sum = 0; // start with 0 for sum 

    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }

    return sum;
};

const multiply = function(array) {
    let product = array[0]; // start with 0 for product
    if (array.length > 1) {
      for (let i = 1; i < array.length; i++) {
        product = product * array[i];
      }
      return product;
    } else {
      return 0;
    }
};

const power = function(a,b) {
    let result = 1; // starting at 1
    for (let i = 0; i < b; i++) {
      result = result * a;
    }
    return result;
};

const factorial = function(a) {
    if (a === 0) {
      return 1;
    }
    else {
      let factorial = 1;
      for (let i = 1; i <= a; i++) {
        factorial = factorial * i;
      }
      return factorial;
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
