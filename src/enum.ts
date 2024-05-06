// matlab ek esi property jis ki multiple values ho sakti ho

// example i have website i want to excess of my website only one person so i give admin option one person here i use enum , exp

type Properties = {
  name: string;
  email: string;
  pass: number;
  role: Role;
};

enum Role {
  admin = "admin",
  user = "user",
}

let admin: Properties = {
  name: "nehal",
  email: "abc@gmail.com",
  pass: 123,
  role: Role.admin,
};

let user: Properties = {
  name: "john",
  email: "xyz@gmail.com",
  pass: 456,
  role: Role.user,
};


const isAdmin = (element:Properties)=>{
const {name,role} = element
if(role === "admin"){
 return `${name} is allow to edit the website`
}else{
return  `${name} is not admin`
}
}

console.log(isAdmin(admin))
console.log(isAdmin(user))



//// some changes







