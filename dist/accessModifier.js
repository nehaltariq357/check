// access modifier are three types
//-- public (it like default accessible all , means parent class child class and outside class)
//--protected(it is acceessible in parent class and child class)
//--private(it is private it is accessible only parent class)
// #3
// and applying here access modifier
//parent class
class Parent {
    name;
    age;
    hobby;
    constructor(constName, constAge, constHobby) {
        this.name = constName;
        this.age = constAge;
        this.hobby = constHobby;
    }
    introduce() {
        return `hi my name is ${this.name} and my age is ${this.age} and my hobbies are ${this.hobby}`;
    }
}
// child class
class Child extends Parent {
    city;
    constructor(constCity, constName, constAge, constHobby) {
        super(constName, constAge, constHobby);
        this.city = constCity;
    }
    methode() {
        return ` ${super.introduce()} and my city name is ${this.city}`;
    }
}
const parentVar = new Parent("nehal", 19, ["reading", "writing"]);
console.log(parentVar.introduce());
const childVar = new Child("karachi", "dell", 80, ["coding", "writing"]);
console.log(childVar.methode());
export {};
