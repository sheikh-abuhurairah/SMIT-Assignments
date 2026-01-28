let products = [
    {
        id: 101,
        title: "Sony LED 40 inch",
        varations: [
            { id: 1, color: "black", price: 50000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
            { id: 3, color: "silver", price: 55000, quantity: 8 },
        ],
        reviews: [
            { id: 1, user: "Ahmad", rating: 4.0, status: true },
            { id: 2, user: "Zubair", rating: 4.5, status: false },
            { id: 3, user: "Ali", rating: 5.0, status: true }
        ]
    },
    {
        id: 102,
        title: "Mobile",
        varations: [
            { id: 1, color: "black", price: 50000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
            { id: 3, color: "silver", price: 55000, quantity: 8 },
        ],
        reviews: [
            { id: 1, user: "Ahmad", rating: 4.0, status: true },
            { id: 2, user: "Zubair", rating: 4.5, status: false },
            { id: 3, user: "Ali", rating: 5.0, status: true }
        ]
    }
];

const product = products[0];

// Q1: Get Product Title
console.log("Q1. Product Title:", product.title);

// Q2: Total Quantity of One Product
let totalQuantity = 0;
for (let variation of product.varations) {
    totalQuantity += variation.quantity;
}
console.log("Q2. Total Quantity:", totalQuantity);

// Q3: Average Rating of One Product
let sumRatings = 0;
for (let review of product.reviews) {
    sumRatings += review.rating;
}
const averageRating = sumRatings / product.reviews.length;
console.log("Q3. Average Rating:", averageRating.toFixed(1));

// Q4: Count Approved Reviews (status === true)
let approvedCount = 0;
for (let review of product.reviews) {
    if (review.status === true) {
        approvedCount++;
    }
}
console.log("Q4. Approved Reviews:", approvedCount);

// Q5: Most Expensive Variation
let maxPrice = 0;
for (let variation of product.varations) {
    if (variation.price > maxPrice) {
        maxPrice = variation.price;
    }
}
console.log("Q5. Highest Variation Price:", maxPrice);

// Q6: Total Quantity of All Products
let grandTotalQuantity = 0;

for (let prod of products) {
    for (let varation of prod.varations) {
        grandTotalQuantity += varation.quantity;
    }
}
console.log("Q6. Total stock across all products:", grandTotalQuantity);

// Q7: Average Rating Per Product
console.log("Q7. Average rating per product:");
for (let prod of products) {
    let sum = 0;
    for (let rev of prod.reviews) {
        sum += rev.rating;
    }
    const avg = (sum / prod.reviews.length).toFixed(1);
    console.log(`Product ${prod.id} = ${avg} (${prod.reviews.length} reviews)`);
}

// Q8: Product With Highest Stock
let highestStock = -1;
let highestProduct = null;

for (let prod of products) {
    let stock = 0;
    for (let v of prod.varations) {
        stock += v.quantity;
    }

    if (stock > highestStock) {
        highestStock = stock;
        highestProduct = prod;
    }
}

console.log(`Q8. Highest Stock Product: ${highestProduct.title} (${highestStock})`);


// Q9: Total Approved Reviews (All Products)
let totalApproved = 0;

for (let prod of products) {
    for (let rev of prod.reviews) {
        if (rev.status === true) {
            totalApproved++;
        }
    }
}
console.log("Q9. Total approved reviews:", totalApproved);
