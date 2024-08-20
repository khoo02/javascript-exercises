const reverseString = function(text) {
    // new string to store reversed text
    let reverseText = "";

    // iterate string index backwards
    for (let i = text.length - 1; i >= 0; i--) {
        // add last elements first
        reverseText += text[i];
    }

    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
