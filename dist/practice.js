// practicing version # 1 to 4
// parent class
class Parent {
    constName;
    constAge;
    constBoolean;
    constructor(constName, constAge, constBoolean) {
        this.constName = constName;
        this.constAge = constAge;
        this.constBoolean = constBoolean;
    }
    ParentMethod() {
        return `hi my name is ${this.constName} and my age is ${this.constAge} and today is sunday ${this.constBoolean}`;
    }
}
const check = new Parent("nehal", 19, true);
console.log(check.ParentMethod());
// next we inheriting
// child class
class Child extends Parent {
    city;
    constructor(city, constName, constAge, constBoolean) {
        super(constName, constAge, constBoolean);
        this.city = city;
    }
    ChildMethod() {
        return `${super.ParentMethod()} and my city is ${this.city}`;
    }
}
const check2 = new Child("karachi", "nehal", 19, true);
console.log(check2.ChildMethod());
export {};
