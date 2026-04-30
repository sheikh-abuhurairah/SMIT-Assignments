// ---------------------------------------------
// TIME PARTS
// ---------------------------------------------



console.log("Hello");

let now = new Date();
console.log(now);
console.log(now.toDateString());
console.log(now.toJSON());
console.log(now.toLocaleString());
console.log(now.toUTCString());
console.log(now.getHours());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getUTCFullYear());


// ---------------------------------------------
// TIMESTAMP & DATE DIFFERENCE
// ---------------------------------------------



// timestamp = getMilliseconds since jan 1,1970 

console.log(now.getTime());

console.log(new Date(1770905218258));

const before = new Date("September 17, 2006");
const day = before.getDay();
const diff = now.getTime() - before.getTime();


switch(day) {
    case 0: {
        console.log("Sunday is your born day");
        break;        
    }
    case 1: {
        console.log("Monday is your born day");
        break;        
    }
    case 2: {
        console.log("Tuesday is your born day");
        break;        
    }
    case 3: {
        console.log("Wednesday is your born day");
        break;        
    }
    case 4: {
        console.log("Thursday is your born day");
        break;        
    }
    case 5: {
        console.log("Friday is your born day");
        break;        
    }
    case 6: {
        console.log("Saturday is your born day");
        break;        
    }

}



