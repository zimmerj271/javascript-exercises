const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
	for(let x in arr) {
    sum += arr[x]
  }
  return sum;
};

const multiply = function(arr) {
  let multiple = 1;
  for (let x in arr) {
    multiple *= arr[x];
  }
  return multiple;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  } else {
    const arr = [...Array(num).keys()].map(x => ++x); // generate array from 1 to num
    return multiply(arr)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
