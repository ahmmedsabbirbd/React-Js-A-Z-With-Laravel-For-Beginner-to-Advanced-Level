class Fruit{

    constructor(name) {
        this.name = name;
    }

    getName (){
        console.log(this.name+" KIre");
    }

    static jackfruite() {
        console.log("it's static method");
    }
}

let addFruit = new Fruit("Mango");

addFruit.getName();

Fruit.jackfruite();