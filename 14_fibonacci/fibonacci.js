const fibonacci = function(num) {
    // check if string and convert to integer
    num = Number(num);
    
    // check if zero
    if (num < 0) {
        return "OOPS";
    }
    if (num === 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }

    // starting numbers
    let prev = 0, curr = 1;
    let result = 0;

    // calculate fibonacci number
    for (let i = 2; i <= num; i++) {
        // add current and previous number
        result = prev + curr;

        // update prev to curr, and curr to next
        prev = curr;
        curr = result;
    }

    // return result
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
