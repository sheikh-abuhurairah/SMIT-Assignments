function sum(...rest){
 return rest.reduce( (acc,val) =>{
     return acc + val},0 )
}
console.log(sum(2,3,8,9));




// function sum (){
//     console.log(arguments);
//     for(let x of arguments){
//         console.log(x);
        
//     }
    

// }
// sum(3,34,4)

// --------------------------------------------

// (function sum(x) {
//       console.log(x,"IIFE executed");
// }) (5);


// ---------------------------------------------
// block of code mai bana hua var se variable 
// bahir access ho ga  let aur const se nhi hoga 
// if(true) {
//     var x= 10;
//     let y =11;
// }
// console.log(x);
// console.log(y);



// ------------------------------------------------
//  var let const kuch bhi function ke andar hoga wo
//  bahir access nhi ho sake ga
// say()

// function say(){
//     console.log("hello");
//     var x = 10
    
// }
// console.log(x);


// -----------------------------------------------------
// var is function scoped let and const are blocked scope 

// console.log(x);
// console.log(y);


// let x =10;

// var  y = 10;




// ----------------------------------------------------

// function hello(x = "Guest") {
// console.log(x);

// }

// hello()

// ----------------------------------------------------

//  let key = "city"

// const user = {
//   name: "Umair",
//   [key]: "Pakistan"
// };

// console.log(user)

// -----------------------------------------------------

// nullish colescing

// const user ={age:undefined};
// user.age =0

// console.log(user.age || 2);

// console.log(user.age ?? 2);


// ---------------------------------------------------------

// optional chaining

// let obj ={};

// console.log(obj.user?.address);

// ----------------------------------------------------------

// let arr = [2,3,4,5,6];

// let result = arr.findIndex(x => x === 4)

// console.log(result);

// -------------------------------------------------------------
// // in freeze hum kuch bhi change nhi kr skte na 
// let obj1 = {name:"Saffwan"}
// Object.freeze(obj1)

// obj1.name = "ALi"
// console.log(obj1);
// // in seal hum update kr skte add or del nhi kr skte
// let obj2 = {age:20}
// Object.seal(obj2)

// obj2.age = 21;
// obj2.name = "JF"

// console.log(obj2);


// ---------------------------------------------------------------
// let arr1 = [2,3];
// let arr2 = [4,5];

// let arr3 = [...arr1,...arr2]
// // let arr3 = arr1.concat(arr2)
// console.log(arr3);

// let obj1 = {name:"Saffwan"};
// let obj2 = {age: 20};

// // let obj3 = {...obj1,...obj2}
// let obj3 = Object.assign(obj1,obj2)
// console.log(obj3);



// ------------------------------------------------------------------------

// deep copy krne ke 2 tareeqy he
// let userone = {
//     name: "Safffwan",
//     age: 18,
//     address: {
//         country: "Pakistan"
//     }
// };

// let usertwo = JSON.parse(JSON.stringify(userone));
// let usertwo = structuredClone(userone)

// usertwo.address.country = "US"
// usertwo.name = "Ali"
// console.log(userone);
// console.log(usertwo);


// spread Ope is Doing only shallow copy ye deep ya nested ja ke copy nhi kr sktaa
// let userone = {
//     name: "Safffwan",
//     age: 18,
//     address: {
//         country: "Pakistan"
//     }
// }

// // let usertwo = { ...userone };
// // is trah hum nested ko copy kr skte he 
// let usertwo = { ...userone,address:{...userone.address} };

// usertwo.name = "ALi"
// usertwo.address.country = "US"
// console.log(userone);
// console.log(usertwo);


// -----------------------------------------
// function greet (a,b) {
//     console.log("Hello",a,b, this);
// }

// let user = {
//     name :"saffwan",
//     age : 28
// }

// greet.call(user,3,4)
// greet.apply(user,[4,5])
// let fn = greet.bind(user)
// fn(5,6)