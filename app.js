// exercise 01
var University = /** @class */ (function () {
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
        this.name = name;
        this.dept = dept;
    }
    University.prototype.graduation = function (year) {
        console.log("Graduating " + this.dept + " " + year + " students");
    };
    return University;
}());
var miu = new University("MIU", "MSD");
miu.graduation(2021);
;
var account = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
;
var myself = {
    name: "John",
    bankAccount: account,
    hobbies: ["violin", "cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
//exercise 03
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log(this.name + " is saying: Toooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car('BMW');
car.honk(); //BMW is saying: Toooooooot!
console.log(car.acceleration); //0
car.accelerate(60);
console.log(car.acceleration); // 60
var obj = {
    width: 0,
    length: 0
};
var rectangle = Object.create(obj);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize()); //
