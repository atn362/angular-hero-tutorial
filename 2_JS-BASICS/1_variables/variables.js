/*
    variables are like buckets that store data
    each bucket has a name and stores some information to be used later

    variables are created by using the key words let, const, or var then giving the
    variable a name and finnaly using the assignment operator (=) you set the value.

       each keyword creates a variable with different properties
        - try to use const as much as possible
        - use let if you have to reassign
        - you really should not need to ever use var

       the variable name cannot start with numbers
       the variable names are case sensitive
       variable names cannot be the same as any js keyword
*/

// variable declaration
let foo = 1
console.log('foo: ', foo);

// variable reassignment
let bar = 1
bar = 2
console.log('bar: ', bar)

// constant variables cannot be reassigned
const baz = 3
console.log('baz: ', baz)