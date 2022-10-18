let btnStart = document.getElementById('start');
let btnCount =  document.getElementById('count');
let divResult = document.getElementById('result');

btnStart.onclick =  function(){
    divResult.innerHTML = "Waiting";
    let start = Date.now();
    while(Date.now() - start < 2000){
        // do nothing
    }
    divResult.innerHTML = "Done";
}

let count = 0;
btnCount.onclick = function () {
    count++;
    divCounter.innerHTML4 = count;
}