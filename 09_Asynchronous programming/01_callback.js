/*
Asynchronous:---
Due to synchrounos programming , sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows you to execute next instructions immediately and doesn't block the flow.
eg-setTimeout()


callback:--
It is a function passed as an argument to another function.
*/
// const sum=function(a,b){
// console.log(a+b);
// }
// const calculation=function(a,b,sumCallback){
// sumCallback(a,b)
// }
// calculation(1,2,sum)

// const hello=()=>{
//     console.log("timeout called ");
// }
// setTimeout(hello,2000)

// ***************callback hell*****************
//nested callback stacked below one another forming pyramid structure (pyramid of doom)
//this style of programming becomes difficult to understand and manage
// problem is: we want data from database one after other in every 2 seconds
// function getData(data){
//     setTimeout(()=>{
//     console.log(`your data :${data}`);
//     },2000)
 
// }
// getData(1)
// getData(2)
// getData(3)
//in above solution the problem is that all the data come together but we want one after another.\
// function getData(data,callbackFun){
//     setTimeout(()=>{
//     console.log(`your data :${data}`);
//     callbackFun;
//     },2000)
 
// }
// getData(1,getData(2))//but we cannot pass callback this way ,it means it first execute the getData(2) which is callback, but we want to execute after its calling
//so we write callback in below ways
function getData(data,callbackFun){
    setTimeout(()=>{
    console.log(`your data :${data}`);
    if(callbackFun){
    callbackFun();
    }
    },2000)
 
}
getData(1,()=>{
    getData(2,()=>{
        getData(3)
    })
})
//line 55-59 are callback hell



