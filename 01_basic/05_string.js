const name="abhi"
const age=20
// console.log("my name is "+name+" and my age is "+age);
 console.log(`my name is ${name} and my age is ${age}`)

 const fullName=new String("AmanRai")
 console.log(fullName);
 console.log(fullName[0]);
 console.log(fullName.charAt(2));
 console.log(fullName.toLowerCase());
 console.log(fullName.length);
console.log(fullName.indexOf('n'));
let newStr=fullName.substring(0,4)
console.log(newStr);

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"

let trimUse="  aman  rai  "
console.log(trimUse);
console.log(trimUse.trim());

let abc="Mp country is India"

console.log(abc.replace("India","Bharat"));
console.log(abc.includes("India"));

// convert string into array
const game="my name is aman"
console.log(game);
const arr=game.split(" ")
console.log(arr[3]);