/*
    1==============> for loop

    for(let i=0; i < 10; i++) {
            console.log("My name is Sabbir");
    }

    for(let i=10; i >= 0; i--) {
        console.log("My name is Sabbir");
    }
*/
    
/*
    2==============> while loop
    
    let i = 1;
    while(i < 10) {
        console.log("hi");
        i++;
    }
*/

/*
    3==============> do while loop  
    
    let i = 1;
    do {
        console.log("hi");
        i++
    }while(i < 5);
*/

/*
    4==============> for in loop

    
    const objs = {
        name: "Sabbir", 
        age: 10,
    }

    for(let key in objs) {
        console.log(key+": "+objs[key]);
    }

    const numbers = [1, 2, 4, 5, 6];
    for(let key in numbers) {
        console.log(key+": "+ numbers[key]);
    }
*/

/*
    5==============> for of loop

    const numbers = [1, 2, 4, 5, 6];
    
    for(let number of numbers) {
        console.log(number);
    }
*/

/*
    6==============> breack an dcontinue

    
    for(let i=1; i<=10; i++) {
        console.log(i);

        if(i == 5) {
            break;
        }
    }

    for(let i=1; i<=10; i++) {
        if(i == 5) {
            continue;
        }
        
        console.log(i);
    }
*/

/*
    7==============> infinite loops

    for(let i=1; ; i++) {
        console.log(i);
    }
*/


/*
    8==============> nested loops
    
    for(let i=1; i< 10 ; i++) {
        for(let j=1; j < 10 ; j++) {
            console.log(j+i);
        }
}
*/