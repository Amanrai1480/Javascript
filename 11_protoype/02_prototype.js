//now we creating our own prototype and then adding it into....
let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
//object is supreme so if we add new function on object then its access also present in the array,string or on the other function]
Object.prototype.aman = function(){
    console.log(`aman is present in all objects`);
}
//creating prototype only for array which can only acces by array
Array.prototype.heyaman = function(){
    console.log(`aman says hello`);
}

// heroPower.aman()     //execute seccessfully
// myHeros.aman()       //execute seccessfully
// myHeros.heyaman()      //execute seccessfully
// heroPower.heyaman()     // give error as this fun not 
                            //present in their prototype