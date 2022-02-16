const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

// const thosePresent = videoData.filter((val) => {
//     return val.present === true;
// })

// console.log(thosePresent);

const _ = {};

_.filter = function(list, callback){
    if (Array.isArray(list))
    {
        const temp = [];
        list.forEach((v, i, arr)=>{
            let result = callback(v, i, arr);
            if (result)
                temp.push(v);
        });
        return temp;
    }
    else
    {
        const temp = {};
        for (let key in list){
            let result = callback(list[key], key, list);
            if (result)
                temp[key] = list[key];
        }

        return temp;
    }
}

const werePresent = _.filter({videoData}, (v)=>{
    return v.present;
});

// const werePresent = _.filter({
//     present : true
// }, (v)=> {
//     return v;
// });

console.log(werePresent);