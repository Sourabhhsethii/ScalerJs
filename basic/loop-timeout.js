function printSeq(N){
    for( let i=0;i<N;i++){
            setTimeout(function (){
                console.log(i)
            }, i * 1000)
    }
}

printSeq(5)