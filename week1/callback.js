console.log('start');

function doSomething(callback){
    console.log('Dosomething');
    callback();
}

doSomething(function(){
    console.log('done');
    
})

console.log('end');

/**
 * start
 * Dosomething
 * done
 * end
 */