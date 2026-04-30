// .map transform krta he array ko
// .filter array mai se filter krta aur boolean expression return krta


let marks =  [10,20,30];
let newMarks = marks.filter( m  => (m < 30)).map(m => m + 10);

console.log(marks);
console.log(newMarks);


// ----------------------------------------------

// let marks =  [10,20,30];
// let filterdMarks = mar
// ks.filter( m  => (m < 30));

// console.log(marks);
// console.log(filterdMarks);


// ----------------------------------------------

// let marks =  [10,20,30];
// let modifiedMarks = marks.map( m =>( (m < 30) ? m + 10 : m))

// console.log(marks);
// console.log(modifiedMarks);

// ----------------------------------------------

// let marks =  [10,20,30];
// let modifiedMarks = []
// for(let i=0;i<marks.length;i++){
//     modifiedMarks.push(marks[i] + 10 )
    
// }

// console.log(marks);
// console.log(modifiedMarks);

