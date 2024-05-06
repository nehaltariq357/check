function add(a) {
    console.log(typeof a);
}
const result = add("hello");
const check = (a, b, C, D) => {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof C);
    console.log(typeof D);
    const result1 = check(5, "hello", true, false);
};
export {};
// this is generics where type is auto decleard it is alternative to union and intersection
