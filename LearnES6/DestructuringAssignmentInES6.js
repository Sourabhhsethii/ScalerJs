/**
 * Destructuring Assignment In ES6
 */
let {colour, size} ={
    colour : "blue",
    size : 20
}

console.log(colour, size);

function genrateObj(){
    return {
        colour :"blue",
        name: "John",
        state: "New York",
        postion: " Forwards"
    }
}

var {name, state} =  genrateObj();

console.log(name);
console.log(state);

var [first,,,fourth] = ["red", "green","yellow", "orange"];
console.log(first);
console.log(fourth);

var people = [
    {
        name: "sourabh",
        address: "New York"
    },
    {
        name: "Sethi",
        address: "Jammu"

    }
]

console.log(people);

var [obj1,obj2] =  people;

function logAddress ({address}){
    console.log(address)
}

logAddress(obj1);
logAddress(obj2);