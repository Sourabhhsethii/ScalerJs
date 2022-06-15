// String Methods
let mainStr = "this is a long string";
let smallStr = mainStr.slice(2,3);
console.log(smallStr);


let smallStr2 = mainStr.slice(2,6);
console.log(smallStr2);

let smallStr3 = mainStr.substring(2,3);
console.log(smallStr3);


let smallStr4 = mainStr.substring(2,6);
console.log(smallStr4);

// slice & substring have slight differnt.
// slice can take -negative indxes.  


let smallStr5 = mainStr.slice(-5,-2);
console.log(smallStr5);

// substr supports -numbers as well.
// slice can take -negative indxes.  

let smallStr6 = mainStr.slice(3,4);
console.log(smallStr6);
