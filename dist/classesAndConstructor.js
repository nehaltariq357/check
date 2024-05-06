// class should be begin with capital letter #1
class Person {
    name = "nehal";
    age = 19;
    hobby = ["coding", "playing"];
}
const result = new Person();
console.log(result.hobby);
// this is right way this define class and constructor
class Myclass {
    name;
    age;
    hobby;
    constructor(constName, constAge, constHobby) {
        this.name = constName;
        this.age = constAge;
        this.hobby = constHobby;
    }
}
const check = new Myclass("nehal", 19, ["coding", "playing"]);
const check2 = new Myclass("dell", 44, ["reading", "writing"]);
console.log(check, check2);
export {};
