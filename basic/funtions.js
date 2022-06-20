function area(/** */){
    // ...

}


function area(a, b=a){
    if(typeof b === 'undefined') b=a;
    return a*b;
}

let a1 = area(10,2)
let a2 = area(5)

console.log(a1)
console.log(a2)