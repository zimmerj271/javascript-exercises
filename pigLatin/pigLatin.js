function pigLatin(string) {

    const stringArray = string.match(/\S+/g); // match on non-whitespace, returns array with each word in elements
    let newStringArray = []; // instantiate a new array to contain pig latin phrase
    const quRE = /^[bcdfghjklmnprstvwxyz]?qu/; // regex pattern to match on words beginning with consonant? and/or qu
    
    // loop through each word in the array
    for (word in stringArray) {
        let str = stringArray[word]; // save word as new variable with local scope.
        let newStr; // instantiate new variable to contain pig latin word.
        if (/^[aeiou]/.test(str)) { // if word starts with a vowel.
            newStr = str.replace(/$/, 'ay');
        } 
        else if (quRE.test(str)) { // if word starts with consonant and/or qu
            let re = /^([bcdfghjklmnpqrstvwxyz]?qu)(.+)$/;
            newStr = str.replace(re, '$2$1ay');
        }
        else { // if word starts with one or more consonants
            let re = /^([bcdfghjklmnpqrstvwxyz]+)(.+)$/;
            newStr = str.replace(re, '$2$1ay');       
        }
        newStringArray.push(newStr); // push word to new array
    }

    return newStringArray.join(' '); // join the array as string separated by white space
};

// Do not edit below this line
module.exports = pigLatin;
