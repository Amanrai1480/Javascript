let score="33"
console.log(typeof score)
let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33"   => 33
//"33abc" => NaN(Not a Number)
//"aman"  => NaN
//true   => 1;False =>0

let isLoggedIn="aman"
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true
//"" =>false
//"aman" =>true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// *************************operation***********

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%2);

let str1="Hello"
let str2=" Aman"
let str3=str1+str2
console.log(str3); //Hello Aman

console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32

console.log(+true); //1
console.log(+"");   //0

let value=5
value++
console.log(value);