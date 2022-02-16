
var suspects = ["Miss Scarlet", "Jebadayah Green", "Harimash Yellow"];

var suspect = {

    name: "Miss Scarlet",
    color: "Scarlet"
}

//Hydrating (Creating object from array):
function createSuspectObjects(name)
{
    return{
        name : name,
        color: (name.split(' '))[1],
        speak() {
            console.log("Hello my name is: " + name);
        }
    };
}

var suspectObjs = [];

// for(let suspect of suspects)
// {
//     suspectObjs.push(createSuspectObjects(suspect));
// }

//Using _.foreach
const _ = {
    forEach: function (list, callback)
    {
        if (typeof callback == "function")
        {
            if (Array.isArray(list)) {
                for (let i=0; i<list.length; i++)
                {
                    callback(list[i], i, list);
                }
            }
            else
            {
                for (let val in list)
                {
                    callback(list[val], val, list);
                }
            }
        }
    }
};

_.forEach(suspect, (val)=>{
    console.log(val);
});
