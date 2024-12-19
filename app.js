// Chapter No 4 VARIABLE NAMES: LEGAL & ILLEGAL(ali raza)

// Question No 1

// var p = "foo", q = "bar", r = "baz";

// Question No 2

// Legal Variable Names:
// firstName  '_user123  '$price  'total_value  'number5

//Illegal Variable Names (with reasons):
// (1)5number → Variable names cannot begin with a number.
// (2)user-name → Hyphens (-) are not allowed; use camelCase or underscores instead.
// (3)var → Reserved keyword in JavaScript.
// (4)@count → Special characters like @ are not permitted.
// (5)first name

// Question No 3

//   // Create a new heading element
//   const heading = document.createElement('h1');
//   // Set its text content
//   heading.textContent = 'Rules for naming JS variables';
//   // Append the heading to the body
//   document.body.appendChild(heading);

// chapter no 5 (MATH EXPRESSIONS)

// Question No 1
// Invalid
// var 123abc;    // Starts with a number
// var first-name; // Contains a dash
// var @variable;  // Contains an invalid character (@)
// var my var;     // Contains a space
// var let;

// Question No 2

//   // Prompt the user for two numbers
// let num1 = ("3");
// let num2 = ("5");

// Add the two numbers and store the result
// let sum = num1 + num2;

// Display the result in the browser
// document.write();

// Question No 3

//         // a. Declare a variable
//         let variable;

//         // b. Show the value of the variable after declaration
//         document.write(`Value after variable declaration is: ${variable}<br>`);

//         // c. Initialize the variable with some number
//         variable = 5;

//         // d. Show the initial value of the variable
//         document.write(`Initial value: ${variable}<br>`);

//         // e. Increment the variable
//         variable++;

//         // f. Show the value after increment
//         document.write(`Value after increment is: ${variable}<br>`);

//         // g. Add 7 to the variable
//         variable += 7;

//         // h. Show the value after addition
//         document.write(`Value after addition is: ${variable}<br>`);

//         // i. Decrement the variable
//         variable--;

//         // j. Show the value after decrement
//         document.write(`Value after decrement is: ${variable}<br>`);

//         // k. Calculate the remainder after dividing the variable's value by 3
//         let remainder = variable % 3;

//         // l. Show the remainder
//         document.write(`The remainder is: ${remainder}`);




// Question no 5

//   // a. Store a Celsius temperature into a variable
//   let celsiusTemp = 25;

//   // b. Convert Celsius to Fahrenheit
//   let fahrenheitTemp = (celsiusTemp * 9/5) + 32;

//   // Display the conversion
//   document.write(`<p>${celsiusTemp}°C is ${fahrenheitTemp}°F</p>`);

//   // c. Store a Fahrenheit temperature into a variable
//   fahrenheitTemp = 77;

//   // d. Convert Fahrenheit to Celsius
//   celsiusTemp = (fahrenheitTemp - 32) * 5/9;

//   // Display the conversion
//   document.write(`<p>${fahrenheitTemp}°F is ${celsiusTemp.toFixed(2)}°C</p>`);

// chapter no 6 (MATH EXPRESSIONS)

// Question No 1

//     // Initialize a variable
// let a = 10;

// // Display the initial value of 'a'
// let output = `The value of a is: ${a}<br>-------------------------<br><br>`;

// // Pre-increment (++a)
// output += `The value of ++a is: ${++a}<br>`;
// output += `Now the value of a is: ${a}<br><br>`;

// // Post-increment (a++)
// output += `The value of a++ is: ${a++}<br>`;
// output += `Now the value of a is: ${a}<br><br>`;

// // Pre-decrement (--a)
// output += `The value of --a is: ${--a}<br>`;
// output += `Now the value of a is: ${a}<br><br>`;

// // Post-decrement (a--)
// output += `The value of a-- is: ${a--}<br>`;
// output += `Now the value of a is: ${a}<br><br>`;

// // Display the output in the browser
// document.getElementById("result").innerHTML = output;

// Question No 2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// // Display the values in the browser
//  document.getElementById("output").innerHTML = 
//  `a = ${a}<br>b = ${b}<br>result = ${result}`;
