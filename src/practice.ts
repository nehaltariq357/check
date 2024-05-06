// practicing version # 1 to 4

import { publicDecrypt } from "crypto";

// parent class

class Parent {
  constructor(
    public constName: string,
    public constAge: number,
    public constBoolean: boolean
  ) {}

  ParentMethod() {
    return `hi my name is ${this.constName} and my age is ${this.constAge} and today is sunday ${this.constBoolean}`;
  }
}

const check: Parent = new Parent("nehal", 19, true);
console.log(check.ParentMethod());

// next we inheriting

// child class

class Child extends Parent {
  constructor(
    public city: string,
    constName: string,
    constAge: number,
    constBoolean: boolean
  ) {
    super(constName, constAge, constBoolean);
  }

  ChildMethod() {
    return `${super.ParentMethod()} and my city is ${this.city}`;
  }
}

const check2: Child = new Child("karachi", "nehal", 19, true);
console.log(check2.ChildMethod());



//// some changes
