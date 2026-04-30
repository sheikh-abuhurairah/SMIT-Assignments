// =================================================
// LESSON 04 – Truthy & Falsy, Strings, Comparisons
// =================================================

// -------------------------------------------------
//  Truthy & Falsy Values
// -------------------------------------------------

// ❌ Falsy values in JavaScript:
// false, 0, -0, "", undefined, null, NaN

var x = "";

if (x){
    console.log("TRUE");
}
else{
    console.log("FALSE");
}

// -------------------------------------------------
// String Indexing
// -------------------------------------------------

var fullName = "Ahmed";

// A  h  m  e  d
// 0  1  2  3  4

console.log("Lenght:", fullName.length);

var index = fullName.length - 4;

console.log("Using []:", fullName[index]);
console.log("Using charAt():", fullName.charAt(index));


// -------------------------------------------------
// Another String Indexing Example
// -------------------------------------------------

var fullName2 = "Saffwan CH";

// S a f f w a n   C H;
// 0 1 2 3 4 5 6 7 8 9

console.log( "Lenght :", fullName2.length);

var index = fullName2.length - 6;

console.log( "using []: ", fullName2[index]);
console.log( "using charAt (): ", fullName2.charAt(index));


// -------------------------------------------------
// Not Equal Operators (!= vs !==)
// -------------------------------------------------

var a = 10; // number
var b = "10"; // string

if (a !== b) {
  console.log("Not Equal (value or type mismatch)");
}
 else {
  console.log("Equal");
}

console.log(10 !== 8); // true

// -------------------------------------------------
//  Equality Operators (== vs ===)
// -------------------------------------------------

if (a === b) {
  console.log("Equal");
} 
else {
  console.log("Not Equal (type matters)");
}

// -------------------------------------------------
//  Comparison Operators
// -------------------------------------------------

// ==  Equal to
// >   Greater than
// <   Less than
// >=  Greater than or equal to
// <=  Less than or equal to

console.log(10 > 5); // true
console.log(10 <= 5); // false


var t1 ="             mobile  "
var t2 ="Mobile"

console.log("trimmed:", t1.trim());
console.log("lowercase:", t1.toLowerCase());
console.log("uppercase:", t1.toUpperCase());

if(t1.toLowerCase().trim()=== t2.toLowerCase()){
      console.log("string are equal");

}
else{
       console.log("string are not  equal");
}

// -------------------------------------------------
// Simple String Comparison
// -------------------------------------------------

var s1 = "mobile";
var s2 = "mobile";

console.log(s1 === s2); // true


// =================================================
// END OF LESSON 04
// =================================================