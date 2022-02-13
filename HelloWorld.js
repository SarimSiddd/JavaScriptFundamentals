
//console.log("Hello world!");

var person = {};

person.name = "Sarim";

//console.log(person);

var person2 = {
  "name" : "Sarim"
};

person.name; //just returns the value
person[0] = "something"; //property
person['lastName'] = "Siddiqui" //property
//console.log(person2);

var arr  = [];

arr[0] = "Ok"; //Not a key-value pair property
arr.name = "Something";
arr["plea"] = "SomeData";

console.log(person.name);
console.log(arr.name);
console.log(arr);
console.log(arr + " length of array " + arr.length);



