let name = {
    firstname : "Sourabh",
    lastName : "Sethi",

}
let  printFullName =  function (hometown = 'Delhi', state= "Delhi"){
    console.log(this.firstname, " " + this.lastName + " " + hometown + " ", state);
}
printFullName.call(name );

let name2 = {
    firstname : "Sachin",
    lastName : "Tendulkar",
}
// function borrowing using call from other objects.
printFullName.call(name2, "Jammu", "J&K");

printFullName.apply(name2, ["Jammu City", "J&K"]);

// bind will crate a coly of the method
let  printMyName = printFullName.bind(name2, "Jammu", "J&K");
console.log(printMyName);
printMyName();