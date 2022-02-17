const sumAll = function(num1, num2) {
    if ((num1 < 0) || (num2 < 0)) { // if parameters are negative throw error
        return "ERROR";
    } else if ((typeof(num1) != 'number') || (typeof(num2) != 'number')) { // if parameters are not numbers throw error
        return "ERROR";
    } else {
        let sum = 0; // instantiate sum
        /* make sure looping is done from small to big despite parameter input */
        let big, small;
        if (num2 > num1) {
            big = num2;
            small = num1;
        } else {
            big = num1;
            small = num2;
        }

        // loop from small to big and sum each value 
        for (let i = small; i <= big; i++) { 
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
