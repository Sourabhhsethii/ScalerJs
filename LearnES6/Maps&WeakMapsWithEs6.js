/**
 * Maps & WeakMaps With Es6
 */
var myMap = new Map();
/**
 * set()
 * get()
 * size
 * clear()
 * has()
 */

myMap.set('foo', 'bar');
myMap.set('hello','world');

console.log(typeof myMap);
console.log(myMap.get('foo'));
console.log(myMap.size);

for (let value of myMap.values()) {
   console.log("for on map values -> ",value) 
}

for (let [key,value] of myMap.entries()) {
    console.log("key " + key + "has a value -> ",value) 
 }

console.log(myMap.has('hello'));
myMap.clear();
console.log(myMap)
console.log(myMap.size);
console.log(myMap.has('hello'));

var myWeakMap = new WeakMap();

var obj = {};
var myFunc = function(){}

// Invalid value used as weak map key 
// [In WeakMap, we cant set the key as string or obj or function] //
myWeakMap.set(obj, 'bar');
myWeakMap.set(myFunc, 'world');
myWeakMap.set('string', 2);


