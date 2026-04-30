// var marks = +prompt("Enter Your Marks:");
var marks = 23;
if(marks >=80 && marks<=100){
    console.log("Your Grade is A+");
}
else if(marks >=70 && marks<=80){
    console.log("Your Grade is A");
}
else if(marks >=60 && marks<=70){
    console.log("Your Grade is B");
}
else if(marks >=50 && marks<=60){
    console.log("Your Grade is C");
}
else if( marks >=0 && marks <=50){
    console.log("You Are Fail");
}
else {
    console.log("You Entered Invalid Number");
}




// && > ||
// && false  value print ager nhi he to last wali / dono true honi chaye he
// || true  value print ager nhi he to last wali / ek true honi chaye he 

var result2 =  1 && 0 || 2 ;
console.log(result2);



var result = -0 || 2 || 1 ;

console.log(result);


// if(result){
//     console.log("TRUE");
    
// }
// else{
//     console.log("FAIL");
    
// }