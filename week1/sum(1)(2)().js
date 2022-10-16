// Call Sum fucntion recursively.
let sum = function(a){
    return function(b){
        if(b){
            return sum(a+b);
        }
        return a;
    }
}

console.log(sum(1)(2)(3)());


let sumES6 = (a) => (b)=> b? sum(a+b): a;
console.log(sumES6(1)(2)(3)(4)());