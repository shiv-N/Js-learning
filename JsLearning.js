// Variables in JavaScript
// var, let, and const

// var: function-scoped or globally-scoped
var personName = "John";
console.log(personName); // Output: John

if (true) {
    var personName = "Doe";
    console.log("if block personName: ",personName); // Output: Doe
}
console.log(personName); // Output: Doe

let age = 25; //the variable age is in the global scope at this point.
console.log(age); // Output: 25

if (true) {
    let age = 30; // This is a different 'age' variable, scoped to the 'if' block
    console.log("if block age: ",age); // Output: 30
}
console.log(age); // Output: 25

// The following would cause an error if uncommented:
// let age = 35; // SyntaxError: Identifier 'age' has already been declared

// const: block-scoped and cannot be reassigned
const country = "USA";
console.log(country); // Output: USA

if (true) {
    const country = "Canada";
    console.log("if block country: ",country); // Output: Canada
}
console.log(country); // Output: USA

// country = "UK"; // Error: Assignment to constant variable.
