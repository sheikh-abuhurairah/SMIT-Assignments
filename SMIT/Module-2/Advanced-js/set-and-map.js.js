let arr = [1,2]
const map  = new Map()
map.set("name","saffwan")
map.set(arr ," 18")

console.log(map.get("name"));
console.log(map.get(arr));






// ------------------------------------------------
let user = {
  name: "Zubair",
  age: 24,
};

for(let [key,value] of Object.entries(user)){
    console.log(key,value);
    
}


// --------------------------------------------
// let arr = [1, 1, 2, 3, 4, 5];

// console.log(arr)

// let obj = {name: 'ahmed'}

// let data = new Set()
// data.add(1)
// data.add(2)
// data.add(1)
// data.add(obj)
// data.add({name: 'ahmed'})

// console.log(data.has(3))
// data.delete(1)

// data.clear()

// console.log(data)

// const numbers = [1, 2, 2, 3, 4, 4];
// const uniqueNumbers = [...new Set(numbers)]; // [1, 2, 3, 4]

// console.log(uniqueNumbers)