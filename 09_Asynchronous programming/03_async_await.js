//async await is used as promise chain is difficult to understand.
//await keyword can only be used within an asynchronous function and suspends the execution of the function until the specified Promise is resolved.
//Async await don't handle the catch, so use try catch 
// In async await to print the output we have to call the async function to prevent this we also used iife


const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=false//true
        if(!error){
          resolve({username:"aman",roll:12,age:22})
        }else{
          reject('error:something went wrong')
        }
      },2000)
})
async function asyncCall(){
  try {
   const result= await promiseFive
   console.log(result);
   console.log(result.username);
   console.log(result.roll);
  } catch (error) {
    console.log(error)
  }
}
asyncCall()


//AJAX;_Asynchronous javascript and xml
//json:--javascript object notation
//.json() method convert the json format into JS object

// async function getData(){
//   try {
//     const response=await fetch('https://jsonplaceholder.typicode.com/users');
// const data= await response.json()
// console.log(data);
//   } catch (error) {
//     console.log("error occured");
//   }
// }
// getData()





