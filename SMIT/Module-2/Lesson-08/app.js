console.log("javaworking")



// Flag In javascript

var students = [
    "Saffwan",
    "Ali",
    "Ahmed",
    "Subhan",
    "Anas",
]

var name = "Ali";

var isFound = false;

for(i=0;i<students.length;i++){
    if(name === students[i]){
        isFound = true;
        break;
    }
}

if(isFound){
    console.log("Student Found");
    
}
else{
    console.log("Student Not Found");
    
}



var nums = [3, 7, 9, 11, 14];


var Found = false;

for(i=0;i<nums.length;i++){
    if(nums[i] % 2 === 0){
        Found = true;
        break;;
    }
}

if (Found) {
    console.log("Even number exists");
} else {


    console.log("No even number");
}


var presentStudents = ["Ali", "Ahmed", "Subhan"];

var checkStudent = "Saffwan";

var atten = false;

for(let i=0;i<presentStudents.length;i++){
    if(checkStudent === presentStudents){
        atten = true
        break;
    }
}

if(atten){
    console.log("Present");
    
}
else{
    console.log("Absent");
    
}



var password = "abc123";
console.log(typeof password);

var hasNumber = false;  


for(i=0;i<password.length;i++){
    if(!isNaN(password[i])){
        hasNumber = true;
        break;
    }
}



if (hasNumber) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}