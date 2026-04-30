let product = {
    title : "HeadPhones",
    variations : [
        {color:"black",price:4000,quantity:5},
        {color:"pink",price:3000,quantity:4},
        {color:"green",price:2000,quantity:3},
        {color:"blue", price:1000,quantity:2}
    ]
}

console.log(product);
console.log(product.variations[2].color);


let totalquantity = 0;

for(let i=0;i<product.variations.length;i++){
    totalquantity = totalquantity + product.variations[i].quantity;
}
console.log(totalquantity);


let totalPrice =  0;

for(let i=0;i<product.variations.length;i++){
    totalPrice = totalPrice + product.variations[i].price

}
console.log(totalPrice);


let totalcolor = 0;

for(i=0;i<product.variations.length;i++){
    if(product.variations[i].color){
        totalcolor++
    }
}

console.log(totalcolor);  

