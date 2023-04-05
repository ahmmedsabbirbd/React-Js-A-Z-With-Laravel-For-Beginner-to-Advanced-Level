/*
    1==============>   array and object destructing

const user = {
    name: "Sabbir",
    age: 20,
    number: {
        home: "01712923446",
        office: "0315264760",
    }
}

function detailsMe() {
    const {name, age, number} = user;
    const {office} = number;

    console.log(`My name is ${name}. My age ${age}. My Phone number ${office}`);
}
detailsMe();

/// array distructing
let names = ["Sabbir", "Ahmme"];
console.log(names[0]);
console.log(names[1]);

const [fnmae, lname] = names;
console.log(fnmae);
*/

/*
    2==============>  Data Structure : set

let set = new Set();

set.add(100);
set.add(200);
set.add(300);
set.add(100);

set.delete(100);
console.log(set);
console.log(set.size);

set.clear();
*/

/*
    3==============> data Structure map


let map = new Map();
map.set('Mango', "Ame");
map.set("kol", "e");

console.log(map);

for(let key of map) {
    console.log(key);
}

console.log(map.has("Mango"))// search method
console.log(map.values())// show only value
map.clear();

console.log(map);
*/

/*
    4==============>   Weak Set + Weak Map

const ws = new WeakSet();
const obj1 = {};
const obj2 = {};

ws.add(obj1);
ws.add(obj2);

console.log(ws);

console.log(ws.has(obj1));
console.log(ws.has(obj2));
*/

/*
    5==============>  module import export

import addNumbers from "./main.js";

console.log(addNumbers(2, 2));
*/ // not working module

/*
    6==============>   padStart, padEnd TrimStart, TrimEnd

let minute = "4";
let hour = "8";

console.log(minute.padStart(5, "0"))
console.log(minute.padEnd(5, "0"))
*/
/*
    7==============>  
*/ 

/*
    8==============>   
*/ 

/*
    9==============>  
*/ 
/*
    10==============>  
*/

/*
    11==============>  
*/

/*
    12==============> 
*/

/*
    13==============>

*/

/*
    14==============>

*/