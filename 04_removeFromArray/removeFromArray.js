const removeFromArray = function() {
    let arr = arguments[0].slice(); // copy input array to arr
    // loop through arguments of the function
    for (let i = 1; i < arguments.length; i++) { // loop through remaining function parameters
        for (let j = 0; j < arr.length; j++) { // loop through the array in first parameter position
            if(arguments[i] === arr[j]) {
                arr.splice(j,1); // if values are equal then remove from input array
            }
        }
    }
    return arr;
};

module.exports = removeFromArray;
