// shorthand property for defining class #4

class Parent {
  constructor(
    public constName: string,
    public constAge: number,
    public constHobby: string[]
  ) {}
  ParentMethod() {
    return `hi my name is ${this.constName} and my age is ${this.constAge} and my hobbies is ${this.constHobby} `;
  }
}

const show: Parent = new Parent("nehal", 19, ["reading", "writing"]);
console.log(show.ParentMethod());

// inheritning

class Child extends Parent {
  constructor(
    constName: string,
    constAge: number,
    constHobby: string[],
    public childGrade: number
  ) {
    super(constName, constAge, constHobby);
  }
  childMethode() {
    return `${super.ParentMethod()}and my grade is ${this.childGrade}`;
  }
}

const showChild: Child = new Child("dell", 44, ["coding", "hanging"], 5);
console.log(showChild.childMethode());


