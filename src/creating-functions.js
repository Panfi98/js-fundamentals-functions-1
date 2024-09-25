// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function increase(number){
  number += 1
  return number
}

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello
function capitalize(str){
  let newStr = str[0].toUpperCase() + str.slice(1)
  return newStr 
}

// TODO: write code below

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below
function happyGreet(name){
  return `Hi, ${capitalize(name)} :)`
}

// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below
function howManyStrings(elements){
  let stringCounter = 0
  for (let element of elements){

    if (typeof element === "string"){
      stringCounter += 1
    }
  }

  return stringCounter
}

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below
function addEdwardObj(someObj){
  //check if edward is in obj
  let check = 'edward' in someObj
  if (!check){
    return { ...someObj, edward:'amazing'}
  }
  return someObj
}

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: increase, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalize, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: happyGreet, // etc
  d: howManyStrings,
  e: addEdwardObj
}
