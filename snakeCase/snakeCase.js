const snakeCase = function(str) {
    str = str.replace(/[\s-]+/g, '_'); // convert white space and '-' to '_'
    if (/[a-z]{3,}[A-Z]/.test(str)) {
        str = str.replace(/([a-z])([A-Z])/g, '$1_$2' );    
    }
    str = str.replace(/([A-Z]+)/g, function(match) { // convert upper case to lower case
        return match.toLowerCase();
    });
    str = str.replace(/\.{2,}$/, ''); // remove 2 or more '.' at end of string, must go before replacing '.' everywhere else
    str = str.replace(/\.{2,}/g, '_'); // replace 2 or more '.' with '_'
    str = str.replace(/[\.!\?,]+/g, ''); // remove any remaining punctuation
    console.log(str);
    return str;
};

// Do not edit below this line
module.exports = snakeCase;
