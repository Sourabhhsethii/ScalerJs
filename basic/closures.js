function createCountere(init, delta){

    function count(){
        init = init + delta;
        return init;
    }
    return count
}

let c1 = createCountere(10,5)
let c2 = createCountere(5,2)

console.log(c1())
console.log(c1())

console.log(c2())
console.log(c2())
