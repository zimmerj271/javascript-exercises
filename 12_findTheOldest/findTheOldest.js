const findTheOldest = function(arr) {

    for (i in arr) { // loop through each element of json array
        if (arr[i].yearOfDeath) { // check if key exists in sub array
            const age = arr[i].yearOfDeath - arr[i].yearOfBirth; // subtract to get age
            arr[i].age = age;  // add new key,value pair for age of person
        } else { // if not, then get current date and calculate age as of current year
            const today = new Date(); // date object
            const age = today.getFullYear() - arr[i].yearOfBirth; // subtract current year with year of birth
            arr[i].age = age;
        }
    }
    // use reduce to compare the age key/value pair and return one which is greatest
    return arr.reduce( (previous, current) => (previous.age > current.age) ? previous : current);
}
// Do not edit below this line
module.exports = findTheOldest;
