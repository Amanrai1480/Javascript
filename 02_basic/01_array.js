// //javascript arrays are resizable and can contain diff. data types
// //JavaScript array-copy operations create shallow copies. 
// //A shallow copy of an object is a copy whose properties share the same references as those of the source object from which the copy was made.
// const arr=[1,2,3,4,5]
// console.log(arr[0]);

// const arr2=new Array(1,2,3,4,5)
// console.log(arr2[4]);
// console.log(arr2.length);

// //*************array method************************************** */
// arr2.push(6)
// console.log(arr2);
// arr2.pop()
// console.log(arr2);

// arr2.unshift(9)     //add element at start
// console.log(arr2);
// arr2.shift()        //remove element from start
// console.log(arr2);
// let deletedItem=arr2.shift()    //return the deleted element
// console.log(deletedItem); 
// console.log(arr2);

// console.log(arr2.includes(1));   //false

// arr.push(arr1)
// console.log(arr);   //now in arr values of arr1 count as single element

// let arr3=arr.concat(arr2)      //join multiple array and returns the result
// console.log(arr3);

//concat can be done in one more way
// const marbel=["spider","Iron","Hulk"]
// const dc=["batman","aquaman","superman"]
// const indianHeroes=["skaktiman","hanuman"]
// const heroes=[...marbel,...dc,...indianHeroes]
// console.log(heroes);

// console.log(arr3.indexOf(5));   

// let newArr=arr3.join()         //convert array into string
// console.log(newArr);
// console.log(typeof newArr);

// //**************slice, splice***************************** */

// console.log("A ",arr);
// const newa1=arr.slice(1,3)
// console.log(arr);
// console.log(newa1);

// console.log("B ",arr);
// const newa2=arr.splice(1,3)   //splice will mainipulate the orignal array
// console.log(arr);             //splice will also include the ending index
// console.log(newa2);

// arr.splice(1,0,2)  //it will add 2 at index 1 by nothing deleting
// console.log(arr);

// const anotherArr=[1,2,3,[4,5,[6,7,[8,9,10]]]]
// console.log(anotherArr);
// const real_anotherArr=anotherArr.flat(Infinity)//in flat we give depth
// console.log(real_anotherArr);

console.log(Array.isArray("aman"));//false
console.log(Array.from("aman"));//convert string in array

let s1=10
let s2=20
let s3=30
console.log(Array.of(s1,s2,s3));