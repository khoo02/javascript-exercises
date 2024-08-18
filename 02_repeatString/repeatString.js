const repeatString = function(word, numOfTimes) {
    // check negative number
    if (numOfTimes < 0) {
        return "ERROR";
    }
    // use concatenateString to add word numOfTimes
    let concatenateString = "";
    for (let i = 0; i < numOfTimes; i++) {
        concatenateString += word;
    }
    return concatenateString;
};

// Do not edit below this line
module.exports = repeatString;
