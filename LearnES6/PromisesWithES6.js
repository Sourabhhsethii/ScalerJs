/**
 * Promises With ES6.js
 */

var d = new Promise((resolve,reject)=> {

    setTimeout(()=>{
        if (true) {
            resolve('hello world');
        } else {
            reject('no bueno');
        }

    }, 2000)
    
});
d.then((data) => { console.log('success: ', data)});
d.catch((error)=>{console.error('error: ', error)});
d.finally(()=>{ console.debug("Finally Block")});
