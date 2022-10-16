
/** In lamda function cannot be change by this keyword. */
let squr = x => x* x;

console.log(squr(2));

let fun1 = (x,y) =>{
    if (typeof  x === 'number') return x+y
    if (typeof  x === 'string') return x+y
}

console.log(fun1(2,3));
console.log(fun1('2','3'));

this.a = 10;
let obj1 = { k : 'asdasd'}
let obj2 = { p:true, q: 10}

let arrowFunthis = () => {
    console.log(this); // " lexical this"
}

function normalFunThis () {
    console.log(this);
}

obj1.aft = arrowFunthis;
obj1.nft = normalFunThis;
obj2.aft = arrowFunthis;
obj2.nft = normalFunThis;

console.log("--------------")
arrowFunthis()
normalFunThis();

console.log("--------------")
obj1.aft()
obj1.nft()

console.log("--------------")
obj2.aft()
obj2.nft()