var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];
function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];
    var tempLen = newTemps.length;
    var sum = 0;
    for (i = 0; i < tempLen; i++) {
        for (j = 0; j < newTemps[i].length; j++) {
            sum += newTemps[i][j];
        }
        averageDayTemp.push(sum / newTemps[i].length);
        sum = 0;
        }
        return averageDayTemp;
    }
console.log(myArrayFunction(temps));
module.exports = myArrayFunction;

    
