console.log('start');

function doSomething(callback){
    console.log('Dosomething');
    setTimeout(callback,0);
}

doSomething(function(){
    console.log('done');
    
})

console.log('end');

/**
 * start
   Dosomething
   end
   done
 */