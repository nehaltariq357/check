// inheritance means child class can access property , to their parents class #2

class Person {
  name: string;
  age: number;
  hobby: string[];

  constructor(constName: string, constAge: number, constHobby: string[]) {
    this.name = constName;
    this.age = constAge;
    this.hobby = constHobby;
  }

  introduce() {
    return ` my name is ${this.name} my age is ${this.age} and my hobbies is ${this.hobby}`;
  }
}

// here im inheriting person class into student class

class Student extends Person {
  grade: number;
  constructor(
    constGrade: number,
    constName: string,
    constAge: number,
    constHobby: string[]
  ) {
    super(constName, constAge, constHobby);
    this.grade = constGrade;
  }
  introduce(): string {
    return `${super.introduce()} and im in 12 grades`;
  }
}

const check: Person = new Person("nehal", 8, ["coding", "playing"]);
console.log(check.introduce());

const student: Student = new Student(90, "dell", 77, ["reading", "writing"]);
console.log(student.introduce())