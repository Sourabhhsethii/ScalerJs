/**
 * ES6-Rest-Parameters
 * @Author Sourabh_Sethi
 */

 function Store() {
    var aisle = {
      fruit: [],
      vegetable: []
    }
    return {
        //Store().add('category', 'item1', 'item2');
         add: function(category, ...items) {
        //   var items = [].splice.call(arguments, 1);
           console.log(items); // ["apples", "oranges"]
           items.forEach(function(value, index, array) {
             aisle[category].push(value);
           });
         },
         aisle: aisle
     }
 }

 var myGroceryStore = new Store();

 myGroceryStore.add('fruit', 'apples', 'oranges');



myGroceryStore.add('fruit', 'apples', 'oranges');
console.log(myGroceryStore.aisle);