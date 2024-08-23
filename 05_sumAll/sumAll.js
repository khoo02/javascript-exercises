const sumAll = function(firstInt, secondInt) {
    // check positive
    if ((firstInt < 0) || (secondInt < 0)) {
        return "ERROR";
    }

    // check integer
    if ((firstInt % 1 != 0) || (secondInt % 1 != 0)) {
        return "ERROR";
    }

    // check data type
    if ((typeof firstInt != "number") || (typeof secondInt != "number")) {
        return "ERROR";
    }

    // variables for small and large number
    let greaterNumber = secondInt;
    let smallerNumber = firstInt;

    // check which number is greater
    if (firstInt > secondInt) {
        greaterNumber = firstInt;
        smallerNumber = secondInt;
    }

    // sum of range
    let sum = 0;

    // iterate from until large number
    for (let i = smallerNumber; i <= greaterNumber; i++) {
        // add all numbers including greaterNumber
        sum += i;
    }

    return sum;
};


// Do not edit below this line
module.exports = sumAll;
