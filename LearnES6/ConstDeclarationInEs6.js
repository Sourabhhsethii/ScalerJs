/**
 * Const Declaration In Es6
 * Const have bar scope.
 */

const value = 'hello World';
// value = '10000'; // Not Valid - TypeError: Assignment to constant variable.

const obj = {
    name : 'sourabh'
}
// Values inside the object can be updated but not value itself.
obj.lastname = 'sethi'
console.log(obj);