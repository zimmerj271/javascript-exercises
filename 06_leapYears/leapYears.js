const leapYears = function(year) {
    
    if((year % 4 === 0) && (year % 100 !== 0) ) { // years that are divisible by 4 but not divisible by 100
        return true;
    } else if ( (year % 100 === 0) && (year % 400 === 0) ) { // years that are divisibe by 100 and divisible by 400
        return true;
    } else {  // all other years
        return false;
    }
};

module.exports = leapYears;
