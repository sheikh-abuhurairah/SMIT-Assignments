// let name = prompt("Enter student name");
// let marks = prompt("Enter marks");

// marks = Number(marks);
// let grade

// if(marks>= 80 && marks <= 100){
//     grade = "A";
// }
// else if (marks >=70 && marks <80){
//     grade  = "B"
// }
// else if (marks >=60 && marks <70){
//     grade  = "C"
// }
// else{
//     grade  = "Fail"
// }
// console.log(name + " grade is: " + grade);




let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i], "Even");
    }
    else {
        console.log(numbers[i], "Odd");
    }
}






let students = [
    { name: "Ali", marks: 85 },
    { name: "Ahmed", marks: 70 },
    { name: "Sara", marks: 90 },
    { name: "Usman", marks: 55 }
];


for (let i = 0; i < students.length; i++) {
    if (students[i].marks >= 80) {
        console.log(students[i].name + " Passed with High Marks");

    }
    else {
        console.log(students[i].name + " Need Improvement");

    }
}



// let names = ["Ali", "Ahmed", "Sara", "Usman"];
// let searchName = prompt("Enter name to search");
// let flag = false;


// for(let i=0;i<names.length;i++){
//     if(names[i] === searchName){
//         flag = true;
//     }
// }

// console.log(searchName, flag? "Found": "Not Found");






// let students2 = [
//     { name: "Ali", marks: 85 },
//     { name: "Ahmed", marks: 70 },
//     { name: "Sara", marks: 90 },
//     { name: "Usman", marks: 55 }
// ];

// let searchName2 = prompt("Enter student name to check grade");
// let flag2 = false;
// let grade;

// for (let i = 0; i < students2.length; i++) {
//     if (students2[i].name === searchName2) {
//         flag2 = true;
//         if (students2[i].marks >= 80 && students2[i].marks <= 100) {
//             grade = "A"
//         }
//         else if (students2[i].marks >= 70 && students2[i].marks < 80) {
//             grade = "B"
//         }
//         else if (students2[i].marks >= 60 && students2[i].marks < 70) {
//             grade = "C"
//         }
//         else {
//             grade = "Fail"
//         }
//     }
// }
// if(flag2){
//     console.log(searchName2 + " grade is: " + grade );
    
// }
// else{
//     console.log("Student Not Found");
    
// }





let num = [70,80,90,50,30,11100,99999999];

let highnum = 0;

for(let i=0;i<num.length;i++){
    if(num[i] > highnum){
        highnum = num[i];
    }
}
console.log(highnum);



let num2 = [99,88,77,66,77,112]

let smallnum = num2[0];

for(let i=0;i<num2.length;i++){
    if(num2[i]< smallnum ){
        smallnum = num2[i];
    }
}
console.log(smallnum);




let age = +prompt("Enter your age");

if(age < 18 && age>0){
    console.log("Too Young");
}
else if(age>=18 && age <=40){
    console.log("Eligible");
    
}
else if(age >= 41 && age <=60){
    console.log("Senior Eligble");
    
}
else{
    console.log("Too Old");
    
}




