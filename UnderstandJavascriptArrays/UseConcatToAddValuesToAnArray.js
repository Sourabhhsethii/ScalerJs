/**
 * Use Concat To Add Values To An Array
 */

var items = [1,2,3];
var newItems =items.concat(4,"String", undefined,[6,7],[9,0]);

console.log(items);
console.log(newItems);


var people = [
    {name : 'Shane'},
    { name : 'Sally'}
]

var people2 = [
    {name : 'Simon'},
    { name : 'Ben'}
]

people.concat(people2).forEach((person)=>{
    console.log(person.name)
})