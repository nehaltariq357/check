// class should be begin with capital letter #1

class Person {
  name: string = "nehal";
  age: number = 19;
  hobby: string[] = ["coding", "playing"];
}

const result: Person = new Person();
console.log(result.hobby);

// this is right way this define class and constructor


class Myclass {
  name: string;
  age: number;
  hobby: string[];

  constructor(constName: string, constAge: number, constHobby: string[]) {
    this.name = constName;
    this.age = constAge;
    this.hobby = constHobby;
  }
}

const check: Myclass = new Myclass("nehal", 19, ["coding", "playing"]);
const check2: Myclass = new Myclass("dell", 44, ["reading", "writing"]);
console.log(check,check2)
