/*
    1==============> object with dot bracket notation

    let user = {
        name: "sabbir",
        age: 20,
        class: 13
    }

    console.log(user);
    console.log(user.name); // dot notateion
    console.log(user["name"]); // breack notateion
*/

/*
    2==============>  // Javascript maipulation //adding, modifying deleting properties


    let user = {
        name: "sabbir",
        age: 20,
        class: 13,
        fullName: function() {
            console.log("hi");
        }
    }

    // add
    user.email = "ahmmedsabbirbd@gmail.com"; // dot
    user["isMarried"] = true;// bracket // i alwas use bracket notesion

    // udpate
    user["isMarried"] = false; // bracket

    // delete propverty
    delete user["email"]; // delete property
    delete user["fullName"]; // delete method


    console.log(user);
*/ 


/*
    3==============>  object methods this keyword
    
    let user = {
        name: "sabbir",
        age: 20,
        class: 13,
        fullName: function() {
            console.log("hi");
        },
        friends: ['sabbir', 'ahmmed'],
        selectColor: null,
        calculatorAge: function (){
            console.log(`Your age is ${this.age}`);
        }
    }
    user.calculatorAge();
*/

/*
    4==============>  traversing object entries

    let user = {
        name: "sabbir",
        age: 20,
        class: 13,
        friends: ['sabbir', 'ahmmed'],
        email: "ahmmedsabbirbd@gmail.com",
        selectColor: null,
        calculatorAge: function (){
            console.log(`Your age is ${this.age}`);
        }
    }

    // one way
    for(let key in user) {
        // console.log(`${key}: ${user[key]}`);
    }
    // two way
    console.log(Object.keys(user));
    console.log(Object.values(user));
    console.log(Object.entries(user)); // i think it's proper way

    for(let key of Object.keys(user)) {
        console.log(user[key]);
    }
*/

/*
    5==============>  execise total salary
*/

/*
    6==============>  object destructuring

    let user = {
        name: "sabbir",
        age: 20,
        class: 13,
        friends: ['sabbir', 'ahmmed'],
        email: "ahmmedsabbirbd@gmail.com",
        selectColor: null,
        calculatorAge: function (){
            console.log(`Your age is ${this.age}`);
        },
        favBook: {
            bookName: "Think and ",
            bookAuthor: "Sabbir "
        }
    }

    const {name, age, favBook} = user;
    const {bookName, bookAuthor} = favBook;

    console.log(name);
    console.log(favBook);

    console.log(bookAuthor);
*/

/*
    7==============>  cloning an object


    let user = {
        name: "sabbir",
        age: 20,
        class: 13,
        friends: ['sabbir', 'ahmmed'],
        email: "ahmmedsabbirbd@gmail.com",
        selectColor: null,
        calculatorAge: function (){
            console.log(`Your age is ${this.age}`);
        },
        favBook: {
            bookName: "Think and ",
            bookAuthor: "Sabbir "
        }
    }

    const copiedUser = {};
    for(let key in user) {
        copiedUser[key] = user[key];
    }

    console.log(copiedUser);

    const newWayToCoppy = Object.assign({}, user);
    console.log(newWayToCoppy);
*/

/*
    8==============>  math object
    
    console.log(Math.random())
*/

/*
    9==============>  json data format

    const user = {
        name: "Sabbir Ahmmed",
        age: 20
    }

    const objectToJsonData = JSON.stringify(user);
    console.log(objectToJsonData);

    const jsonToObjectData = JSON.parse(objectToJsonData);
    console.log(jsonToObjectData);
*/