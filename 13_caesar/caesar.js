const caesar = function(msg, key) {

    // JavaScript does not have a true modulo operator, define a function that does it
    function modulo(n, p) {
        if (n < 0) {  // what to do if value is negative
            n = p - Math.abs(n) % p;
        }
        return n % p;
    }

    function asciiShift(ascii, start) {
        ascii -= start; // shift value of ascii code to be between 1-26 instead of 65-90
        ascii = modulo(ascii + key, 26); // Get modulo of value by base of 26
        ascii += start; // shift value back to ascii code range 65-90
        return ascii;
    }

    // white space, punctuation and numbers have unicode 32 - 64
    // upper case ascii 65 - 90
    // lower case ascii 97 - 122
    // let arr = [];
    let encrypted = ""; // instantiate empty string
    for (const i in msg) {
        // console.log(i);
        // console.log(str[i]);

        // arr.push(str.charCodeAt(i))
        let asciiCode = msg.charCodeAt(i); // get ascii code of char
        if(asciiCode >= 65 && asciiCode <= 90) {
            asciiCode = asciiShift(asciiCode, 65);
        } 
        else if (asciiCode >= 97 && asciiCode <= 122) {
            asciiCode = asciiShift(asciiCode, 97);
        }
        encrypted += String.fromCharCode(asciiCode);
    }
    return encrypted;
    // for (const i in arr) {
         

    //     console.log(arr[i])
    //     if( (arr[i] < 65) || ( (arr[i] > 90) && (arr[i] < 97) ) || (arr[i] > 122) ) {
    //         // is punctuatiion
    //         console.log('punctuation');
    //     }
        // if((arr[i] > 64) && (arr[i] < 91)) {
    //         // is a capital
    //         console.log('upper case')
        //     let nextNum = arr[i + num] % upper.length;
        //     console.log(arr[i], arr[i] + nextNum);
        // } 
        // else if((arr[i] > 96) && (arr[i]) < 123) {
    //         // is lower case
    //         console.log('lower case')
    //         let nextNum = arr[i + num] % upper.length;
    //         console.log(arr[i], arr[i]+nextNum);
    //     }
    // }
    // console.log(lower);
};
caesar('Hello!', 1);
// Do not edit below this line
module.exports = caesar;
