var myPetsArray = ["Dog", "Cat"];
function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    myNewPets.push("Bird", "Fish");
    var firstPet = myNewPets[0];
    var lastPet = myNewPets[myNewPets.length - 1];
    myNewPets.shift(firstPet);
    myNewPets.unshift("Lion");
    myNewPets.pop(lastPet);
    return myNewPets;
}
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
