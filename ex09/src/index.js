function myBouncer(arr) {
    for(var i = 0; i < arr.length; i++) {
        var filtered = arr.filter(function(value, i, arr){ 
        return value != "false", "null", "0", "", "undefined", "NaN"});
    }
    return arr;
}
console.log(myBouncer([7, "ate", "", "false", 9]));
module.exports=myBouncer;