const timeParser = (str) => {
    let number = str.match(/\d+(\.\d+)?/)[0]
    return number
};

const resolutionParser = (str) => {
    let numbers = str.split('x')
    return [parseInt(numbers[0]), parseInt(numbers[1])]
};

const coordinatesParser = (str) => {
    let numbers = str.split(',')
    return [parseInt(numbers[0]), parseInt(numbers[1])]
};




module.exports = {
    timeParser, 
    resolutionParser,
    coordinatesParser};
