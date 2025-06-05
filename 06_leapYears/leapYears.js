const leapYears = function(year) {
    // check century year divisible by 400
    if ((year % 100 === 0) && (year % 400 === 0)) {
        return true;
    }
    // check century year
    if (year % 100 === 0) {
        return false;
    }
    // check if year is divisible by four
    if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
