/**
 * Default Values for funciton Parameters in ES6
 */

function greet(greeting, name){
    console.log(greeting + ", " + name);
}

greet();
greet('John');
greet('Hello ','John');

function receive(complete = function (){
    console.log('complete')
}){
    complete();
}

receive();

receive(function (){
    console.log('Not Default')
});

/**
 * Short Hand Notation
 */
let receiveShortHand = (complete = ()=> console.log('Complete Short Hand')) => complete();

receiveShortHand();

/**
 * 
 * @param {number} a for checking even or odd 
 * @returns true or false
 */
var check = (a)=>  a%2 == 0 ?true:false;
console.log(check(4));

/**
 * Function Curring
 * Recersive calls sum(1)(2)(3)(4)()
 */

let sum = (a) => {
    return (b) => {
        return b?sum(a+b):a;
    }
}

console.log(sum(1)(2)());

/**
 * Function Curring
 * Recersive calls multi(1)(2)(3)(4)()
 */

 let multi = (a) =>  (b) =>  b?sum(a*b):a;
    


console.log(multi(2)(2)());