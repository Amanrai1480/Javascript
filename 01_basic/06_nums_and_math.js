const num=400
console.log(num);

const number=new Number(400)
console.log(number);
console.log(number.toString().length);
console.log(number.toFixed(2));

const otherNum=123.876
console.log(otherNum.toPrecision(3));
console.log(otherNum.toPrecision(1));
console.log(otherNum.toPrecision(4));

const otherNumber=1000000
console.log(otherNumber.toLocaleString('en-IN'));

// *******************MATH***************************************************
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.7));
console.log(Math.pow(2,4));
console.log(Math.min(1,7,4,9,4));
console.log(Math.max(4,8,2,9));

console.log(Math.random());  //value always lie in blw 0-1

console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

//if range is given
const max=20
const min =10
console.log(Math.floor(Math.random()*(max-min+1))+min);