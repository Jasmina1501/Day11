function mySplice(arr1, arr2, n) {
    var combinedArrays = arr2.slice()
    for (var i = 0; i < arr1.length; i++) {
    combinedArrays.splice(n, 0, arr1[i])
    n++
  }
  return combinedArrays;
}
console.log(mySplice([1,2,3], [4,5,6], 1));
module.exports=mySplice;

