const removeFromArray = function (array, ...args) {
    // create new array
    let newArray = [];

    // iterate through original array
    array.forEach(element => {
        // if the args array has the element, do not include in newArray
        if (args.includes(element)) {
        } else {
            newArray.push(element);
        }
    });

    return newArray;
}


// Do not edit below this line
module.exports = removeFromArray;
