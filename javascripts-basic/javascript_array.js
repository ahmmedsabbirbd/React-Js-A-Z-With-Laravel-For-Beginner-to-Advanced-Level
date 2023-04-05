/*
    1==============> array

    let friends  = ['Sabbir', 'Ahmmed'];
    console.log(friends)
*/ 

/*
    2==============>   adding elements of array

let numbers = [1, 3, 4, 2, 6];
// numbers.unshift(2); // add valu in array in first
// numbers.push(2); // add valu in array in last
numbers.splice(1, 0, 2); // add valu in 1 number index 0 value delelete and add 2 value

console.log(numbers);
*/

/*
    3==============>   removing elements of array

let numbers = [1, 2, 3, 4];
// numbers.pop(); // remove last value
// numbers.shift(); // remove first value

numbers.splice(0,3); // only staye 4

console.log( numbers );
*/

/*
    4==============>    finding elements (primitive type)


let numbers = [1, 2, 3, 4];

console.log(numbers.includes(31));
console.log(numbers.indexOf(3));
console.log(numbers.lastIndexOf(3));

console.log(numbers);
*/
/*
    5==============>  array finding elements (refernce type)


const doctors = [
    {name: "Sabbir", age:20},
    {name: "Korim", age:22},
    {name: "Jodu", age:21},
]
const result = doctors.find(doctor=> doctor.name="Korim");
console.log(result);
*/

/*
    6==============> Iterating an array


let numbers = [1, 2, 3, 4];
for(let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
}

for(let n of numbers) {
    // console.log(n);
}

numbers.forEach(n => {
    console.log(n);
});
*/

/*
    6==============> sorting and reversing an array


let numbers = [4,5, 8, 1, 2, 3, 4];
numbers.sort(); // sort numbers a-z
numbers.reverse(); // sort numbers z-a
console.log(numbers); 

const doctors = [
    {name: "Sabbir", age:20},
    {name: "Korim", age:22},
    {name: "Jodu", age:21},
]

doctors.sort((a, b)=> {
    if(a.age > b.age) return +1;
    if(a.age === b.age) return 0;
    if(a.age < b.age) return -1;
});
console.log(doctors);
*/ 

/*
    6==============>  testing the elemnet of the array every some

let numbers = [4,5, 8, 1, 2, 3, 4];

const isNegetiveNumber = numbers.every(n=> {
    return n > 0;
})

console.log(isNegetiveNumber);
*/ 

/*
    6==============>  combining and slicing the array



let numbers = [4,5, 8, 1, 2, 3, 4];
let numbers2 = [2121];

const allNumbers = numbers.concat(numbers2);
console.log(allNumbers);
*/ 
/*
    6==============> spread opertor


let numbers1 = [4,5, 8, 1, 2, 3, 4];
let numbers2 = [2, 1, 34, 53];
console.log(...numbers1);
const allNumber = [...numbers1, ...numbers2];
console.log(allNumber);

*/

/*
    6==============> array joining


let numbers1 = [4,5, 8, 1, 2, 3, 4];
let numbers2 = [2, 1, 34, 53];
let joinArray = numbers1.join(" ");
console.log(joinArray);
*/

/*
    6==============> maping an array es6

let numbers1 = [4,5, 8, 1, 2, 3, 4];
let numbers2 = [2, 1, 34, 53];

const myNumber = numbers1.map(n => n * 2);
console.log(myNumber);

const doctors = [
    {name: "Sabbir", age:20},
    {name: "Korim", age:22},
    {name: "Jodu", age:21},
]

const ageUnder21 = doctors.map(d=> d.age>=21);
console.log(ageUnder21);
*/

/*
    6==============> filltering an array es6



const doctors = [
    {name: "Sabbir", age:20},
    {name: "Korim", age:22},
    {name: "Jodu", age:21},
]

const ageUnder21 = doctors.filter(d=> d.age>=21);
console.log(ageUnder21);

*/

/*
    6==============>  reducing an array

*/
let numbers1 = [4,5];

const totalNumber = numbers1.reduce((oldNumber, newNumber)=> oldNumber + newNumber, 0);
console.log(totalNumber);