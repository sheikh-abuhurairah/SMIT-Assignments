/*************************************************
 * JavaScript Memory + Variables (Lecture Notes)
 *
 * Topics:
 * 1. Primitive vs Non-Primitive
 * 2. Stack vs Heap Memory
 * 3. var vs let vs const
 *************************************************/


// let and const are block scoped curly braces ke andar element sirf andar tuk hi rehta bahir nhi

// var mai curly braces ke bahir bhi active rehta 


var next = 20;

{
    console.log(next);
    var ok = 22;
    
}
console.log(ok);



let bye = "OK"

{
 let check = true;
 console.log(check);
    
    
}
// console.log(check);





{
const aa = 33;
console.log(aa);

}

// console.log(aa);




const arr1 = [1,2,3];

arr1[2] = 20;
// arr1= [2,4,4]

console.log(arr1);



let arr2 = [1,2,3];

arr2[2] = 20;
arr2 = [2,4,4]

console.log(arr2 );


let obj1 = {
    name:"Saffwan",
    age:19
}

var  obj2 = obj1;

// obj2.name ="ALi";


obj2 = {
    name:"Ali",
    age:18
}

console.log(obj1);
console.log(obj2);






/*
IMPORTANT:
const means:
- Reference cannot change
- Data inside CAN change (for objects/arrays)
*/

// primitive type stored in stack bcz stack only store single Value

// no primitive type stroed in heap bcz heap store multiple value and his reffernce (memory stored) in  stack



// primitive (basic data type ) : number , string , Boolean.

// no primitive (Reference type) : string , object , function.


/*************************************************
// const can not  be re decleared 
// const  can not be updated
// const mean Fix value that cant change 
*************************************************/

// const z = 20;
// const z = 10;
// z = 10;

// console.log(z);

/*************************************************
// let can not  be re decleared 
// let  can be updated 
*************************************************/

// let y = 10;
// let y = 20;

// y= 30;

// console.log(y);

/*************************************************
// var can be re decleared 
// var can be updated 
*************************************************/

// var x = 10;
 
// var x = 20;
// x = 30;

// console.log(x);
