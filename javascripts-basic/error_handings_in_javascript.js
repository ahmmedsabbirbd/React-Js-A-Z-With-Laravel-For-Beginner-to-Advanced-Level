/*
    7==============>  defrent type of errors in js

    /* 1====> let java Is Fun = true; 
    // Uncaught SyntaxError // when mistek SyntaxError in javascript then show this error;
    */

    /* 2======> console.log(javaIsFun); 
    // Uncaught ReferenceError // when mistek delclare variable then show this error
    */

    /* 3========> // Uncaught TypeError 
    // jeta somvob na set korble ai error dey
    const value = true;
    console.log(value.toLocaleLowerCase()); */


/*
    8==============>   exercise throw custom error objects

const div = (a, b) => {
    if(b === 0) {
        // throw new Error("Second Parametor is not allow zeroooooooooooo"); // one Way
        throw new SyntaxError("Second Parametor is not allow zeroooooooooooo"); // one Way
    }

    return a / b;
};

console.log(div(10, 0));
*/ 

/*
    9==============>  handle errors with try, cath, and finlay block
*/
// try { } // er moddhe kono error takle
// catch(e) {} // er moddhe dekhabe
// finally {} // error na takle ei khane asebe

const div = (a, b) => {
    if(b === 0) {
        // throw new Error("Second Parametor is not allow zeroooooooooooo"); // one Way
        throw new SyntaxError("Second Parametor is not allow zeroooooooooooo"); // one Way
    }

    return a / b;
};

try {
    console.log(div(4, 0));
} catch(e) {
    console.log(e.name); // line number show
    console.log(e.message); // show message
} finally {
    console.log("Sob kichu tik tak kaj korchea");
}

console.log('Hi');


/*
    10==============>  end of javascript fundamental section
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