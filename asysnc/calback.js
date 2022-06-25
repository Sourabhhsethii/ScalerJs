/**
 * https://www.youtube.com/watch?v=ZYb_ZU8LNxs
 * https://www.youtube.com/watch?v=PoRJizFvM7s
 * 
 * Articles : https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/
 * 
 * Asynchronous Javascript
 * Synchronous VS Asynchronous
 * Callback
 * Promises
 * Async/Await
 * Conclusion
 */

/**
 * What's Asynchronous JS?
 * It allow you to break down bigger projects into smaller task.
 * then use these methods over either callbacks, promies, async await.
 * 
 * Simultaneously  doing multiple task.
 */

// Synchronous

console.log(" I ");

console.log(" Eat ");

console.log(" Ice Cream ");

console.log(" with a  ");

console.log(" Spoon ");


// Callback Calling a function from a function 
console.log("// Callback Calling a function from a function ")

function one() {
    console.log("step 1");
}

function two() {
    console.log("step 2");
}

one();
two();

// Callback Calling a function from a function 
console.log("// Callback Calling a function from a function ")

function oneSetup(call_two){
    console.log(" step 1 complete. please call senp 2");
    call_two();
}

function twoSetup() {
    console.log("step 2");
}

oneSetup(twoSetup);


console.log("// Callback Calling a function from a function ")

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };


let order = (Fruit_name, call_production) =>{
   

    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
        
    call_production();
    }, 2000)
    console.log("order placed, please call production");
};

// Call Back Hell
let production = ()=>{
    setTimeout(function(){
        console.log("production has started");

        setTimeout(()=>{
            console.log("the fruit has been chooped");

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(() => {
                    console.log("Machine has started");
                    setTimeout(()=>{
                        console.log(`Ice cream placed on ${stocks.holder[0]}`);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as toppings`)
                        }, 2000);
                    }, 2000);
                }, 1000);            
            }, 1000)
        }, 2000);
    }, 1000)
};

order(1, production);


