const ftoc = function(temp) { // function to convert Farhenheit to Celsius
  let celsius = 5 * (temp - 32) / 9;
  return round(celsius, 1);
  
};

const ctof = function(temp) { // function to convert Celsious to Farenheit
  let farenheit = 9 * temp / 5 + 32;
  return round(farenheit, 1);
};

const round = function(num, precision=0) { // function to round number to nearest digit
  var factor = Math.pow(10, precision || 0);
  return Math.round(num * factor) / factor;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
