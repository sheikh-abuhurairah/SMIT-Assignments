// console.log("Hello World");



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


let product = products[1]

console.log(product);

let totalquantity = 0;
for (let i = 0; i < product.variations.length; i++) {
    totalquantity += product.variations[i].quantity
}
console.log(totalquantity);


let apprvedreviews = 0;

for (let i = 0; i < product.reviews.length; i++) {
    if (product.reviews[i].status) {
        apprvedreviews++
    }
}
// Template Literal
console.log(`Approved Reviews: ${apprvedreviews}`);





