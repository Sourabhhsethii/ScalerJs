function myFunction(){
    console.log("wow!");
}

myFunction();

let x  = myFunction // Not Call but treated as function itself
let y = myFunction() // Call

console.log(typeof x)
console.log(typeof y)

function runner(myFunction){
    if(typeof myFunction === Function ){
    myFunction();
    }
}

runner(myFunction);