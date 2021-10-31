// exercise 01
class University {
    constructor (public name:string, public dept:string){
        this.name = name;
        this.dept = dept;
    }
    graduation(year:number){
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}
let miu = new University ("MIU", "MSD");
miu.graduation(2021);

//exercise 02 
//Three methods can be used: 1. using interface 2. using object literal and 3. using type
interface bankAccount {
    money:number,
    deposit(value:number):void; 
     };

let account:bankAccount = {
    money: 2000,
    deposit (value){
        this.money += value;
    }
};

interface myself {
    name: string,
    bankAccount:bankAccount,
    hobbies:string[];
};

let myself:myself = {
    name: "John",
    bankAccount:account,
    hobbies:["violin", "cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);

//exercise 03
class Car {
    acceleration:number;
    constructor(public name:string){
        this.name = name 
        this.acceleration = 0;
    }
    honk():void {
        console.log(`${this.name} is saying: Toooooooot!`);
    }
    accelerate(speed:number):void{
        this.acceleration = this.acceleration + speed; 
    }

}

let car = new Car ('BMW');
car.honk(); //BMW is saying: Toooooooot!
console.log(car.acceleration); //0
car.accelerate(60);
console.log(car.acceleration);// 60
//exercise 04
//used object literal
interface baseObject{
    width: number;
    length:number; 
   
}
let obj:baseObject= {
    width:0,
    length:0
}

let rectangle = Object.create(obj);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function ():number {
    return this.width * this.length;
};

console.log(rectangle.calcSize());//10