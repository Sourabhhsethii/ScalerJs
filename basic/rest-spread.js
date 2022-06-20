function sum(...args){ // ... Rest Operator
    console.log(args);
}

console.log(sum(1,2,3,4,5))

function sum2(...args){
    return args.reduce((acc,curr) =>acc +curr);
}
console.log(sum2(1,2,3,4,5))

function print(a,b,c) {
    console.log("A:" +a);
    console.log("B:" +b);
    console.log("C:" +c);
}

print(...['car','bike','bus']) // Spread Operator