/**
 * https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/
 * 
 * https://www.youtube.com/watch?v=ZYb_ZU8LNxs&t=323s
 * 
 * ES6 Introduction -> Async/Await Better way to write promises. 
 * 
 */


 let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_shop_open = true;

// Promise
let order_with_promise = () => {
    return new Promise ( (resolve,reject) =>{
        if(1){
            resolve()
        } else {
            reject()
        }
    })
}

order_with_promise()
.then()
.then()
.catch()
.finally()


let toppings_choice = () => {
    return new Promise( (resolve,reject) =>{

        setTimeout(()=>{
            resolve(
                console.log("which topping would you love?")
            )
       
        }, 3000);
    });
};

async function kitchen(){
    console.log(" A ")
    console.log(" B ")
    console.log(" C ")
    await toppings_choice()
    console.log(" D ")
    console.log(" E ")

}

kitchen()

console.log("cleaning the dishes");
console.log(" cleaning  the tables");
console.log("taking other order");

function time(ms){
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve(),ms)
        } else {
            reject(console.log("Shop is closed"));
        }
    })
}

async function kitchen () {
    try {
        await time(2000);
        console.log(`${stocks.Fruits[0]}`)
        await time(2000);
        console.log("start the production");
        console.log("Cut the fruits");
        await time(1000);
        console.log(`${stocks.liquid[0]}`)
    }

    catch(error){
        console.log("cutomer left", error);
    } finally {
        console.log("day ended, shop is closed");
    }
}

kitchen();

