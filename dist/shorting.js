// shorthand property for defining class #4
class Parent {
    constName;
    constAge;
    constHobby;
    constructor(constName, constAge, constHobby) {
        this.constName = constName;
        this.constAge = constAge;
        this.constHobby = constHobby;
    }
    ParentMethod() {
        return `hi my name is ${this.constName} and my age is ${this.constAge} and my hobbies is ${this.constHobby} `;
    }
}
const show = new Parent("nehal", 19, ["reading", "writing"]);
console.log(show.ParentMethod());
// inheritning
class Child extends Parent {
    childGrade;
    constructor(constName, constAge, constHobby, childGrade) {
        super(constName, constAge, constHobby);
        this.childGrade = childGrade;
    }
    childMethode() {
        return `${super.ParentMethod()}and my grade is ${this.childGrade}`;
    }
}
const showChild = new Child("dell", 44, ["coding", "hanging"], 5);
console.log(showChild.childMethode());
export {};
