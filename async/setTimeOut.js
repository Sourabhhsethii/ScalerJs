// Asynchronous
// Set Timwout Allow you to tun the function after specific amount of time.

console.log(" I ");

console.log(" Eat ");

// Asynchronous System
setTimeout(()=>{
    console.log(" Ice Cream ");
}, 3000)

console.log(" with a  ");
console.log(" Spoon ");

// Regular Function
function abc(a,b,c,d){
    console.log(this);
 console.log("Normal Function");
}

// Arrow Function 
let arrow =  (a,b,c,d) => {
    console.log(this);
 console.log("Arrow Function");
}

abc();
arrow();

// Objects

let object ={
    names : "Working",
    getName : function(){
        console.log("this in objeck " + this.names);
    }
}

object.getName();

let objec2 ={
    names : "Working",
    getName : function(callback){
        callback();
        console.log("this in object inside " + this.names);
    }
}

let callbacktest = ()=> {
    this.names = "SS";
    console.log("calling a callack function", + this.names);
}

objec2.getName(callbacktest);


this.table = 'SS';
const cleanTableArrowrFnction = function(soap){
    console.log(this);
    const innerFunction = (_soap) =>{
        console.log('clean ' + this.table + ' using '+ _soap);
    }
    innerFunction(soap);
}
cleanTableArrowrFnction.call(this, 'Lux soap');

