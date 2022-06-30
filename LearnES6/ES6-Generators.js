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

/**
 * Genrators can be used for infinite loops
 */

function* graph(){
    let x = 0;
    let y = 0;
    while(true){
        yield {x:x , y:y}
        x+=2;
        y+=1;
    }   
}

var graphGenerator = graph();

console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);


for(let i=0; i<10; i++){
    console.log(graphGenerator.next().value);
} 