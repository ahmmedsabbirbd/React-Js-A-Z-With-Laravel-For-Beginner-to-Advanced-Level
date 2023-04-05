/*
    1==============> String Basics

    let contry = "Bangladesh";
    console.log(contry);
    console.log(typeof(contry));  // typeof
    console.log(contry[4]);  // word in work
    console.log(contry.charAt(4));  // word in work
*/
    
/*
    2==============> String Methods: CharAt, toUpperCase, toLowerCase, includes, startWith, endsWith

     
    let message = "Hi my name is Sabbir";
    console.log(message);
    console.log(message.charAt(1));
    console.log(message.toUpperCase());
    console.log(message.toLocaleLowerCase());
    console.log(message.includes('s'));
    console.log(message.startsWith('Hi'));
    console.log(message.endsWith('abbir'));
*/


/*
    3==============> Sting Methods: Search, IndexOf, LastLindexOf
 
    let message = "Hi my name Hi is Sabbir";
    console.log(message.search("Hi"));
    console.log(message.search("my"));
    console.log(message.indexOf("my"));
    console.log(message.lastIndexOf("Hi"));
*/


/*
    4==============> String Method: toString, Concat, split

    let message = "Hi my name Hi is Sabbir";
    let temp = [1, 3, 4];
    console.log(temp.toString());
    console.log(typeof temp.toString());

    let fname = "Sabbir";
    let lname = " Ahmmed";

    console.log(message.split(" "));

    console.log(fname.concat(lname));
*/

/*
    5==============> String Method: slice, subStr, subString

    let message = "Hi my name Hi is Sabbir";
    console.log(message.slice(3,8));
    console.log(message.slice(3));
    console.log(message.slice(-5));
    
    console.log(message.substring(0, 3));
    console.log(message.substr(0, 3));
*/

/*
    6==============> Escape Sequences
    let message = "My name \\ is's \n sabbir"; // \n
    console.log(message);
*/

/*
    7==============> String Immutability
*/
let names = "Sabbir Ahmmed";
names[0] = "s"; // is not working
names = "sabbir Ahmmed";

console.log(names);