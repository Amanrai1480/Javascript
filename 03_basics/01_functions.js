// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
// const result=addTwoNumbers(1,3)
// console.log("result:",result);  //undefined

// function addTwoNumbers(number1,number2){
//     const result=number1+number2;
//     return result;
// }
// const result=addTwoNumbers(1,3)
// console.log("result:",result);    //4


// function loginUser(username){
//       return `${username} logged in last`//it will return undefined
// }
// console.log(loginUser()); 


function loginuser2(username="default value"){
   if(!username){
    console.log("please enter valid username");
    return;
   }
   return `${username} logged in last`
}
console.log(loginuser2("aman"));

// if it is not determine how many papameters will come
//we use rest/spread operator(...)

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(2,5,100,200));


// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }
// console.log(calculateCartPrice(2,5,100,200));

// ************handling of object in****************
// const user={
//     name:"aman",
//     age:21
// }
// function handleObject(anyObject){
//   console.log(`user name is ${anyObject.name} and age is ${anyObject.age}`);
// }
// handleObject(user)


// function handleObject(anyObject){
//   console.log(`user name is ${anyObject.name} and age is ${anyObject.age}`);
// }
// handleObject({
//     name:"aman",
//     age:21
// })

// ************array handled by function***********
// const myNewArray=[10,21,32,45,67]
// function fun2(getArray){
//     return getArray[2]
// }
// // console.log(fun2(myNewArray));
// //or
// console.log(fun2([10,21,32,45,67]));






