const weapons = ["candlestick", "lead pipe", "revolver"];

const makeBroken = function(item){
    return 'broken '.concat(item);
};
//
// weapons.map((value)=>{
//     return "X"
// });

const brokenWeapons = weapons.map(makeBroken);
//console.log(brokenWeapons);

const _ = {

    map : function(list, callback){

        //_.each impl:
        // const temp = [];
        // _.each(list, (v, i, list)=>{
        //     temp.push(callback(v, i, list))
        // });
        //return temp;

        if (Array.isArray(list)) {
            const temp = [];
            list.forEach((value, index, array) => {
                temp.push(callback(value, index, array));
            })
            return temp;
        }
        else
        {
            const temp = {};
            for (let key in list)
            {
                temp[key] = callback(list[key], key, list);
            }
            return temp;
        }
    }
};

const testObj =
    {
        name: "HUGE DINGUS",
        color: "Pink"
    }


const brokenWeapons2 = _.map(weapons, makeBroken);
const testObj2 = _.map(testObj, makeBroken);

console.log(brokenWeapons2);

console.log(testObj2);

