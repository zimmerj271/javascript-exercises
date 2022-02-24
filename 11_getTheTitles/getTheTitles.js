const getTheTitles = function(arr) {
    /* input is an array of objects (JSON),
    return the values from the key 'title' */

    return arr.map(o => o.title); // use map to return an arry of objects matching 'title'
};

module.exports = getTheTitles;
