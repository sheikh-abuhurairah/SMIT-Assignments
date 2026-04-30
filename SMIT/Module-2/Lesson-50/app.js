// method
// const user = {
//   name: "Umair",
//   greet: () => {
//     console.log(this); // undefined
//   }
// };


// user.greet()



// ----------------------------------------------
const userOne = {
  name: "Umair",
  age: 20,
  greet: function (x, y) {
    console.log("Hello", x, y);
    console.log(this.name);
  },
};

const userTwo = {
  name: "Ali",
  age: 40,
};

userOne.greet.call(userTwo,3,4)
userOne.greet.apply(userTwo,[2,3])
let fn = userOne.greet.bind(userTwo)

fn(2,3)

// ------------------------------------------------

// function greet (){
//     console.log("Hloooo", this);
    
// }
// const user = {
//   name: "Umair",
//   age: 20,
//   greet: function () {
//     console.log("Hello",this.name   );
//   },
// };
// greet()
// user.greet()




// --------------------------------------

// if function is inside object then it is called method;


// ---------------------------------------
// first one to make object
// let user = {
//   "full name": "Ahmed Ali",
//   name: "Ahmed",
//   age: 22,
// };

// console.log(user["full name"]);
// user.status = true;
// delete user.status
// console.log(user);

// // second one to make object
// let std = new Object();

// std.age = 20;
// std.name = "Saffwan"

// console.log(std);

// ------------------------------
// let user = {
//   name: "Ahmed",
//   age: 22,
// };

// let keys =  Object.keys(user)
// let values = Object.values(user)

// console.log(keys);
// console.log(values); 

// for(let x of keys ){
//     console.log(x,user[x]);
    
// }

// ------------------------------
// let arr = [2,3,4,5];

// // short method 
// for(let x of arr){
//     console.log(x);
    
// }

// normal 
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }