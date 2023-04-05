/*
    1=======> declare a variable
   
    var name = "Sabbir Ahmmed";
*/

/*
   2=======> use let and const

    let // you change it
    const // you canot change it
*/

/*
    3==========> primiteive data // data type 
    
    const name = "Sabbir Ahhmmed"; // string
    const age = 20; // number
    const isMarriared = yes; // boliyen
    
    const number = 20.32;
    console.log(typeof(age));

    let color; // undefined
    console.log(color);

    let setColor = null; // object
    console.log(typeof(setColor));
*/

/*
    4==============> object // reference type


    
    let user = {
    name: "Sabbir",
    age: 20,
    hobby: "Learing",
} // object

console.log(user);
console.log(user.name); // dot notateion
console.log(user["name"]); // braket notation
*/

/*
    5==============> array // reference type

    let friends = ['sabbir', 'sohid', 'rohim'];
    console.log(friends);
    console.log(friends.length);
    console.log(friends[2]);
    console.log(typeof(friends));
*/


/*
    6==============> function // reference type

    function showMyName(name) { // name parametar 
        console.log(`My name ${name}`);
    }
    
    showMyName("Sabbir"); // Sabbir argument 
    showMyName("Rohim"); // Sabbir argument 

    function sum(a, b) {
        return a+b;
    }
    
    const oldTime = performance.now();
    console.log(sum(12,32323212333333333333333333333333333));
    const newTime = performance.now();
    console.log(((newTime - oldTime) / 1000) % 60);
*/

/*
    7==============> template literals
    
    let name = 'Sabbir';
    console.log(`My name is ${name}`);
    console.log(`my name is sabbir
    my age 20
    `);
*/
    
/*
    8==============> excersize


*/

let person = {
    name: "Sabbir",
    age: 20,
    homeAddress: {
        village: "Fullbari",
        lat: 212,
        logn: 323,
    },
    friends: ['jodu', 'modu', 'kudu']
}

// console.log(person);