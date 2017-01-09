
var ary = []
//Literal object definition, prefered way to create a new array

var ary2 = new Array(3)
// Will create a new array with 100 undefined values.
// equivlient to [undefined, undefined, undefined]
// Should probably only use if you intend to use .fill(value) to fill all the elements with a default value.

.fill(item)
// Makes all elements of the array equal to item
ary = [1,2,3];
ary.fill(5)
// ary will equal [5,5,5];


.length
//tells you the length of the array.  Not a method

.push(item)
//Adds the item to the end of the array

.pop()
//Removes the last item from the array and returns it

.indexOf(item)
//Retuns the index of the item, or -1 if the item is not found.

.contains(item)
//Returns true if the array contains the item, false if it does not.

.reverse()
//Reverses the order of the array

.sort(comparisonFunction)
//Sorts the array based on the comparisonFunction you provide.

.unshift(item)
//Adds item to the front of the array.  Slower than push

.shift()
//Removes the first item from the front of the array.  Slower than pop

// Higher Order Functions *** *** *** *** *** *** *** *** *** *** *** *** ***
// These are good to learn, especially with ES6 notation that uses arrow functions
// Can still be used without ES6 notation, just a little more verbose.

.map(iteratorFunction)
//Creates a new array based on the values of the array and the iteratorFunction
//iteratorFunction takes in the parameters (value, index, wholeArray)
ary = [1,2,3];
ary2 = ary.map(function(value){
  return value * 5;
})
//ary2 is [5,10,15]

.forEach(iteratorFunction)
//Runs the iteratorFunction once for each value
//iteratorFunction takes in the parameters (value, index, wholeArray)
ary = [1,2,3];
ary2 = ary.forEach(function(value){
  alert(value);
})
//it will alert 1 then alert 2 then alert 3;
// Note no return value is used in a forEach

.reduce(iteratorFunction)
//Runs the iteratorFunction once for each value, and passes the return from the previous call to the next call.
//iteratorFunction takes in the parameters (passAlongValue, value, index, wholeArray)
var shoppingCart = [5,23,63,12,74];
var total = reduce(function(total, value){
  return total + value;
},0)
// This will sum the items from the array and return a total.

.find(comparisonFunction)
//Returns the element that passes it's comparisonFunction
//comparisonFunction takes in the parameters (value, index, wholeArray)

.filter(comparisonFunction)
//Returns a new array where all the elements match the comparisonFunction
//comparisonFunction takes in the parameters (value, index, wholeArray)
