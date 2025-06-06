const palindromes = function (text) {
    // Lowercase and remove non-alphanumeric characters
    let cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Reverse and convert to string
    let reversed = cleanText.split('').reverse().join('');
    // Compare cleaned text to reversed string
    return cleanText === reversed;
};

// Do not edit below this line
module.exports = palindromes;
