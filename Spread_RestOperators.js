/* 
 * Spread
 * Used to split up array elements OR object properties
 * const newArray = [...oldArray, 1, 2]
 * const newObject = {...oldObject, newProp: 5 }
 */
 
 /*
  * Rest
  * Used merge a list of function arguments into an array
  * function sortArgs(...args) { return args.sort() }
  */
  
// Array
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers)

// Console
/* [1, 2, 3, 4] */

// Object
const person = {
  name: 'Jeerawat'
}

const newPerson = {
  ...person,
  age: '24'
}

console.log(newPerson)

// Console
/* [object Object] {
  age: "24",
  name: "Jeerawat"
} */

// Function
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3))

// Console
/* [1] */
