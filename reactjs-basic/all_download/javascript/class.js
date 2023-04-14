class Fruit{

	constructor(name){
		this.name = name;
	}

	fol(){
		console.log(this.name+ ' Is too much tasty')
	}

	static jackfruite(){
		console.log('jackfruite is very popular Friute')
	}



}

let add = new Fruit('Mango');
add.fol();

Fruit.jackfruite();