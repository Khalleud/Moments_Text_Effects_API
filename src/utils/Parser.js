/**
 * 
 * @param {*} str 
 * @returns remove the unit from the value
 */
const timeParser = (str) => {
    let number = str.match(/\d+(\.\d+)?/)[0]
    return number
};

/**
 * 
 * @param {*} str 
 * @returns array of two numbers: [length, width] from "length x width"
 */
const resolutionParser = (str) => {
    let numbers = str.split('x')
    return [parseInt(numbers[0]), parseInt(numbers[1])]
};

/**
 * 
 * @param {*} str 
 * @returns array of two numbers: [x, y] from "x,y"
 */
const coordinatesParser = (str) => {
    let numbers = str.split(',')
    return [parseInt(numbers[0]), parseInt(numbers[1])]
};




module.exports = {
    timeParser, 
    resolutionParser,
    coordinatesParser};
