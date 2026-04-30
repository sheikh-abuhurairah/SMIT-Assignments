// console.log("hello World");


// keyfucntion  name  (parameters)
// function     print ()            {
//  block of code
// } 
//      (Argument)
// print()


function print(ind, name) {
    console.log(ind, `Hello ${name}`);
}

print(1, "Ali")
print(2, "Ahemd")
print(3, "Mujtaba")


























let products = [{
    id: 101,
    title: "Airpod",
    variations: [
        { id: 1, prize: 300, color: "black", quantity: 5, },
        { id: 2, prize: 400, color: "green", quantity: 3 },
        { id: 3, prize: 500, color: "blue", quantity: 4 },
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
        { id: 1, prize: 3300, color: "blue", quantity: 2 },
        { id: 2, prize: 4400, color: "red", quantity: 10 },
        { id: 3, prize: 5500, color: "green", quantity: 10 },
    ],
    reviews: [
        { id: 1, user: "Ali", rating: 4.5, status: true },
        { id: 2, user: "Taha", rating: 1.5, status: false },
        { id: 3, user: "Ahmed", rating: 5, status: false },
        { id: 3, user: "Ahmed", rating: 5, status: false },
    ]
},
]



// let product = products[0]  


function countreviews(reviews) {
    // console.log(reviews.length);
    return reviews.length
}



function totalquantity(variations) {
    let totalquantity = 0;
    for (let i = 0; i < variations.length; i++) {
        totalquantity = totalquantity + variations[i].quantity;
    }
    // console.log(`Total Quantity: ${totalquantity}`);
    return totalquantity
}




function display(id) {
    console.log(`Product: ${product.id} Product Reviews: ${countreviews(product.reviews)} Total Quantiy: ${totalquantity(product.variations)} `);

}


for(let i=0;i<products.length;i++){
     product = products[i]
    display(product)
}