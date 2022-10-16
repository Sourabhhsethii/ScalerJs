class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let p = new Person('John', 30);
Person.country = "USA";

console.log(p.country);

class Stundent extends Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

}

console.log(Stundent.country);
