/**
 * Use Template Literals In Es6.js
 */

var saultation = "Hello";
// It will maintain space & Tabs
var greeting =  `

${saultation}
        , world`;

console.log(greeting);

var x =1;
var y=2;
var eq = `${x} +${y} = ${ x+y }`;
console.log(eq);

function tag(strings, ...values){
    console.log(strings);
    console.log(values);

    if(values[0]<20){
        values[1] = "awake";
    }

    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}
var message  = tag`It's ${new Date().getHours()} I'm ${""}`;
console.log(message);
