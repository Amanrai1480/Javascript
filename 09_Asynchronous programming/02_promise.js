/*
promise:--
It is solution for callback hell.
The Promise is an object which represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
A promise is a "promise of code execution", The code either execute or fail, in both the case the subscriber will be notified.
*/

/*states of promise:-
pending:the result is undefined
resolved(fulfilled):the result is a CSSMathValue.
rejected:the result is an Object
conusmers:.then() and .catch()
*/


//resolve and reject are callbacks, which is internally automatically provided by js
// let promiseOne=new Promise((resolve,reject)=>{
//     //do async work
//     //DB call, network call, cryptography
//     setTimeout(()=>{
//         console.log("im a promise");
//         //resolve("success")
//         reject("error occured")
//     },2000)
// })
// // promiseOne.then((res)=>{
// //     console.log(res);
// // })
// promiseOne.catch((err)=>{
//     console.log(err);
// })
//    new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("async work");
//         resolve("success")
//     },2000)
// }).then((res)=>{
//     console.log(res);
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//     resolve({name:"aman",email:"aman12@gmail",roll:123})
//     },2000)
// })
// promiseThree.then((getDataFromResolve)=>{
//     console.log(getDataFromResolve);
// })


const promiseFour=new Promise((resolve,reject)=>{
    // setTimeout(function(){
    //   let error=false//true
    //   if(!error){
    //     resolve({username:"aman",roll:12,age:22})
    //   }else{
    //     reject('error:something went wrong')
    //   }
    // },2000)
})
// promiseFour.then((user)=>{
//   console.log(user);
// }).catch(function(err){
// console.log(err);
// })

////if we want the username of the user
promiseFour.then((user)=>{
console.log(user);
return user.username;
}).then((username)=>{
console.log(username);
})
.catch((err)=>{
console.log(err);
})
.finally(()=>{ //it always get execute 
    console.log("the promise is resolved or rejected");
})
//59-70  their is promise chaining




// await will stop the function to execute until the promise get fulfilled but--->
// second .then() will execute when first .then() already get executed otherwise it will wait until first get executed


fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
return response.json()
})
.then((data)=>{
console.log(data);
})
.catch((error)=>{
console.log(error);
})


