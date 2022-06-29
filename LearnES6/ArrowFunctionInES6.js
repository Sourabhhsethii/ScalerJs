var createGreeting = function(message,name) {
    return message + name;
}

var arrowFunction  = (message,name) => {
    return message + name; 
}

var arrowFunctionInOneLine  = (message,name) => message + name; 

let deliveryBoy = {
    name : "John",
    handleMessage: function(message,handler){
        handler(message);
        console.log(this);
    },
    receive: function(){
        this.handleMessage("Hello, ", message => console.log(message + this. name));
    }
}

deliveryBoy.receive();
