let colors = ["red", "green", "red", "gray", "black", "green"];

let colorCount = colors.reduce((acc,color) =>{
  acc[color] = (acc[color] || 0) + 1;

  // acc[color] ? acc[color] ++ : acc[color] = 1;
   return acc
},{})

console.log(colorCount);





// let colorCount = {};

// for(let i=0;i<colors.length;i++){
//   let color = colors[i];
//   if(colorCount[color]){
//     colorCount[color]++
//   }
//   else{
//     colorCount[color] = 1;
//   }
// }

// console.log(colorCount);


// let arr = [5,3,9,6,10]

// arr.sort((a,b) =>a - b )
// // arr.sort((a,b) => a > b? 1 : -1 )

// console.log(arr);

// a - b  → small to big
// b - a  → big to small


// let arr =[8,6,3,2]

// arr.sort()
// console.log(arr);


// sort original mai change krta he copy array nhi banata


// let arr = [2, 3, 10, 5, 1];
// // reduce method

// let ans = arr.reduce((acc,Val) => acc + Val, 0 )

// console.log(ans);


// let sum = 0 ;
// arr.forEach(x => sum +=x);
// console.log(sum);


// ------------------------------------------------
// let products = [
//   {
//     id: 101,
//     title: "Mobile",
//     price: 500,
//     colors: ["red", "black", "green", "black"],
//   },
//   {
//     id: 102,
//     title: "Laptop",
//     price: 15000,
//     colors: ["gold", "gray", "green"],
//   },
//   {
//     id: 103,
//     title: "Airpod",
//     price: 300,
//     colors: ["black", "red", "white"],
//   },
// ];



// let colorProduct = products.filter(product => product.colors.find( color => color == "black"))

// console.log(colorProduct);


// let priceProduct = products.filter(product => product.price <1000 )

// console.log(priceProduct);

// find ko ager array mai se jo dhund rha wo mil jaye tou bahir a jata aage check nhi krta aur ye humesha single value return krta he 
// or ye hota bhi boolean he ya true ya false