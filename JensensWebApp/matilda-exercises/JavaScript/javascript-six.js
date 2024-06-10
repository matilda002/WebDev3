class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    getCarInfo (){
        return `- Car details -\nMaker: ${this.make}\nModel: ${this.model}\nYear: ${this.year}`
    }
}

const carOne = new Car("Volvo", "V70", "2008")
const carTwo = new Car("BMW", "420", "2022")
const carThree = new Car("Ferrari", "308", "2018")

console.log(carOne.getCarInfo())
console.log(carTwo.getCarInfo())
console.log(carThree.getCarInfo())