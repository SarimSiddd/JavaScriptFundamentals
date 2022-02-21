// noinspection ES6ConvertVarToLetConst

const _ = {
    reduce : (array, callback, initialValue)=>{

        var sum = initialValue;
        if (Array.isArray(array))
        {
            for (let v of array)
            {
                if (sum === undefined){
                    sum = v;
                    continue;
                }
                sum = callback(sum,v);
            }
            return sum;
        }
    }
}

// console.log(_.reduce([1,2], (sum,n)=> sum+n));

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

 roomfilter = newDevelopment.reduce((sum, v, key) => {

    let FalseRooms = v.rooms.reduce((sum, v, key) => {

        for(let key in v){
            if (!v[key])
                sum.push(key);
        }
        return sum;
    }, []);

    if (sum.length ==0)
        sum = FalseRooms;
    else {
        sum = sum.filter((v,i,arr)=>{
            return !!FalseRooms.includes(v);
        })
    }

    return sum;
}, []);

console.log(roomfilter);
