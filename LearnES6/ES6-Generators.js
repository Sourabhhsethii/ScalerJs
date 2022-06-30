/**
 * ES6 Generators
*/

function* greet(){
        console.log(`You called 'next'`);
        yield 'hello';
}

let greeter = greet();
console.log(greeter);
let next = greeter.next();
debugger;
console.log(next.value);
let done  = greeter.next();
console.log(done);

function* genrator(){
    console.log(`Genrators are lazy`);
    yield "How";
    console.log(`I'm not called until the second next`);
    yield "Are";
    console.log(`Call me before "You?"`);
    yield "You?"
    console.log(`called when "done"`);
}

let genrate = genrator();

for (let word of genrate){
    console.log(word);
}