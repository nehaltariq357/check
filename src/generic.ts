function add <T>(a:T){
console.log(typeof a)
}
const result = add("hello")

const check =<T,U,Y,S> (a:T,b:U,C:Y,D:S)=>{
  console.log(typeof a)
  console.log(typeof b)
  console.log(typeof C)
  console.log(typeof D)
const result1 = check(5,"hello",true,false)
}

// this is generics where type is auto decleard it is alternative to union and intersection