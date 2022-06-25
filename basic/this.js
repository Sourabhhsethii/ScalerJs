// "this" ??
// This refer to objects.
// In Javascript this refers to context.

// Node Js has globa & process
// Browers has Windows & Documents
function func1(){
    this.a = 10;
}

function func2(){
    console.log(this.a);
}
console.log(this)
func1();
this.a = 20;
console.log(this.a);
func2();

console.log("-------------------");

/**
 * Youtube: techsith
 * https://www.youtube.com/watch?v=NV9sHLX-jZU&t=221s
 */
 console.log(this)
this.table = "windows table";
console.log(this)
this.garbage = {
    table :'garage table',
    cleanTable(){
        console.log('clean ' + this.table)
    }
}

this.garbage.cleanTable();


let johnsRoom = {
    table: 'johns table',
    cleanTable(){
        console.log('clean ' + this.table)
    }
}

johnsRoom.cleanTable();

console.log("-------------------");

const cleanTable = function(){
    console.log('clean ' + this.table);
}

cleanTable.call(this)
cleanTable.call(this.garbage)
cleanTable.call(johnsRoom)

/**
 * this inside an inner function
 */

 const cleanTableInnerFnction = function(soap){
    var that = this;
    const innerFunction = function(_soap){
        console.log('clean ' + that.table + ' using '+ _soap);
    }
    innerFunction(soap);
}
cleanTableInnerFnction.call(this, 'some soap');

const cleanTableArrowrFnction = function(soap){
    const innerFunction = (_soap) =>{
        console.log('clean ' + this.table + ' using '+ _soap);
    }
    innerFunction(soap);
}
cleanTableArrowrFnction.call(this, 'Lux soap');

/**
 * this inside an constructor
 */

let createRoom = function(name){
    this.table = name + 's room'
}
const jillsRoom = new createRoom('jill');
const johnsoom = new createRoom('john')

cleanTable.call(johnsRoom, 'some soap');
cleanTable.call(jillsRoom, 'some soap');
