// "this" ??
// This refer to objects.
// In Javascript this refers to context.

// Node Js has globa & process
// Browers has Windows & Documents

function func1(){
    this.a = 10;
}

function func2(){
    console.log(this.a);
}
console.log(this)
func1();
this.a = 20;
console(this.a);
func2();