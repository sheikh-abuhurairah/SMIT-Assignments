if(true){
    let a =10;
}
// console.log(a);

console.log(typeof NaN);

console.log([] + 1);


// const map  = new Map()
// let arr = [1,2,3,4]
// map.set("name","saffwan")
// map.set(arr ," 18")

// console.log(map.get("name"));
// console.log(map.get(arr));


// const map = new Map()

// map.set = 


// let arr = [1, 1, 2, 3, 4, 5];

// let result= new Set(arr)
// console.log(result);


// let obj = {
//     name:"SAffwan",
//     address: {
//         city : "karachi"
//     }
// }

// // let obj2 = {...obj}
// // let obj2 = JSON.parse(JSON.stringify(obj))
// let obj2 = structuredClone(obj)

// obj2.address.city = "pakistan";

// console.log(obj);
// console.log(obj2);



// const userOne = {
//   name: "Umair",
//   age: 20,
//   greet: function (x, y) {
//     console.log("Hello", x, y);
//     console.log(this.name);
//   },
// };

// const userTwo = {
//   name: "Ali",
//   age: 40,
// };

// userOne.greet.call(userTwo,3,4)
// userOne.greet.apply(userTwo,[2,3])
// let fn = userOne.greet.bind(userTwo)

// fn(2,3)

// console.log(userOne);
// console.log(userTwo);





// function  j(){
// console.log(arguments);
// for(let x of arguments){
//     console.log(x+10);
    
// }
// }
// j(8,9,9,9)



// // function hell(){
// //     console.log("hello",this);
    
// // }
// // hell()

// let user = {
//   name: "Ahmed",
//   age: 22,
//    fn : function hell() {
//     console.log("hello",this.name
//     );
    
//    }
// }
// user.fn()


// for(let x in user){
//     console.log(x,user[x]);
    
// }

// let arr  = [1,2,3,4]
// for(let x of arr){
//     console.log(x);
    
// }

// let product = {
//   id: 1001,
//   title: "Mobile",
//   quantity: 2,
//   status: true,
// };

// let {...rest} = product

// console.log(rest);




// let arr = [2,34,5,8]

// let arr2 = [...arr]
// arr2[0] = 22

// console.log(arr2);




// let colors = ["red", "green", "red", "gray", "black", "green"];

// let result = colors.reduce((acc,color)=> {
//     acc[color] =(acc[color] || 0) + 1;
//     // if(acc[color]){
//     //     acc[color] ++
//     // }
//     // else{
//     //     acc[color] =1;
//     // }

//     return acc
// } ,{})

// console.log(result);




// let arr = [9,3,8,5,11]
 
// let result =  arr.sort((a,b) => b - a)
// console.log(arr);

// console.log(result);





// let result = arr.reduce((acc,val) =>{
//      return acc += val;
// },0)
// console.log(result);



// for(let i=0;i<arr.length;i++){
//     sum  = sum + arr[i]
// }

// console.log(sum);



// let rangeproducts = products.filter( p => p.price < 1000)
// console.log(rangeproducts);



// let marks = [2,3,4,5]

// let modifiedMarks = marks.filter( m => m<4).map(m => m + 10)
// // let modifiedMarks = marks.map( m => (m<4)? m+10 : m )

// console.log(modifiedMarks);




// let fn=   (x,y) => x+y;
   
// let result =  fn(4,4)

// console.log(result);

 


// const now = document.querySelector("p")

// now.innerText = "hello i am";
// console.log(now.getAttribute("href"));

// now.setAttribute("style","color:green")

// now.classList.add("hello")





// console.log("Start");

// function delayedGreeting() {
//   console.log("Hello, world!");
//   alert("Hello");
// }

// setTimeout(delayedGreeting, 2000);

// console.log("End");

// let now  =new Date()

// console.log(now.getDate());
// console.log(now.getMilliseconds());


// let now2 = new Date("17 september 2006")

// console.log(now2.getDay());




// let nums = 7.488

// console.log(Math.round(nums));
// console.log(Math.floor(nums));
// console.log(Math.ceil(nums));
// console.log(nums.toFixed());



// console.log(Math.floor((Math.random()* 10  ) +1) );


// console.log(Math.PI.toFixed(2));






// function hello(x){
//     console.log(x,"hello");
//     return x+x+x
// }
// console.log(hello(3));




// let arrr = [2,3,5]

// let arr2 = arrr

// arr2[0] = 1

// console.log(arrr);
// console.log(arr2);



// var x= 10;

// var y = x;

// y = 12;

// console.log(x);
// console.log(y);




// || ko ager truty value mil jaye gi tou wohi print kr de ga ager na mile tou last wali
// && ko ager falsy value mil jaye tou wohi print kr dega nhi otu last wali 

// var result = 2 && undefined 

// console.log(result);




// var students = [
//     {
//         name: "Ahmed",
//         marks: 80,
//         atten: true
//     },
//     {
//         name: "Ali",
//         marks: 40,
//         atten: false
//     }
// ];

// console.log(students[0].marks);



// flag concept
// var nums = [3, 7, 9, 11, 14];
// numtocheck = 1

// let  isFound = false;

// for(let i=0;i<nums.length;i++){
//     if(nums[i]=== numtocheck){
//         isFound = true
//     }
// }
// if(isFound){
//     console.log("found");
    
// }
// else{
//     console.log("not found");
    
// }

// var x = 10
// console.log(++x);



// var fruits = ["apple","mango","banana"]

// console.log(fruits.toString());
// console.log(fruits.join("*"));

// fruits.unshift("kelaa")
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
    
// }



// var marks  =  [10, 20,30,40,50] 
 
// marks.shift()
// marks.unshift( 10)
// marks.pop()
// marks.push(50)
// marks.splice(0,1,70)

// console.log(marks);




// var obj = {
//     name:"Saffwan",
//     age : 12
// }

// console.log(obj.age);


// var arr = [2,3,3,4]

// console.log(arr[1]);
// console.log(arr.length);


// var t1 = 10;

// var t2 = "10";

// if (t1 === t2) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// var t1 = "   ahmed    "

// console.log(t1.trim());
// console.log(t1.toLowerCase());
// console.log(t1.toUpperCase());