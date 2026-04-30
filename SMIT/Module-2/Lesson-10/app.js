// =======================================
// Week 3 | JavaScript For Loop Practice
// =======================================


// ---------------------------------------
// 1) Search a value in an array
// ---------------------------------------


var arr = [1,2,3,4,5];
 
var searchVal = +prompt("enter number"); 

var isFound = false;

for(i=0;i<arr.length;i++){
    if(searchVal === arr[i]){
        isFound = true;
        break;
        
    }
        
}
if(isFound){
    console.log("Found:",searchVal );
}
else{
    console.log("NotFound");
    
}

let arr1 = [10, 20, 30, 40, 50];

var searchVal1 = 40;

var isFound1 = false;

for(i=0;i<arr1.length;i++){
    if(searchVal1 === arr1[i]){
        isFound1 = true;
        break;
        
    }
        
}
if(isFound1){
    console.log("Found:",searchVal1 );
}
else{
    console.log("NotFound");
    
}


// ---------------------------------------
// 2) Count positive and negative numbers
// ---------------------------------------

var nums = [-2, 3, 10, -10, 30];

pos = 0;
neg = 0;

for(var i=0;i<nums.length;i++){
    if(nums[i]>0){
        pos = pos + 1;
    }
    else{
        neg += 1;
    }
}
console.log("Positive number:", pos);
console.log("Negative Number:", neg);

// ---------------------------------------
// 3) Count Pass And Fail Students
// ---------------------------------------

let marks = [45, 67, 32, 90, 50, 41];
PassStu = 0;
FailStu = 0;

for(var i=0;i<marks.length;i++){
    if(marks[i]>50){
       PassStu += 1;
    }
    else{
        FailStu += 1;
    }
}

console.log("Pass Student:",PassStu);
console.log("Fail Student:",FailStu);

// ---------------------------------------
// -) Print Positive Numbers
// ---------------------------------------

var nums1 = [-5, 10, -3, 7, -1, 8];
 
for(var i =0;i<nums1.length;i++){
    if(nums1[i] > 0 ){
       console.log(nums1[i]);
       
    }
}

// ---------------------------------------
// -) Print Negative Numbers
// ---------------------------------------

var nums2 = [-5, 10, -3, 7, -1, 8];
 
for(var i =0;i<nums2.length;i++){
    if(nums2[i] < 0 ){
       console.log(nums2[i]);
    }
}

// ---------------------------------------
// 4) Calculate average rating
// ---------------------------------------

var ratings = [4.0, 4.5, 5.0, 3.0];

var sum = 0;

for(var i=0; i<ratings.length;i++){
     sum = sum + ratings[i];
}
var avg = sum / ratings.length;

console.log("Average Rating:", avg);


// ---------------------------------------
// 5) Basic nested for loop
// ---------------------------------------


for(var i=1; i<=2;i++){
    for(var j=1;j<=3;j++){
        console.log(i,j);
        
    }
}
