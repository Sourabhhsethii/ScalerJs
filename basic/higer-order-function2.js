function createGreater(timeOftheDay){

    function greate(name){
        console.log(`Good ${timeOftheDay}! ${name}`)
    }
    return greate
}

let g1 = createGreater('Morning')
let g2 = createGreater('AfterNoon')
let g3 = createGreater('Evening')

g1('John')
g2('Jane')