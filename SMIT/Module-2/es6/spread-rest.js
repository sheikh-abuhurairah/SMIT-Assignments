// ===============================
// Array Destructuring Examples
// ===============================

let marks = [19,20,30];
let [,,third] = marks;

console.log(third);


// let [first,...rest] = marks

// console.log(first,second,third);

// console.log(rest);





// ===============================
// Rest Destructuring Examples 
// ===============================
// Rest left side pe ata aur ye jo likha ho ga usko chor ke baki sab le aye ga or ye return
//  bhi wohi kare jo var ho ga
// let product = {
//   id: 1001,
//   title: "Mobile",
//   quantity: 2,
//   status: true,
// };

// let {title,id,status,...rest} = product
// console.log(title);

// console.log(rest);



// ===============================
// Object Destructuring Examples
// ===============================

// let product = {
//   id: 1001,
//   title: "Mobile",
//   quantity: 2,
//   status: true,
// };

// let {title,status} = product

// console.log(title,status);




// Traditional way (without destructuring)
// let title = product.title;
// let qty = product.quantity;
// console.log("Title:", title);
// console.log("Qty:", qty);



// this is spread.Spread kisi array ya obj ki ek ek value kr ke new var mai dalta he or ye right side
//  mai use hota 
// ===============================
// Spread Operator with Objects
// ===============================
let obj1 = {
    name: "Saffwan",
    Age: 20
}
let obj2 = {...obj1}

obj1.name= "Ali"
console.log(obj1);
console.log(obj2);

// let obj1 = {
//     name: "Saffwan",
//     Age: 20
// }
// let obj2 = obj1

// obj1.name= "Ali"
// console.log(obj1);
// console.log(obj2);


// ===============================
// Spread Operator with Arrays
// ===============================

// let arr1 = [2, 4, 5];

// Copying array using spread
// let arr2 = [...arr1];

// arr2[0] = 99;

// console.log("Original Array:", arr1);
// console.log("Modified Copy:", arr2);