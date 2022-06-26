/**
 * Function Curring
 */

// Function Currying using bind method
function sum(x,y){
    console.log(x+y);
}

let sumByTwo = sum.bind(this,2);
let sumByThree = sum.bind(this,3);

sumByTwo(4);
sumByThree(4);

// Function curring using closures.
// X is preset
let multiple = function(x){
    return function(y){
        console.log(x * y);
    }
}

let multipleByTwo = multiple(2);
multipleByTwo(3);

let multipleByThree = multiple(3);
multipleByThree(3);

// sum(1)(2)(3)(4)..( n)() | Amazon UI/Frontend Javascript Interview Question
// Recursion Function Problem 
// https://www.youtube.com/watch?v=D5ENjfSkHY4&t=228s

let sumCurrying = function(a){
    return function(b){
       if(b){
        return sumCurrying(a+b);
       }
       return a;
    }
}
console.log(sumCurrying(1)(2)(3)());

// ES 6

let sumes6 = (a) =>{
    return (b)=>{
        return b? sumes6(a+b): a;
    }
}

console.log(sumes6(1)(2)())