console.log("Hello");


function calculator(a,b,c,fn){

     return fn(a,b,c)
}
function sum(a,b,c){
    return a + b + c;
}
function sub(a,b,c){
    return a - b - c;
}
function mul(a,b,c){
    return a * b * c;
}
function div(a,b,c){
    return a / b / c;
}

let sumResult = calculator(3,3,3,sum)
console.log(sumResult);

let subResult = calculator(3,3,3,sub)
console.log(subResult);

let mulResult  =  calculator(3,3,3,mul)
console.log(mulResult);

let divResult  =  calculator(3,3,3,div)
console.log(divResult);



let num = 7.4444

console.log(Math);
console.log(Math.round(7.4)) ; // 7
console.log(Math.round(7.6)) ; // 8
console.log(Math.round(7.5)) ; // 8
console.log(Math.ceil(7.2)) ; // 8
console.log(Math.floor(7.8)) ; // 7
console.log(num.toFixed(1)); // 7.4
console.log(num.toFixed(2 )); // 7.44                                   



console.log(Math.random());
console.log(Math.random() * 100 + 1);
console.log(Math.floor(Math.random()*10 ) + 1);
console.log(Math.floor(Math.random()*100 ) + 1);


console.log(Math.PI);




