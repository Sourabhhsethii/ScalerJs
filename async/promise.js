// Promise is a cycle 
// It is made up of -> pending -> Resolve, Reject -> .then, .catch -> .finally

/**
 *   A Promise is made = PENDING
 * 
 *     Resolve ----------- Reject
 *                  =
 *     .then   ----------- .catch
 *                  =
 *              .finally 
 * 
 * Relationshio between time & work
 * Promise chaining -> .then, .then, .then
 * Error Handing -> .catch
 * Finally Handler -> .finally
 * 
 */

 let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_shop_open = true;
let order = (time,work) => {
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(() => {                
            resolve( work() );
            }, time);
        }
        else {
            reject(console.log("our shop is close"));
        }
    })
}


order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))
.then(()=>{
    return order(0000, ()=>console.log("Production has started"));
})
.then(()=> {
    return order(2000, ()=>console.log("The fruit was chopped"));
})
.then(()=>{
    return order(1000, ()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`));
})
.then(()=>{
    return order(1000, ()=> console.log(`ice creame placed on ${stocks.holder[0]}`));
})
.then(()=>{
    return order(1000, ()=> console.log(`toppings placed  ${stocks.toppings[0]}`));
})
.catch(()=>{
    console.log("Customer left");
})
.finally(()=>{
    console.log("Day ended, shop is closed");
})