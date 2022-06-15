let arr = [1,2,3];
console.log(arr[1])

let arr2 = [1, 'hello', false,[2,3]];
console.log(typeof arr2[1]);

for(let i=0;i< arr2.length;i++){
    console.log(arr2[i]);
}

for (let index in arr2){
    console.log(index);
}