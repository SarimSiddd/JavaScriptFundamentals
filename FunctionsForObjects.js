
var suspects = ["Miss Scarlet", "Jebadayah Green", "Harimash Yellow"];

//Hydrating (Creating object from array):
function createSuspectObjects(name)
{
    console.log(name);

    return{
        name : name,
        color: (name.split(' '))[1],
        speak() {
            console.log("Hello my name is: " + name);
        }
    };
}

var suspectObjs = [];

for(let suspect of suspects)
{
    suspectObjs.push(createSuspectObjects(suspect));
}

name = "Mr Blue";
console.log(name.split(' ')[1]);

console.log(suspectObjs);
