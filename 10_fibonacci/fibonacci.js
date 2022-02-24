const fibonacci = function(num) {
    if (typeof(num) == 'string') { // convert string to int
        num = parseInt(num);
    }
    let sequence = [0, 1];  // instantiate first two terms of sequence
    if (num <= 0) {
        return "OOPS";
    } else if (num < 2) { // if requesting the first or second term of sequence
        return sequence[num];
    } else { // calculate value of fibonacci nth term
        for (let i=1; i<num; i++) {
            newTerm = sequence[i] + sequence[i-1];
            sequence.push(newTerm);
        }
        return sequence[num];
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
