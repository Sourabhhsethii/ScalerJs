let obj1 = {a :10}
let obj2 = {b :20}

function printThis(){
    console.log(this)
}

obj1.x =printThis
obj2.x = printThis

obj1.x()
obj2.x()

console.log(obj1);
console.log(obj2);
console.log(obj1.x === obj2.x)

/**
 * Assingment 2:
 * Read abount bind, call, and apply -> MDM
 */