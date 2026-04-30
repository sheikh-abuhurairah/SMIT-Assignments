
// array humesha ek hi data type ka hona chaye he onject mix data types ka bhi ho skta
var students = [
    {
        name: "Saffwan",
        marks: 30,
        atten: true
    },
    {
        name: "ALi",
        marks: 5,
        atten: false
    },
    {
        name: "Ahmed",
        marks: 40,
        atten: true
    }
]

console.log(students)
console.log(students[0],students[1],students[2])



// object mai element ko key name se targer krte
// keyname : value

// var s1 = {
//     name: "Saffwan",
//     marks: 30,
//     atten: true
// }
// console.log(s1)
// console.log(s1.name)
// console.log(s1.marks)
// console.log(s1.atten)

// var s2 = {
//     name: "ALi",
//     marks: 5,
//     atten: false
// }
// console.log(s2)
// console.log(s2.name)
// console.log(s2.marks)
// console.log(s2.atten)

// var s3 = {
//     name: "Ahmed",
//     marks: 40,
//     atten: true
// }
// console.log(s3)
// console.log(s3.name)
// console.log(s3.marks)
// console.log(s3.atten)


// --------------------------------------------------------------------

var arr = [20, 30, 40]

console.log(arr);

// Push end se element add krta 
arr.push(50, 60)
console.log(arr);

// unshift starting se element add krta 
arr.unshift(10)
console.log(arr);

// splice add or remove krta jidhr se order do 
// splice(index, deletion element number, element add)
arr.splice(2, 1, 35)
console.log(arr);

// pop end se element remove krta
arr.pop()
arr.pop()
console.log(arr);

// shift start se element remove krta
arr.shift()
console.log(arr);

// array mai element ko index se target krte
console.log(arr[1])