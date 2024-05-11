// console.log(2>1);  true
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);
// //first it convert string into int & then compare
// console.log("02">1);

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true
//as in comparision (>,<) it first convert null into 0

console.log(undefined==0); //false
console.log(undefined>0); //false
console.log(undefined<0); //false

//strict check
console.log("2"===2); //false as it also check datatypes and comparision