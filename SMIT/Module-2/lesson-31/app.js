let marks = [10,20,30];



let filteredMarks = marks.filter(function(m){
    if(m <=20 ){
        return  true;
    }
    return false
})

let modifiedMarks = filteredMarks.map(function(val){
    return val + 10
})


console.log(modifiedMarks);


// let modifiedMarks = marks.map(function(val){
//     if(val <=20 ){
//         return val + 10;
//     }
//   return val  
// })

// // console.log(marks);
// console.log(modifiedMarks);












// marks.forEach(function(m){
//     console.log(m );
    
// })

// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }




