// type alias means object ka type ko ak bar define kr na or multiples time use krna
// this is old and to eliminate this technique, we use type alias
let myobj = {
    name: "nehal",
    class: "fsc",
    age: 19,
    isStudent: true,
};
let aliasObj = {
    name: "nehal",
    class: "fsc",
    age: 19,
    isStudent: true,
};
console.log(aliasObj.name);
export {};
