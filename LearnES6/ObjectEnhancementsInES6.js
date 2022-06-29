/**
 * Object Enhancements In ES6
 */

var colour  = 'red';
var speed = 10;

function go(){
    console.log("vroom");
}

var car = {
     colour:colour,
     speed:speed,
     go,
     ["computedProperties"] : function (){
        console.log("test");
     }
    };
console.log(car.colour);
console.log(car.speed);

car.go();
car.computedProperties();