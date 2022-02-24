const reverseString = function(str) {
    const reversed = []; // define array to contain chars in reverse order
    /* loop through string and push chars in reverse order */
    for (const i in str) { 
        reversed.push( str.charAt(str.length - 1 - i) ) 
    }

    return reversed.join(''); // join array with empty char
};

const palindromes = function (str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""); // remove punctuation from string
    str = str.replace(/\s+/g, ""); // remove white space
    str = str.toLowerCase(); // convert to lower case

    // check if string is equal if reversed
    if (str == reverseString(str)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
