

### 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

Answer: Both If-else and Switch both are conditional statements in programming.In the programming world,

 if-else is a conditional statement that executes the group of statements, based on whether the statement is true or false.

 The switch statement checks the value of a variable and compares it with numerous possibilities

Difference between if-else and switch
## if-else
* This statement is executed based on the condition inside the if-else statement.Here we need to use multiple statements for numerous decisions.This statement is used to choose between two options.In if-else, the values are based on conditions.It is tough to edit if-else statements.

## Switch
* Switch statements execute as per the user decision.Here, we need to use a single statement for numerous decisions.This statement is used to choose among multiple options.	Switch statement enforces binary search.It is easy to modify the switch case.
*



### 2. What is JavaScript, and what is its primary purpose in web development?

Answer: JavaScript is a versatile programming language used in web development. Its primary purpose is to enhance web pages by providing interactivity, handling user input, and enabling dynamic content updates. It runs in web browsers, allowing developers to create responsive and engaging web applications. JavaScript is essential for building modern, user-friendly websites.


### 3. Explain the difference between var, let, and const when declaring variables in JavaScript.

Answer: 

* var: var has function-level scope, which means it's scoped to the nearest function, not the block.
It can be hoisted, meaning the variable declaration is moved to the top of the function or global scope during execution.
Variables declared with var can be redeclared within the same scope, and their values can be reassigned.

* let: let has block-level scope, which means it's scoped to the nearest enclosing block (like if statements or loops).
It is not hoisted, and the variable is only accessible after the declaration in the code.
Variables declared with let can be reassigned, but they can't be redeclared within the same scope.

* const: const also has block-level scope.
It is not hoisted and must be initialized with a value at the time of declaration.
Variables declared with const cannot be reassigned. However, for objects and arrays, while the reference cannot change, the contents of the object or array can be modified.

In summary, var is considered outdated and has function-level scope, let is suitable for variables that need to be reassigned and has block-level scope, and const is used for variables that should not be reassigned and also has block-level scope. The choice of which to use depends on the desired scoping and mutability of the variable.


### 4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.
Answer: Scope in JavaScript refers to the context in which variables and functions are declared and accessed. It defines the visibility and accessibility of variables in different parts of your code.

* Global Scope : Variables declared outside of any function or block have global scope.
Global variables can be accessed and modified from anywhere in your code, including within functions.
They have a lifetime that extends throughout the entire program.

* Local Scope: Variables declared inside a function or block have local scope.
Local variables are only accessible within the function or block where they are defined.
They are temporary and get created and destroyed each time the function or block is executed.

### 5. What is the difference between "null" and "undefined" in JavaScript?

In JavaScript, "null" and "undefined" are both special values, but they are used in slightly different contexts and have different meanings:

* Undefined: undefined is a primitive value that represents the absence of a value. It is often automatically assigned to variables that have been declared but not initialized or to function parameters that are missing arguments.
When we try to access a variable or object property that doesn't exist, or when a function doesn't return a value explicitly, JavaScript will return undefined.
let a;
console.log(a); // undefined
function foo(x) {
  console.log(x);
}
foo(); // undefined

* Null : null is also a primitive value, but it is explicitly assigned to a variable or object property to indicate that it intentionally has no value or that it has been emptied or reset.
When we see null in your code, it typically means that we have consciously assigned it to represent a missing or empty value.

let b = null;
console.log(b); // null
let obj = { prop: null };