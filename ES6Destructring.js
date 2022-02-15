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
    suspect.name === "Miss Scarlet" ? suspect.isguilty = true : suspect.isguilty = false;
    console.log(suspect);
});
// foreach(let suspect = game["suspects"])
// {
//     console.log(suspect);
// }


// for (let i=0; i< game.suspects.length; i++)
// {
//     if (i ===0)
//         color1 = game.suspects[i].color;
//     else
//         color2 = game.suspects[i].color;
// }

//const [color1, color2] = [game.suspects[0].color, game.suspects[1].color];
const [{color: color1}, {color: color2}] = game.suspects;

console.log("color1: " + color1 + " color2: " + color2);
