const weapons = ["candlestick", "lead pipe", "revolver"];

const makeBroken = function(item){
    return 'broken '.concat(item);
};
//
// weapons.map((value)=>{
//     return "X"
// });

const brokenWeapons = weapons.map(makeBroken);
console.log(brokenWeapons);


