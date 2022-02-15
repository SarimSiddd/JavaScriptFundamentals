//Declaration:
//const [firstName, lastName] = ["Sarim", "Siddiqui"];
let [firstName, lastName] = ["Sarim", "Siddiqui"]; //Available from ES6
//var [firstName, lastName] = ["Sarim", "Siddiqui"]; //Available from ES6

console.log(firstName + ' ' + lastName);

//Assignment:

[firstName, lastName] = ["Sarim1", "Siddiqui1"]

console.log(firstName + ' ' + lastName);

var {customerFirstName, customerLastName} = {customerFirstName: "Adeel", customerLastName: "Hussain"};

console.log(customerFirstName + ' ' + customerLastName);

[name, room, weapon] = ["Rusty", "kitchen", "candlestick"];

console.log(name + ' ' + room + ' ' + weapon);


const game = {
    'suspects' : [
        {
            name : "Rusty",
            color: "Orange"
        },
        {
            name : "Miss Scarlet",
            color: "Red"
        }
    ]
}

game.suspects.forEach(suspect => {
    suspect.name == "Miss Scarlet" ? suspect.isguilty = true : suspect.isguilty = false;
    console.log(suspect);
});
// foreach(let suspect = game["suspects"])
// {
//     console.log(suspect);
// }