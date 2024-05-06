// matlab ek esi property jis ki multiple values ho sakti ho
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role["user"] = "user";
})(Role || (Role = {}));
let admin = {
    name: "nehal",
    email: "abc@gmail.com",
    pass: 123,
    role: Role.admin,
};
let user = {
    name: "john",
    email: "xyz@gmail.com",
    pass: 456,
    role: Role.user,
};
const isAdmin = (element) => {
    const { name, role } = element;
    if (role === "admin") {
        return `${name} is allow to edit the website`;
    }
    else {
        return `${name} is not admin`;
    }
};
console.log(isAdmin(admin));
console.log(isAdmin(user));
export {};
