// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!!


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const convertToString = (yourNumber) => {

  let str = yourNumber.toString()

  return str
}

// Write a JavaScript program to convert a string to the number.

const convertToNum = (yourString) => {

  let num = parseInt(yourString)

  return num
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
// NOTE: Exlclude this function while completing Part II. The Data Type will always return as a String. If you want a challenge, come back to this function and start in the console. Then see what you can make of it. Again, simply skip this function while completing Part II of this project.

const printType = (thing) => {
  // typeof returns a string, so put types in a string

  if (thing === undefined) {  // check for "undefined" before "null" because the undefined type is also considered null 
    console.log("undefined")
  } else if (thing === null) {  // typeof does not return null
    console.log("null")
  
  // these aren't numbers, so come before checking isNaN
  } else if (typeof thing == "string") {
    console.log("string")
  } else if (typeof thing == "boolean") {
    console.log("Boolean")
  

  } else if (isNaN(thing)) {   // check for NaN before "number" because the NaN type is also considered a number 
    console.log("NaN")
  } else if (typeof thing == "number") {
    console.log("number")
  }
}

// Write a JavaScript program that adds 2 numbers together.

let num1;
let num2;

const saveFirstNumber = (val) => {
  // console.log(typeof val)
  num1 = convertToNum(val)
}

const saveSecondNumber = (val) => {
  num2 = convertToNum(val)

}

const add = () => {
  let sum = num1 + num2

  sum = convertToString(sum)
  console.log(`This is the type for the sum: ${typeof sum}`)
  document.getElementById("display-sum").innerHTML = sum;
}
  

// Write a JavaScript program that runs only when 2 things are true.

let firstCheck = false;
let secondCheck = false;

const saveFirstCheckbox = () => {
  if (firstCheck) {
    firstCheck = false
  } else {
    firstCheck = true
  }
  console.log(typeof firstCheck)
  console.log(firstCheck)
}

const saveSecondCheckbox = () => {
  if (secondCheck) {
    secondCheck = false
  } else {
    secondCheck = true
  }
  console.log(typeof secondCheck)
  console.log(secondCheck)
}

const bothTrue = () => {
  if (firstCheck && secondCheck) {
    document.getElementById("numChecks").innerHTML = "two"
  } else {
    return
  }
}

/*  Another method
const bothTrue2 = (thing1, thing2) => {
  if (!thing1 || !thing2) {
    return
  }
  // rest of program
}
*/

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneTrue = () => {
  if ( (firstCheck && secondCheck) || (!firstCheck && !secondCheck)) {
    return
  }
  document.getElementById("numChecks").innerHTML = "one"
}

// Write a JavaScript program that runs when both things are not true.  

const bothFalse = () => {
  if (!firstCheck && !secondCheck) {
    document.getElementById("numChecks").innerHTML = "none"
  } else {
    return
  }
  
}

const howMany = () => {
  bothTrue()
  oneTrue()
  bothFalse()
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
