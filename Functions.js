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

const suspects = videoData.filter(v => {
    return v.present;
}).map((v) => {
    return v.name
});

//console.log(suspects);


//<----- Spread Operator ------->

const createTuple = (a, b, c, ...d)=>{

    return [[a,c], [b,d]];
}

//console.log(createTuple("It", "be", "could", "anyone", "no one"));

//Default parameter before es6:
const defaultFunc = function (a, b) {

    // if (arguments.length === 1) {
    //     b = 1;
    // }
    b = b || 2;
    //console.log(a + ' ' + b);
}
defaultFunc(2);

//Array-like object:
const constructArray = function(){
    arr = Array.prototype.slice.call(arguments); //Creates separates arrays for args and passes context
    arr.push("was it in the billiards room?");
    return arr.join(" ");
}
const out = constructArray("was", "it", "in");
//console.log(out);

//Array.from (Es6 feature:)
const constructArray2 = function(){
    arr = Array.from(arguments); //Creates separates arrays for args and passes context
    arr.push("was it in the billiards room?");
    return arr.join(" ");
}
const out2 = constructArray2("was", "it", "in");
//console.log(out);

const _ = {
    from : function(){
        arr = [];
        for (let key in arguments) {
            arr.push(arguments[key]);
        }
        return arr;
    }
}

const out3 = _.from("was", "it", "in");
console.log(out3);


