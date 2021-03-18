var monitorsListArray = ["Apple", "Peach", "Berry"];
var monitorsList = [];
function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    listLen = newMonitorsList.length;
    for (i = 0; i < listLen; i++) {
            monitorsList[i] = [newMonitorsList[i], i + 1];
    }
    return monitorsList;
}
console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;