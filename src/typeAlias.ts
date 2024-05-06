// type alias means object ka type ko ak bar define kr na or multiples time use krna

// this is old and to eliminate this technique, we use type alias

let myobj: { name: string; class: string; age: number; isStudent: boolean } = {
  name: "nehal",
  class: "fsc",
  age: 19,
  isStudent: true,
};

// using type alias

type Information = {
  name: string;
  class: string;
  age: number;
  isStudent: boolean;
};

let aliasObj: Information = {
  name: "nehal",
  class: "fsc",
  age: 19,
  isStudent: true,
};

console.log(aliasObj.name)
