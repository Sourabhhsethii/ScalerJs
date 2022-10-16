/* ByCurrring Bind Method */

let multiply = function(x,y){
   console.log(x*y);

}

let multuplyByTwo =  multiply.bind(this,2);
multuplyByTwo(2);

let multuplyByThree =  multiply.bind(this,2);
multuplyByThree(3);

/** Currring with cloures */

let multi = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiByTwo = multi(2);
multiByTwo(3);


