// Arrow Function


let calc = (x,y,f) => f(x,y);

let sum = (x,y) => x + y;
let sub = (x,y) => x - y;
let mul = (x,y) => x * y;
let div = (x,y) => x / y;
let mod = (x,y) => x % y;

let result = calc(3,3,sum)
console.log(result);

// --------------------------------------------

// function calc(x,y,f){
//   return f(x,y);
// }
// function sum(x,y){
//     return x + y;
// }
// function sub(x,y){
//     return x - y;
// }
// function mul(x,y){
//     return x * y;
// }
// function div(x,y){
//     return x / y;
// }
// function mod(x,y){
//     return x % y;
// }
// let result = calc(3,3,mod)
// console.log(result);


// --------------------------------------------

// function calc(x,y,op){
//     if(op === "+"){
//         return x + y;
//     }
//     if(op === "-"){
//         return x - y;
//     }
//     if(op === "*"){
//         return x * y;
//     }
//     if(op === "/"){
//         return x / y;
//     }
//     if(op === "%"){
//         return x % y;
//     }
// }
// let result = calc(3,3,"*")
// console.log(result);


// --------------------------------------------

// let z = () => ({id:101,name:"Saffwan Ch"})

// let result = z()
// console.log(result);


// --------------------------------------------
// let z = () => [2,3,4]

// let result = z()

// console.log(result);


// --------------------------------------------
// let arrow =  (a,b) =>  a+b;


// let result = arrow(3,3)
// console.log(result);

// ----------------------------------------------
// let arrow =  (a,b) => {
//     return a+b
// }


// let result = arrow(3,3)
// console.log(result);


// -----------------------------------------------
// Normal Function

// function y(a){
//     console.log("Hello!");

//     return a
// }

// let result = y(3)
// console.log(result);
