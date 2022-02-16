const reverseString = function(str) {
    const reversed = []; // define array to contain chars in reverse order
    /* loop through string and push chars in reverse order */
    for (const i in str) { 
        reversed.push( str.charAt(str.length - 1 - i) ) 
    }

    return reversed.join(''); // join array with empty char
};

// Do not edit below this line
module.exports = reverseString;
