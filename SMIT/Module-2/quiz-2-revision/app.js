// _.digiclub_
// digital302


let products = [{
    id: 101,
    title: "Airpod",
    variations: [
        { id: 1, prize: 30000, color: "black", quantity: 5, },
        { id: 2, prize: 40000, color: "green", quantity: 3 },
        { id: 3, prize: 50000, color: "blue", quantity: 4 },
    ],
    reviews: [
        { id: 1, user: "Ali", rating: 3.5, status: true },
        { id: 2, user: "Taha", rating: 4.5, status: true },
        { id: 3, user: "Ahmed", rating: 2.5, status: true },
    ]
},
{
    id: 102,
    title: "Mobile",
    variations: [
        { id: 1, prize: 33000, color: "blue", quantity: 2 },
        { id: 2, prize: 44000, color: "red", quantity: 10 },
        { id: 3, prize: 55000, color: "green", quantity: 10 },
    ],
    reviews: [
        { id: 1, user: "Ali", rating: 4.5, status: true },
        { id: 2, user: "Taha", rating: 1.5, status: false },
        { id: 3, user: "box", rating: 5, status: false },
    ]
},
]


let product = products[0];

// let totalquantity = 0;
// for (let i = 0; i < product.variations.length; i++) {
//     totalquantity += product.variations[i].quantity
// }
// console.log(totalquantity);

function totalquantity(product) {
    let totalquantity = 0;
    for (let i = 0; i < product.variations.length; i++) {
        totalquantity += product.variations[i].quantity
    }
    return totalquantity    
}

// console.log(`Total Quantatity: ${totalquantity(product)}`);



let text = "hello world"
let result =  text.replace("w", "l")
console.log(text);
console.log(result);
console.log(text.indexOf("world"));


let fruits = ["Apple", "mango", "banana","orange"]
let morefruits = fruits.slice(1,3)
console.log(fruits);
console.log(morefruits);



