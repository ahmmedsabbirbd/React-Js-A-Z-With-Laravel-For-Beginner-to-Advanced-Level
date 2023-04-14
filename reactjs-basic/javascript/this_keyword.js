const Mango = {
    color: "Red",
    price: 120,
    weight: 120,
    about: function () {
        return "This mango price "+ this.price + "  USD"
    },
    about2: function () {
        return `This mango price ${this.price}  USD`
    },
}

console.log(Mango.about());
console.log(Mango.about2());