let myDates=new Date()
console.log(myDates);
console.log(myDates.toString());
console.log(myDates.toDateString());
console.log(myDates.toLocaleDateString());
console.log(myDates.toTimeString('en-IN'));
console.log(myDates.toISOString());

console.log(typeof myDates);   //***object

let myCreatedDate=new Date(2025,4,5)  //wed may 5 2025 , in js month starts from 0
console.log(myCreatedDate.toDateString());

let myCreatedDate2=new Date(2025,4,5,10,3)  
console.log(myCreatedDate2.toLocaleString());
let myCreatedDate3=new Date("01-01-2025")  //wed may 5 2025 , in js month starts from 0
console.log(myCreatedDate3.toLocaleString());
console.log(myCreatedDate3.getTime());//time 

