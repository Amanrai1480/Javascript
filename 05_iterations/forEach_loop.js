//higher order fun:those fun which take other fun as parameter or return a function.
//method: those functions which associated with the object eg arr.forEach()-- here arr is object.
//forEach is a function used for traversing the array
//  arr.forEach(callBackFunction)
// //callBackFunction: It is a fun which passsed as argument to another fun.(it is a fun to execute each element in the array)

const myArray=["css","html","js"]
// myArray.forEach(function (val){
//     console.log(val);
// })
// const myArray=["css","html","js"]
// myArray.forEach( (val)=>{
//     console.log(val);
// })


myArray.forEach((val,index,arr)=>{
console.log(val,index,arr);
})

// ***how traverse object which is inside in the array****
 const coding=[
    {
        language:"java",
        oops:true
    },
    {
        language:"c++",
        oops:true 
    },
    {
        language:"js",
        oops:false
    }
 ]
 coding.forEach((val)=>{
    console.log(val.language);
 })



